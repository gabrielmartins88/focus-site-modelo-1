import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const vagas = [
  {
    titulo: "Auxiliar de Limpeza",
    local: "São Paulo, SP",
    tipo: "Tempo Integral",
  },
  {
    titulo: "Segurança Patrimonial",
    local: "Rio de Janeiro, RJ",
    tipo: "Tempo Integral",
  },
  {
    titulo: "Auxiliar Administrativo",
    local: "Belo Horizonte, MG",
    tipo: "Tempo Integral",
  },
  {
    titulo: "Cozinheiro(a)",
    local: "São Paulo, SP",
    tipo: "Tempo Integral",
  },
]

export function VagasSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="font-display text-3xl font-bold tracking-tight text-focus-black sm:text-4xl">
            Vagas Disponíveis
          </h2>
          <p className="mt-4 text-lg text-gray-600">Faça parte da nossa equipe e cresça conosco</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {vagas.map((vaga, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-focus-black">{vaga.titulo}</h3>
              <div className="mt-2 flex flex-wrap gap-2">
                <span className="inline-flex items-center rounded-full bg-focus-orange/10 px-3 py-1 text-sm font-medium text-focus-orange">
                  {vaga.local}
                </span>
                <span className="inline-flex items-center rounded-full bg-focus-green/10 px-3 py-1 text-sm font-medium text-focus-green">
                  {vaga.tipo}
                </span>
              </div>
              <div className="mt-4">
                <Link
                  href={`/vagas/${vaga.titulo.toLowerCase().replace(/\s+/g, "-")}`}
                  className="group inline-flex items-center text-sm font-medium text-focus-black hover:text-focus-orange"
                >
                  Ver detalhes
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button className="bg-focus-black hover:bg-focus-black/90 text-white">Ver Todas as Vagas</Button>
        </div>
      </div>
    </section>
  )
}
