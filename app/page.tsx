"use client";

import { TypeAnimation } from 'react-type-animation';
import { FaInstagram, FaCamera, FaWhatsapp } from "react-icons/fa";

export default function FotoMaisLandingPage() {
  const photographers = [
    {
      name: "Jean Felipe",
      role: "Fotógrafo esportivo",
      description:
        "Cobertura de corridas, ciclismo, beach tennis e grandes eventos esportivos.",
      image:
        "https://images.unsplash.com/photo-1504593811423-6dd665756598?q=80&w=1200&auto=format&fit=crop",
      link: "https://lentecriativa.focoradical.com.br/",
    },
    {
      name: "Sara Rodrigues",
      role: "Fotógrafa esportiva",
      description:
        "Registros profissionais dos melhores momentos dos atletas e competições.",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop",
      link: "https://srrs.focoradical.com.br/",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* HEADER */}
      <header className="border-b border-yellow-500/20 bg-[#231f20] backdrop-blur sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <img
              src="/Logo-FotoMais-Header.png"
              alt="FotoMais Fotografias"
              className="h-14 w-auto"
            />
          </div>

          <nav className="hidden md:flex gap-8 text-sm font-medium text-zinc-300">
            <a
              href="#fotografos"
              className="hover:text-yellow-400 transition-colors flex items-center gap-2"
            >
              <FaCamera size={16} />
              Fotógrafos
            </a>

            <a
              href="#contato"
              className="hover:text-yellow-400 transition-colors flex items-center gap-2"
            >
              <FaWhatsapp size={16} />
              Contato
            </a>
            <a
              href="https://instagram.com/fotomaisfotografias"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400 transition-colors flex items-center gap-2"
            >
              <FaInstagram size={18} />
              Instagram
            </a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=1600&auto=format&fit=crop')",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black" />

        <div className="relative max-w-7xl mx-auto px-6 py-28 md:py-40">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/20 text-yellow-300 rounded-full px-4 py-2 text-sm mb-8">
              Eventos esportivos • Corridas • Trekking • Futebol • Natação • Beach Tennis • MTB
            </div>

            <h2 className="text-4xl md:text-6xl font-black leading-tight mb-8 max-w-4xl">
              <TypeAnimation
                sequence={[
                  'Encontre suas fotos dos melhores eventos esportivos.',
                  2000,
                  'Reviva seus melhores momentos.',
                  2000,
                  'Sua conquista registrada profissionalmente.',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-white"
              />
            </h2>

            <p className="text-zinc-300 text-lg md:text-xl leading-relaxed max-w-2xl mb-10">
              Acesse os eventos fotografados pela equipe FotoMais e encontre
              seus melhores momentos registrados profissionalmente.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#fotografos"
                className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold px-8 py-4 rounded-2xl transition-all duration-300 shadow-2xl"
              >
                Ver Eventos
              </a>

              <a
                href="https://wa.me/5584994252849"
                target="_blank"
                className="border border-zinc-700 hover:border-yellow-400 hover:text-yellow-400 px-8 py-4 rounded-2xl transition-all duration-300"
              >
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PHOTOGRAPHERS */}
      <section id="fotografos" className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 text-center">
            <p className="text-yellow-400 uppercase tracking-[0.3em] text-sm font-semibold mb-4">
              Nossa Equipe
            </p>

            <h3 className="text-4xl md:text-5xl font-black mb-6">
              Fotógrafos
            </h3>

            <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
              Escolha o fotógrafo e acesse diretamente os eventos publicados na
              plataforma da Foco Radical.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {photographers.map((photographer) => (
              <div
                key={photographer.name}
                className="group bg-black border border-zinc-800 rounded-3xl overflow-hidden hover:border-yellow-400/50 transition-all duration-500 hover:-translate-y-2"
              >
                <div className="relative h-[320px] overflow-hidden">
                  <img
                    src={photographer.image}
                    alt={photographer.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                </div>

                <div className="p-8">
                  <p className="text-yellow-400 uppercase tracking-[0.2em] text-xs font-semibold mb-4">
                    {photographer.role}
                  </p>

                  <h4 className="text-3xl font-black mb-4">
                    {photographer.name}
                  </h4>

                  <p className="text-zinc-400 leading-relaxed mb-8">
                    {photographer.description}
                  </p>

                  <a
                    href={photographer.link}
                    target="_blank"
                    className="inline-flex items-center gap-3 bg-yellow-400 text-black font-bold px-6 py-4 rounded-2xl hover:bg-yellow-300 transition-colors"
                  >
                    Ver Eventos
                    <span>→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-zinc-800">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="bg-gradient-to-r from-yellow-400/10 to-yellow-500/5 border border-yellow-400/20 rounded-[32px] p-10 md:p-16">

            <h3 className="text-4xl md:text-6xl font-black leading-tight mb-8">
              Seus melhores momentos eternizados.
            </h3>

            <p className="text-zinc-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              Cobertura profissional de eventos esportivos com qualidade,
              velocidade e praticidade para encontrar suas fotos.
            </p>

            <a
              href="https://wa.me/5584994252849"
              target="_blank"
              className="inline-flex bg-yellow-400 text-black font-black px-10 py-5 rounded-2xl hover:bg-yellow-300 transition-colors"
            >
              Entrar em Contato
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        id="contato"
        className="border-t border-zinc-900 py-10 text-center text-zinc-500"
      >
        <div className="max-w-7xl mx-auto px-6">
          <h5 className="text-yellow-400 font-black text-2xl mb-3">
            FotoMais Fotografias
          </h5>

          <p className="mb-2">
            Cobertura de eventos esportivos em Natal/RN e região.
          </p>

          <p className="text-sm">
            © 2026 FotoMais Fotografias. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}