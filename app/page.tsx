import { getAllPosts } from "@/lib/blog"
import HomePageClient from "@/components/home-page-client"

export default function Page() {
  const latestPosts = getAllPosts().slice(0, 4)

  return <HomePageClient latestPosts={latestPosts} />
}
