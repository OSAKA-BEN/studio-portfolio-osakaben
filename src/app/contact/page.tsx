/* eslint-disable react/no-unescaped-entities */
import { type Metadata } from 'next'
import { useId } from 'react'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'

function TextInput({
  label,
  ...props
}: React.ComponentPropsWithoutRef<'input'> & { label: string }) {
  let id = useId()

  return (
    <div className="group relative z-0 transition-all focus-within:z-10">
      <input
        type="text"
        id={id}
        {...props}
        placeholder=" "
        className="peer block w-full border border-neutral-300 bg-transparent px-6 pb-4 pt-12 text-base/6 text-neutral-950 ring-4 ring-transparent transition focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5 group-first:rounded-t-2xl group-last:rounded-b-2xl"
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-neutral-950"
      >
        {label}
      </label>
    </div>
  )
}

function ContactForm() {
  return (
    <FadeIn className="lg:order-last">
      <form>
        <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
          <TextInput label="Name" name="name" autoComplete="name" />
          <TextInput
            label="Email"
            type="email"
            name="email"
            autoComplete="email"
          />
          <TextInput
            label="Company"
            name="company"
            autoComplete="organization"
          />
          <TextInput label="Phone" type="tel" name="phone" autoComplete="tel" />
          <TextInput type="text" label="Message" name="message" />
        </div>
        <Button type="submit" className="mt-10">
          Send Message
        </Button>
      </form>
    </FadeIn>
  )
}

export const metadata: Metadata = {
  title: 'Contact Me - Benjamin Guiganton',
  description: 'Let’s work together. Can’t wait to hear from you.',
}

export default function Contact() {
  return (
    <div className="mx-auto flex flex-col justify-center text-center">
      <PageIntro eyebrow="Contact me" title="Let’s work together">
        <p>I'm impatient to hear from you.</p>
      </PageIntro>

      <Container className="mt-12 w-full !max-w-4xl">
        <div className="grid grid-cols-1 gap-x-8 gap-y-24">
          <ContactForm />
        </div>
      </Container>
    </div>
  )
}
