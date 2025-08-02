
import { ShoppingBag, Shirt, Coffee, Clock, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const Merchandise = () => {
  const handleComingSoon = () => {
    alert("🚀 Coming Soon!\n\nOur exclusive Hauspromo merchandise collection is currently in development. We're designing premium branded items that will help you represent your favorite marketing agency in style!\n\nStay tuned for:\n• Premium T-shirts & Hoodies\n• Branded Tech Accessories\n• Marketing Swag\n• Limited Edition Items\n\nSubscribe to our newsletter to be the first to know when our merch drops!");
  };

  const merchItems = [
    {
      icon: Shirt,
      title: "Premium Apparel",
      description: "High-quality hoodies, t-shirts, and jackets with exclusive Hauspromo designs.",
      price: "Coming Soon"
    },
    {
      icon: Coffee,
      title: "Office Essentials",
      description: "Branded mugs, notebooks, and desk accessories for the modern marketer.",
      price: "Coming Soon"
    },
    {
      icon: ShoppingBag,
      title: "Marketing Swag",
      description: "Professional swag bags, stickers, and promotional materials.",
      price: "Coming Soon"
    }
  ];

  return (
    <section id="merchandise" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-6">
            <Sparkles className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Hauspromo Merchandise</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Represent your favorite marketing agency with our exclusive branded merchandise collection.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {merchItems.map((item, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white border-0 shadow-lg">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-semibold">{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="text-lg font-semibold text-blue-600 mb-4">{item.price}</div>
                <Button 
                  onClick={handleComingSoon}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                >
                  <Clock className="mr-2 h-4 w-4" />
                  Notify Me
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Be the First to Get Hauspromo Merch!</h3>
            <p className="mb-6">Join our exclusive waitlist and get notified when our merchandise collection launches. Plus, get early access and special discounts!</p>
            <Button 
              onClick={handleComingSoon}
              variant="secondary" 
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100"
            >
              <ShoppingBag className="mr-2 h-5 w-5" />
              Join Waitlist
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
