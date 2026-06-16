'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronDown } from 'lucide-react';
import { SearchBar } from '@/components/ui/SearchBar';
import type { SearchFilters } from '@/lib/types';

gsap.registerPlugin(ScrollTrigger);

interface HeroSectionProps {
  onSearch?: (filters: SearchFilters) => void;
}

export function HeroSection({ onSearch }: HeroSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadlineRef = useRef<HTMLParagraphElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance animations
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        labelRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8 },
        0
      )
        .fromTo(
          headlineRef.current,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 1.2 },
          0.2
        )
        .fromTo(
          subheadlineRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8 },
          0.5
        )
        .fromTo(
          searchRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8 },
          0.7
        )
        .fromTo(
          statsRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8 },
          0.9
        );

      // Parallax effect for video
      gsap.to(videoRef.current, {
        yPercent: -30,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Video Background */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute w-full h-full object-cover scale-110"
          poster="https://images.unsplash.com/photo-1628744404730-5e51e2f29c0d?auto=format&fit=crop&w=2000&q=90"
        >
          <source
            src="https://videos.pexels.com/video-files/3571264/3571264-hd_1920_1080_30fps.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      {/* Dark Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to bottom, rgba(10,10,10,0.45) 0%, rgba(10,10,10,0.65) 50%, rgba(10,10,10,0.88) 100%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24">
        {/* Label */}
        <div ref={labelRef} className="flex items-center justify-center gap-4 mb-8">
          <div className="w-12 h-px bg-[#C8B89A]" />
          <span className="text-[#C8B89A] text-sm tracking-[0.3em] uppercase">
            Imobiliária de Alto Padrão · Balneário Camboriú
          </span>
          <div className="w-12 h-px bg-[#C8B89A]" />
        </div>

        {/* Headline */}
        <h1
          ref={headlineRef}
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-light leading-tight mb-6"
        >
          O Imóvel Certo
          <br />
          Não Aparece em
          <br />
          <span className="italic">Qualquer Vitrine</span>
        </h1>

        {/* Ticker */}
        <div className="relative w-screen left-1/2 -translate-x-1/2 overflow-hidden mb-10 py-3 border-y border-[#C8B89A]/40">
          <div className="flex whitespace-nowrap animate-ticker">
            {[...Array(3)].map((_, i) => (
              <span key={i} className="flex items-center gap-0 shrink-0">
                <span className="text-[#C8B89A] text-xs tracking-[0.25em] uppercase font-light">COBERTURA · BARRA SUL · 4 SUÍTES · 380m² · R$ 4,8MI</span>
                <span className="mx-6 text-[#C8B89A]/60">——</span>
                <span className="text-[#C8B89A] text-xs tracking-[0.25em] uppercase font-light">PENTHOUSE · 45° ANDAR · VISTA 360° · 620m² · R$ 18,5MI</span>
                <span className="mx-6 text-[#C8B89A]/60">——</span>
                <span className="text-[#C8B89A] text-xs tracking-[0.25em] uppercase font-light">APARTAMENTO · FRENTE MAR · 3 SUÍTES · 185m² · R$ 2,1MI</span>
                <span className="mx-6 text-[#C8B89A]/60">——</span>
                <span className="text-[#C8B89A] text-xs tracking-[0.25em] uppercase font-light">MANSÃO · BARRA NORTE · 6 SUÍTES · 850m² · R$ 12,5MI</span>
                <span className="mx-6 text-[#C8B89A]/60">——</span>
                <span className="text-[#C8B89A] text-xs tracking-[0.25em] uppercase font-light">VILLA · CONDOMÍNIO FECHADO · 4 SUÍTES · 420m² · R$ 3,2MI</span>
                <span className="mx-6 text-[#C8B89A]/60">——</span>
              </span>
            ))}
          </div>
        </div>

        {/* Subheadline */}
        <p
          ref={subheadlineRef}
          className="text-[#F5F0E8]/70 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light"
        >
          Os melhores apartamentos de BC não estão nos portais. Estão aqui.
          Acesso exclusivo a lançamentos, coberturas e frente-mar antes de chegarem ao mercado.
        </p>

        {/* Search Bar */}
        <div ref={searchRef} className="flex justify-center mb-16">
          <SearchBar onSearch={onSearch} />
        </div>

        {/* Stats */}
        <div
          ref={statsRef}
          className="flex flex-wrap items-center justify-center gap-8 md:gap-16"
        >
          <div className="text-center">
            <p className="font-display text-4xl md:text-5xl text-white mb-1">+380</p>
            <p className="text-[#8A8580] text-sm tracking-wide">Imóveis em Carteira</p>
          </div>

          <div className="hidden md:block w-px h-16 gold-line-vertical" />

          <div className="text-center">
            <p className="font-display text-4xl md:text-5xl text-white mb-1">R$ 2,1bi</p>
            <p className="text-[#8A8580] text-sm tracking-wide">Negociados</p>
          </div>

          <div className="hidden md:block w-px h-16 gold-line-vertical" />

          <div className="text-center">
            <p className="font-display text-4xl md:text-5xl text-white mb-1">14 anos</p>
            <p className="text-[#8A8580] text-sm tracking-wide">De Mercado Premium</p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-[#C8B89A] text-xs tracking-wider">Role para explorar</span>
        <ChevronDown className="w-5 h-5 text-[#C8B89A] animate-bounce" />
      </div>
    </section>
  );
}
