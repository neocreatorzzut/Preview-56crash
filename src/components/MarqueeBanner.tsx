const MarqueeBanner = () => {
  const messages = [
    "CRASH TRAINING",
    "ENTRENA SIN LÍMITES",
    "COACHES CERTIFICADOS",
    "TECNOLOGÍA DE PUNTA",
    "RESULTADOS GARANTIZADOS",
    "24/7 ACCESO",
  ];

  return (
    <div className="relative py-5 bg-primary -rotate-1 -mx-4 overflow-hidden">
      <div className="flex animate-marquee">
        {[...messages, ...messages].map((message, index) => (
          <div key={index} className="flex items-center shrink-0">
            <span className="font-display text-lg md:text-xl font-bold text-primary-foreground uppercase tracking-widest whitespace-nowrap px-8">
              {message}
            </span>
            <span className="text-primary-foreground/50">•</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarqueeBanner;
