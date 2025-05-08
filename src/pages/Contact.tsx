
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "sonner";
import { User, Phone, Mail, MessageSquare, Send } from "lucide-react";

// Define the form schema with validation rules
const formSchema = z.object({
  objective: z.enum(["sensor", "collaborate", "donate"], {
    required_error: "Por favor seleccione un objetivo",
  }),
  name: z.string().min(2, { message: "El nombre debe tener al menos 2 caracteres" }),
  email: z.string().email({ message: "Por favor ingrese un email válido" }),
  phone: z.string().min(10, { message: "Por favor ingrese un número de teléfono válido" }),
  message: z.string().min(10, { message: "El mensaje debe tener al menos 10 caracteres" }),
});

type FormValues = z.infer<typeof formSchema>;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize the form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      objective: undefined,
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  // Handle form submission
  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    console.log(data);
    
    // Simulate API call with timeout
    setTimeout(() => {
      toast.success("¡Gracias por contactarnos! Te responderemos pronto.", {
        description: "Hemos recibido tu mensaje correctamente.",
      });
      form.reset();
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Banner Section */}
        <section className="relative bg-gradient-to-r from-primary to-secondary text-white py-20">
          <div className="container mx-auto px-4 z-10 relative">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contacto</h1>
            <p className="text-xl max-w-2xl">
              Estamos aquí para responder a tus preguntas y escuchar tus inquietudes
            </p>
          </div>
          <div className="absolute inset-0 bg-slate-900/30 z-0"></div>
        </section>

        {/* Contact Form Section */}
        <section className="py-12 md:py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="bg-card shadow-md rounded-lg p-6 md:p-8">
                <h2 className="text-2xl font-bold mb-6">Formulario de Contacto</h2>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    {/* Objective Selection */}
                    <FormField
                      control={form.control}
                      name="objective"
                      render={({ field }) => (
                        <FormItem className="space-y-3">
                          <FormLabel>¿Cuál es tu objetivo?</FormLabel>
                          <FormControl>
                            <RadioGroup
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              className="flex flex-col space-y-1"
                            >
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value="sensor" />
                                </FormControl>
                                <FormLabel className="font-normal">
                                  Quiero mi sensor
                                </FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value="collaborate" />
                                </FormControl>
                                <FormLabel className="font-normal">
                                  Quiero colaborar
                                </FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value="donate" />
                                </FormControl>
                                <FormLabel className="font-normal">
                                  Quiero aportar económicamente
                                </FormLabel>
                              </FormItem>
                            </RadioGroup>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Name Field */}
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nombre</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <User className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                              <Input className="pl-10" placeholder="Tu nombre completo" {...field} />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Email Field */}
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Correo electrónico</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                              <Input className="pl-10" placeholder="tu@email.com" type="email" {...field} />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Phone Field */}
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Teléfono</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                              <Input className="pl-10" placeholder="Tu número telefónico" {...field} />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Message Field */}
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Mensaje</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <MessageSquare className="absolute left-3 top-3 text-muted-foreground" />
                              <Textarea 
                                placeholder="Escribe tu mensaje aquí..." 
                                className="min-h-[120px] pl-10"
                                {...field}
                              />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? (
                        "Enviando..."
                      ) : (
                        <>
                          Enviar mensaje <Send className="ml-2" />
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              </div>

              {/* Contact Information */}
              <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-card shadow-sm rounded-lg p-6">
                  <h3 className="font-bold text-xl mb-4">Información de contacto</h3>
                  <div className="space-y-3">
                    <p className="flex items-center gap-2">
                      <Mail className="text-primary" />
                      <span>info@aireclaro.mx</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <Phone className="text-primary" />
                      <span>+52 (81) 1234 5678</span>
                    </p>
                  </div>
                </div>
                <div className="bg-card shadow-sm rounded-lg p-6">
                  <h3 className="font-bold text-xl mb-4">Síguenos</h3>
                  <p className="mb-4">Mantente informado sobre la calidad del aire en Monterrey a través de nuestras redes sociales.</p>
                  <div className="flex space-x-4">
                    <a href="#" className="text-primary hover:text-primary/80 transition-colors">Facebook</a>
                    <a href="#" className="text-primary hover:text-primary/80 transition-colors">Twitter</a>
                    <a href="#" className="text-primary hover:text-primary/80 transition-colors">Instagram</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
