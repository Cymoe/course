import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import Image from "next/image"
import Link from "next/link"

export default function Component() {
  const courses = [
    {
      id: 1,
      title: "Coding with AI",
      description: "Learn to leverage AI tools for efficient coding and problem-solving.",
      image: "/placeholder.svg?height=400&width=600",
      progress: 100,
    },
    {
      id: 2,
      title: "Building with AI Agents",
      description: "Explore the world of AI agents and how to build intelligent systems.",
      image: "/placeholder.svg?height=400&width=600",
      progress: 0,
    },
    {
      id: 3,
      title: "Themed Image Generation",
      description: "Master the art of generating themed images using AI technologies.",
      image: "/placeholder.svg?height=400&width=600",
      progress: 0,
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="border-b border-white/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <h1 className="text-xl font-bold">ModernHuman</h1>
              <nav className="hidden md:block">
                <ul className="flex gap-6">
                  <li>
                    <Link className="text-white hover:text-white/80" href="#">
                      Courses
                    </Link>
                  </li>
                  <li>
                    <Link className="text-white/60 hover:text-white/80" href="#">
                      Community
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="flex items-center gap-4">
              <button className="rounded-full p-2 hover:bg-white/10">
                <span className="sr-only">Toggle theme</span>
                <svg
                  className=" h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <div className="h-8 w-8 rounded-full bg-gray-600" />
            </div>
          </div>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <Card
              key={course.id}
              className="group relative overflow-hidden rounded-lg border-white/10 bg-black transition-colors hover:border-white/20"
            >
              <Link href="#" className="absolute inset-0 z-10">
                <span className="sr-only">View {course.title}</span>
              </Link>
              <CardContent className="p-0">
                <Image
                  src={course.image}
                  alt=""
                  className="aspect-[2/1] object-cover"
                  width={600}
                  height={400}
                />
                <div className="space-y-2 p-6">
                  <h2 className="text-2xl font-bold">{course.title}</h2>
                  <p className="text-sm/relaxed text-white/60">{course.description}</p>
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <div className="space-y-2 w-full">
                  <Progress value={course.progress} className="h-1" />
                  <p className="text-sm text-white/60">{course.progress}% Complete</p>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}