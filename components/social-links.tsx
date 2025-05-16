import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

interface SocialLinksProps {
  className?: string
  iconClassName?: string
}

export function SocialLinks({ className = "", iconClassName = "h-5 w-5" }: SocialLinksProps) {
  return (
    <div className={`flex space-x-4 ${className}`}>
      <Link href="#" className="text-gray-400 hover:text-focus-orange">
        <Facebook className={iconClassName} />
        <span className="sr-only">Facebook</span>
      </Link>
      <Link href="#" className="text-gray-400 hover:text-focus-orange">
        <Twitter className={iconClassName} />
        <span className="sr-only">Twitter</span>
      </Link>
      <Link
        href="https://www.instagram.com/focusconsultoria_rs/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-focus-orange"
      >
        <Instagram className={iconClassName} />
        <span className="sr-only">Instagram</span>
      </Link>
      <Link href="#" className="text-gray-400 hover:text-focus-orange">
        <Linkedin className={iconClassName} />
        <span className="sr-only">LinkedIn</span>
      </Link>
    </div>
  )
}
