
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative overflow-hidden py-20 lg:py-24">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white -z-10"></div>
      
      {/* Animated air particles */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="air-quality-dot absolute top-1/4 left-1/4 h-4 w-4 rounded-full bg-airquality-good animate-pulse-slow" style={{animationDelay: "0s"}}></div>
        <div className="air-quality-dot absolute top-1/3 left-1/2 h-3 w-3 rounded-full bg-airquality-moderate animate-pulse-slow" style={{animationDelay: "0.5s"}}></div>
        <div className="air-quality-dot absolute top-2/3 left-1/3 h-5 w-5 rounded-full bg-airquality-unhealthy animate-pulse-slow" style={{animationDelay: "1s"}}></div>
        <div className="air-quality-dot absolute top-1/2 left-3/4 h-6 w-6 rounded-full bg-airquality-good animate-pulse-slow" style={{animationDelay: "1.5s"}}></div>
        <div className="air-quality-dot absolute top-1/5 left-2/3 h-4 w-4 rounded-full bg-airquality-moderate animate-pulse-slow" style={{animationDelay: "2s"}}></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Aire Claro Monterrey
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
            Monitoreo y datos de calidad del aire en tiempo real para Monterrey, Nuevo León. 
            Conoce lo que respiras y toma decisiones informadas.
          </p>
           <div className="mt-12 text-center">
                <Button asChild size="lg" className="mr-4">
                  <Link to="/dashboard">Ver Datos en Tiempo Real</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/contact">Contactar con Nosotros</Link>
                </Button>
          </div>
        </div>

        {/* Key features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white p-6 rounded-lg shadow-sm border text-center">
            <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Datos en Tiempo Real</h3>
            <p className="text-muted-foreground">Información actualizada sobre la calidad del aire en diferentes zonas de Monterrey.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border text-center">
            <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M3 3v18h18"></path><path d="m19 9-5 5-4-4-3 3"></path></svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Visualización Interactiva</h3>
            <p className="text-muted-foreground">Mapas y gráficos que facilitan entender los niveles de contaminación.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border text-center">
            <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" x2="12" y1="15" y2="3"></line></svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Datos Descargables</h3>
            <p className="text-muted-foreground">Acceso a datos históricos para análisis e investigaciones académicas.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
