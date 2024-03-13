"use client"
import { twSum } from "@/utils/utils"
import { useState } from "react"

const menuItems = [
  { name: "Home", href: "/", current: true },
  { name: "About Me", href: "#about-me", current: false },
  { name: "My Projects", href: "#my-projects", current: false },
  { name: "Blog", href: "#blog", current: false },
  { name: "Contact", href: "#contact", current: false },
]

export default function Navbar() {
  const [menuState, setMenuState] = useState(false)

  return (
    <nav className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Mobile menu button */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={() => setMenuState((prevState) => !prevState)}
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${menuState ? "hidden" : "block"} h-6 w-6`}
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              <svg
                className={`${menuState ? "block" : "hidden"} h-6 w-6`}
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Desktop menu */}
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center"></div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {menuItems.map((item) => (
                  <a
                    href={item.href}
                    key={item.name}
                    aria-current={item.current ? "page" : undefined}
                    className={twSum(
                      item.current
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "rounded-md px-3 py-2 text-sm font-medium",
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state. */}
      <div className={`${menuState ? "sm:block" : "hidden"}`} id="mobile-menu">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {menuItems.map((item) => (
            <a
              href={item.href}
              key={item.name}
              aria-current={item.current ? "page" : undefined}
              className={twSum(
                item.current ? "bg-gray-100 text-gray-700" : "",
                "block px-4 py-2 text-sm ",
              )}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}

// desktop
// ;("text-sm")
// mobile
// ;("block text-base")
