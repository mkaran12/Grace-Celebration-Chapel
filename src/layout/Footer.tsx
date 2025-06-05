import React from 'react';
import { Heart, MapPin, Phone, Mail } from 'lucide-react';
import { NavigationItem } from '../types';

interface FooterProps {
  onNavigate: (section: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const navigationItems: NavigationItem[] = [
    { name: 'Home', path: 'home' },
    { name: 'About', path: 'about' },
    { name: 'Services', path: 'services' },
    { name: 'Ministries', path: 'ministries' },
    { name: 'Resources', path: 'resources' },
    { name: 'Contact', path: 'contact' },
    { name: 'Giving', path: 'giving' }
  ];

  return (
    <footer className="bg-gray-900 text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Grace Celebration Chapel</h3>
                <p className="text-gray-300">Where God Dwells</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed max-w-md">
              Join us as we grow together in faith, serve our community, and experience 
              the transformative love of Christ in our daily lives.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {navigationItems.map((item) => (
                <button
                  key={item.path}
                  onClick={() => onNavigate(item.path)}
                  className="block text-gray-300 hover:text-white transition-colors capitalize"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                <span className="text-sm">Karama, Meru  <span> Kenya </span> </span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <span className="text-sm">+254 712345678</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <span className="text-sm">gracecelebrationchapel@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-300">
            © 2025 Grace Community Church. All rights reserved. Built with love and faith.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;