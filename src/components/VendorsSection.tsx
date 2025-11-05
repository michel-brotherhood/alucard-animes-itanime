import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Store, ShoppingBag, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import videoStands from "@/assets/video-stands.mp4";

const VendorsSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background via-accent/5 to-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            ESTANDES DE VENDAS
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Produtos geeks exclusivos e muito mais!
          </p>
        </div>

        {/* Vídeo dos Estandes */}
        <div className="mb-12 max-w-3xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            <video
              src={videoStands}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto object-cover max-h-[400px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Card className="p-8 text-center hover:shadow-xl transition-all duration-300 hover:scale-105 bg-gradient-to-br from-primary/5 to-accent/5">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <Store className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Produtos Exclusivos</h3>
            <p className="text-muted-foreground">
              Encontre itens colecionáveis e produtos únicos da cultura geek
            </p>
          </Card>

          <Card className="p-8 text-center hover:shadow-xl transition-all duration-300 hover:scale-105 bg-gradient-to-br from-accent/5 to-primary/5">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center">
              <ShoppingBag className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Artesanato</h3>
            <p className="text-muted-foreground">
              Descubra peças artesanais criadas por fãs para fãs
            </p>
          </Card>

          <Card className="p-8 text-center hover:shadow-xl transition-all duration-300 hover:scale-105 bg-gradient-to-br from-primary/5 to-accent/5">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Novidades</h3>
            <p className="text-muted-foreground">
              Lançamentos e produtos que você não encontra em outro lugar
            </p>
          </Card>
        </div>

        <div className="text-center">
          <a href="https://www.estandes.alucardanimes.com" target="_blank" rel="noopener noreferrer">
            <Button 
              size="lg" 
              className="text-lg px-12 py-7 bg-gradient-to-r from-accent to-primary hover:shadow-2xl hover:scale-105 transition-all duration-300 rounded-full font-bold"
            >
              <Store className="mr-2 h-5 w-5" />
              QUERO SER EXPOSITOR
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default VendorsSection;
