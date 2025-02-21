
import { useEffect, useRef } from "react";
import { GraduationCap, Book, Users, Globe } from "lucide-react";

const Features = [
  {
    icon: <Book className="w-6 h-6" />,
    title: "Rich Learning Content",
    description: "Access comprehensive educational materials designed for success.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Collaborative Learning",
    description: "Connect with peers and experts in your field of study.",
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Global Reach",
    description: "Learn from anywhere, anytime with our flexible platform.",
  },
];

const Index = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".animate-on-scroll").forEach((element) => {
      observerRef.current?.observe(element);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-blue/5 to-transparent" />
        <div className="container max-w-6xl mx-auto text-center z-10">
          <div className="animate-fade-in mb-6 inline-block">
            <div className="flex items-center justify-center space-x-3">
              <GraduationCap className="w-12 h-12 text-brand-blue" />
              <h1 className="font-display text-4xl md:text-6xl font-bold text-gray-900">
                EduHub
              </h1>
            </div>
          </div>
          <p className="animate-fade-in-up text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto mt-6">
            Empowering minds through connected learning experiences
          </p>
          <button className="animate-fade-in-up mt-8 px-8 py-3 bg-brand-blue text-white rounded-full font-medium transition-all hover:bg-brand-blue/90 hover:scale-105">
            Get Started
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="container max-w-6xl mx-auto">
          <h2 className="animate-on-scroll text-3xl md:text-4xl font-display font-bold text-center text-gray-900 mb-16">
            Why Choose EduHub?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {Features.map((feature, index) => (
              <div
                key={index}
                className="animate-on-scroll glass-card p-8 rounded-xl"
              >
                <div className="bg-brand-blue/10 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-display font-semibold mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4">
        <div className="container max-w-6xl mx-auto text-center">
          <div className="animate-on-scroll max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
              Ready to Transform Your Learning Journey?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join thousands of learners already benefiting from our platform
            </p>
            <button className="px-8 py-3 bg-brand-orange text-white rounded-full font-medium transition-all hover:bg-brand-orange/90 hover:scale-105">
              Join Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
