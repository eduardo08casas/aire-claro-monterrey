
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

// Sample air quality data
const sampleData = [
  { id: 1, name: "San Pedro", aqi: 42, lat: 25.6583, lng: -100.4034, color: "#4ade80" },
  { id: 2, name: "Centro", aqi: 67, lat: 25.6714, lng: -100.3094, color: "#facc15" },
  { id: 3, name: "Guadalupe", aqi: 85, lat: 25.6775, lng: -100.2597, color: "#f97316" },
  { id: 4, name: "Santa Catarina", aqi: 58, lat: 25.6831, lng: -100.4583, color: "#facc15" },
  { id: 5, name: "San Nicolás", aqi: 75, lat: 25.7333, lng: -100.2833, color: "#facc15" }
];

const getAQICategory = (aqi: number) => {
  if (aqi <= 50) return { category: "Bueno", color: "text-airquality-good", description: "La calidad del aire es satisfactoria." };
  if (aqi <= 100) return { category: "Moderado", color: "text-airquality-moderate", description: "La calidad del aire es aceptable." };
  if (aqi <= 150) return { category: "No saludable para grupos sensibles", color: "text-airquality-unhealthy", description: "Personas sensibles pueden experimentar efectos." };
  if (aqi <= 200) return { category: "No saludable", color: "text-airquality-unhealthy", description: "Todos pueden experimentar efectos en la salud." };
  return { category: "Muy no saludable", color: "text-airquality-veryunhealthy", description: "Alerta sanitaria: todos pueden presentar efectos graves de salud." };
};

const AirQualityMap = () => {
  const [selectedLocation, setSelectedLocation] = useState<number | null>(null);

  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">Calidad del Aire en Tiempo Real</h2>
          <p className="text-muted-foreground">
            Explora la calidad del aire de Monterrey en nuestro mapa interactivo. 
            Selecciona una ubicación para ver detalles específicos.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Mapa de Sensores de Calidad del Aire</CardTitle>
                <CardDescription>
                  Selecciona un punto para ver más información
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="map-container relative h-[400px] w-full bg-[#e5f7ff]">
                  {/* This would be an actual map in a real implementation */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-muted-foreground italic">
                      Aquí se integraría el mapa con la API de PurpleAir
                    </p>
                  </div>

                  {/* Sample dots representing air quality sensors */}
                  {sampleData.map(location => (
                    <button
                      key={location.id}
                      className={`air-quality-dot absolute h-4 w-4 rounded-full cursor-pointer transform -translate-x-1/2 -translate-y-1/2 transition-all hover:scale-150 ${selectedLocation === location.id ? 'scale-150 ring-2 ring-white' : ''}`}
                      style={{
                        backgroundColor: location.color,
                        top: `${((25.75 - location.lat) * 1000) + 50}%`,
                        left: `${((-100.35 - location.lng) * -500) + 50}%`,
                      }}
                      onClick={() => setSelectedLocation(location.id)}
                      aria-label={`Ver datos de ${location.name}`}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Detalles de la Calidad del Aire</CardTitle>
                <CardDescription>
                  {selectedLocation 
                    ? `${sampleData.find(l => l.id === selectedLocation)?.name}, Monterrey`
                    : "Selecciona una ubicación en el mapa"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {selectedLocation ? (
                  <>
                    {(() => {
                      const location = sampleData.find(l => l.id === selectedLocation);
                      const { category, color, description } = getAQICategory(location?.aqi || 0);
                      return (
                        <div className="space-y-6">
                          <div className="text-center">
                            <div className="inline-flex items-center justify-center h-24 w-24 rounded-full bg-white shadow-sm border mb-3">
                              <span className={`text-4xl font-bold ${color}`}>{location?.aqi}</span>
                            </div>
                            <h3 className={`text-xl font-semibold ${color}`}>{category}</h3>
                            <p className="text-sm text-muted-foreground mt-1">{description}</p>
                          </div>
                          
                          <div className="space-y-3">
                            <div className="flex justify-between items-center">
                              <span className="text-sm">PM2.5</span>
                              <span className="font-medium">{Math.round(location?.aqi || 0 * 0.42)} μg/m³</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-sm">PM10</span>
                              <span className="font-medium">{Math.round(location?.aqi || 0 * 1.2)} μg/m³</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-sm">Actualizado</span>
                              <span className="text-sm text-muted-foreground">Hace 5 minutos</span>
                            </div>
                          </div>
                          
                          <button className="w-full bg-primary text-white py-2 rounded-md hover:bg-primary/90 transition-colors">
                            Ver datos históricos
                          </button>
                        </div>
                      );
                    })()}
                  </>
                ) : (
                  <div className="h-full flex flex-col items-center justify-center text-center p-6">
                    <div className="mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted-foreground opacity-40"><circle cx="12" cy="12" r="10"></circle><path d="m15 9-6 6"></path><path d="m9 9 6 6"></path></svg>
                    </div>
                    <p className="text-muted-foreground">Selecciona un punto en el mapa para ver información detallada sobre la calidad del aire en esa ubicación.</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AirQualityMap;
