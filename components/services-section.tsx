import { ArrowRight, BarChart3, Code, Database, Globe, Lightbulb, Shield } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    title: "Limpeza Profissional",
    description: "Serviços de limpeza especializados para manter seu ambiente de trabalho impecável e saudável.",
    icon: Globe,
    color: "text-focus-orange",
    bgColor: "bg-focus-orange/10",
  },
  {
    title: "Segurança Patrimonial",
    description: "Proteção completa para seu patrimônio com equipes treinadas e tecnologia avançada.",
    icon: Shield,
    color: "text-focus-green",
    bgColor: "bg-focus-green/10",
  },
  {
    title: "Serviços de Apoio",
    description: "Suporte operacional para otimizar seus processos e aumentar a produtividade.",
    icon: Code,
    color: "text-focus-teal",
    bgColor: "bg-focus-teal/10",
  },
  {
    title: "Terceirização de Processos e Equipes",
    description: "Gestão eficiente de processos e equipes para reduzir custos e melhorar resultados.",
    icon: Database,
    color: "text-focus-red",
    bgColor: "bg-focus-red/10",
  },
  {
    title: "Soluções em Alimentação",
    description: "Serviços de alimentação corporativa com qualidade, sabor e nutrição balanceada.",
    icon: Lightbulb,
    color: "text-focus-orange",
    bgColor: "bg-focus-orange/10",
  },
  {
    title: "Segurança e Monitoramento",
    description: "Sistemas avançados de monitoramento e segurança para proteção contínua.",
    icon: BarChart3,
    color: "text-focus-green",
    bgColor: "bg-focus-green/10",
  },
]

export function ServicesSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-12 md:mb-16">
          <h2 className="font-display text-3xl font-bold tracking-tight text-focus-black sm:text-4xl">
            Nossos Serviços
          </h2>
          <p className="mt-4 text-lg text-gray-600">Soluções completas para impulsionar sua empresa</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className={`w-12 h-12 rounded-md ${service.bgColor} flex items-center justify-center mb-4`}>
                  <service.icon className={`h-6 w-6 ${service.color}`} />
                </div>
                <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base">{service.description}</CardDescription>
              </CardContent>
              <CardFooter>
                <Link
                  href={`/servicos/${service.title.toLowerCase().replace(/\s+/g, "-")}`}
                  className="group inline-flex items-center text-sm font-medium text-focus-black hover:text-focus-orange"
                >
                  Saiba mais
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button className="bg-focus-black hover:bg-focus-black/90 text-white">Ver Todos os Serviços</Button>
        </div>
      </div>
    </section>
  )
}
