
import { Star, Play, MessageSquare } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export const Testimonials = () => {
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Solutions",
      image: "SJ",
      rating: 5,
      text: "Hauspromo transformed our online presence completely. Our YouTube channel grew by 300% in just 6 months, and our overall brand visibility increased dramatically.",
      type: "video",
      videoThumbnail: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=300&fit=crop&crop=face",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      name: "Michael Chen",
      company: "Urban Fashion Co.",
      image: "MC",
      rating: 5,
      text: "The Instagram marketing strategy they developed for us was phenomenal. We went from 5K to 50K followers, and more importantly, our sales increased by 250%.",
      type: "chat",
      chatImage: "https://images.unsplash.com/photo-1611262588024-d12430b98920?w=400&h=300&fit=crop"
    },
    {
      name: "Lisa Rodriguez",
      company: "Local Restaurant Chain",
      image: "LR",
      rating: 5,
      text: "Their offline advertising campaigns were brilliant. The transit ads and banners brought so much foot traffic to our locations. Highly recommended!",
      type: "video",
      videoThumbnail: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop&crop=face",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      name: "David Park",
      company: "E-learning Platform",
      image: "DP",
      rating: 5,
      text: "Hauspromo's integrated approach across all platforms gave us the comprehensive marketing strategy we needed. Results exceeded our expectations.",
      type: "chat",
      chatImage: "https://images.unsplash.com/photo-1611605698335-8b1569810432?w=400&h=300&fit=crop"
    },
    {
      name: "Emma Thompson",
      company: "Fitness Studio",
      image: "ET",
      rating: 5,
      text: "The social media app promotion campaigns helped us reach our local community effectively. Our class bookings increased by 400% in 3 months.",
      type: "video",
      videoThumbnail: "https://images.unsplash.com/photo-1594736797933-d0d4e2255d86?w=400&h=300&fit=crop&crop=face",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      name: "Alex Kumar",
      company: "B2B Software",
      image: "AK",
      rating: 5,
      text: "Professional, results-driven, and always responsive. Hauspromo understands both digital and traditional marketing like no other agency I've worked with.",
      type: "chat",
      chatImage: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop"
    }
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">What Our Clients Say</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. See what businesses just like yours have achieved with Hauspromo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card hover:shadow-3xl transition-all duration-300 overflow-hidden">
              <CardContent className="p-0">
                {/* Media Section */}
                <div className="relative h-48 bg-muted">
                  {testimonial.type === "video" ? (
                    <div className="relative w-full h-full">
                      {playingVideo === index ? (
                        <iframe
                          src={testimonial.videoUrl}
                          className="w-full h-full"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      ) : (
                        <>
                          <img
                            src={testimonial.videoThumbnail}
                            alt={`${testimonial.name} video testimonial`}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                            <Button
                              size="lg"
                              onClick={() => setPlayingVideo(index)}
                              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full p-4"
                            >
                              <Play className="w-6 h-6 ml-1" fill="currentColor" />
                            </Button>
                          </div>
                        </>
                      )}
                    </div>
                  ) : (
                    <div className="relative w-full h-full">
                      <img
                        src={testimonial.chatImage}
                        alt={`Chat conversation with ${testimonial.name}`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-3 right-3 bg-accent-coral text-white p-2 rounded-full">
                        <MessageSquare className="w-4 h-4" />
                      </div>
                    </div>
                  )}
                </div>

                {/* Content Section */}
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 italic text-sm leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold mr-3 text-sm">
                      {testimonial.image}
                    </div>
                    <div>
                      <div className="font-semibold text-card-foreground text-sm">{testimonial.name}</div>
                      <div className="text-muted-foreground text-xs">{testimonial.company}</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
