import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home, Search } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center bg-gradient-to-br from-primary via-secondary to-primary px-6 py-20">
        <div className="max-w-2xl w-full text-center">
          <div className="mb-8">
            <h1 className="text-9xl md:text-[12rem] font-black text-accent mb-4 animate-pulse">
              404
            </h1>
            <div className="flex items-center justify-center gap-3 mb-6">
              <Search className="w-8 h-8 text-accent" />
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Página Não Encontrada
              </h2>
            </div>
            <p className="text-xl text-white/80 mb-8">
              Ops! A página que você está procurando não existe ou foi movida.
            </p>
          </div>

          <div className="space-y-4">
            <Link 
              to="/"
              className="inline-flex items-center gap-3 bg-accent hover:bg-accent/90 text-primary font-black text-lg px-8 py-4 rounded-full shadow-lg transition-all hover:scale-105"
            >
              <Home className="w-6 h-6" />
              Voltar para o Início
            </Link>
            
            <div className="pt-8">
              <p className="text-white/60 text-sm">
                Caminho tentado: <code className="bg-white/10 px-2 py-1 rounded text-accent">{location.pathname}</code>
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
