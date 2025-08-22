import React from "react";
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { Container } from "@/components/container";
import { MainRoutes } from "@/lib/helpers";

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  hoverColor: string;
  label: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon, hoverColor, label }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-all duration-200 group ${hoverColor}`}
      aria-label={label}
    >
      <div className="text-gray-300 group-hover:text-white transition-colors duration-200">
        {icon}
      </div>
    </a>
  );
};

interface FooterLinkProps {
  to: string;
  children: React.ReactNode;
}

const FooterLink: React.FC<FooterLinkProps> = ({ to, children }) => {
  return (
    <li>
      <Link
        to={to}
        className="text-gray-400 hover:text-white transition-colors duration-200 py-2 block"
      >
        {children}
      </Link>
    </li>
  );
};

export const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-br from-gray-900 via-gray-800 to-black text-gray-300">
      <Container>
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">AI Mock Interview</h3>
                <p className="text-gray-400 leading-relaxed">
                  Empowering developers to ace technical interviews with AI-powered practice sessions, 
                  personalized feedback, and comprehensive skill development.
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-400">
                  <MapPin className="w-5 h-5 text-blue-400" />
                  <span>123 AI Street, Tech City, 12345</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                  <Phone className="w-5 h-5 text-blue-400" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                  <Mail className="w-5 h-5 text-blue-400" />
                  <span>hello@aimockinterview.com</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {MainRoutes.map((route) => (
                  <FooterLink key={route.href} to={route.href}>
                    {route.label}
                  </FooterLink>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">Services</h3>
              <ul className="space-y-3">
                <FooterLink to="/generate">Mock Interviews</FooterLink>
                <FooterLink to="/generate/create">Create Interview</FooterLink>
                <FooterLink to="/generate/feedback">Performance Analytics</FooterLink>
                <FooterLink to="/generate/dashboard">Interview Dashboard</FooterLink>
              </ul>
            </div>

            {/* Social Media & Newsletter */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">Connect With Us</h3>
              <p className="text-gray-400 mb-6">
                Follow us for the latest updates, tips, and success stories from our community.
              </p>
              
              <div className="flex gap-3 mb-6">
                <SocialLink
                  href="https://facebook.com"
                  icon={<Facebook size={20} />}
                  hoverColor="hover:bg-blue-600"
                  label="Facebook"
                />
                <SocialLink
                  href="https://twitter.com"
                  icon={<Twitter size={20} />}
                  hoverColor="hover:bg-blue-400"
                  label="Twitter"
                />
                <SocialLink
                  href="https://instagram.com"
                  icon={<Instagram size={20} />}
                  hoverColor="hover:bg-pink-600"
                  label="Instagram"
                />
                <SocialLink
                  href="https://linkedin.com"
                  icon={<Linkedin size={20} />}
                  hoverColor="hover:bg-blue-700"
                  label="LinkedIn"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 AI Mock Interview. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-white transition-colors duration-200">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-gray-400 hover:text-white transition-colors duration-200">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};
