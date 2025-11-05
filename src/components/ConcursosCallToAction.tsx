import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Trophy, Sparkles, Users, Star } from "lucide-react";
import { Link } from "react-router-dom";

const ConcursosCallToAction = () => {
  const contests = [
    {
      icon: Users,
      title: "Cosplay",
      description: "Mostre sua criatividade",
      color: "from-pink-500 to-purple-500",
    },
    {
      icon: Sparkles,
      title: "K-pop",
      description: "Dance ao som do K-pop",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Star,
      title: "Animeke",
      description: "Cante suas músicas favoritas",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Trophy,
      title: "Videogames",
      description: "Compita nos games",
      color: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-muted to-background relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/10 bg-[size:20px_20px]" />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-pulse">
            PARTICIPE DOS CONCURSOS!
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Inscreva-se agora e concorra a prêmios incríveis! Mostre seu talento e paixão pela cultura geek.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contests.map((contest, index) => {
            const Icon = contest.icon;
            return (
              <Card 
                key={index}
                className="p-6 text-center hover:scale-105 transition-all duration-300 hover:shadow-xl border-2 hover:border-primary"
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${contest.color} flex items-center justify-center`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{contest.title}</h3>
                <p className="text-muted-foreground">{contest.description}</p>
              </Card>
            );
          })}
        </div>

        <div className="text-center px-4">
          <Link to="/concursos">
            <Button 
              size="lg" 
              className="text-sm md:text-lg px-4 md:px-8 py-5 md:py-6 bg-gradient-to-r from-primary to-accent hover:shadow-2xl hover:scale-105 transition-all duration-300 w-full sm:w-auto"
            >
              <Trophy className="mr-2 h-4 w-4 md:h-5 md:w-5" />
              VER TODOS OS CONCURSOS
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ConcursosCallToAction;
