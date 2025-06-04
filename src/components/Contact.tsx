import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="py-20 px-6 space-y-20">
      <section className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We'd love to hear from you. Reach out with any questions or just to say hello.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div className="flex items-start">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Visit Us</h3>
                <p className="text-gray-600">123 Faith Street<br />Grace City, GC 12345</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Call Us</h3>
                <p className="text-gray-600">(555) 123-4567</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Email Us</h3>
                <p className="text-gray-600">info@gracecommunity.org</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Office Hours</h3>
              <div className="space-y-2 text-gray-600">
                <p>Monday - Thursday: 9:00 AM - 5:00 PM</p>
                <p>Friday: 9:00 AM - 3:00 PM</p>
                <p>Saturday: By Appointment</p>
                <p>Sunday: Before and After Services</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border border-blue-100">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h3>
            <form className="space-y-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300" 
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300" 
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Subject</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300" 
                  placeholder="What is this regarding?"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Message</label>
                <textarea 
                  rows={5} 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-md"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;