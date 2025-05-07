
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const InfoSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">¿Por qué importa la calidad del aire?</h2>
          <p className="text-muted-foreground">
            La contaminación del aire afecta nuestra salud diariamente. Entender y monitorear 
            la calidad del aire es el primer paso para protegernos y tomar acción.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Impactos en la Salud</h3>
            <p className="text-muted-foreground mb-6">
              La exposición a aire contaminado está asociada con numerosos problemas de salud, 
              incluyendo enfermedades respiratorias, cardiovasculares, y puede afectar el 
              desarrollo cognitivo en niños.
            </p>

            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M8 19H5c-1 0-2-1-2-2v-1c0-1 1-2 2-2h1"></path><path d="M6 14v-4"></path><path d="M6 10H4"></path><path d="M13 19h-1"></path><path d="M12 14v-1"></path><path d="M12 13h-1"></path><path d="M16 19h-1"></path><path d="M15 7v8"></path><path d="M15 7h-1"></path><path d="M11 10V8a1 1 0 0 1 1-1h1"></path><path d="M18 10h-2"></path><path d="M21 14v1a4 4 0 0 1-4 4"></path><path d="M21 14h-2"></path><path d="M22 8a5 5 0 0 0-5-5"></path><path d="M17 3v2"></path><path d="M11 7h1"></path></svg>
                </div>
                <div>
                  <h4 className="font-medium">Enfermedades Respiratorias</h4>
                  <p className="text-sm text-muted-foreground">Asma, bronquitis, enfisema y otras condiciones pulmonares.</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
                </div>
                <div>
                  <h4 className="font-medium">Problemas Cardiovasculares</h4>
                  <p className="text-sm text-muted-foreground">Mayor riesgo de ataques cardíacos, presión arterial alta e infartos.</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M16 18a4 4 0 0 0-8 0"></path><circle cx="12" cy="10" r="3"></circle><circle cx="12" cy="12" r="10"></circle></svg>
                </div>
                <div>
                  <h4 className="font-medium">Poblaciones Vulnerables</h4>
                  <p className="text-sm text-muted-foreground">Niños, adultos mayores y personas con condiciones preexistentes.</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Button asChild>
                <Link to="/about">Más información sobre salud</Link>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <Card className="col-span-2">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-lg">Índice AQI</h4>
                    <p className="text-sm text-muted-foreground">¿Qué significan los números?</p>
                  </div>
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><path d="M12 17h.01"></path></svg>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <div className="h-3 w-full bg-airquality-good rounded mb-2"></div>
                <p className="text-sm font-medium">0-50</p>
                <p className="text-xs text-muted-foreground">Bueno</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <div className="h-3 w-full bg-airquality-moderate rounded mb-2"></div>
                <p className="text-sm font-medium">51-100</p>
                <p className="text-xs text-muted-foreground">Moderado</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <div className="h-3 w-full bg-airquality-unhealthy rounded mb-2"></div>
                <p className="text-sm font-medium">101-150</p>
                <p className="text-xs text-muted-foreground">No saludable</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <div className="h-3 w-full bg-airquality-veryunhealthy rounded mb-2"></div>
                <p className="text-sm font-medium">151-200+</p>
                <p className="text-xs text-muted-foreground">Peligroso</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
