'use client'

import Link from "next/link"
import CourseData from "../data/music_courses.json"
import { BackgroundGradient } from "./ui/background-gradient"

interface Course {
  id: number
  title: string
  slug: string
  category: string
  level: string
  instrument: string
  duration: string
  lessons: number
  price: number
  discountPrice: number
  currency: string
  rating: number
  studentsEnrolled: number
  thumbnail: string
  shortDescription: string
  description: string
  features: boolean
}

function FeaturedCourses() {
  // ✅ Properly type JSON data
  const featuredCourses = CourseData.courses.filter(
    (course) => course.features
  )
  

  return (
    <div className="py-12 bg-gray-900 w-full">
      <div className="text-center">
        <h2 className="text-base text-teal-600 font-semibold uppercase">
          Feature Courses
        </h2>
        <p className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">
          Learn with the best
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuredCourses.map(course => (
          <div key={course.id} className="flex justify-center">
            <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
              <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                <h3 className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                  {course.title}
                </h3>

                <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">
                  {course.description}
                </p>

                <Link
                  href={`/courses/${course.slug}`}
                  className="mt-4 text-teal-600 font-semibold"
                >
                  Learn More →
                </Link>
              </div>
            </BackgroundGradient>
          </div>
        ))}
      </div>

      <div className="mt-20 text-center">
        <Link
          href="/courses"
          className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition"
        >
          View All Courses
        </Link>
      </div>
    </div>
  )
}

export default FeaturedCourses
