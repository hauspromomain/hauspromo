
import { Plane, GraduationCap, Briefcase, Users, CheckCircle, Star, Phone, Mail, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const VisaConsultation = () => {
  const visaTypes = [
    {
      icon: Briefcase,
      title: "Work Visa",
      description: "Professional guidance for employment-based visa applications across multiple countries.",
      features: ["Job offer assistance", "Document preparation", "Interview coaching", "Follow-up support"],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: GraduationCap,
      title: "Student Visa",
      description: "Complete support for educational visa applications and university admissions.",
      features: ["University selection", "Application assistance", "Financial documentation", "Visa interview prep"],
      color: "from-green-500 to-green-600"
    },
    {
      icon: Plane,
      title: "Tourist Visa",
      description: "Hassle-free tourist visa processing for leisure and business travel.",
      features: ["Quick processing", "Document checklist", "Itinerary planning", "Travel insurance guidance"],
      color: "from-purple-500 to-purple-600"
    }
  ];

  const countries = [
    "United States", "Canada", "United Kingdom", "Australia", "Germany", 
    "France", "Netherlands", "Sweden", "Norway", "New Zealand"
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      type: "Student Visa - Canada",
      rating: 5,
      text: "Hauspromo made my dream of studying in Canada a reality. Their guidance was invaluable!"
    },
    {
      name: "Rahul Patel",
      type: "Work Visa - Germany",
      rating: 5,
      text: "Professional service and excellent support throughout my work visa process."
    },
    {
      name: "Anjali Singh",
      type: "Tourist Visa - USA",
      rating: 5,
      text: "Quick and efficient processing. Got my visa approved without any hassle!"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Visa Consultation Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Your trusted partner for work, student, and tourist visa applications. 
            We make your international dreams come true with expert guidance and personalized support.
          </p>
          <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
            <Phone className="mr-2 h-5 w-5" />
            Book Free Consultation
          </Button>
        </div>
      </section>

      {/* Visa Types Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Visa Services</h2>
            <p className="text-xl text-gray-600">Comprehensive visa consultation for all your travel needs</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {visaTypes.map((visa, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <CardHeader className="text-center">
                  <div className={`w-16 h-16 bg-gradient-to-r ${visa.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                    <visa.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-semibold">{visa.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6">{visa.description}</p>
                  <ul className="space-y-2">
                    {visa.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6" variant="outline">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Countries Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Countries We Serve</h2>
            <p className="text-xl text-gray-600">Visa assistance for top global destinations</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {countries.map((country, index) => (
              <div key={index} className="bg-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-shadow">
                <span className="font-medium text-gray-700">{country}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600">Hear from our satisfied clients</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-blue-600">{testimonial.type}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get expert guidance for your visa application. Our experienced consultants are here to help you every step of the way.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
              <p className="text-blue-100">+91-XXXXXXXXXX</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
              <p className="text-blue-100">visa@hauspromo.com</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
              <p className="text-blue-100">Delhi, India</p>
            </div>
          </div>
          
          <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
            <Users className="mr-2 h-5 w-5" />
            Schedule Consultation
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default VisaConsultation;
