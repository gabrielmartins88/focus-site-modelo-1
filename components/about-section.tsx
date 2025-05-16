import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

export function AboutSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="grid gap-12 md:grid-cols-2 items-center">
          <div className="relative">
            <div className="absolute -z-10 top-0 -left-4 w-72 h-72 bg-focus-orange/10 rounded-full blur-3xl"></div>
            <div className="absolute -z-10 bottom-0 -right-4 w-72 h-72 bg-focus-teal/10 rounded-full blur-3xl"></div>

            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/diverse-team-office.png"
                alt="Sobre a Focus"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
              />

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-focus-black/80 to-transparent p-6">
                <div className="text-white font-display text-xl md:text-2xl font-bold">
                  Impulsionando Inovação Desde 2010
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="font-display text-3xl font-bold tracking-tight text-focus-black sm:text-4xl">
                Sua empresa bem cuidada
              </h2>
              <div className="mt-2 h-1 w-20 bg-focus-orange"></div>
            </div>

            <p className="text-lg text-gray-600">
              Fundada em 2010, a Focus atua com Gestão de Facilities, prestando serviços de limpeza, apoio
              especializado, terceirização de processos e equipes, soluções em alimentação e administração de
              restaurantes corporativos. Com vasta experiência, atendemos os setores Público e Privado.
            </p>

            <div className="space-y-3">
              {[
                "Equipe especializada com experiência em diversos setores",
                "Soluções personalizadas para atender suas necessidades específicas",
                "Compromisso com inovação e excelência",
                "Histórico comprovado de projetos bem-sucedidos",
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="mr-2 h-5 w-5 flex-shrink-0 text-focus-green" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <Button className="bg-focus-black hover:bg-focus-black/90 text-white">Saiba Mais Sobre Nós</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
