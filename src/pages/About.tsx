import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
const About = () => {
  return <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Banner Section */}
        <section className="relative bg-gradient-to-r from-primary to-secondary text-white py-20">
          <div className="container mx-auto px-4 z-10 relative">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Aire Abierta</h1>
            <p className="text-xl max-w-2xl">
              Monitoreando la calidad del aire en Monterrey para un futuro más saludable
            </p>
          </div>
          <div className="absolute inset-0 bg-slate-900/30 z-0"></div>
        </section>

        {/* Main Content */}
        <section className="py-12 md:py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Nuestra Misión</h2>
              <p className="text-lg mb-6">Facilitar el acceso abierto a datos de calidad del aire en Monterrey, integrando distintas fuentes confiables en una sola plataforma interactiva y accesible para toda la comunidad</p>
              
              <h2 className="text-3xl font-bold mb-6 mt-12">¿Quiénes Somos?</h2>
              <p className="text-lg mb-6">Somos una iniciativa comprometida con fomentar una ciudadanía más informada y una toma de decisiones basada en datos. Promovemos la transparencia ambiental y la corresponsabilidad entre la sociedad civil, el sector público y el sector privado, trabajando juntos por un futuro más sostenible y justo.</p>
              
              <h2 className="text-3xl font-bold mb-6 mt-12">Nuestros Valores</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                <div className="bg-muted p-6 rounded-lg">
                  <h3 className="font-bold text-xl mb-2">Accesibilidad</h3>
                  <p>Democratizamos los datos para que estén al alcance de todos.</p>
                </div>
                <div className="bg-muted p-6 rounded-lg">
                  <h3 className="font-bold text-xl mb-2">Transparencia</h3>
                  <p>Mostramos la información tal como es, sin filtros.</p>
                </div>
                <div className="bg-muted p-6 rounded-lg">
                  <h3 className="font-bold text-xl mb-2">Comunidad</h3>
                  <p>Invitamos a estudiantes, investigadores y ciudadanos a construir juntos.</p>
                </div>
                <div className="bg-muted p-6 rounded-lg">
                  <h3 className="font-bold text-xl mb-2">Compromiso Social</h3>
                  <p>Creemos que un aire limpio es un derecho, no un privilegio. la educación sobre la calidad del aire y su impacto en la salud.</p>
                </div>
              </div>
              
              <div className="mt-12 text-center">
                <Button asChild size="lg" className="mr-4">
                  <Link to="/dashboard">Ver Datos en Tiempo Real</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/contact">Contactar con Nosotros</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>;
};
export default About;