import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import interiorImage from "@/assets/restaurant-interior.jpg";

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="relative py-24 bg-card overflow-hidden">
        <div className="absolute inset-0 pattern-overlay" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gold tracking-[0.2em] uppercase text-sm mb-4">Our Story</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
              A Taste of Authentic Chongqing
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Where centuries-old tradition meets San Francisco's culinary excellence
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <img
                src={interiorImage}
                alt="千王府 Restaurant Interior"
                className="rounded-lg shadow-elegant w-full"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
                San Francisco's First Authentic 9-Grid Hot Pot
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Founded in 2019, 千王府 (Qian Wang Fu) was born from a simple vision: to bring the true, unadulterated flavors of Chongqing hot pot to San Francisco. Our founders, having grown up in the bustling streets of Chongqing, understood that authentic hot pot is more than just a meal—it's a celebration of community, tradition, and bold flavors.
                </p>
                <p>
                  The name "千王府" translates to "Palace of a Thousand Kings," reflecting our belief that every guest who walks through our doors deserves a royal dining experience. Our traditional 9-grid hot pot, a hallmark of Chongqing cuisine, allows diners to cook different ingredients at varying temperatures simultaneously—a technique perfected over generations.
                </p>
                <p>
                  What sets us apart is our unwavering commitment to authenticity. Our beef tallow broth is made using a secret family recipe passed down through three generations, featuring over 30 hand-selected spices including Sichuan peppercorns imported directly from the Hanyuan region—the only place where the most numbing, aromatic peppercorns grow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-gold tracking-[0.2em] uppercase text-sm mb-4">Our Philosophy</p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
              传统滋味，匠心独运
            </h2>
            <p className="text-lg text-muted-foreground">
              Traditional Flavors, Crafted with Heart
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pillar 1 */}
            <div className="text-center p-8">
              <div className="text-5xl font-chinese text-gold mb-4">真</div>
              <h3 className="text-xl font-serif font-semibold text-foreground mb-4">Authenticity</h3>
              <p className="text-muted-foreground">
                Every ingredient, every technique, every flavor profile stays true to the traditions of Chongqing. We never compromise on authenticity.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="text-center p-8">
              <div className="text-5xl font-chinese text-gold mb-4">质</div>
              <h3 className="text-xl font-serif font-semibold text-foreground mb-4">Quality</h3>
              <p className="text-muted-foreground">
                From A5 Wagyu to hand-selected Sichuan peppercorns, we source only the finest ingredients from trusted purveyors around the world.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="text-center p-8">
              <div className="text-5xl font-chinese text-gold mb-4">情</div>
              <h3 className="text-xl font-serif font-semibold text-foreground mb-4">Warmth</h3>
              <p className="text-muted-foreground">
                Hot pot is meant to be shared. We create a welcoming atmosphere where families and friends gather to create lasting memories.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Chef Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1">
              <p className="text-gold tracking-[0.2em] uppercase text-sm mb-4">The Team</p>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
                Crafted by Masters
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Our kitchen is led by Chef Zhang Wei, a native of Chongqing with over 25 years of experience in traditional Sichuan cuisine. Chef Zhang spent a decade perfecting the art of hot pot at some of Chongqing's most celebrated restaurants before bringing his expertise to San Francisco.
                </p>
                <p>
                  Every morning, Chef Zhang personally oversees the preparation of our signature beef tallow broth, ensuring each pot delivers the perfect balance of spice, numbing sensation, and depth of flavor that has made Chongqing hot pot legendary.
                </p>
                <p>
                  "Hot pot is not just about heat," Chef Zhang explains. "It's about layers—the fragrance of the oil, the complexity of the spices, the way each ingredient transforms in the broth. Every element must be in harmony."
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="bg-card p-8 rounded-lg border-gold-animated">
                <blockquote className="text-xl font-serif italic text-foreground mb-4">
                  "The secret to great hot pot is patience—in sourcing ingredients, in preparing the broth, in respecting tradition."
                </blockquote>
                <p className="text-gold font-semibold">— Chef Zhang Wei</p>
                <p className="text-sm text-muted-foreground">Executive Chef</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-gold tracking-[0.2em] uppercase text-sm mb-4">Our Journey</p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
              Milestones
            </h2>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="space-y-8">
              {[
                { year: "2019", event: "千王府 opens its doors in San Francisco's Chinatown" },
                { year: "2020", event: "Recognized by SF Chronicle as 'Best New Chinese Restaurant'" },
                { year: "2021", event: "Introduced premium A5 Wagyu program" },
                { year: "2022", event: "Expanded with private dining rooms for events" },
                { year: "2023", event: "Featured in Michelin Guide California" },
                { year: "2024", event: "Celebrating 5 years of serving authentic Chongqing flavors" },
              ].map((milestone, index) => (
                <div key={milestone.year} className="flex gap-6 items-start">
                  <div className="text-2xl font-serif font-bold text-gold min-w-[80px]">
                    {milestone.year}
                  </div>
                  <div className="flex-1 pt-1">
                    <div className="w-3 h-3 rounded-full bg-primary mb-2" />
                    <p className="text-foreground">{milestone.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
            Experience Our Story Firsthand
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Join us for an unforgettable journey through the authentic flavors of Chongqing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="heroFilled" size="lg" asChild>
              <a href="https://www.opentable.com" target="_blank" rel="noopener noreferrer">
                Reserve a Table
              </a>
            </Button>
            <Button variant="hero" size="lg" asChild>
              <Link to="/menu">View Our Menu</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
