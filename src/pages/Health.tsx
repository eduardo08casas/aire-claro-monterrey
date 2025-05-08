
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Health = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Banner Section */}
        <section className="relative bg-gradient-to-r from-primary to-secondary text-white py-20">
          <div className="container mx-auto px-4 z-10 relative">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Información sobre Salud</h1>
            <p className="text-xl max-w-2xl">
              Aprende cómo la calidad del aire afecta tu salud y qué medidas puedes tomar
            </p>
          </div>
          <div className="absolute inset-0 bg-slate-900/30 z-0"></div>
        </section>

        {/* News Modules Section */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Noticias y Estudios Recientes</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {/* News Card 1 */}
              <Card>
                <CardHeader>
                  <div className="text-sm text-muted-foreground mb-2">OMS | 8 Mayo, 2025</div>
                  <CardTitle>La OMS alerta sobre el incremento de enfermedades respiratorias</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    Un nuevo informe de la Organización Mundial de la Salud vincula directamente los picos de contaminación con 
                    incrementos en hospitalizaciones por enfermedades respiratorias.
                  </CardDescription>
                  <a href="#" className="text-primary hover:text-primary/80 text-sm font-medium">
                    Leer más →
                  </a>
                </CardContent>
              </Card>
              
              {/* News Card 2 */}
              <Card>
                <CardHeader>
                  <div className="text-sm text-muted-foreground mb-2">Universidad de Monterrey | 3 Mayo, 2025</div>
                  <CardTitle>Estudio local relaciona contaminación con alergias infantiles</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    Investigadores de la Universidad de Monterrey encontraron una correlación significativa entre la exposición 
                    a aire contaminado y el desarrollo de alergias en niños menores de 6 años.
                  </CardDescription>
                  <a href="#" className="text-primary hover:text-primary/80 text-sm font-medium">
                    Leer más →
                  </a>
                </CardContent>
              </Card>
              
              {/* News Card 3 */}
              <Card>
                <CardHeader>
                  <div className="text-sm text-muted-foreground mb-2">Revista Científica Ambiental | 28 Abril, 2025</div>
                  <CardTitle>PM2.5: El contaminante invisible más dañino</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    Nuevas investigaciones revelan que las partículas ultrafinas PM2.5 pueden penetrar más profundamente en los 
                    pulmones y llegar al torrente sanguíneo, causando daños sistemáticos al organismo.
                  </CardDescription>
                  <a href="#" className="text-primary hover:text-primary/80 text-sm font-medium">
                    Leer más →
                  </a>
                </CardContent>
              </Card>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {/* Resource Card 1 */}
              <Card className="p-6 border-l-4 border-l-primary">
                <h3 className="text-xl font-bold mb-2">Poblaciones Vulnerables</h3>
                <p className="text-muted-foreground mb-4">
                  Niños, adultos mayores y personas con condiciones respiratorias preexistentes son especialmente vulnerables 
                  a los efectos de la contaminación del aire.
                </p>
                <a href="#" className="text-primary hover:text-primary/80 text-sm font-medium">
                  Ver guías de protección →
                </a>
              </Card>
              
              {/* Resource Card 2 */}
              <Card className="p-6 border-l-4 border-l-primary">
                <h3 className="text-xl font-bold mb-2">Medidas Preventivas</h3>
                <p className="text-muted-foreground mb-4">
                  Conoce las acciones que puedes tomar para proteger tu salud durante días de alta contaminación, incluyendo el uso 
                  adecuado de mascarillas y filtros de aire.
                </p>
                <a href="#" className="text-primary hover:text-primary/80 text-sm font-medium">
                  Descargar guía →
                </a>
              </Card>
            </div>
            
            {/* Video Module */}
            <div className="bg-slate-100 rounded-lg p-6 mb-12">
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">Entendiendo la calidad del aire</h3>
                  <p className="text-muted-foreground mb-4">
                    Video explicativo sobre los principales contaminantes, cómo se miden y qué significan los índices de calidad del aire.
                  </p>
                </div>
                <div className="flex-1 aspect-video bg-slate-200 rounded flex items-center justify-center">
                  <div className="text-muted-foreground">Video Explicativo</div>
                </div>
              </div>
            </div>
            
            {/* Back to Home Button */}
            <div className="flex justify-center">
              <Button asChild variant="default" size="lg" className="gap-2">
                <Link to="/">
                  <ArrowLeft size={18} />
                  Volver a inicio
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Health;
