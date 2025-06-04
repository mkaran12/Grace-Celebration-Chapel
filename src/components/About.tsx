import React from 'react'
import { Users } from 'lucide-react'
import { Leader } from '../types'

const About: React.FC = () => {
  const leaders: Leader[] = [
    {
      name: 'Pastor John Smith',
      role: 'Senior Pastor',
      years: '15 years of ministry',
    },
    {
      name: 'Pastor Sarah Johnson',
      role: 'Associate Pastor',
      years: '10 years of ministry',
    },
    {
      name: 'David Wilson',
      role: 'Worship Director',
      years: '8 years of service',
    },
  ]

  return (
    <div className='py-20 px-6 space-y-20'>
      <section className='max-w-6xl mx-auto'>
        <div className='text-center mb-16'>
          <h1 className='text-5xl font-bold text-gray-800 mb-6'>
            About Grace Celebration Chapel
          </h1>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
            Founded in faith, rooted in love, and committed to serving our
            community for over 15 years.
          </p>
        </div>

        <div className='grid lg:grid-cols-2 gap-16 items-center'>
          <div className='order-2 lg:order-1 relative'>
            <div className='absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl opacity-75 blur-lg'></div>
            <img
              src='/src/images/logo.png'
              alt='Beautiful church building'
              className='relative rounded-2xl object-cover w-full h-[500px] shadow-2xl transform transition-all duration-500 hover:scale-[1.02]'
            />
          </div>

          <div className='order-1 lg:order-2'>
            <h2 className='text-3xl font-bold text-gray-800 mb-6'>Our Story</h2>
            <p className='text-gray-600 leading-relaxed mb-6'>
            Grace Celebration Chapel began in 1998 with a small group of
              families who shared a vision of creating a church where everyone
              could experience God's love and grace. What started as Sunday
              services in a local school has grown into a vibrant community of
              believers who are passionate about faith, fellowship, and service.
            </p>
            <p className='text-gray-600 leading-relaxed'>
              Today, we continue to be guided by the same principles that
              founded our church: unconditional love, authentic community, and a
              commitment to making a positive impact in our neighborhood and
              beyond.
            </p>
          </div>
        </div>
      </section>

      <section className='max-w-6xl mx-auto'>
        <div className='grid lg:grid-cols-2 gap-16 items-center'>
          <div>
            <h2 className='text-3xl font-bold text-gray-800 mb-6'>
              Our Mission & Vision
            </h2>
            <div className='bg-gradient-to-br from-blue-100 to-purple-100 p-8 rounded-2xl shadow-md'>
              <h3 className='text-2xl font-bold text-gray-800 mb-6'>
                Our Mission
              </h3>
              <p className='text-gray-700 leading-relaxed mb-6'>
                To create a welcoming community where people can grow in their
                relationship with God, connect with others, and discover their
                purpose in life.
              </p>
              <h3 className='text-2xl font-bold text-gray-800 mb-6'>
                Our Vision
              </h3>
              <p className='text-gray-700 leading-relaxed'>
                To be a church that transforms lives and communities through the
                love of Christ, one person at a time.
              </p>
            </div>
          </div>

          <div className='bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-2xl shadow-md'>
            <h3 className='text-2xl font-bold text-gray-800 mb-6'>
              Core Values
            </h3>
            <ul className='space-y-4'>
              <li className='flex items-center gap-4'>
                <span className='w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold'>
                  1
                </span>
                <div>
                  <h4 className='font-bold text-gray-800'>Authentic Faith</h4>
                  <p className='text-gray-600'>
                    Living out our beliefs in every aspect of life
                  </p>
                </div>
              </li>
              <li className='flex items-center gap-4'>
                <span className='w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold'>
                  2
                </span>
                <div>
                  <h4 className='font-bold text-gray-800'>
                    Inclusive Community
                  </h4>
                  <p className='text-gray-600'>
                    Welcoming all people with open arms
                  </p>
                </div>
              </li>
              <li className='flex items-center gap-4'>
                <span className='w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold'>
                  3
                </span>
                <div>
                  <h4 className='font-bold text-gray-800'>
                    Sacrificial Service
                  </h4>
                  <p className='text-gray-600'>
                    Giving generously of our time, talents, and resources
                  </p>
                </div>
              </li>
              <li className='flex items-center gap-4'>
                <span className='w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold'>
                  4
                </span>
                <div>
                  <h4 className='font-bold text-gray-800'>
                    Transformative Growth
                  </h4>
                  <p className='text-gray-600'>
                    Continually evolving in our spiritual journey
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className='bg-gradient-to-r from-blue-50 to-purple-50 py-20 px-6 rounded-3xl'>
        <div className='max-w-6xl mx-auto'>
          <h2 className='text-4xl font-bold text-center text-gray-800 mb-16'>
            Our Leadership
          </h2>
          <div className='grid md:grid-cols-3 gap-8'>
            {leaders.map((leader, idx) => (
              <div
                key={idx}
                className='text-center bg-white p-8 rounded-2xl shadow-lg transform transition-all duration-300 hover:-translate-y-2'
              >
                <div className='w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center'>
                  <Users className='w-12 h-12 text-white' />
                </div>
                <h3 className='text-xl font-bold text-gray-800 mb-2'>
                  {leader.name}
                </h3>
                <p className='text-blue-600 font-semibold mb-2'>
                  {leader.role}
                </p>
                <p className='text-gray-600'>{leader.years}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
