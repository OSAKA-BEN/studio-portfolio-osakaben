/* eslint-disable react/no-unescaped-entities */

import ContactForm from '@/components/ContactForm'
import { Container } from '@/components/Container'
import { PageIntro } from '@/components/PageIntro'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Me - Benjamin Guiganton',
  description:
    'Ready to collaborate or have a project in mind? Reach out to discuss how we can bring your vision to life. Looking forward to connecting!',
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
