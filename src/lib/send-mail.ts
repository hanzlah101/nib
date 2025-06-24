import { createTransport } from "nodemailer"
import { render } from "@react-email/components"

import { env } from "@/env"

const transporter = createTransport({
  service: env.MAIL_SERVICE,
  auth: {
    user: env.MAIL_USER,
    pass: env.MAIL_PASS
  }
})

export async function sendMail({
  react,
  ...props
}: {
  to: string
  subject: string
  react: React.ReactNode
}) {
  try {
    const html = await render(react)
    const text = await render(react, { plainText: true })

    await transporter.sendMail({
      from: `NIB <${env.MAIL_USER}>`,
      html,
      text,
      ...props
    })
  } catch (error) {
    console.error(error)
  }
}
