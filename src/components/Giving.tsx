import React from 'react'
import { Heart, Users, Globe, BookOpen, Gift, Mail } from 'lucide-react'
import { StatItem } from '../types'

const Giving: React.FC = () => {
  const impactStats: StatItem[] = [
    {
      number: '150+',
      label: 'Families Fed Monthly',
      desc: 'Through our food pantry program',
    },
    {
      number: '50+',
      label: 'Students Mentored',
      desc: 'In our after-school program',
    },
    {
      number: '$25K+',
      label: 'Community Aid',
      desc: 'Emergency assistance provided',
    },
  ]

  return (
    <div className='py-20 px-6 space-y-20'>
      <section className='max-w-6xl mx-auto'>
        <div className='text-center mb-16'>
          <h1 className='text-5xl font-bold text-gray-800 mb-6'>Giving</h1>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
            Your generosity helps us serve our community and spread God's love
            throughout the world.
          </p>
        </div>

        <div className='grid lg:grid-cols-2 gap-16 items-center'>
          <div>
            <h2 className='text-3xl font-bold text-gray-800 mb-6'>
              Why We Give
            </h2>
            <p className='text-gray-600 leading-relaxed mb-6'>
              Giving is an act of worship and a way to participate in God's work
              in our community. Every gift, no matter the size, makes a
              difference in the lives of those we serve.
            </p>
            <div className='space-y-4'>
              <div className='flex items-center'>
                <Heart className='w-6 h-6 text-red-500 mr-4' />
                <span className='text-gray-700'>
                  Supporting local families in need
                </span>
              </div>
              <div className='flex items-center'>
                <Users className='w-6 h-6 text-blue-500 mr-4' />
                <span className='text-gray-700'>
                  Funding community outreach programs
                </span>
              </div>
              <div className='flex items-center'>
                <Globe className='w-6 h-6 text-green-500 mr-4' />
                <span className='text-gray-700'>
                  Supporting missionaries worldwide
                </span>
              </div>
              <div className='flex items-center'>
                <BookOpen className='w-6 h-6 text-purple-500 mr-4' />
                <span className='text-gray-700'>
                  Expanding educational ministries
                </span>
              </div>
            </div>
          </div>

          <div className='bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl shadow-md'>
            <h3 className='text-2xl font-bold text-gray-800 mb-6'>
              Ways to Give
            </h3>
            <div className='space-y-6'>
              <div className='bg-white p-6 rounded-xl shadow-sm'>
                <div className='flex items-center mb-4'>
                  <Gift className='w-8 h-8 text-blue-600 mr-4' />
                  <h4 className='text-xl font-semibold text-gray-800'>
                    Online Giving
                  </h4>
                </div>
                <p className='text-gray-600 mb-4'>
                  Safe, secure, and convenient online donations.
                </p>
                <button className='w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-md'>
                  Give Online Now
                </button>
              </div>

              <div className='bg-white p-6 rounded-xl shadow-sm'>
                <div className='flex items-center mb-4'>
                  <Heart className='w-8 h-8 text-red-600 mr-4' />
                  <h4 className='text-xl font-semibold text-gray-800'>
                    Text to Give
                  </h4>
                </div>
                <p className='text-gray-600 mb-4'>
                  Text "GIVE" to (555) 123-GIVE for quick donations.
                </p>
                <div className='bg-gray-100 p-4 rounded-lg text-center'>
                  <span className='text-gray-700 font-mono'>
                    Text: GIVE to 555-123-4483
                  </span>
                </div>
              </div>

              <div className='bg-white p-6 rounded-xl shadow-sm'>
                <div className='flex items-center mb-4'>
                  <Mail className='w-8 h-8 text-green-600 mr-4' />
                  <h4 className='text-xl font-semibold text-gray-800'>
                    Mail or In-Person
                  </h4>
                </div>
                <p className='text-gray-600'>
                  Bring your offering to service or mail to our church address.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20 px-6 rounded-3xl'>
        <div className='max-w-4xl mx-auto text-center'>
          <h2 className='text-4xl font-bold mb-6'>Impact Stories</h2>
          <p className='text-xl text-blue-100 mb-12'>
            See how your generosity is making a real difference in our
            community.
          </p>
          <div className='grid md:grid-cols-3 gap-8'>
            {impactStats.map((stat, idx) => (
              <div key={idx} className='text-center'>
                <div className='text-4xl font-bold text-yellow-400 mb-2'>
                  {stat.number}
                </div>
                <div className='text-xl font-semibold mb-2'>{stat.label}</div>
                <div className='text-blue-100'>{stat.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Giving
