
import { Target, Users, Award, Lightbulb, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

export const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">About Hauspromo</h2>
            <p className="text-lg text-gray-600 mb-8">
              Founded with a vision to revolutionize brand promotion across all channels, Hauspromo has evolved into a full-service marketing powerhouse that bridges the gap between digital innovation and traditional advertising impact.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              We believe that successful marketing isn't just about being online or offline—it's about creating a cohesive brand experience that resonates with your audience wherever they are. From tech startups to established enterprises, we craft campaigns that drive real results.
            </p>
            
            {/* Founder Message Section */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-white/20 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Message from Our Founder</h3>
              <p className="text-gray-600 italic mb-4">
                "At Hauspromo, we don't just promote brands – we build movements. Every campaign we create is designed to not just reach your audience, but to inspire them, engage them, and turn them into lifelong advocates for your brand."
              </p>
              <p className="text-sm text-gray-500">- Founder, Hauspromo</p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Target className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Our Mission</h4>
                  <p className="text-gray-600 text-sm">To maximize every client's potential through innovative, data-driven marketing strategies across all channels.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Lightbulb className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Our Vision</h4>
                  <p className="text-gray-600 text-sm">To be the world's leading agency that seamlessly integrates digital innovation with traditional marketing impact.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            {/* Video Section */}
            <div className="relative bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-1 shadow-2xl">
              <div className="bg-gray-900 rounded-xl aspect-video flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 to-purple-900/50"></div>
                <Button 
                  size="lg" 
                  className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-white/30 relative z-10"
                >
                  <Play className="mr-2 h-6 w-6" />
                  Watch Our Story
                </Button>
                <div className="absolute bottom-4 left-4 text-white text-sm">
                  About Hauspromo - Our Journey
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-white/20 shadow-lg">
                <Users className="h-8 w-8 text-blue-600 mb-4" />
                <h4 className="font-semibold text-gray-900 mb-2">Expert Team</h4>
                <p className="text-gray-600 text-sm">Seasoned professionals with diverse backgrounds in digital and traditional marketing.</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-white/20 shadow-lg">
                <Award className="h-8 w-8 text-purple-600 mb-4" />
                <h4 className="font-semibold text-gray-900 mb-2">Proven Results</h4>
                <p className="text-gray-600 text-sm">Track record of delivering measurable growth for businesses across all industries.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
