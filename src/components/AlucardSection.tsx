import alucardLogo from "@/assets/alucard-animes-logo.png";
import { Button } from "@/components/ui/button";
import { Instagram, Facebook } from "lucide-react";

const AlucardSection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-secondary via-primary to-secondary relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-accent mb-4">
            SOBRE A PRODUTORA
          </h2>
          <div className="flex justify-center mb-8">
            <img 
              src={alucardLogo} 
              alt="Alucard Animes - Desde 2003" 
              className="w-48 md:w-64 h-auto"
            />
          </div>
        </div>

        {/* Content */}
        <div className="bg-white/10 backdrop-blur-sm border-2 border-accent/30 rounded-3xl p-8 md:p-12 mb-8">
          <div className="prose prose-invert max-w-none">
            <p className="text-white/90 text-base md:text-lg leading-relaxed">
              A Alucard Animes nasceu em 2003 para preencher a lacuna de produtos de anime e cultura geek no Brasil: fundada por Roberto Riedl Junior e pelo Grupo CVG MANGÁ, começou com DVDs raros e exclusivos e virou referência. Com a demanda em alta, expandiu para games, action figures, roupas e outros itens, sempre renovando o catálogo. Em paralelo, puxou eventos que reuniam fãs e fortaleceram a comunidade. Com o tempo, consolidou-se como um dos principais nomes do setor, antecipando tendências e oferecendo lançamentos e curadoria. Hoje segue conectando fãs aos seus universos favoritos, com foco em qualidade, inovação e paixão......
            </p>
          </div>
        </div>

        {/* CTA and Social Media */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <Button 
            size="lg"
            className="bg-accent text-primary hover:bg-accent/90 font-bold text-base px-10 py-6 rounded-full"
            asChild
          >
            <a href="/quem-somos">
              CONHECER MAIS
            </a>
          </Button>

          {/* Social Media Links */}
          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/alucardanimes/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur-sm border-2 border-accent/30 rounded-full p-4 hover:bg-accent/20 hover:scale-110 transition-all"
              aria-label="Instagram Alucard Animes"
            >
              <Instagram className="w-6 h-6 text-accent" />
            </a>
            <a
              href="https://www.facebook.com/AlucardAnimes"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur-sm border-2 border-accent/30 rounded-full p-4 hover:bg-accent/20 hover:scale-110 transition-all"
              aria-label="Facebook Alucard Animes"
            >
              <Facebook className="w-6 h-6 text-accent" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AlucardSection;
