import { Card } from "@/components/ui/card";
import { Puzzle, Dice5, Gamepad } from "lucide-react";
import woodGames from "@/assets/wood-games.jpg";
import boardGames from "@/assets/board-games.jpg";
import retroGames from "@/assets/retro-games.jpg";

const ActivitySection = () => {
  const activities = [
    {
      title: "Wood Games",
      subtitle: "Jogos de Madeira",
      image: woodGames,
      icon: Puzzle,
      gradient: "from-amber-600 to-orange-500",
      description: "Divirta-se com jogos tradicionais de madeira",
    },
    {
      title: "Board Games",
      subtitle: "Jogos de Tabuleiro",
      image: boardGames,
      icon: Dice5,
      gradient: "from-emerald-600 to-teal-500",
      description: "Explore diversos jogos de estratégia e diversão",
    },
    {
      title: "Área de Video Games Retro",
      subtitle: "Nostalgia Gamer",
      image: retroGames,
      icon: Gamepad,
      gradient: "from-purple-600 to-pink-500",
      description: "Reviva clássicos dos arcades e consoles vintage",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-muted via-background to-muted relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/5 via-transparent to-transparent" />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent">
            MOMENTO OLD GAMES ALUCARD
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Aproveite diversas opções de entretenimento para toda a família!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {activities.map((activity, index) => {
            const Icon = activity.icon;
            return (
              <Card 
                key={index}
                className="relative overflow-hidden group hover:scale-105 transition-all duration-300 hover:shadow-2xl"
              >
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${activity.gradient} opacity-50 group-hover:opacity-40 transition-opacity`} />
                  <div className={`absolute top-4 right-4 w-14 h-14 rounded-full bg-gradient-to-br ${activity.gradient} flex items-center justify-center shadow-lg`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                    <h3 className="text-2xl font-bold text-white mb-1">{activity.title}</h3>
                    <p className="text-white/90 text-sm font-semibold">{activity.subtitle}</p>
                  </div>
                </div>
                
                <div className="p-5 bg-card">
                  <p className="text-muted-foreground text-center">{activity.description}</p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ActivitySection;
