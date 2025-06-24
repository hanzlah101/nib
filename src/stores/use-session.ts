import {
  type QueryOptions,
  useQuery,
  useQueryClient
} from "@tanstack/react-query"

import { authClient } from "@/lib/auth-client"

export function useSession(options?: QueryOptions<SessionRes>) {
  const queryClient = useQueryClient()

  const { data, ...query } = useQuery({
    queryKey: ["session"],
    queryFn: () => authClient.getSession({ fetchOptions: { throw: true } }),
    refetchOnWindowFocus: false,
    retry: false,
    ...options
  })

  const $updateUser = (
    user: Partial<typeof authClient.$Infer.Session.user>
  ) => {
    queryClient.setQueryData<SessionRes>(["session"], (oldData) => {
      if (!oldData) return oldData
      return { ...oldData, user: { ...oldData.user, ...user } }
    })
  }

  return { session: data, $updateUser, ...query }
}

export type SessionRes = typeof authClient.$Infer.Session | null
