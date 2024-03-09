import clsx, { ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function twSum(...args: ClassValue[]) {
  return twMerge(clsx(args))
}
