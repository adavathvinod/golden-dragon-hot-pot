import { Link } from "react-router-dom";
import { Facebook, Instagram, Phone, MapPin, Clock } from "lucide-react";

const footerLinks = [
  { name: "Menu", href: "/menu" },
  { name: "Our Story", href: "/about" },
  { name: "Location", href: "/location" },
  { name: "Private Events", href: "/events" },
];

const socialLinks = [
  { name: "Instagram", icon: Instagram, href: "https://instagram.com" },
  { name: "Facebook", icon: Facebook, href: "https://facebook.com" },
];

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <h3 className="text-3xl font-chinese font-bold text-gold-gradient">千王府</h3>
              <p className="text-sm font-serif text-muted-foreground tracking-widest uppercase mt-1">
                Qian Wang Fu
              </p>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              San Francisco's premier destination for authentic Chongqing 9-Grid Hot Pot and premium US Wagyu.
            </p>
            <div className="flex gap-4 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-gold transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-serif font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-gold transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-serif font-semibold text-foreground mb-4">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+14152178888"
                  className="flex items-start gap-3 text-muted-foreground hover:text-gold transition-colors"
                >
                  <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">(415) 217-8888</span>
                </a>
              </li>
              <li>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-muted-foreground hover:text-gold transition-colors"
                >
                  <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">
                    123 Grant Avenue<br />
                    San Francisco, CA 94108
                  </span>
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-lg font-serif font-semibold text-foreground mb-4">Hours</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-muted-foreground">
                <Clock className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  <p className="font-medium text-foreground">Monday - Thursday</p>
                  <p>11:30 AM - 10:00 PM</p>
                </div>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground pl-8">
                <div className="text-sm">
                  <p className="font-medium text-foreground">Friday - Sunday</p>
                  <p>11:30 AM - 11:00 PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} 千王府 Qian Wang Fu. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
