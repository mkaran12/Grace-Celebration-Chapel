import React, { useState, useTransition } from 'react';
import { Heart } from 'lucide-react';
import { NavigationItem } from '../types';

interface NavigationProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeSection, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  const [showAboutDropdown, setShowAboutDropdown] = useState(false);

  const navigationItems: NavigationItem[] = [
    { name: 'Home', path: 'home' },
    {
      name: 'About',
      path: 'about',
      subItems: [
        { name: 'Who We Are', path: 'who-we-are' },
        { name: 'Church Branches', path: 'branches' },
        { name: 'Office Locations', path: 'locations' },
        { name: 'Tigania Prayer Movement', path: 'tigania-prayer' },
        { name: 'Great Grace Chapel', path: 'grace-chapel' }
      ]
    },
    { name: 'Services', path: 'services' },
    { name: 'Ministries', path: 'ministries' },
    { name: 'Resources', path: 'resources' },
    {
      name: 'Contact',
      path: 'contact',
      subItems: [
        { name: 'Contact Info', path: 'contact-info' },
        { name: 'Prayer Request', path: 'prayer-request' },
        { name: 'Share Testimony', path: 'testimony' }
      ]
    },
    { name: 'Giving', path: 'giving' }
  ];

  const handleNavigation = (path: string) => {
    startTransition(() => {
      onNavigate(path);
      setIsOpen(false);
      setShowAboutDropdown(false);
    });
  };

  return (
    <nav className="bg-white/95 backdrop-blur-sm shadow-lg fixed w-full top-0 z-50 font-['Montserrat']">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                GCC
              </h1>
              <p className="text-sm text-gray-600">Grace Community Church</p>
            </div>
          </div>
          
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.path} className="relative group">
                <button
                  onClick={() => handleNavigation(item.path)}
                  onMouseEnter={() => item.subItems && setShowAboutDropdown(true)}
                  onMouseLeave={() => item.subItems && setShowAboutDropdown(false)}
                  className={`capitalize px-4 py-2 rounded-full transition-all duration-300 font-semibold ${
                    activeSection === item.path
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                  } ${isPending ? 'opacity-50' : ''}`}
                >
                  {item.name}
                </button>
                
                {item.subItems && (
                  <div
                    className={`absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl py-2 transition-all duration-300 ${
                      showAboutDropdown ? 'opacity-100 visible' : 'opacity-0 invisible'
                    }`}
                    onMouseEnter={() => setShowAboutDropdown(true)}
                    onMouseLeave={() => setShowAboutDropdown(false)}
                  >
                    {item.subItems.map((subItem) => (
                      <button
                        key={subItem.path}
                        onClick={() => handleNavigation(subItem.path)}
                        className="w-full text-left px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                      >
                        {subItem.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button 
              className="p-2 rounded-lg text-gray-700 hover:bg-gray-100"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white shadow-lg py-4 px-6 animate-fade-down">
          <div className="space-y-2">
            {navigationItems.map((item) => (
              <div key={item.path}>
                <button
                  onClick={() => handleNavigation(item.path)}
                  className={`block w-full text-left py-3 px-4 rounded-lg transition-all duration-300 ${
                    activeSection === item.path
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                      : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                  }`}
                >
                  {item.name}
                </button>
                {item.subItems && (
                  <div className="pl-4 mt-2 space-y-2">
                    {item.subItems.map((subItem) => (
                      <button
                        key={subItem.path}
                        onClick={() => handleNavigation(subItem.path)}
                        className="block w-full text-left py-2 px-4 text-gray-600 hover:text-blue-600 transition-colors"
                      >
                        {subItem.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;