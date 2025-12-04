import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Clock, Car, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function LocationPage() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "Thank you for your message. We'll get back to you soon!",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen pt-24">
      {/* Header */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gold tracking-[0.2em] uppercase text-sm mb-4">Visit Us</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-4">
            Location & Hours
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Find us in the heart of San Francisco. We look forward to welcoming you.
          </p>
        </div>
      </section>

      {/* Info Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {/* Address */}
            <div className="bg-card p-8 rounded-lg border border-border text-center">
              <MapPin className="w-10 h-10 text-gold mx-auto mb-4" />
              <h3 className="text-lg font-serif font-semibold text-foreground mb-3">Address</h3>
              <p className="text-muted-foreground">
                123 Grant Avenue<br />
                San Francisco, CA 94108
              </p>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-gold hover:underline text-sm"
              >
                Get Directions →
              </a>
            </div>

            {/* Hours */}
            <div className="bg-card p-8 rounded-lg border border-border text-center">
              <Clock className="w-10 h-10 text-gold mx-auto mb-4" />
              <h3 className="text-lg font-serif font-semibold text-foreground mb-3">Hours</h3>
              <div className="text-muted-foreground text-sm space-y-2">
                <p><span className="text-foreground">Mon-Thu:</span> 11:30 AM - 10:00 PM</p>
                <p><span className="text-foreground">Fri-Sat:</span> 11:30 AM - 11:00 PM</p>
                <p><span className="text-foreground">Sunday:</span> 11:30 AM - 10:30 PM</p>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-card p-8 rounded-lg border border-border text-center">
              <Phone className="w-10 h-10 text-gold mx-auto mb-4" />
              <h3 className="text-lg font-serif font-semibold text-foreground mb-3">Reservations</h3>
              <a
                href="tel:+14152178888"
                className="text-muted-foreground hover:text-gold transition-colors"
              >
                (415) 217-8888
              </a>
              <p className="text-sm text-muted-foreground mt-2">
                Or book online via OpenTable
              </p>
              <Button variant="hero" size="sm" className="mt-4" asChild>
                <a href="https://www.opentable.com" target="_blank" rel="noopener noreferrer">
                  Book Now
                </a>
              </Button>
            </div>

            {/* Parking */}
            <div className="bg-card p-8 rounded-lg border border-border text-center">
              <Car className="w-10 h-10 text-gold mx-auto mb-4" />
              <h3 className="text-lg font-serif font-semibold text-foreground mb-3">Parking</h3>
              <p className="text-muted-foreground text-sm">
                Validated parking available at Portsmouth Square Garage (733 Kearny St)
              </p>
              <p className="text-xs text-muted-foreground mt-2">
                2 hours with $50+ purchase
              </p>
            </div>
          </div>

          {/* Map */}
          <div className="rounded-lg overflow-hidden shadow-elegant">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0977832825584!2d-122.40641908440866!3d37.78835397975763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c5e5c9d55%3A0x8f5b5e5b5e5b5e5b!2sGrant%20Ave%2C%20San%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1635789000000!5m2!1sen!2sus"
              width="100%"
              height="450"
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

      {/* Contact Form */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <Mail className="w-12 h-12 text-gold mx-auto mb-4" />
              <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
                Contact Us
              </h2>
              <p className="text-muted-foreground">
                Have a question, special request, or dietary requirements? We're here to help.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
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
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                  Phone
                </label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="bg-background border-border"
                  placeholder="(415) 555-0000"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message *
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="bg-background border-border min-h-[150px]"
                  placeholder="How can we help you?"
                />
              </div>
              <Button type="submit" variant="heroFilled" size="lg" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-card p-8 rounded-lg border border-border">
              <h3 className="text-xl font-serif font-semibold text-foreground mb-4">
                Accessibility
              </h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>• Wheelchair accessible entrance</li>
                <li>• Accessible restrooms</li>
                <li>• Service animals welcome</li>
                <li>• High chairs available</li>
              </ul>
            </div>
            <div className="bg-card p-8 rounded-lg border border-border">
              <h3 className="text-xl font-serif font-semibold text-foreground mb-4">
                Good to Know
              </h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>• Walk-ins welcome, reservations recommended</li>
                <li>• Vegetarian and gluten-free options available</li>
                <li>• Private dining rooms for groups of 8+</li>
                <li>• Full bar with sake and cocktail menu</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
