import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronDown, Flame, Award, MapPin, Star, Clock } from "lucide-react";
import heroImage from "@/assets/hero-hotpot.jpg";
import wagyuImage from "@/assets/wagyu-beef.jpg";
import interiorImage from "@/assets/restaurant-interior.jpg";

function useIntersectionObserver() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
            entry.target.classList.remove("opacity-0", "translate-y-8");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = ref.current?.querySelectorAll(".reveal");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return ref;
}

export default function HomePage() {
  const sectionRef = useIntersectionObserver();

  return (
    <div ref={sectionRef}>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Authentic Chongqing Hot Pot"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/60 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center pt-20">
          <div className="max-w-4xl mx-auto">
            <p className="text-gold tracking-[0.3em] uppercase text-sm md:text-base mb-6 animate-fade-in">
              San Francisco's Premier
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-chinese font-bold mb-4 animate-fade-in">
              <span className="text-gold-gradient">千王府</span>
            </h1>
            <p className="text-2xl md:text-3xl font-serif text-foreground/90 mb-6 animate-fade-in-delay-1">
              Qian Wang Fu
            </p>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in-delay-2">
              Authentic Chongqing 9-Grid Beef Tallow Hot Pot & Premium US Wagyu
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-3">
              <Button variant="hero" size="xl" asChild>
                <a href="https://www.opentable.com" target="_blank" rel="noopener noreferrer">
                  Reserve a Table
                </a>
              </Button>
              <Button variant="heroFilled" size="xl" asChild>
                <a href="https://order.toasttab.com" target="_blank" rel="noopener noreferrer">
                  Order Online
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <ChevronDown className="w-8 h-8 text-gold" />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-card pattern-overlay">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {/* Feature 1 */}
            <div className="reveal opacity-0 translate-y-8 text-center p-8 border-gold-animated rounded-lg transition-all duration-500 hover:shadow-elegant">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/20 flex items-center justify-center">
                <Flame className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-foreground mb-4">
                Authentic 9-Grid
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Traditional Chongqing-style hot pot with nine compartments, each simmering at the perfect temperature for different ingredients.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="reveal opacity-0 translate-y-8 text-center p-8 border-gold-animated rounded-lg transition-all duration-500 hover:shadow-elegant" style={{ transitionDelay: "0.1s" }}>
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gold/20 flex items-center justify-center">
                <Award className="w-8 h-8 text-gold" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-foreground mb-4">
                Premium Wagyu
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Hand-selected US Wagyu beef, expertly sliced for the perfect hot pot experience. Marble score A5 available.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="reveal opacity-0 translate-y-8 text-center p-8 border-gold-animated rounded-lg transition-all duration-500 hover:shadow-elegant" style={{ transitionDelay: "0.2s" }}>
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/20 flex items-center justify-center">
                <Star className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-foreground mb-4">
                Beef Tallow Broth
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Traditional beef tallow base with 30+ spices and chilies, simmered for hours to create an unforgettable flavor profile.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="reveal opacity-0 translate-y-8 order-2 lg:order-1">
              <p className="text-gold tracking-[0.2em] uppercase text-sm mb-4">Our Story</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
                San Francisco's First Authentic Chongqing Experience
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Nestled in the heart of San Francisco, 千王府 brings the bold, fiery flavors of Chongqing to the Bay Area. Our commitment to authenticity means every ingredient, every spice, and every technique stays true to centuries-old traditions.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                From our specially-imported Sichuan peppercorns to our house-made chili oil, we craft an experience that transports you to the bustling streets of Chongqing.
              </p>
              <Button variant="hero" asChild>
                <Link to="/about">Discover Our Story</Link>
              </Button>
            </div>
            <div className="reveal opacity-0 translate-y-8 order-1 lg:order-2">
              <div className="relative">
                <img
                  src={interiorImage}
                  alt="千王府 Restaurant Interior"
                  className="rounded-lg shadow-elegant w-full"
                />
                <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-lg shadow-elegant border border-gold/20">
                  <p className="text-gold font-chinese text-2xl">传统滋味</p>
                  <p className="text-sm text-muted-foreground mt-1">Traditional Flavors</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wagyu Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="reveal opacity-0 translate-y-8">
              <div className="relative">
                <img
                  src={wagyuImage}
                  alt="Premium US Wagyu Beef"
                  className="rounded-lg shadow-elegant w-full"
                />
                <div className="absolute -bottom-6 -right-6 bg-primary p-6 rounded-lg shadow-elegant">
                  <p className="text-primary-foreground font-serif text-lg font-semibold">Premium Selection</p>
                  <p className="text-sm text-primary-foreground/80 mt-1">A5 Wagyu Available</p>
                </div>
              </div>
            </div>
            <div className="reveal opacity-0 translate-y-8">
              <p className="text-gold tracking-[0.2em] uppercase text-sm mb-4">Premium Ingredients</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
                The Finest Wagyu for the Perfect Hot Pot
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our menu features hand-selected cuts of premium US Wagyu beef, known for its exceptional marbling and rich flavor. Each slice is carefully prepared to ensure the perfect thickness for hot pot cooking.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-foreground">
                  <div className="w-2 h-2 rounded-full bg-gold" />
                  <span>Hand-selected premium cuts</span>
                </li>
                <li className="flex items-center gap-3 text-foreground">
                  <div className="w-2 h-2 rounded-full bg-gold" />
                  <span>Expertly sliced for optimal texture</span>
                </li>
                <li className="flex items-center gap-3 text-foreground">
                  <div className="w-2 h-2 rounded-full bg-gold" />
                  <span>A5 Japanese Wagyu available</span>
                </li>
              </ul>
              <Button variant="hero" asChild>
                <Link to="/menu">View Full Menu</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Location Preview */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-gold tracking-[0.2em] uppercase text-sm mb-4">Visit Us</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
              Find Us in San Francisco
            </h2>
          </div>

          <div className="reveal opacity-0 translate-y-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Address */}
            <div className="bg-card p-8 rounded-lg border border-border text-center">
              <MapPin className="w-10 h-10 text-gold mx-auto mb-4" />
              <h3 className="text-lg font-serif font-semibold text-foreground mb-2">Location</h3>
              <p className="text-muted-foreground">
                123 Grant Avenue<br />
                San Francisco, CA 94108
              </p>
            </div>

            {/* Hours */}
            <div className="bg-card p-8 rounded-lg border border-border text-center">
              <Clock className="w-10 h-10 text-gold mx-auto mb-4" />
              <h3 className="text-lg font-serif font-semibold text-foreground mb-2">Hours</h3>
              <p className="text-muted-foreground">
                Mon-Thu: 11:30 AM - 10:00 PM<br />
                Fri-Sun: 11:30 AM - 11:00 PM
              </p>
            </div>

            {/* Reservations */}
            <div className="bg-card p-8 rounded-lg border border-border text-center">
              <Flame className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-serif font-semibold text-foreground mb-2">Reservations</h3>
              <p className="text-muted-foreground mb-4">
                Call us or book online
              </p>
              <a href="tel:+14152178888" className="text-gold hover:underline">
                (415) 217-8888
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="reveal opacity-0 translate-y-8 mt-12 rounded-lg overflow-hidden shadow-elegant">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0977832825584!2d-122.40641908440866!3d37.78835397975763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c5e5c9d55%3A0x8f5b5e5b5e5b5e5b!2sGrant%20Ave%2C%20San%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1635789000000!5m2!1sen!2sus"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="千王府 Location"
              className="grayscale contrast-125 opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-b from-card to-background relative overflow-hidden">
        <div className="absolute inset-0 pattern-overlay" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-chinese font-bold mb-6">
            <span className="text-gold-gradient">体验正宗重庆火锅</span>
          </h2>
          <p className="text-xl md:text-2xl font-serif text-foreground mb-4">
            Experience Authentic Chongqing Hot Pot
          </p>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-10">
            Join us for an unforgettable dining experience. Whether you're a hot pot enthusiast or trying it for the first time, our team is here to guide you through the journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="gold" size="xl" asChild>
              <a href="https://www.opentable.com" target="_blank" rel="noopener noreferrer">
                Make a Reservation
              </a>
            </Button>
            <Button variant="hero" size="xl" asChild>
              <a href="https://order.toasttab.com" target="_blank" rel="noopener noreferrer">
                Order for Pickup
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
