"use client"

import { z } from "zod/v4"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { authClient } from "@/lib/auth-client"
import { useAuthStore } from "@/stores/use-auth-store"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form"

const schema = z.object({
  email: z.email().max(320, "Invalid email address")
})

export function MagicLinkForm() {
  const pending = useAuthStore((state) => state.pending)
  const setPending = useAuthStore((state) => state.setPending)
  const setMagicLinkEmail = useAuthStore((state) => state.setMagicLinkEmail)

  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: { email: "" }
  })

  const isPending = !!pending

  const handleSubmit = form.handleSubmit(async (values) => {
    alert(values.email)
    setPending("magic-link")
    const { error } = await authClient.signIn.magicLink({ email: values.email })
    setPending(undefined)
    if (error) {
      form.setError("email", {
        message:
          error.message ?? "Failed to send verification link, please try again"
      })

      setTimeout(() => form.setFocus("email"), 10)
    } else {
      setMagicLinkEmail(values.email)
      form.reset()
    }
  })

  return (
    <Form {...form}>
      <form className="space-y-2" onSubmit={handleSubmit}>
        <FormField
          control={form.control}
          name="email"
          disabled={isPending}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input autoFocus placeholder="Enter your email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isPending} className="w-full">
          {pending === "magic-link" ? "Sending..." : "Send verification link"}
        </Button>
      </form>
    </Form>
  )
}
