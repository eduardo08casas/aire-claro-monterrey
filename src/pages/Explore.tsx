
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const locations = [
  { value: "monterrey", label: "Monterrey" },
  { value: "sannicolas", label: "San Nicolás" },
  { value: "guadalupe", label: "Guadalupe" },
  { value: "sanpedro", label: "San Pedro" },
  { value: "apodaca", label: "Apodaca" },
  { value: "escobedo", label: "Escobedo" },
  { value: "santacatarina", label: "Santa Catarina" },
];

const Explore = () => {
  // State for filters
  const [dateFrom, setDateFrom] = useState<Date>();
  const [dateTo, setDateTo] = useState<Date>();
  const [location, setLocation] = useState<string>();
  
  // Handle download action
  const handleDownload = () => {
    console.log("Downloading data with filters:", { dateFrom, dateTo, location });
    // In a real app, this would call an API endpoint to generate and download a file
    alert("Descargando datos con filtros seleccionados");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Header Banner */}
        <section className="bg-gradient-to-r from-primary to-secondary text-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Explorar Datos</h1>
            <p className="text-lg opacity-90">
              Filtra y descarga información sobre la calidad del aire según tus necesidades
            </p>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-8 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Filtros</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Date From Filter */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">Fecha desde</label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left",
                          !dateFrom && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {dateFrom ? format(dateFrom, "PP") : "Seleccionar fecha"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={dateFrom}
                        onSelect={setDateFrom}
                        initialFocus
                        className="pointer-events-auto"
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                
                {/* Date To Filter */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">Fecha hasta</label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left",
                          !dateTo && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {dateTo ? format(dateTo, "PP") : "Seleccionar fecha"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={dateTo}
                        onSelect={setDateTo}
                        initialFocus
                        className="pointer-events-auto"
                        disabled={(date) => dateFrom ? date < dateFrom : false}
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                
                {/* Location Filter */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">Ubicación</label>
                  <Select onValueChange={setLocation}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona una ciudad" />
                    </SelectTrigger>
                    <SelectContent>
                      {locations.map((loc) => (
                        <SelectItem key={loc.value} value={loc.value}>
                          {loc.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                {/* Download Button */}
                <div className="flex items-end">
                  <Button 
                    className="w-full" 
                    onClick={handleDownload}
                    disabled={!dateFrom || !dateTo || !location}
                  >
                    Descargar Datos
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Results Preview Section */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6">Vista previa de datos</h2>
            
            {(!dateFrom || !dateTo || !location) ? (
              <div className="bg-muted p-12 rounded-lg text-center">
                <p className="text-muted-foreground">
                  Selecciona todos los filtros para ver una vista previa de los datos
                </p>
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-4 border-b bg-muted/30">
                  <h3 className="font-medium">Resultados para {locations.find(loc => loc.value === location)?.label}</h3>
                  <p className="text-sm text-muted-foreground">
                    Periodo: {format(dateFrom, "PP")} - {format(dateTo, "PP")}
                  </p>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-muted/30">
                        <th className="px-4 py-3 text-left text-sm font-medium">Fecha</th>
                        <th className="px-4 py-3 text-left text-sm font-medium">Ubicación</th>
                        <th className="px-4 py-3 text-left text-sm font-medium">PM2.5</th>
                        <th className="px-4 py-3 text-left text-sm font-medium">PM10</th>
                        <th className="px-4 py-3 text-left text-sm font-medium">Ozono</th>
                        <th className="px-4 py-3 text-left text-sm font-medium">NO2</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[...Array(5)].map((_, i) => (
                        <tr key={i} className="border-t">
                          <td className="px-4 py-3 text-sm">
                            {format(new Date(dateFrom.getTime() + i * 24 * 60 * 60 * 1000), "dd/MM/yyyy")}
                          </td>
                          <td className="px-4 py-3 text-sm">
                            {locations.find(loc => loc.value === location)?.label}
                          </td>
                          <td className="px-4 py-3 text-sm">{Math.floor(Math.random() * 50) + 10} µg/m³</td>
                          <td className="px-4 py-3 text-sm">{Math.floor(Math.random() * 80) + 20} µg/m³</td>
                          <td className="px-4 py-3 text-sm">{Math.floor(Math.random() * 60) + 20} ppb</td>
                          <td className="px-4 py-3 text-sm">{Math.floor(Math.random() * 40) + 10} ppb</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Explore;
