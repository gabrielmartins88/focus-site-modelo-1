import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="relative rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-focus-teal to-focus-green"></div>
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] bg-[length:20px_20px]"></div>

          <div className="relative px-6 py-16 md:py-24 text-center">
            <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl max-w-2xl mx-auto">
              Pronto para Transformar Sua Empresa?
            </h2>
            <p className="mt-4 text-lg text-white/80 max-w-xl mx-auto">
              Entre em contato hoje para discutir como nossas soluções inovadoras podem ajudar sua empresa a crescer e
              ter sucesso.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-white text-focus-teal hover:bg-white/90">
                Começar Agora
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white bg-black/20 hover:bg-white/10 hover:text-white"
              >
                Saiba Mais
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
