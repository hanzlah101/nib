import { z } from "zod/v4"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { authClient } from "@/lib/auth-client"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useSession } from "@/stores/use-session"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form"

const schema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .max(50, "Name must be less than 50 characters")
})

export function UpdateNameForm() {
  const { $updateUser, session } = useSession()

  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      name: session?.user.name ?? ""
    }
  })

  const isPending = form.formState.isSubmitting

  const handleSubmit = form.handleSubmit(async (values) => {
    const { error } = await authClient.updateUser(values)
    if (error) {
      form.setError("name", {
        message: error.message ?? "Failed to update name, please try again"
      })
      setTimeout(() => form.setFocus("name"), 10)
      return
    }

    form.reset()
    $updateUser({ name: values.name })
  })

  return (
    <Form {...form}>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input
                  autoFocus
                  disabled={isPending}
                  placeholder="Enter your name"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full" disabled={isPending}>
          {isPending ? "Updating..." : "Update Name"}
        </Button>
      </form>
    </Form>
  )
}
