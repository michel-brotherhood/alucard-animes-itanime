import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingMenu from "@/components/FloatingMenu";
import FAQ from "@/components/FAQ";
import SnowEffect from "@/components/SnowEffect";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Instagram } from "lucide-react";
import raphaelVideo from "@/assets/raphael-performance.mp4";
import eventLogo from "@/assets/friburgo-geek-icon.png";

const guests = [
  {
    category: "Artistas",
    icon: Star,
    items: [
      { 
        name: "Raphael Freitas", 
        role: "O Guitarrista Raphael Freitas e seu projeto Me and the Machine farão um show épico com músicas de games retrô que marcaram gerações — tudo ao som de uma guitarra eletrizante! Se você é fã de nostalgia, games e boa música, esse momento é imperdível!",
        video: raphaelVideo,
        instagram: "https://www.instagram.com/meand_themachine/"
      } as const,
      { name: "", role: "Em breve...", logo: true } as const,
      { name: "", role: "Em breve...", logo: true } as const,
      { name: "", role: "Em breve...", logo: true } as const,
    ],
  },
];

const LineUp = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <SnowEffect />
      <Header />
      
      <section className="bg-secondary py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-black text-accent text-center mb-6">
            LINE-UP
          </h1>
          <p className="text-xl text-white/90 text-center mb-12">
            Conheça os incríveis artistas confirmados para o Itanime!
          </p>

          <div className="space-y-12">
            {guests.map((category) => (
              <div key={category.category}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-accent p-3 rounded-full">
                    <category.icon className="w-6 h-6 text-secondary" />
                  </div>
                  <h2 className="text-3xl font-black text-accent">{category.category}</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {category.items.map((item, index) => (
                    <Card key={index} className="bg-white/10 backdrop-blur-sm border-accent/30 hover:border-accent transition-all">
                      <CardContent className="p-6 text-center">
                        {'video' in item && item.video ? (
                          <div className="w-full max-w-md mx-auto mb-4 overflow-hidden rounded-xl border-4 border-primary shadow-lg shadow-primary/50">
                            <video 
                              src={item.video} 
                              autoPlay
                              loop
                              muted
                              playsInline
                              className="w-full h-full object-cover"
                            >
                              Seu navegador não suporta o elemento de vídeo.
                            </video>
                          </div>
                        ) : 'logo' in item && item.logo ? (
                          <div className="w-32 h-32 mx-auto mb-4 flex items-center justify-center">
                            <img 
                              src={eventLogo} 
                              alt="Itanime"
                              className="w-full h-full object-contain opacity-50"
                            />
                          </div>
                        ) : null}
                        {item.name && <h3 className="text-xl font-bold text-white mb-2">{item.name}</h3>}
                        <p className="text-white/70 text-sm mb-3">{item.role}</p>
                        {'instagram' in item && item.instagram && (
                          <Button
                            asChild
                            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold shadow-lg shadow-primary/30"
                          >
                            <a 
                              href={item.instagram} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="flex items-center gap-2"
                            >
                              <Instagram className="w-4 h-4" />
                              Conhecer mais
                            </a>
                          </Button>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-accent text-lg font-bold">
              🌟 Mais convidados serão anunciados em breve! 🌟
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-accent/20 backdrop-blur-sm rounded-3xl p-8 border-2 border-accent max-w-4xl mx-auto">
          <h3 className="text-3xl font-black text-accent mb-4">
            Não perca essa experiência! 🎉
          </h3>
          <p className="text-white/90 text-lg mb-6">
            Garanta seu ingresso agora e curta todos os artistas e atrações do Itanime!
          </p>
          <a 
            href="/#ingressos" 
            className="inline-block bg-primary hover:bg-primary/90 text-white font-black text-xl px-12 py-4 rounded-full shadow-lg transition-all hover:scale-105"
          >
            Comprar Ingressos
          </a>
        </div>
      </section>

      <FAQ />
      <Footer />
      <FloatingMenu />
    </div>
  );
};

export default LineUp;
