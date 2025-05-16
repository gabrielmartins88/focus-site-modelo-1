import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone, Instagram } from "lucide-react"
import Link from "next/link"

export function ContactSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-12 md:mb-16">
          <h2 className="font-display text-3xl font-bold tracking-tight text-focus-black sm:text-4xl">
            Entre em Contato
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Estamos prontos para atender às suas necessidades e responder a todas as suas perguntas
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-8 lg:col-span-1">
            <div className="rounded-lg bg-gray-50 p-6">
              <h3 className="text-xl font-bold mb-4">Informações de Contato</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-focus-orange mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Endereço</p>
                    <p className="text-gray-600">
                      Av. Empresarial, 123
                      <br />
                      São Paulo, SP 04000-000
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-focus-orange mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Telefone</p>
                    <Link href="tel:+551123456789" className="text-gray-600 hover:text-focus-orange">
                      (11) 2345-6789
                    </Link>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-focus-orange mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Email</p>
                    <Link href="mailto:contato@focuscompany.com.br" className="text-gray-600 hover:text-focus-orange">
                      contato@focuscompany.com.br
                    </Link>
                  </div>
                </div>
                <div className="flex items-start">
                  <Instagram className="h-5 w-5 text-focus-orange mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Instagram</p>
                    <Link
                      href="https://www.instagram.com/focusconsultoria_rs/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-focus-orange"
                    >
                      @focusconsultoria_rs
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-lg bg-gray-50 p-6">
              <h3 className="text-xl font-bold mb-4">Horário de Atendimento</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Segunda - Sexta:</span>
                  <span>8:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Sábado:</span>
                  <span>9:00 - 13:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Domingo:</span>
                  <span>Fechado</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <form className="rounded-lg bg-white p-6 shadow-md">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Nome
                  </label>
                  <Input id="name" name="name" required />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <Input id="email" name="email" type="email" required />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Telefone
                  </label>
                  <Input id="phone" name="phone" />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Assunto
                  </label>
                  <Input id="subject" name="subject" required />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Mensagem
                  </label>
                  <Textarea id="message" name="message" rows={5} required />
                </div>
                <div className="md:col-span-2">
                  <Button type="submit" className="w-full bg-focus-orange hover:bg-focus-orange/90 text-white">
                    Enviar Mensagem
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
