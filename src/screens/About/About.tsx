import React from 'react';
import { Navigation } from '../../components/shared/Navigation';
import { Footer } from '../../components/shared/Footer';
import { Card, CardContent } from '../../components/ui/card';
import { Link } from 'react-router-dom';
import { Users, Heart, Shield, Globe, Award, Utensils } from 'lucide-react';

export const About = (): JSX.Element => {
  const values = [
    {
      icon: <Heart className="w-8 h-8 text-[#f0803e]" />,
      title: 'Community First',
      description: 'We believe in building strong neighborhood connections through shared meals and experiences.'
    },
    {
      icon: <Shield className="w-8 h-8 text-[#f0803e]" />,
      title: 'Safety & Trust',
      description: 'Every host and guest is verified to ensure safe and enjoyable dining experiences for everyone.'
    },
    {
      icon: <Globe className="w-8 h-8 text-[#f0803e]" />,
      title: 'Cultural Exchange',
      description: 'Discover diverse cuisines and cultures right in your neighborhood through authentic home cooking.'
    },
    {
      icon: <Utensils className="w-8 h-8 text-[#f0803e]" />,
      title: 'Quality Food',
      description: 'We promote fresh, homemade meals that bring the warmth and love of home cooking to every table.'
    }
  ];

  const stats = [
    { number: '10,000+', label: 'Happy Diners' },
    { number: '2,500+', label: 'Host Families' },
    { number: '50+', label: 'Neighborhoods' },
    { number: '25,000+', label: 'Meals Shared' }
  ];

  const team = [
    {
      name: 'Kwame Asante',
      role: 'Founder & CEO',
      image: '/61f75ea9a680def2ed1c6929fe75aeee-3.png',
      bio: 'Passionate about connecting communities through food and creating sustainable income opportunities.'
    },
    {
      name: 'Ama Serwaa',
      role: 'Head of Community',
      image: '/61f75ea9a680def2ed1c6929fe75aeee-3.png',
      bio: 'Dedicated to building trust and safety within our growing community of food lovers.'
    },
    {
      name: 'James Wilson',
      role: 'Head of Technology',
      image: '/61f75ea9a680def2ed1c6929fe75aeee-3.png',
      bio: 'Building the technology that makes sharing meals as easy as ordering takeout.'
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="mt-20 pt-12 pb-8 bg-gradient-to-r from-[#f0803e] to-[#fdaa00]">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <h1 className="font-['Luckiest_Guy',Helvetica] text-4xl md:text-5xl mb-4">
            About MealJoin
          </h1>
          <p className="text-xl">
            Bringing neighbors together, one meal at a time
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-['Luckiest_Guy',Helvetica] text-3xl text-gray-800 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                MealJoin was born from a simple belief: that sharing a meal is one of the most 
                fundamental ways humans connect. In our increasingly digital world, we're creating 
                opportunities for real, meaningful connections right in your neighborhood.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We empower home cooks to share their culinary talents while providing food lovers 
                with access to authentic, homemade meals. Every meal shared on MealJoin strengthens 
                community bonds and creates lasting friendships.
              </p>
            </div>
            <div className="relative">
              <img
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
                alt="Community dining"
                src="/photo-2023-08-05-20-48-48-1.png"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-['Luckiest_Guy',Helvetica] text-3xl text-center text-gray-800 mb-12">
            Our Impact
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-['Luckiest_Guy',Helvetica] text-4xl text-[#f0803e] mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-['Luckiest_Guy',Helvetica] text-3xl text-center text-gray-800 mb-12">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      {value.icon}
                    </div>
                    <div>
                      <h3 className="font-['Luckiest_Guy',Helvetica] text-xl text-gray-800 mb-3">
                        {value.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-['Luckiest_Guy',Helvetica] text-3xl text-center text-gray-800 mb-12">
            Our Story
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 leading-relaxed mb-6">
              MealJoin started in 2023 when our founder, Kwame, moved to a new neighborhood in Accra. 
              Despite being surrounded by people, he felt disconnected from his community. One evening, 
              the aroma of jollof rice from his neighbor's kitchen reminded him of his grandmother's cooking.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              That moment sparked an idea: What if there was a way to share not just meals, but the 
              stories, cultures, and connections that come with them? What if home cooks could earn 
              income while building community?
            </p>
            <p className="text-gray-600 leading-relaxed">
              Today, MealJoin has grown into a thriving platform that has facilitated thousands of 
              meaningful connections across Ghana. We're not just a meal-sharing app – we're a 
              movement that's rebuilding the fabric of community, one shared meal at a time.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-['Luckiest_Guy',Helvetica] text-3xl text-center text-gray-800 mb-12">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8 text-center">
                  <img
                    className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
                    alt={member.name}
                    src={member.image}
                  />
                  <h3 className="font-['Luckiest_Guy',Helvetica] text-xl text-gray-800 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-[#f0803e] font-medium mb-4">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#f0803e] to-[#fdaa00]">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <h2 className="font-['Luckiest_Guy',Helvetica] text-3xl mb-4">
            Ready to Join Our Community?
          </h2>
          <p className="text-xl mb-8">
            Whether you're looking to share your cooking or discover amazing meals, 
            MealJoin is here to connect you with your neighbors.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/find-meal">
              <button className="bg-white text-[#f0803e] hover:bg-gray-100 px-8 py-3 rounded-full font-medium transition-colors">
                Find a Meal
              </button>
            </Link>
            <Link to="/share-meal">
              <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#f0803e] px-8 py-3 rounded-full font-medium transition-colors">
                Share Your Meal
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};