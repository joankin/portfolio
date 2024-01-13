import { Transition } from "@headlessui/react"
import { AnimatedDescription } from "@components/Description"
import clsx from "clsx"
import TransitionPage from "@components/TransitionPage"
import { useEffect, useState } from "react"

const redGradient = "bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 text-transparent bg-clip-text"

export default function Home(): JSX.Element {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(true)
    }, 600)

    return () => clearTimeout(timeout)
  }, [])

  return (
    <TransitionPage
      title="Elyees Tatua- Full Stack Engineer"
      description="On a journey to create best in class apps, obsessed with designing fluid interfaces, and perfectionist at heart."
    >
      <AnimatedDescription title="Elyees Tatua" description="Full Stack Engineer" />
      <Transition
        show={show}
        enter="transition-all duration-500"
        enterFrom="scale-90 opacity-0"
        enterTo="scale-100 opacity-100"
      >
        <p className="text-gray-600 dark:text-gray-400">
          On a journey to create{" "}
          <span className="group relative top-[6px] inline-block cursor-text overflow-hidden">
            <span className="invisible">best in class websites</span>
            <span
              className={clsx(
                redGradient,
                "absolute top-0 left-0 group-hover:-translate-y-full",
                "transition-transform duration-500 ease-in-out hover:duration-300"
              )}
            >
              best in class websites
            </span>
            <span
              className={clsx(
                redGradient,
                "absolute top-0 left-0 translate-y-full group-hover:translate-y-0",
                "transition-transform duration-500 ease-in-out hover:duration-300"
              )}
            >
              best in class web apps
            </span>
          </span>
          , obsessed with designing{" "}
          <span
            className={clsx(
              "bg-gradient-to-r from-green-500 to-blue-600 bg-clip-text text-transparent dark:from-blue-400 dark:via-cyan-400 dark:to-green-500",
              "after:bg-gradient-to-r",
              "relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-[113px]",
              "after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100",
              "after:transition-transform after:duration-300 after:ease-in-out"
            )}
          >
            fluid interfaces
          </span>
          , and{" "}
          <span className="group relative">
            <span
              className={clsx(
                "absolute -inset-0",
                "bg-gradient-to-r from-blue-500 to-purple-400",
                "rounded-lg opacity-20 blur group-hover:opacity-40 group-hover:blur-md",
                "animate-tilt transition-all duration-300 ease-in-out"
              )}
            ></span>
            <span className="relative bg-gradient-to-r from-blue-500 to-purple-400 bg-clip-text text-transparent">
              perfectionist
            </span>
          </span>{" "}
          at heart.
        </p>
        <p className="mt-4 text-gray-600 dark:text-gray-400">
          Working at{" "}
          <a
            className={clsx(
              "animate-text-shimmer bg-[linear-gradient(110deg,#0ea5e9,45%,#f5f5f5,55%,#0ea5e9)] bg-[length:250%_100%] dark:bg-[linear-gradient(110deg,#0ea5e9,45%,#171717,55%,#0ea5e9)]",
              "inline-block cursor-ne-resize bg-clip-text text-transparent",
              "transition-transform ease-in-out hover:scale-105"
            )}
            href="https://www.elyeestatua.co.ke"
            target="_blank"
            rel="noopener noreferrer"
          >
            MyBox
          </a>
          , previously at{" "}
          <a
            className={clsx(
              "text-[#F6A6A6]",
              "inline-block cursor-ne-resize bg-clip-text text-transparent",
              "transition-transform ease-in-out hover:scale-105"
            )}
            href="https://jamiiyajadeite.co.ke/"
            target="_blank"
            rel="noopener noreferrer"
          >
            JamiiYaJadeite
          </a>
          . My expertise lies in collaborating with clients to develop scalable, user-friendly solutions that
          effectively address real-world challenges. I am committed to delivering top-notch work and am proud of my
          ability to bring complex ideas to fruition. Whether you require a new application built from the ground up or
          an existing system updated and improved, I possess the skills and expertise necessary to deliver quality
          results. Let us work together to bring your ideas to life and create solutions that exceed your expectations.
        </p>
      </Transition>
    </TransitionPage>
  )
}
