import React from 'react';
import { BookOpen, Music, Users, Heart, Globe, Calendar, ChevronRight } from 'lucide-react';
import { ResourceItem } from '../types';

const Resources: React.FC = () => {
  const resources: ResourceItem[] = [
    { icon: BookOpen, title: 'Sermon Series', desc: 'Access past messages and study guides' },
    { icon: Music, title: 'Worship Music', desc: 'Songs and lyrics from our services' },
    { icon: Users, title: 'Small Groups', desc: 'Find a community to grow with' },
    { icon: Heart, title: 'Prayer Requests', desc: 'Share your needs with our prayer team' },
    { icon: Globe, title: 'Online Services', desc: 'Watch live or catch up on services' },
    { icon: Calendar, title: 'Events Calendar', desc: 'Stay updated on church activities' }
  ];

  return (
    <div className="py-20 px-6 space-y-20">
      <section className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">Resources</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tools and materials to help you grow in your faith journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-100">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-6">
                <resource.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">{resource.title}</h3>
              <p className="text-gray-600 mb-6">{resource.desc}</p>
              <div className="flex items-center text-blue-600 font-semibold hover:text-blue-800 cursor-pointer">
                <span>Access Now</span>
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
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Latest Sermon Series</h2>
              <div className="bg-white p-6 rounded-2xl shadow-md mb-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Walking in Faith</h3>
                <p className="text-gray-600 mb-4">A six-week journey through Hebrews 11, exploring the lives of men and women who lived by faith.</p>
                <div className="flex items-center text-blue-600 font-semibold hover:text-blue-800 cursor-pointer">
                  <span>Listen to Series</span>
                  <ChevronRight className="w-4 h-4 ml-2" />
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-md">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Grace for Today</h3>
                <p className="text-gray-600 mb-4">Finding God's grace in our everyday lives and learning to extend that grace to others.</p>
                <div className="flex items-center text-blue-600 font-semibold hover:text-blue-800 cursor-pointer">
                  <span>Listen to Series</span>
                  <ChevronRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Recommended Resources</h2>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Grow Your Faith</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-500 pl-4 py-2">
                    <h4 className="font-bold text-gray-800">Daily Devotionals</h4>
                    <p className="text-gray-600">Start your day with Scripture and reflection</p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4 py-2">
                    <h4 className="font-bold text-gray-800">Bible Study Guides</h4>
                    <p className="text-gray-600">Dive deeper into God's Word</p>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4 py-2">
                    <h4 className="font-bold text-gray-800">Prayer Resources</h4>
                    <p className="text-gray-600">Enhance your prayer life</p>
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

export default Resources;