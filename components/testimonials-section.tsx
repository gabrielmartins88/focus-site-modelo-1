import { Quote } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    content:
      "A Focus transformou as operações da nossa empresa com suas soluções inovadoras. A equipe foi profissional, responsiva e entregou além das nossas expectativas.",
    author: "Sarah Johnson",
    role: "CEO, TechVision Inc.",
    image: "/professional-woman-headshot.png",
  },
  {
    content:
      "Trabalhar com a Focus foi um divisor de águas para nossa empresa. A expertise deles em transformação digital nos ajudou a otimizar processos e aumentar a eficiência.",
    author: "Michael Chen",
    role: "CTO, Innovate Solutions",
    image: "/professional-man-headshot.png",
  },
  {
    content:
      "A equipe da Focus entregou resultados excepcionais. A atenção aos detalhes e o compromisso com a qualidade os tornaram o parceiro perfeito para nosso projeto.",
    author: "Emily Rodriguez",
    role: "Diretora de Operações, Global Systems",
    image: "/diverse-professional-woman-headshots.png",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 bg-focus-black text-white">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-12 md:mb-16">
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">O Que Nossos Clientes Dizem</h2>
          <p className="mt-4 text-lg text-gray-300">
            Não acredite apenas em nossa palavra - veja o que alguns de nossos clientes satisfeitos têm a dizer
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="relative rounded-lg bg-white/5 p-6 backdrop-blur-sm border border-white/10">
              <Quote className="h-8 w-8 text-focus-orange mb-4" />
              <p className="mb-6 text-gray-300">"{testimonial.content}"</p>
              <div className="flex items-center">
                <Image
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.author}
                  width={48}
                  height={48}
                  className="rounded-full mr-4"
                />
                <div>
                  <div className="font-medium">{testimonial.author}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
