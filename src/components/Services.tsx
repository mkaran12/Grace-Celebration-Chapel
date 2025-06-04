import React from 'react';
import { Clock, Users, Music } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <div className="py-20 px-6 space-y-20">
      <section className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">Worship Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join us for inspiring worship, meaningful fellowship, and life-changing messages.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl shadow-md transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Sunday Services</h2>
            <div className="space-y-6">
              <div className="flex items-center">
                <Clock className="w-6 h-6 text-blue-600 mr-4" />
                <div>
                  <h3 className="font-semibold text-gray-800">Morning Worship</h3>
                  <p className="text-gray-600">10:00 AM - 11:30 AM</p>
                </div>
              </div>
              <div className="flex items-center">
                <Users className="w-6 h-6 text-blue-600 mr-4" />
                <div>
                  <h3 className="font-semibold text-gray-800">Children's Church</h3>
                  <p className="text-gray-600">10:00 AM (Ages 3-12)</p>
                </div>
              </div>
              <div className="flex items-center">
                <Music className="w-6 h-6 text-blue-600 mr-4" />
                <div>
                  <h3 className="font-semibold text-gray-800">Evening Praise</h3>
                  <p className="text-gray-600">6:00 PM - 7:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border border-blue-100 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Weekly Activities</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4 py-2">
                <h3 className="font-semibold text-gray-800">Wednesday Prayer Meeting</h3>
                <p className="text-gray-600">7:00 PM - 8:00 PM</p>
              </div>
              <div className="border-l-4 border-purple-500 pl-4 py-2">
                <h3 className="font-semibold text-gray-800">Friday Youth Night</h3>
                <p className="text-gray-600">7:00 PM - 9:00 PM</p>
              </div>
              <div className="border-l-4 border-green-500 pl-4 py-2">
                <h3 className="font-semibold text-gray-800">Saturday Bible Study</h3>
                <p className="text-gray-600">10:00 AM - 11:30 AM</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20 px-6 rounded-3xl">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">What to Expect</h2>
          <p className="text-xl text-blue-100 mb-12 leading-relaxed">
            Whether you're visiting for the first time or have been part of our family for years, 
            every service is designed to help you connect with God and community.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Welcoming Environment', desc: 'Come as you are - casual dress is perfectly fine!' },
              { title: 'Inspiring Worship', desc: 'Contemporary music that lifts your spirit' },
              { title: 'Practical Teaching', desc: 'Biblical messages that apply to daily life' }
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-blue-100">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;