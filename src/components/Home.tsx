import React, { useMemo } from 'react'
import { Calendar, Clock, Heart, Users, Star } from 'lucide-react'
import { Event, ValueItem } from '../types'

const Home: React.FC = () => {
  const upcomingEvents = useMemo<Event[]>(
    () => [
      { date: 'June 8', title: 'Sunday Worship Service', time: '10:00 AM' },
      { date: 'June 10', title: 'Prayer Meeting', time: '7:00 PM' },
      { date: 'June 15', title: 'Youth Conference', time: '6:00 PM' },
      { date: 'June 22', title: 'Community Outreach', time: '9:00 AM' },
    ],
    []
  )

  const values = useMemo<ValueItem[]>(
    () => [
      {
        icon: Heart,
        title: 'Love',
        desc: "Experiencing God's unconditional love together",
      },
      {
        icon: Users,
        title: 'Community',
        desc: 'Building meaningful relationships that last',
      },
      {
        icon: Star,
        title: 'Purpose',
        desc: 'Discovering your God-given calling and mission',
      },
    ],
    []
  )

  return (
    <div className='space-y-20'>
      {/* Hero Section */}
      <section className='relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white overflow-hidden'>
        <div className='absolute inset-0 bg-black/20'></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.05%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>

        <div className='relative z-10 container mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-12'>
          <div className='text-center lg:text-left lg:w-1/2 animate-fade-in'>
            <h1 className='text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent'>
              Grace Celebration Chapel
            </h1>
            <p className='text-xl md:text-2xl mb-8 text-blue-100 max-w-2xl mx-auto lg:mx-0 leading-relaxed'>
              Where faith meets community, and hearts are transformed by God's
              love
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center lg:justify-start'>
              <button className='px-8 py-4 bg-white text-blue-900 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg'>
                Join Us Sunday
              </button>
              <button className='px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300 transform hover:scale-105'>
                Watch Online
              </button>
            </div>
          </div>

          <div className='lg:w-1/2 mt-12 lg:mt-0 animate-fade-in'>
            <div className='relative'>
              <div className='absolute -inset-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-3xl opacity-75 blur-lg'></div>
              <img
                src='/src/images/logo.png'
                alt='Apostle Benson'
                className='relative rounded-2xl object-cover w-full h-[500px] shadow-2xl transform transition-all duration-500 hover:scale-[1.02]'
              />
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className='py-20 px-6 bg-gradient-to-r from-blue-50 to-purple-50'>
        <div className='max-w-6xl mx-auto'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl md:text-5xl font-bold text-gray-800 mb-6'>
              Welcome to Our Family
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed'>
              At Grace Celebration Chapel, we believe everyone has a place at
              God's table. Come as you are, and discover the transformative
              power of community and faith.
            </p>
          </div>

          <div className='grid md:grid-cols-3 gap-8'>
            {values.map((item, idx) => (
              <div key={idx} className='text-center group'>
                <div className='w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg'>
                  <item.icon className='w-10 h-10 text-white' />
                </div>
                <h3 className='text-2xl font-bold text-gray-800 mb-4'>
                  {item.title}
                </h3>
                <p className='text-gray-600 leading-relaxed'>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className='py-20 px-6 bg-white'>
        <div className='max-w-6xl mx-auto'>
          <h2 className='text-4xl font-bold text-center text-gray-800 mb-16'>
            Upcoming Events
          </h2>
          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {upcomingEvents.map((event, idx) => (
              <div
                key={idx}
                className='bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-100'
              >
                <div className='flex items-center mb-4'>
                  <Calendar className='w-6 h-6 text-blue-600 mr-3' />
                  <span className='text-blue-600 font-semibold'>
                    {event.date}
                  </span>
                </div>
                <h3 className='text-xl font-bold text-gray-800 mb-2'>
                  {event.title}
                </h3>
                <div className='flex items-center text-gray-600'>
                  <Clock className='w-4 h-4 mr-2' />
                  <span>{event.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
