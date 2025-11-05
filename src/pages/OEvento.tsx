import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingMenu from "@/components/FloatingMenu";
import FAQ from "@/components/FAQ";
import MapSection from "@/components/MapSection";
import SnowEffect from "@/components/SnowEffect";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Calendar, MapPin, Star, Instagram, Facebook } from "lucide-react";
import alucardLogo from "@/assets/alucard-animes-logo.png";
import logoFg from "@/assets/logo-fg.png";
import eventPhoto1 from "@/assets/event-photo-1.jpg";
import eventPhoto2 from "@/assets/event-photo-2.jpg";
import eventPhoto3 from "@/assets/event-photo-3.jpg";
import eventPhoto4 from "@/assets/event-photo-4.jpg";
import eventPhoto5 from "@/assets/event-photo-5.jpg";
import eventPhoto6 from "@/assets/event-photo-6.jpg";
import eventPhoto7 from "@/assets/event-photo-7.jpg";
import eventPhoto8 from "@/assets/event-photo-8.jpg";
import eventPhoto9 from "@/assets/event-photo-9.jpg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const stats = [
  { icon: Users, value: "50.000+", label: "Visitantes esperados" },
  { icon: Calendar, value: "2 Dias", label: "De pura diversão" },
  { icon: MapPin, value: "10.000m²", label: "De área de evento" },
  { icon: Star, value: "100+", label: "Atrações e atividades" },
];

const OEvento = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <SnowEffect />
      <Header />
      
      <section className="bg-gradient-to-b from-secondary to-primary py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-black text-accent text-center mb-6">
            O EVENTO
          </h1>
          <p className="text-xl text-white/90 text-center mb-12">
            O encontro perfeito para geeks, otakus e gamers em Nova Friburgo
          </p>

          {/* Logo */}
          <div className="flex justify-center mb-8">
            <img src={logoFg} alt="Friburgo Geek" className="w-48 md:w-56 h-auto object-contain" />
          </div>

          {/* Hero Section */}
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 mb-12 border-2 border-accent">
            <h2 className="text-3xl md:text-4xl font-black text-accent mb-6">
              Bem-vindo ao Friburgo Geek Natal! 🎄
            </h2>
            <div className="space-y-4 text-white/90 text-lg">
              <p>
                O Friburgo Geek tem a missão de celebrar a cultura geek — e as muitas culturas que a compõem, como games, quadrinhos, cinema, anime e tecnologia — em um formato acolhedor para toda a família. Promovemos eventos seguros e bem organizados em Nova Friburgo e região, com programação pensada para crianças, jovens e adultos, espaços de convivência, oficinas e atividades educativas. Nosso foco é simples: respeito, boa convivência e acessibilidade, sem bandeiras ou discursos — aqui o protagonismo é da experiência em família, do encontro entre gerações e do compartilhamento de referências. Queremos que cada edição seja um ponto de encontro da cidade e das cidades vizinhas, onde todos se sintam à vontade para curtir, descobrir novidades e voltar para casa com boas memórias.
              </p>
            </div>
          </div>

          {/* Event Photos Carousel */}
          <div className="mb-12">
            <p className="text-white/70 text-sm text-center mb-4">algumas fotos da última edição</p>
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 2000,
                }),
              ]}
              className="w-full"
            >
              <CarouselContent>
                {[eventPhoto1, eventPhoto2, eventPhoto3, eventPhoto4, eventPhoto5, eventPhoto6, eventPhoto7, eventPhoto8, eventPhoto9].map((photo, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <Card className="border-2 border-accent overflow-hidden">
                      <CardContent className="p-0">
                        <img 
                          src={photo} 
                          alt={`Foto do evento ${index + 1}`}
                          className="w-full h-64 object-cover hover:scale-110 transition-transform duration-300"
                        />
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>

          {/* Social CTAs */}
          <div className="flex justify-center gap-4 mb-12">
            <a
              href="https://www.instagram.com/friburgogeek/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur-sm border-2 border-accent/30 rounded-full p-4 hover:bg-accent/20 hover:scale-110 transition-all"
              aria-label="Instagram Friburgo Geek"
            >
              <Instagram className="w-6 h-6 text-accent" />
            </a>
            <a
              href="https://www.facebook.com/friburgogeek"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur-sm border-2 border-accent/30 rounded-full p-4 hover:bg-accent/20 hover:scale-110 transition-all"
              aria-label="Facebook Friburgo Geek"
            >
              <Facebook className="w-6 h-6 text-accent" />
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12">
            <Card className="bg-accent border-0 text-center">
              <CardContent className="p-4 md:p-6">
                <Users className="w-8 h-8 md:w-12 md:h-12 text-secondary mx-auto mb-2 md:mb-4" />
                <div className="text-2xl md:text-4xl font-black text-secondary mb-1 md:mb-2">1 Dia</div>
                <div className="text-xs md:text-base text-secondary/80 font-bold">De pura diversão</div>
              </CardContent>
            </Card>
            <Card className="bg-accent border-0 text-center">
              <CardContent className="p-4 md:p-6">
                <Calendar className="w-8 h-8 md:w-12 md:h-12 text-secondary mx-auto mb-2 md:mb-4" />
                <div className="text-2xl md:text-4xl font-black text-secondary mb-1 md:mb-2">6 horas</div>
                <div className="text-xs md:text-base text-secondary/80 font-bold">Das 12h às 18h</div>
              </CardContent>
            </Card>
            <Card className="bg-accent border-0 text-center">
              <CardContent className="p-4 md:p-6">
                <MapPin className="w-8 h-8 md:w-12 md:h-12 text-secondary mx-auto mb-2 md:mb-4" />
                <div className="text-2xl md:text-4xl font-black text-secondary mb-1 md:mb-2">10+</div>
                <div className="text-xs md:text-base text-secondary/80 font-bold">Videogames free play</div>
              </CardContent>
            </Card>
            <Card className="bg-accent border-0 text-center">
              <CardContent className="p-4 md:p-6">
                <Star className="w-8 h-8 md:w-12 md:h-12 text-secondary mx-auto mb-2 md:mb-4" />
                <div className="text-2xl md:text-4xl font-black text-secondary mb-1 md:mb-2">8</div>
                <div className="text-xs md:text-base text-secondary/80 font-bold">Campeonatos</div>
              </CardContent>
            </Card>
          </div>

          {/* Destaques */}
          <div className="space-y-6">
            <Card className="bg-primary/50 backdrop-blur-sm border-2 border-accent/50">
              <CardContent className="p-8">
                <h3 className="text-2xl font-black text-accent mb-4">🎮 Arena Gamer & Retrô Games</h3>
                <ul className="text-white/90 space-y-2 list-disc list-inside">
                  <li>Arena Gamer com mais de 10 videogames free play</li>
                  <li>Beat Saber no Playstation VR</li>
                  <li>Retrô Games para relembrar clássicos inesquecíveis</li>
                  <li>Campeonatos de FIFA 25, Mortal Kombat 1, Street Fighter 6 e Tekken 8</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-secondary/50 backdrop-blur-sm border-2 border-accent/50">
              <CardContent className="p-8">
                <h3 className="text-2xl font-black text-accent mb-4">🎭 Cosplay, K-POP & Animeke</h3>
                <ul className="text-white/90 space-y-2 list-disc list-inside">
                  <li>Campeonato de Cosplay com 8 categorias e mil reais em brindes</li>
                  <li>Campeonato de K-POP Generations</li>
                  <li>Animeke livre para todos - solo ou dupla</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-primary/50 backdrop-blur-sm border-2 border-accent/50">
              <CardContent className="p-8">
                <h3 className="text-2xl font-black text-accent mb-4">🎬 Cine Anime & Atividades Interativas</h3>
                <ul className="text-white/90 space-y-2 list-disc list-inside">
                  <li>Cine Anime com super exibição de animes</li>
                  <li>Board Games e Wood Games (jogos de madeira GEEK)</li>
                  <li>Swordplay para testar suas habilidades</li>
                  <li>Gincanas com brindes incríveis</li>
                  <li>Passa ou repassa com Misheru</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-secondary/50 backdrop-blur-sm border-2 border-accent/50">
              <CardContent className="p-8">
                <h3 className="text-2xl font-black text-accent mb-4">🛍️ Estandes & Alimentação</h3>
                <ul className="text-white/90 space-y-2 list-disc list-inside">
                  <li>Estandes de vendas com produtos geeks exclusivos</li>
                  <li>Alimentação completa no local</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Call to Action */}
          <div className="mt-12 text-center bg-accent/20 backdrop-blur-sm rounded-3xl p-8 border-2 border-accent">
            <h3 className="text-3xl font-black text-accent mb-4">
              Pronto para a aventura? 🚀
            </h3>
            <p className="text-white/90 text-lg mb-6">
              Garanta seu ingresso agora e faça parte dessa experiência inesquecível!
            </p>
            <a 
              href="/#ingressos" 
              className="inline-block bg-primary hover:bg-primary/90 text-white font-black text-xl px-12 py-4 rounded-full shadow-lg transition-all hover:scale-105"
            >
              Comprar Ingressos
            </a>
          </div>

          {/* Alucard Animes Section */}
          <div className="mt-12 bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border-2 border-accent">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <img src={alucardLogo} alt="Alucard Animes" className="w-48 h-48 object-contain" />
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-3xl font-black text-accent mb-4">
                  Produção: Alucard Animes
                </h3>
                <p className="text-white/90 text-lg mb-6">
                  Alucard Animes é uma produtora de eventos especializada no universo geek, otaku e gamer! 
                  Criamos experiências incríveis com shows, cosplay, k-pop, torneios, feira geek, oficinas e muito mais.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 mb-6">
                  <a 
                    href="https://www.alucardanimes.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block bg-primary hover:bg-primary/90 text-white font-bold text-lg px-8 py-3 rounded-full shadow-lg transition-all hover:scale-105"
                  >
                    Conhecer Mais
                  </a>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-4">
                  <span className="text-white/90 font-semibold">Siga-nos:</span>
                  <a 
                    href="https://www.instagram.com/alucardanimes/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white/10 p-3 rounded-full hover:bg-accent hover:scale-110 transition-all"
                  >
                    <Instagram className="w-6 h-6 text-white" />
                  </a>
                  <a 
                    href="https://www.facebook.com/AlucardAnimes" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white/10 p-3 rounded-full hover:bg-accent hover:scale-110 transition-all"
                  >
                    <Facebook className="w-6 h-6 text-white" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <MapSection />
      <FAQ />
      <Footer />
      <FloatingMenu />
    </div>
  );
};

export default OEvento;
