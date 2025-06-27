import { Editor } from "@/components/editor"
// import { getVerifiedSession } from "@/server/auth/session"

export const dynamic = "force-dynamic"

export default async function WriteBlogPage() {
  // await getVerifiedSession()

  return <Editor />
}
