
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, CheckCircle, Star, Users, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

// Service data with detailed information
const serviceData = {
  "influencer-campaigns": {
    title: "Influencer Campaigns",
    description: "Connect with top influencers and content creators to amplify your brand message across platforms.",
    includes: [
      "Comprehensive influencer research and vetting",
      "Campaign strategy development",
      "Content brief creation and approval process",
      "Real-time campaign monitoring",
      "Performance analytics and reporting",
      "Influencer relationship management"
    ],
    caseStudies: [
      {
        client: "Fashion Brand X",
        result: "300% increase in brand awareness",
        details: "Partnered with 50+ micro-influencers to launch new collection, resulting in 2M+ impressions and 15% sales boost."
      },
      {
        client: "Tech Startup Y",
        result: "500K app downloads in 30 days",
        details: "Collaborated with tech reviewers and lifestyle influencers to showcase app features, driving massive user acquisition."
      }
    ],
    usp: [
      "Access to 10,000+ verified influencers",
      "AI-powered matching algorithm",
      "Transparent pricing with no hidden fees",
      "24/7 campaign support"
    ],
    pricing: "Starting from $2,500/month for micro-influencer campaigns",
    testimonials: [
      {
        name: "Sarah Johnson",
        company: "Beauty Brand Co.",
        text: "Their influencer network is incredible. We saw immediate results and our ROI was 400%."
      }
    ]
  },
  "artist-celebrity-onboarding": {
    title: "Artist & Celebrity Onboarding",
    description: "Leverage celebrity endorsements and artist partnerships to boost brand credibility and reach.",
    includes: [
      "Celebrity talent scouting and negotiation",
      "Contract management and legal support",
      "Brand alignment consultation",
      "Event coordination for appearances",
      "Content creation supervision",
      "PR and media management"
    ],
    caseStudies: [
      {
        client: "Luxury Watch Brand",
        result: "50% increase in premium sales",
        details: "Secured A-list celebrity endorsement that elevated brand status and attracted high-end customers."
      }
    ],
    usp: [
      "Direct relationships with top talent agencies",
      "15+ years industry experience",
      "Full-service contract negotiation",
      "Crisis management support"
    ],
    pricing: "Custom quotes based on celebrity tier - Starting from $50,000",
    testimonials: [
      {
        name: "Michael Chen",
        company: "Luxury Brands Inc.",
        text: "They made the impossible possible. Working with A-list celebrities has never been easier."
      }
    ]
  },
  "facebook-youtube-creator": {
    title: "Facebook/YouTube Creator Marketing",
    description: "Partner with top creators on major platforms to showcase your products to engaged audiences.",
    includes: [
      "Creator discovery and outreach",
      "Content collaboration planning",
      "Video production support",
      "Multi-platform campaign coordination",
      "Performance tracking and optimization",
      "Creator relationship management"
    ],
    caseStudies: [
      {
        client: "Gaming Company Z",
        result: "10M+ video views in first week",
        details: "Collaborated with top gaming YouTubers for product launch, achieving viral status and record sales."
      }
    ],
    usp: [
      "Partnership with top 1% creators",
      "Advanced analytics dashboard",
      "Creative production support",
      "Cross-platform optimization"
    ],
    pricing: "Starting from $5,000/month for creator partnerships",
    testimonials: [
      {
        name: "Lisa Park",
        company: "Gaming Plus",
        text: "The creators they connected us with were perfect for our brand. Amazing results!"
      }
    ]
  },
  "whatsapp-telegram-blasts": {
    title: "WhatsApp & Telegram Blasts",
    description: "Direct messaging campaigns to reach customers instantly on their preferred messaging platforms.",
    includes: [
      "Message template design and approval",
      "Audience segmentation and targeting",
      "Automated campaign scheduling",
      "Compliance with platform policies",
      "Real-time delivery tracking",
      "Response management system"
    ],
    caseStudies: [
      {
        client: "E-commerce Store",
        result: "25% conversion rate on campaigns",
        details: "Implemented targeted messaging strategy that drove immediate sales with personalized offers."
      }
    ],
    usp: [
      "99% message delivery rate",
      "GDPR compliant messaging",
      "Advanced personalization features",
      "24/7 support team"
    ],
    pricing: "Starting from $500/month for up to 10,000 messages",
    testimonials: [
      {
        name: "David Rodriguez",
        company: "Online Retail Co.",
        text: "Direct messaging transformed our customer engagement. Incredible conversion rates!"
      }
    ]
  },
  // Add more services as needed...
};

export default function ServiceDetail() {
  const { serviceId } = useParams<{ serviceId: string }>();
  const navigate = useNavigate();
  
  const service = serviceId ? serviceData[serviceId as keyof typeof serviceData] : null;

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Service Not Found</h1>
          <Button onClick={() => navigate("/")}>Go Back Home</Button>
        </div>
      </div>
    );
  }

  const scrollToContact = () => {
    navigate("/");
    setTimeout(() => {
      const element = document.getElementById("contact");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-20 pb-16 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Button 
            variant="ghost" 
            onClick={() => navigate("/")}
            className="mb-8 text-gray-600 hover:text-gray-800"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Services
          </Button>

          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">{service.title}</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{service.description}</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              {/* What's Included */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">What's Included</CardTitle>
                  <CardDescription>Comprehensive service features</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {service.includes.map((item, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Case Studies */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Success Stories</CardTitle>
                  <CardDescription>Real results from our clients</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {service.caseStudies.map((study, index) => (
                      <div key={index} className="border-l-4 border-blue-500 pl-6">
                        <h4 className="font-semibold text-lg">{study.client}</h4>
                        <p className="text-blue-600 font-medium mb-2">{study.result}</p>
                        <p className="text-gray-600">{study.details}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Testimonials */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">What Clients Say</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {service.testimonials.map((testimonial, index) => (
                      <div key={index} className="bg-gray-50 p-6 rounded-lg">
                        <Quote className="h-8 w-8 text-blue-500 mb-4" />
                        <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                        <div className="flex items-center space-x-2">
                          <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="h-4 w-4 fill-current" />
                            ))}
                          </div>
                          <span className="font-semibold">{testimonial.name}</span>
                          <span className="text-gray-500">- {testimonial.company}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Why Choose Us */}
              <Card>
                <CardHeader>
                  <CardTitle>Why Choose Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {service.usp.map((point, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700 text-sm">{point}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Pricing */}
              <Card>
                <CardHeader>
                  <CardTitle>Investment</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">{service.pricing}</p>
                  <Button onClick={scrollToContact} className="w-full bg-blue-600 hover:bg-blue-700">
                    Get Custom Quote
                  </Button>
                </CardContent>
              </Card>

              {/* CTA */}
              <Card className="bg-gradient-to-br from-blue-600 to-purple-600 text-white">
                <CardContent className="p-6 text-center">
                  <Users className="h-12 w-12 mx-auto mb-4 text-white" />
                  <h3 className="text-xl font-bold mb-2">Ready to Get Started?</h3>
                  <p className="mb-4 opacity-90">Let's discuss your project and create a winning strategy.</p>
                  <div className="space-y-2">
                    <Button 
                      onClick={scrollToContact}
                      variant="secondary" 
                      className="w-full bg-white text-blue-600 hover:bg-gray-100"
                    >
                      Book Consultation
                    </Button>
                    <Button 
                      onClick={scrollToContact}
                      variant="outline" 
                      className="w-full border-white text-white hover:bg-white/10"
                    >
                      Talk to Expert
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
