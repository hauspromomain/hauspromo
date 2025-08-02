
import { Users, Star, Facebook, MessageCircle, Monitor, MapPin, Calendar, ShoppingBag, Smartphone, Tv, Radio, Building2, Megaphone, Target } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const Services = () => {
  const navigate = useNavigate();

  const digitalServices = [
    {
      id: "influencer-campaigns",
      icon: Users,
      title: "Influencer Campaigns",
      description: "Connect with top influencers and content creators to amplify your brand message across platforms.",
      features: ["Influencer Matching", "Campaign Management", "Performance Analytics", "Content Creation"]
    },
    {
      id: "artist-celebrity-onboarding",
      icon: Star,
      title: "Artist & Celebrity Onboarding",
      description: "Leverage celebrity endorsements and artist partnerships to boost brand credibility and reach.",
      features: ["Celebrity Partnerships", "Artist Collaborations", "Brand Ambassadorships", "Event Appearances"]
    },
    {
      id: "facebook-youtube-creator",
      icon: Facebook,
      title: "Facebook/YouTube Creator Marketing",
      description: "Partner with top creators on major platforms to showcase your products to engaged audiences.",
      features: ["Creator Partnerships", "Sponsored Content", "Product Placements", "Live Collaborations"]
    },
    {
      id: "whatsapp-telegram-blasts",
      icon: MessageCircle,
      title: "WhatsApp & Telegram Blasts",
      description: "Direct messaging campaigns to reach customers instantly on their preferred messaging platforms.",
      features: ["Bulk Messaging", "Targeted Audiences", "Rich Media Content", "Analytics Tracking"]
    },
    {
      id: "in-app-website-banner",
      icon: Monitor,
      title: "In-App & Website Banner Ads",
      description: "Strategic banner placements across high-traffic websites and mobile applications.",
      features: ["Display Advertising", "Programmatic Buying", "Retargeting", "Creative Optimization"]
    },
    {
      id: "social-media-app-marketing",
      icon: Smartphone,
      title: "Social Media App Marketing",
      description: "Comprehensive promotion across Instagram, Snapchat, TikTok, and emerging social platforms.",
      features: ["Story Campaigns", "Reel Marketing", "Live Streaming", "AR Filter Campaigns"]
    },
    {
      id: "google-meta-ads",
      icon: Target,
      title: "Google & Meta Ads",
      description: "Professional management of Google Ads, Facebook Ads, and Instagram advertising campaigns.",
      features: ["PPC Management", "Audience Targeting", "A/B Testing", "ROI Optimization"]
    },
    {
      id: "content-marketing",
      icon: Megaphone,
      title: "Content Marketing",
      description: "Strategic content creation and distribution to build brand authority and engage audiences.",
      features: ["Blog Writing", "Video Production", "Infographics", "Social Content"]
    }
  ];

  const offlineServices = [
    {
      id: "public-transport-advertising",
      icon: MapPin,
      title: "Public Transport Advertising",
      description: "Maximize visibility with ads on metros, buses, auto-rickshaws, and transit stations.",
      features: ["Metro Advertising", "Bus Campaigns", "Auto-rickshaw Branding", "Station Displays"]
    },
    {
      id: "hoardings-posters",
      icon: ShoppingBag,
      title: "Hoardings & Posters",
      description: "Eye-catching outdoor advertising that captures attention and drives brand awareness.",
      features: ["Billboard Campaigns", "Street Posters", "Mall Advertising", "Strategic Placement"]
    },
    {
      id: "event-retail-activation",
      icon: Calendar,
      title: "Event & Retail Activation",
      description: "Engage customers directly through experiential marketing and retail partnerships.",
      features: ["Event Marketing", "Retail Partnerships", "Product Sampling", "Brand Activations"]
    },
    {
      id: "print-media-advertising",
      icon: Building2,
      title: "Print Media Advertising",
      description: "Strategic newspaper, magazine, and brochure advertising for targeted reach.",
      features: ["Newspaper Ads", "Magazine Placements", "Brochure Design", "Print Campaigns"]
    },
    {
      id: "radio-audio-marketing",
      icon: Radio,
      title: "Radio & Audio Marketing",
      description: "Reach audiences through radio spots, podcast sponsorships, and audio advertising.",
      features: ["Radio Commercials", "Podcast Ads", "Audio Streaming", "Voice-over Services"]
    },
    {
      id: "television-ott-advertising",
      icon: Tv,
      title: "Television & OTT Advertising",
      description: "Premium video advertising on TV channels and OTT platforms for maximum impact.",
      features: ["TV Commercials", "OTT Platform Ads", "Video Production", "Prime Time Slots"]
    }
  ];

  const handleLearnMore = (serviceId: string) => {
    navigate(`/service/${serviceId}`);
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Marketing Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive digital and offline marketing solutions designed to maximize your brand's reach and impact across every channel.
          </p>
        </div>

        {/* Digital Marketing Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            Digital Marketing
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {digitalServices.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-white to-blue-50 border-0 shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg font-semibold">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600 text-sm">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-xs text-gray-600">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full border-blue-600 text-blue-600 hover:bg-blue-50"
                    onClick={() => handleLearnMore(service.id)}
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Offline Marketing Section */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
            Offline Marketing
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offlineServices.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-white to-purple-50 border-0 shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    variant="outline" 
                    className="w-full border-purple-600 text-purple-600 hover:bg-purple-50"
                    onClick={() => handleLearnMore(service.id)}
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
