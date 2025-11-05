import { MapPin } from "lucide-react";

const MapSection = () => {
  return (
    <section id="localizacao" className="py-16 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <MapPin className="w-8 h-8 text-primary" />
            <h2 className="text-3xl md:text-5xl font-black text-secondary">
              LOCALIZAÇÃO
            </h2>
          </div>
          <p className="text-sm md:text-lg text-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Sindicato Dos Têxteis<br className="md:hidden" />
            <span className="hidden md:inline"> - </span>
            Rua Augusto Spinelli, 84 - Centro<br />
            Nova Friburgo - RJ<br className="md:hidden" />
            <span className="hidden md:inline"> | </span>
            CEP: 28610-190
          </p>
        </div>

        <div className="rounded-3xl overflow-hidden border-4 border-border shadow-2xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.8!2d-42.5310!3d-22.2817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x978c68c3d6f1a9%3A0x6b23ae6d41c1e8!2sR.%20Augusto%20Spinelli%2C%2084%20-%20Centro%2C%20Nova%20Friburgo%20-%20RJ%2C%2028610-190!5e0!3m2!1spt-BR!2sbr!4v1709567890123!5m2!1spt-BR!2sbr"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização do Friburgo Geek Natal"
            className="w-full"
          ></iframe>
        </div>

        <div className="mt-8 text-center">
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=R.+Augusto+Spinelli,+84+-+Centro,+Nova+Friburgo+-+RJ,+28610-190"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-full font-bold hover:bg-primary/90 transition-colors shadow-lg"
          >
            <MapPin className="w-5 h-5" />
            Como chegar
          </a>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
