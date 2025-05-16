import { Oswald } from "next/font/google"
import Image from "next/image"
import Link from "next/link"

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400"],
})

export function LogoFooter() {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <div className="flex items-center">
        <Image src="/images/focus-icon-logo.png" alt="Focus Logo" width={40} height={40} className="h-10 w-auto" />
        <span className={`ml-2 text-2xl text-white ${oswald.className}`}>FOCUS</span>
      </div>
    </Link>
  )
}
