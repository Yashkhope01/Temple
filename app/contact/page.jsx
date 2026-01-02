import { ContactForm } from '@/views/client/ContactForm'

export const metadata = {
  title: 'Contact',
  description: 'Get in touch with the temple trust',
}

export default function ContactPage() {
  return (
    <div className="py-12">
      <div className="container-custom max-w-2xl">
        <h1 className="heading-primary text-center mb-12">Contact Us</h1>
        <ContactForm />
      </div>
    </div>
  )
}

