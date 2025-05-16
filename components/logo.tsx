import Image from "next/image"
import Link from "next/link"

export function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <Image src="/images/focus-logo.png" alt="Focus Logo" width={120} height={40} className="h-10 w-auto" />
    </Link>
  )
}
