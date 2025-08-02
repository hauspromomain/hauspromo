
import { motion } from "framer-motion";
import { Mail, Phone, Instagram, MessageCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

export const Contact = () => {
  // Contact links
  const emailLink = "mailto:info@hauspromo.com";
  const whatsappLink = "https://wa.me/1234567890";
  const instagramLink = "https://www.instagram.com/hauspromo/";
  const phoneLink = "tel:+1234567890";

  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-gradient-to-b from-secondary to-background">
      {/* Decorative elements */}
      <div className="absolute top-40 left-20 w-64 h-64 rounded-full bg-accent/20 blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-primary/10 blur-3xl"></div>
      <div className="absolute top-60 right-1/4 w-40 h-40 rounded-full bg-accent-coral/20 blur-3xl"></div>
      
      {/* Elegant flourish */}
      <div className="absolute top-24 left-1/2 transform -translate-x-1/2 opacity-20">
        <svg width="200" height="30" viewBox="0 0 200 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 15C40 5 80 25 100 15C120 5 160 25 200 15" stroke="currentColor" strokeWidth="2" className="text-accent"/>
          <path d="M0 15C40 25 80 5 100 15C120 25 160 5 200 15" stroke="currentColor" strokeWidth="2" className="text-accent"/>
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium tracking-wider">GET IN TOUCH</span>
          <h2 className="text-4xl md:text-5xl font-heading font-light mt-2 mb-4 text-foreground">Begin Your Marketing Journey</h2>
          <div className="h-0.5 w-24 bg-accent mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Let's connect and explore how we can take your brand viral. Whether you're planning a campaign 
            or seeking digital marketing guidance, we're here to illuminate your path to success.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-primary/10 rounded-2xl -rotate-3 transform"></div>
              <div className="absolute inset-0 bg-accent/20 rounded-2xl rotate-3 transform"></div>
              <div className="rounded-2xl overflow-hidden relative z-10 shadow-3xl">
                <div className="w-full h-[500px] bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <div className="text-center text-white p-8">
                    <div className="text-8xl mb-6 animate-bounce">🚀</div>
                    <h3 className="text-4xl font-black mb-4">Ready to Go</h3>
                    <h3 className="text-4xl font-black text-accent mb-4">VIRAL?</h3>
                    <p className="text-white/90 text-lg">Let's make your brand the next big thing</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent flex flex-col justify-end p-8">
                  <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20">
                    <h3 className="text-2xl font-heading text-white mb-2">Let's Create Magic Together</h3>
                    <p className="text-white/90">Guided by data, crafted with creativity</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Right Contact Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-6"
          >
            <h3 className="text-2xl font-heading text-foreground mb-6">Reach Out Through Digital Channels</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Email Card */}
              <motion.div variants={itemVariants}>
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <Card className="overflow-hidden bg-card/70 backdrop-blur-lg border-border hover:shadow-3xl hover:-translate-y-1 transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent/20 to-accent/40 flex items-center justify-center mb-4 shadow-md">
                          <Mail className="text-accent" size={22} />
                        </div>
                        <h3 className="font-heading text-xl mb-2 text-card-foreground">Email</h3>
                        <p className="text-muted-foreground text-sm mb-4">Send us a message anytime</p>
                        <a 
                          href={emailLink}
                          className="inline-flex items-center text-primary font-medium text-sm hover:text-primary/80 transition-colors"
                        >
                          <span>Connect</span>
                          <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </a>
                      </CardContent>
                    </Card>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-80 bg-card/90 backdrop-blur-md border-border">
                    <div className="flex flex-col space-y-2">
                      <p className="text-sm text-card-foreground">info@hauspromo.com</p>
                      <p className="text-xs text-muted-foreground">We typically respond within 24 hours</p>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              </motion.div>

              {/* WhatsApp Card */}
              <motion.div variants={itemVariants}>
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <Card className="overflow-hidden bg-card/70 backdrop-blur-lg border-border hover:shadow-3xl hover:-translate-y-1 transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500/20 to-green-500/40 flex items-center justify-center mb-4 shadow-md">
                          <MessageCircle className="text-green-600" size={22} />
                        </div>
                        <h3 className="font-heading text-xl mb-2 text-card-foreground">WhatsApp</h3>
                        <p className="text-muted-foreground text-sm mb-4">Chat with us directly</p>
                        <a 
                          href={whatsappLink}
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-green-600 font-medium text-sm hover:text-green-700 transition-colors"
                        >
                          <span>Connect</span>
                          <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </a>
                      </CardContent>
                    </Card>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-80 bg-card/90 backdrop-blur-md border-border">
                    <div className="flex flex-col space-y-2">
                      <p className="text-sm text-card-foreground">+1 (555) 123-4567</p>
                      <p className="text-xs text-muted-foreground">Available 9am-6pm EST weekdays</p>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              </motion.div>

              {/* Instagram Card */}
              <motion.div variants={itemVariants}>
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <Card className="overflow-hidden bg-card/70 backdrop-blur-lg border-border hover:shadow-3xl hover:-translate-y-1 transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent-coral/20 to-accent-coral/40 flex items-center justify-center mb-4 shadow-md">
                          <Instagram className="text-accent-coral" size={22} />
                        </div>
                        <h3 className="font-heading text-xl mb-2 text-card-foreground">Instagram</h3>
                        <p className="text-muted-foreground text-sm mb-4">Follow our marketing journey</p>
                        <a 
                          href={instagramLink}
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-accent-coral font-medium text-sm hover:text-accent-coral/80 transition-colors"
                        >
                          <span>Connect</span>
                          <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </a>
                      </CardContent>
                    </Card>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-80 bg-card/90 backdrop-blur-md border-border">
                    <div className="flex flex-col space-y-2">
                      <p className="text-sm text-card-foreground">@hauspromo</p>
                      <p className="text-xs text-muted-foreground">Daily marketing tips and campaign highlights</p>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              </motion.div>

              {/* Phone Card */}
              <motion.div variants={itemVariants}>
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <Card className="overflow-hidden bg-card/70 backdrop-blur-lg border-border hover:shadow-3xl hover:-translate-y-1 transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center mb-4 shadow-md">
                          <Phone className="text-primary" size={22} />
                        </div>
                        <h3 className="font-heading text-xl mb-2 text-card-foreground">Phone</h3>
                        <p className="text-muted-foreground text-sm mb-4">Schedule a personal call</p>
                        <a 
                          href={phoneLink}
                          className="inline-flex items-center text-primary font-medium text-sm hover:text-primary/80 transition-colors"
                        >
                          <span>Connect</span>
                          <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </a>
                      </CardContent>
                    </Card>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-80 bg-card/90 backdrop-blur-md border-border">
                    <div className="flex flex-col space-y-2">
                      <p className="text-sm text-card-foreground">+1 (555) 123-4567</p>
                      <p className="text-xs text-muted-foreground">Book a call between 10am-4pm EST</p>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              </motion.div>
            </div>

            <motion.div 
              variants={itemVariants}
              className="p-6 bg-card/40 backdrop-blur-sm rounded-2xl border border-border/30 mt-8"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-1 h-10 bg-gradient-to-b from-accent to-accent/50"></div>
                <h3 className="font-heading text-xl text-card-foreground">Our Promise</h3>
              </div>
              <p className="text-muted-foreground italic">
                "We believe in connections guided by data and creativity. Reach out to us for a consultation, and let 
                innovation weave its magic into your marketing strategy."
              </p>
              <div className="mt-4 text-right text-primary font-heading">— Hauspromo Team</div>
            </motion.div>
          </motion.div>
        </div>

        {/* Elegant flourish bottom */}
        <div className="mt-16 flex justify-center opacity-20">
          <svg width="200" height="30" viewBox="0 0 200 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 15C40 5 80 25 100 15C120 5 160 25 200 15" stroke="currentColor" strokeWidth="2" className="text-accent"/>
            <path d="M0 15C40 25 80 5 100 15C120 25 160 5 200 15" stroke="currentColor" strokeWidth="2" className="text-accent"/>
          </svg>
        </div>
      </div>
    </section>
  );
};
