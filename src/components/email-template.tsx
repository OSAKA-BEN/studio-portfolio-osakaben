import * as React from 'react'

interface EmailTemplateProps {
  from_name: string
  from_email: string
  to_name: string
  message: string
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  from_name,
  from_email,
  message,
}) => (
  <div>
    <h1>Nouveau message de contact</h1>
    <p>
      <strong>De:</strong> {from_name}
    </p>
    <p>
      <strong>Email:</strong> {from_email}
    </p>
    <p>
      <strong>Message:</strong>
    </p>
    <p>{message}</p>
  </div>
)
