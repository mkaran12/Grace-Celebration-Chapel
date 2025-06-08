import React, { useMemo } from 'react'
import { Calendar, Clock, Heart, Users, Star, Handshake } from 'lucide-react'
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
        title: 'God',
        desc: 'Teaching people to love God with all their heart, soul, and mind',
      },
      {
        icon: Users,
        title: 'Community',
        desc: 'Extending Faith to the Community',
      },
      {
        icon: Handshake,
        title: 'Ministry',
        desc: 'Laying down our life for our brethen(1 John 3:16)',
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
              Where faith is in action and Grace is at work.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center lg:justify-start'>
              <button className='px-8 py-4 bg-white text-blue-900 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg'>
                <a
                  href='https://web.facebook.com/gitonga.muthamia.3'
                  className='text-blue-900'
                >
                  Watch Online
                </a>
              </button>
              <button className='px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300 transform hover:scale-105'>
                Join us on Sundays
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

      {/* Senior Pastor Section */}
      <section className='py-20 px-6 bg-white'>
        <div className='max-w-6xl mx-auto'>
          <div className='grid md:grid-cols-2 gap-12 items-center'>
            <div className='order-1 md:order-1'>
              <div className='relative'>
                <img
                  src='/src/images/apostleandWife.png'
                  alt='Senior Pastor'
                  className='relative rounded-2xl object-cover w-full h-[600px] shadow-2xl transform transition-all duration-700 hover:scale-[1.05] animate-fade-in-left'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl'></div>
              </div>
            </div>

            <div className='order-2 md:order-2 flex flex-col justify-center h-[600px]'>
              <div className='relative'>
                <div className='absolute -top-4 -left-4 text-6xl text-blue-200 font-serif opacity-50'>
                  "
                </div>
                <h2 className='text-xl md:text-2xl lg:text-3xl font-bold text-purple-900 mb-8 leading-tight animate-fade-in-right'>
                  A Message From Apostle Benson Gitonga & Pastor Faith Benson
                </h2>
                <div className='text-lg text-gray-600 leading-relaxed space-y-4 animate-fade-in-up'>
                  <p className='transform transition-all duration-500 hover:translate-x-2'>
                    We warmly welcome you to the official website of Grace
                    Celebration chapel led by Apostle Benson Gitonga. It is an
                    honor to have you visit this platform, a place where we
                    share the heart and vision of the ministry that God
                    entrusted to us.
                  </p>
                  <p className='transform transition-all duration-500 hover:translate-x-2'>
                    Since its founding in the year 2000, Grace Celebration
                    Chapel has remained steadfast in its mission to mold
                    believers into holistic, purpose-driven, and well-rounded
                    disciples of Christ. Through the grace and guidance of the
                    Holy Spirit, we are committed to equipping individuals to
                    impact nations and generations with God's love, hope, and
                    light.
                  </p>
                  <p className='transform transition-all duration-500 hover:translate-x-2'>
                    As you explore this site, we pray that you will be
                    encouraged, inspired, and empowered to grow deeper in your
                    faith and fulfill the unique purpose God has placed on your
                    life. Whether you are here to connect with us, learn more
                    about our ministry, or find resources to strengthen your
                    spiritual walk, we trust that you will find what you need.
                  </p>
                  <p className='transform transition-all duration-500 hover:translate-x-2'>
                    May the Lord guide and bless you abundantly as you partner
                    with us in advancing His Kingdom. Together, let us shine the
                    light of Christ to a world in need and be the salt of the
                    earth.
                  </p>
                  <p className='font-semibold text-gray-800 italic transform transition-all duration-500 hover:translate-x-2'>
                    With blessings and love!
                  </p>
                </div>
                <div className='absolute -bottom-4 -right-4 text-6xl text-blue-200 font-serif opacity-50 rotate-180'>
                  "
                </div>
              </div>
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

      {/*  Theme of the Year */}
      <section className='py-20 px-6 from-blue-500 text-center mr-auto'>
        <div className='year'>
          <img
            src='/src/images/theme.jpg'
            alt='Theme of the Year'
            className='w-full h-[500px] object-cover rounded-2xl shadow-lg transform transition-all duration-500 hover:scale-[1.02] mb-8'
          />
        </div>
      </section>
      {/* google mapp section*/}
      <section className='py-20 px-6'>
        <div className='max-w-4xl mx-auto'>
          <h2 className='text-2xl font-bold text-center text-gray-800 mb-6'>
            Find Us: Karama Market Location
          </h2>
          <div className='rounded-2xl overflow-hidden shadow-lg border border-blue-100'>
            <iframe
              title='Karama Market Location'
              src='https://www.google.com/maps?q=Karama+Market,+Meru,+Kenya&output=embed'
              width='100%'
              height='400'
              style={{ border: 0 }}
              allowFullScreen={true}
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
