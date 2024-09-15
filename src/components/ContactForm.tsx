/* eslint-disable react/no-unescaped-entities */
'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import emailjs from 'emailjs-com'
import { useId, useState } from 'react'
import { SubmitHandler, UseFormRegister, useForm } from 'react-hook-form'
import { Toaster, toast } from 'sonner'
import { z } from 'zod'

import { Button } from '@/components/Button'
import { FadeIn } from '@/components/FadeIn'

const formSchema = z.object({
  name: z.string().min(3, 'Name is required'),
  email: z.string().email('Must be a valid email address'),
  company: z.string().optional(),
  phone: z.string().optional(),
  message: z.string().min(10, 'Message is required'),
})

function TextInput({
  label,
  error,
  register,
  name,
  ...props
}: React.ComponentPropsWithoutRef<'input'> & {
  label: string
  error?: string
  register: UseFormRegister<any>
  name: string
}) {
  let id = useId()

  return (
    <div className="group relative z-0 transition-all focus-within:z-10">
      {error && (
        <p className="my-2 mb-2 text-xs italic text-red-500">{error}</p>
      )}
      <input
        id={id}
        {...register(name)}
        {...props}
        placeholder=" "
        className={`peer block w-full border ${error ? 'border-red-500 bg-red-50' : 'border-neutral-300 bg-transparent'} px-6 pb-4 pt-12 text-base/6 text-neutral-950 ring-4 ring-transparent transition focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5 group-first:rounded-t-2xl group-last:rounded-b-2xl`}
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute left-6 top-1/2 origin-left -translate-y-1/2 text-base/6 transition-all duration-200 peer-placeholder-shown:text-neutral-500 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950"
      >
        {label}
      </label>
    </div>
  )
}

export default function ContactForm() {
  const [isLoading, setIsLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: 'onTouched',
  })

  interface FormData {
    name: string
    email: string
    message: string
    company: string
    phone: string
  }

  const onSubmit: SubmitHandler<FormData> = async (formData: FormData) => {
    setIsLoading(true)
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      to_name: 'Benjamin GUIGANTON',
      message: formData.message,
    }

    try {
      const response = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID!,
      )
      toast.success('Your message has been sent!')
      console.log('SUCCESS!', response.status, response.text)
      reset()
    } catch (error) {
      toast.error('Failed to send message: ' + error)
      console.log('FAILED...', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <FadeIn className="lg:order-last">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
          <TextInput
            label="Name"
            name="name"
            error={errors.name?.message}
            register={register}
          />

          <TextInput
            label="Email"
            type="email"
            name="email"
            error={errors.email?.message}
            register={register}
          />

          <TextInput
            label="Company"
            type="text"
            name="company"
            error={errors.company?.message}
            register={register}
          />

          <TextInput
            label="Phone"
            type="tel"
            name="phone"
            error={errors.phone?.message}
            register={register}
          />
          <TextInput
            label="Message"
            type="text"
            name="message"
            error={errors.message?.message}
            register={register}
          />
        </div>
        <Button type="submit" className={`mt-10 ${isLoading && 'bg-gray-700'}`}>
          {isLoading ? 'Sending...' : 'Send message'}
        </Button>
      </form>
      <Toaster />
    </FadeIn>
  )
}
