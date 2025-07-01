import * as React from "react"
import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Img,
  Heading,
  Text,
  Button,
  Tailwind
} from "@react-email/components"

// TODO: change  this to a real image URL
const IMAGE_URL = "https://i.ibb.co/5XZnFk2m/fountain-pen-nib-3-svgrepo-com.png"

const MagicLinkEmail = ({
  magicLink,
  isNewUser
}: {
  magicLink: string
  isNewUser?: boolean
}) => {
  return (
    <Html lang="en" dir="ltr">
      <Tailwind>
        <Head />
        <Body className="bg-white py-10 font-sans text-black">
          <Container className="mx-auto max-w-xl rounded-2xl bg-zinc-100 px-8 py-16">
            <Section className="size-8 shrink-0 text-center">
              <Img
                alt="nib"
                src={IMAGE_URL}
                className="mx-auto mb-4 size-8 shrink-0 object-contain"
              />
            </Section>

            <Heading className="text-center text-2xl font-semibold">
              {isNewUser ? "Confirm your email" : "Welcome back!"}
            </Heading>

            <Text className="mx-auto max-w-sm text-center text-sm text-pretty">
              {isNewUser
                ? "You're almost there! We just need to confirm your email address to create your account."
                : "You're all set! Click the button below and you'll be signed in to your account instantly."}
            </Text>

            <Section className="mb-8 text-center">
              <Button
                href={magicLink}
                className="mx-auto rounded-xl bg-black px-4 py-3 text-sm font-medium text-white no-underline"
              >
                Confirm Email
              </Button>
            </Section>

            <Text className="text-center text-xs text-zinc-400">
              © {new Date().getFullYear()} Nib. All rights reserved.
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}

MagicLinkEmail.PreviewProps = {
  isNewUser: false,
  magicLink:
    "http://localhost:3000/api/auth/magic-link/verify?token=someToken&callbackURL=%2Fonboarding"
}

export default MagicLinkEmail
