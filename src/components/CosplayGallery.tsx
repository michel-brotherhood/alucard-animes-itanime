import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import cosplay1 from "@/assets/cosplay-1.jpg";
import cosplay2 from "@/assets/cosplay-2.jpg";
import cosplay3 from "@/assets/cosplay-3.jpg";
import cosplay4 from "@/assets/cosplay-4.jpg";
import cosplay5 from "@/assets/cosplay-5.jpg";
import cosplay6 from "@/assets/cosplay-6.jpg";
import cosplay7 from "@/assets/cosplay-7.jpg";
import cosplay8 from "@/assets/cosplay-8.jpg";
import cosplay9 from "@/assets/cosplay-9.jpg";
import cosplay10 from "@/assets/cosplay-10.jpg";
import cosplay11 from "@/assets/cosplay-11.jpg";
import cosplay12 from "@/assets/cosplay-12.jpg";

const CosplayGallery = () => {
  const autoplayPlugin = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  );

  const photos = [
    { id: 1, src: cosplay1, alt: "Cosplayer em convenção de anime" },
    { id: 2, src: cosplay2, alt: "Performance de K-pop" },
    { id: 3, src: cosplay3, alt: "Grupo de cosplayers" },
    { id: 4, src: cosplay4, alt: "Cosplay de personagem de videogame" },
    { id: 5, src: cosplay5, alt: "Cosplay de fantasia com asas" },
    { id: 6, src: cosplay6, alt: "Cosplayer masculino com espada" },
    { id: 7, src: cosplay7, alt: "Cosplay steampunk" },
    { id: 8, src: cosplay8, alt: "Dupla de cosplayers" },
    { id: 9, src: cosplay9, alt: "Cosplayer com fantasia elaborada de anime" },
    { id: 10, src: cosplay10, alt: "Cosplayer em armadura de fantasia épica" },
    { id: 11, src: cosplay11, alt: "Grupo de cosplayers coloridos" },
    { id: 12, src: cosplay12, alt: "Cosplayer com fantasia de personagem de videogame" },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            CONCURSO DE COSPLAYS
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Participe agora do concurso da equipe Alucard
          </p>
        </div>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[autoplayPlugin.current]}
          className="w-full max-w-7xl mx-auto"
        >
          <CarouselContent>
            {photos.map((photo) => (
              <CarouselItem key={photo.id} className="md:basis-1/2 lg:basis-1/3">
                <Card className="overflow-hidden group cursor-pointer hover:shadow-2xl transition-all duration-300">
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <div className="mt-12 text-center px-4">
          <Button asChild size="lg" className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white font-bold text-sm md:text-lg px-4 md:px-8 py-5 md:py-6 rounded-full shadow-lg shadow-primary/30 w-full sm:w-auto">
            <Link to="/concursos/cosplay">
              VER DETALHES DO CONCURSO
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CosplayGallery;
