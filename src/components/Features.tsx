import { Check } from "lucide-react";

const features = [
  "Arena Gamer com mais de 10 videogames free play",
  "Beat Saber no Playstation VR",
  "Cine Anime com super exibição de animes",
  "Animekê livre para todos",
  "Board games e Wood Games geek",
  "Swordplay e atividades interativas",
  "Estandes de vendas com produtos geeks exclusivos",
  "Alimentação no local",
  "Passa ou repassa com Misheru",
  "Gincanas com brindes incríveis",
  "Guitarrista Gamer Retrô Rafael",
  "Campeonatos de Cosplay, K-POP, FIFA 25, Mortal Kombat 1, Street Fighter 6 e Tekken 8",
];

const Features = () => {
  return (
    <section className="py-16 px-6 bg-secondary">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-black text-accent text-center mb-12">
          O QUE TODOS OS INGRESSOS INCLUEM?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-3 md:gap-4 bg-white/10 backdrop-blur-sm p-3 md:p-4 rounded-xl">
              <div className="bg-accent rounded-full p-1 flex-shrink-0 mt-0.5 md:mt-1">
                <Check className="w-4 h-4 md:w-5 md:h-5 text-secondary" />
              </div>
              <span className="text-white text-sm md:text-lg">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
