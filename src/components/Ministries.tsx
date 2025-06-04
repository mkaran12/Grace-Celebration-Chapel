import React, { useMemo } from 'react';
import { Users, Music, Heart, BookOpen, ChevronRight } from 'lucide-react';
import { Ministry } from '../types';

const Ministries: React.FC = () => {
  const ministries = useMemo<Ministry[]>(() => [
    { name: 'Youth Ministry', icon: Users, description: 'Empowering the next generation' },
    { name: 'Worship Team', icon: Music, description: 'Leading hearts in praise' },
    { name: 'Children\'s Ministry', icon: Heart, description: 'Nurturing young hearts' },
    { name: 'Bible Study', icon: BookOpen, description: 'Growing in God\'s word' }
  ], []);

  return (
    <div className="py-20 px-6 space-y-20">
      <section className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">Our Ministries</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover opportunities to grow, serve, and make a difference in our community.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {ministries.map((ministry, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-100">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-6">
                  <ministry.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">{ministry.name}</h3>
                  <p className="text-gray-600">{ministry.description}</p>
                </div>
              </div>
              <div className="flex items-center text-blue-600 font-semibold hover:text-blue-800 cursor-pointer">
                <span>Learn More</span>
                <ChevronRight className="w-4 h-4 ml-2" />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-20 px-6 rounded-3xl">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Find Your Place to Serve</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                At Grace Community Church, we believe that every person has been gifted with unique talents
                and abilities. Our ministries provide opportunities for you to use your gifts to serve
                others and make a meaningful impact in our community.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Whether you're passionate about working with children, have musical talents, enjoy
                organizing events, or have a heart for outreach, there's a place for you to serve and grow.
              </p>
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Volunteer Today
              </button>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Ministry Spotlight</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Community Outreach</h4>
                    <p className="text-gray-600">Serving our neighbors through food drives, clothing donations, and community events.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Small Groups</h4>
                    <p className="text-gray-600">Building deeper connections through weekly home gatherings for prayer, study, and fellowship.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ministries;