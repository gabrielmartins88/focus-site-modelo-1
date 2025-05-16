"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Logo } from "@/components/logo"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "Home", href: "/" },
  { name: "Sobre nós", href: "/sobre-nos" },
  { name: "Serviços", href: "/servicos" },
  { name: "Compliance", href: "/compliance" },
  { name: "Privacidade de Dados", href: "/privacidade-de-dados" },
  { name: "Vagas", href: "/vagas" },
  { name: "Blog", href: "/blog" },
  { name: "Contato", href: "/contato" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center justify-between">
        <Logo />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:gap-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-gray-900 hover:text-focus-orange transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button className="bg-focus-orange hover:bg-focus-orange/90 text-white">Solicitar Orçamento</Button>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Alternar menu</span>
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={cn("md:hidden", mobileMenuOpen ? "fixed inset-0 z-40 bg-white" : "hidden")}>
        <div className="container mt-16 space-y-4 py-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block py-2 text-base font-medium text-gray-900 hover:text-focus-orange"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <Button className="mt-4 w-full bg-focus-orange hover:bg-focus-orange/90 text-white">
            Solicitar Orçamento
          </Button>
        </div>
      </div>
    </header>
  )
}
