import { z } from "zod/v4"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { IconCheck } from "@tabler/icons-react"

import { cn } from "@/lib/utils"
import { authClient } from "@/lib/auth-client"
import { Button } from "@/components/ui/button"
import { useSession } from "@/stores/use-session"
import { TOPICS } from "@/lib/topics"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from "@/components/ui/popover"
import { Badge } from "@/components/ui/badge"

const schema = z.object({
  interests: z
    .array(z.string())
    .min(1, "Please select at least one interest")
    .max(10, "You can select up to 10 interests")
})

export function UpdateInterestsForm() {
  const { $updateUser, session } = useSession()

  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      interests: session?.user.interests ?? []
    }
  })

  const isPending = form.formState.isSubmitting

  const handleSubmit = form.handleSubmit(async (values) => {
    const { error } = await authClient.updateUser(values)
    if (error) {
      form.setError("interests", {
        message: error.message ?? "Failed to update interests, please try again"
      })
      setTimeout(() => form.setFocus("interests"), 10)
      return
    }

    form.reset()
    $updateUser({ interests: values.interests })
  })

  return (
    <Form {...form}>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <FormField
          control={form.control}
          name="interests"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Interests</FormLabel>

              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      role="combobox"
                      variant="outline"
                      disabled={isPending}
                      className={cn(
                        "data-[state=open]:text-foreground w-full justify-start overflow-hidden",
                        field.value.length
                          ? "h-auto min-h-11 flex-wrap gap-1 px-2"
                          : "text-muted-foreground"
                      )}
                    >
                      {field.value.length
                        ? field.value.map((topic) => (
                            <Badge
                              key={topic}
                              role="button"
                              aria-disabled={isPending}
                              className="hover:bg-destructive py-0.5 transition-colors hover:text-white aria-disabled:pointer-events-none aria-disabled:opacity-50"
                              onClick={(evt) => {
                                evt.stopPropagation()
                                evt.preventDefault()
                                field.onChange(
                                  field.value.filter((i) => i !== topic)
                                )
                              }}
                            >
                              {topic}
                            </Badge>
                          ))
                        : "Select Topics"}
                    </Button>
                  </FormControl>
                </PopoverTrigger>

                <PopoverContent className="w-[var(--radix-popover-trigger-width)] p-0">
                  <Command>
                    <CommandInput placeholder="Search topics..." />
                    <CommandList>
                      <CommandEmpty>No topic found.</CommandEmpty>
                      <CommandGroup>
                        {TOPICS.map((topic) => (
                          <CommandItem
                            key={topic}
                            onSelect={(value) => {
                              const curr = field.value ?? []
                              if (curr.includes(value)) {
                                field.onChange(curr.filter((i) => i !== value))
                              } else {
                                field.onChange([...curr, value])
                              }
                            }}
                          >
                            {topic}
                            {field.value.includes(topic) && (
                              <IconCheck className="ml-auto size-4" />
                            )}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>

              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full" disabled={isPending}>
          {isPending ? "Updating..." : "Update Interests"}
        </Button>
      </form>
    </Form>
  )
}
