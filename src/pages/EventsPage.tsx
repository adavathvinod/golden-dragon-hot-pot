import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Users, Calendar, Utensils, Wine, Music, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import interiorImage from "@/assets/restaurant-interior.jpg";

export default function EventsPage() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventDate: "",
    guestCount: "",
    eventType: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Inquiry Submitted",
      description: "Thank you for your interest! Our events team will contact you within 24 hours.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      eventDate: "",
      guestCount: "",
      eventType: "",
      message: "",
    });
  };

  const eventTypes = [
    "Birthday Celebration",
    "Corporate Event",
    "Anniversary",
    "Holiday Party",
    "Business Dinner",
    "Other",
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="relative py-24 bg-card overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={interiorImage}
            alt="Private Dining Room"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-card/80 via-card/90 to-card" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <p className="text-gold tracking-[0.2em] uppercase text-sm mb-4">Private Dining</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
            Host Your Event at 千王府
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Create unforgettable memories with authentic Chongqing hot pot in our elegant private dining spaces.
          </p>
        </div>
      </section>

      {/* Spaces Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-gold tracking-[0.2em] uppercase text-sm mb-4">Our Spaces</p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
              Private Dining Options
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Room 1 */}
            <div className="bg-card p-8 rounded-lg border border-border">
              <div className="w-14 h-14 rounded-full bg-gold/20 flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-gold" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-foreground mb-2">
                The Pearl Room
              </h3>
              <p className="text-gold text-sm mb-4">8-12 Guests</p>
              <p className="text-muted-foreground text-sm mb-6">
                Intimate setting perfect for small gatherings, business dinners, or family celebrations. Features a traditional round table with lazy susan.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-gold" />
                  Private entrance
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-gold" />
                  Dedicated server
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-gold" />
                  AV equipment
                </li>
              </ul>
            </div>

            {/* Room 2 */}
            <div className="bg-card p-8 rounded-lg border-gold-animated">
              <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-foreground mb-2">
                The Dragon Room
              </h3>
              <p className="text-gold text-sm mb-4">15-25 Guests</p>
              <p className="text-muted-foreground text-sm mb-6">
                Our most popular space for medium-sized events. Elegant décor with traditional Chinese elements and modern comfort.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-gold" />
                  Multiple hot pot tables
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-gold" />
                  Presentation screen
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-gold" />
                  Custom menu options
                </li>
              </ul>
              <div className="mt-4 py-2 px-4 bg-gold/10 rounded text-center">
                <span className="text-gold text-sm font-medium">Most Popular</span>
              </div>
            </div>

            {/* Room 3 */}
            <div className="bg-card p-8 rounded-lg border border-border">
              <div className="w-14 h-14 rounded-full bg-gold/20 flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-gold" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-foreground mb-2">
                The Emperor's Hall
              </h3>
              <p className="text-gold text-sm mb-4">30-50 Guests</p>
              <p className="text-muted-foreground text-sm mb-6">
                Grand space for large celebrations and corporate events. Can be divided into smaller sections or opened for one magnificent gathering.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-gold" />
                  Full buyout available
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-gold" />
                  Stage area
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-gold" />
                  Private bar
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-gold tracking-[0.2em] uppercase text-sm mb-4">Amenities</p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
              What's Included
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-background flex items-center justify-center mx-auto mb-4">
                <Utensils className="w-8 h-8 text-gold" />
              </div>
              <h3 className="font-medium text-foreground mb-2">Custom Menus</h3>
              <p className="text-sm text-muted-foreground">Tailored to your preferences and dietary needs</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-background flex items-center justify-center mx-auto mb-4">
                <Wine className="w-8 h-8 text-gold" />
              </div>
              <h3 className="font-medium text-foreground mb-2">Beverage Packages</h3>
              <p className="text-sm text-muted-foreground">Open bar and sake pairing options</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-background flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-gold" />
              </div>
              <h3 className="font-medium text-foreground mb-2">Event Planning</h3>
              <p className="text-sm text-muted-foreground">Dedicated coordinator for your event</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-background flex items-center justify-center mx-auto mb-4">
                <Music className="w-8 h-8 text-gold" />
              </div>
              <h3 className="font-medium text-foreground mb-2">AV Equipment</h3>
              <p className="text-sm text-muted-foreground">Screens, speakers, and microphones</p>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-gold tracking-[0.2em] uppercase text-sm mb-4">Get Started</p>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
                Request Information
              </h2>
              <p className="text-muted-foreground">
                Tell us about your event and we'll create a custom proposal for you.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="bg-card p-8 rounded-lg border border-border space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name *
                  </label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-background border-border"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-background border-border"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Phone *
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="bg-background border-border"
                    placeholder="(415) 555-0000"
                  />
                </div>
                <div>
                  <label htmlFor="eventDate" className="block text-sm font-medium text-foreground mb-2">
                    Preferred Date *
                  </label>
                  <Input
                    id="eventDate"
                    type="date"
                    value={formData.eventDate}
                    onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                    required
                    className="bg-background border-border"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="guestCount" className="block text-sm font-medium text-foreground mb-2">
                    Number of Guests *
                  </label>
                  <Input
                    id="guestCount"
                    type="number"
                    min="8"
                    value={formData.guestCount}
                    onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
                    required
                    className="bg-background border-border"
                    placeholder="Minimum 8 guests"
                  />
                </div>
                <div>
                  <label htmlFor="eventType" className="block text-sm font-medium text-foreground mb-2">
                    Event Type *
                  </label>
                  <select
                    id="eventType"
                    value={formData.eventType}
                    onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                    required
                    className="w-full h-10 px-3 rounded-md bg-background border border-border text-foreground"
                  >
                    <option value="">Select event type</option>
                    {eventTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Additional Details
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-background border-border min-h-[120px]"
                  placeholder="Tell us about your event, any special requests, dietary requirements, etc."
                />
              </div>

              <Button type="submit" variant="gold" size="lg" className="w-full">
                Submit Inquiry
              </Button>

              <p className="text-sm text-muted-foreground text-center">
                Our events team will respond within 24 hours. For immediate assistance, call{" "}
                <a href="tel:+14152178888" className="text-gold hover:underline">
                  (415) 217-8888
                </a>
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
