import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AirQualityMap from "@/components/AirQualityMap";
import InfoSection from "@/components/InfoSection";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
const Index = () => {
  return <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <AirQualityMap />
        <InfoSection />
        
        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Únete a nuestra comunidad</h2>
            <p className="max-w-2xl mx-auto mb-8">
              Conecta con nosotros para recibir actualizaciones sobre la calidad del aire, 
              eventos relacionados y oportunidades para involucrarte en mejorar 
              la calidad del aire en Monterrey.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button variant="outline" size="lg" className="border-white hover:bg-white/20 text-emerald-950">
                Registrarse
              </Button>
              <Button variant="default" size="lg" className="bg-white text-primary hover:bg-white/90">
                Contacto
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>;
};
export default Index;