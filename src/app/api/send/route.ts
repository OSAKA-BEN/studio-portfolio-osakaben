import { EmailTemplate } from '@/components/email-template'
import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json()

    const { data, error } = await resend.emails.send({
      from: 'noreply@ayuandben.com',
      to: ['benjamin.guiganton@gmail.com'],
      subject: `Nouveau message de ${body.from_name}`,
      react: EmailTemplate({
        from_name: body.from_name,
        from_email: body.from_email,
        to_name: body.to_name,
        message: body.message,
      }),
    })

    if (error) {
      return NextResponse.json({ error }, { status: 500 })
    }

    return NextResponse.json(data, { status: 200 })
  } catch (error) {
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 },
    )
  }
}
