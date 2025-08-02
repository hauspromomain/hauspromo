import { Mail, Phone, MessageCircle, User, Shield, Clock, Zap, Play, Code2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const TechSupport = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-6">
            <Zap className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Algorithm Breaking Tech Support</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet our tech algorithm guru who will help you break through digital barriers and maximize your brand's reach across all platforms.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Team Lead Section */}
          <div className="order-2 lg:order-1">
            <Card className="bg-gradient-to-br from-white to-blue-50 border-0 shadow-xl">
              <CardHeader className="text-center">
                <div className="w-40 h-40 mx-auto mb-6 relative">
                  <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                    {/* Placeholder for actual photo */}
                    <div className="w-full h-full bg-gradient-to-br from-blue-600 to-purple-700 flex items-center justify-center">
                      <User className="h-20 w-20 text-white" />
                    </div>
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-green-500 rounded-full border-4 border-white flex items-center justify-center shadow-lg">
                    <Code2 className="w-6 h-6 text-white" />
                  </div>
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">Mudit Soni</CardTitle>
                <p className="text-blue-600 font-semibold">Tech Algorithm Guru</p>
                <p className="text-gray-500 text-sm">Available 24/7 • Algorithm Breaker</p>
              </CardHeader>
              <CardContent className="text-center">
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Personal Message from Mudit</h4>
                  <p className="text-gray-600 italic">
                    "I've cracked the code on social media algorithms and digital marketing systems. My mission is to help your brand break through the noise and achieve viral success. With cutting-edge techniques and insider knowledge, I'll ensure your content reaches the right audience at the right time. Let's hack the algorithm together and make your brand unstoppable!"
                  </p>
                </div>

                {/* Video Section */}
                <div className="relative bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl p-1 mb-6">
                  <div className="bg-gray-900 rounded-lg aspect-video flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 to-purple-900/50"></div>
                    <Button 
                      size="lg" 
                      className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-white/30 relative z-10"
                    >
                      <Play className="mr-2 h-6 w-6" />
                      Watch Algorithm Secrets
                    </Button>
                    <div className="absolute bottom-4 left-4 text-white text-sm">
                      How to Break Social Media Algorithms
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-center space-x-4">
                    <Button className="bg-gradient-to-r from-blue-600 to-purple-600">
                      <Mail className="mr-2 h-4 w-4" />
                      mudit@hauspromo.com
                    </Button>
                  </div>
                  <div className="flex items-center justify-center space-x-4">
                    <Button variant="outline" className="border-green-500 text-green-600 hover:bg-green-50">
                      <MessageCircle className="mr-2 h-4 w-4" />
                      WhatsApp: +91-XXXXXXXXXX
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Support Features */}
          <div className="order-1 lg:order-2 space-y-6">
            <div className="grid gap-6">
              <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl flex items-center justify-center mr-4">
                      <Zap className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Algorithm Breaking Techniques</h4>
                      <p className="text-gray-600">Advanced strategies to bypass social media algorithms and boost organic reach exponentially.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mr-4">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">24/7 Technical Support</h4>
                      <p className="text-gray-600">Round-the-clock monitoring and support for all your campaigns and technical needs.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mr-4">
                      <Shield className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Platform Security & Compliance</h4>
                      <p className="text-gray-600">Advanced security measures while staying compliant with all platform guidelines and policies.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 text-white">
              <h4 className="text-xl font-semibold mb-3">Ready to Break the Algorithm?</h4>
              <p className="mb-4">Let Mudit show you the insider secrets to dominating social media algorithms and achieving viral success for your brand.</p>
              <Button variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                <Zap className="mr-2 h-4 w-4" />
                Start Algorithm Breakthrough
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
