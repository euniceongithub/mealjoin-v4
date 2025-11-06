import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navigation } from '../../components/shared/Navigation';
import { Footer } from '../../components/shared/Footer';
import { Button } from '../../components/ui/button';
import { Card, CardContent } from '../../components/ui/card';
import { Input } from '../../components/ui/input';
import { MapPin, Clock, Users, Star } from 'lucide-react';

export const FindMeal = (): JSX.Element => {
  const [searchLocation, setSearchLocation] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Meals' },
    { id: 'african', name: 'African' },
    { id: 'continental', name: 'Continental' },
    { id: 'asian', name: 'Asian' },
    { id: 'vegetarian', name: 'Vegetarian' },
  ];

  const meals = [
    {
      id: 1,
      hostName: 'Kevin Asante',
      mealTitle: 'Traditional Jollof Rice Feast',
      description: 'Authentic Ghanaian jollof rice with grilled chicken, coleslaw, and plantain',
      price: 'GHC 70.00',
      location: 'Millennium City Estate',
      time: '6:30 PM',
      rating: 4.8,
      reviews: 24,
      spotsLeft: 3,
      image: '/61f75ea9a680def2ed1c6929fe75aeee-3.png',
      category: 'african'
    },
    {
      id: 2,
      hostName: 'Ama Serwaa',
      mealTitle: 'Homemade Banku & Tilapia',
      description: 'Fresh tilapia with spicy pepper sauce and traditional banku',
      price: 'GHC 85.00',
      location: 'East Legon',
      time: '7:00 PM',
      rating: 4.9,
      reviews: 18,
      spotsLeft: 2,
      image: '/61f75ea9a680def2ed1c6929fe75aeee-3.png',
      category: 'african'
    },
    {
      id: 3,
      hostName: 'James Wilson',
      mealTitle: 'Italian Pasta Night',
      description: 'Homemade pasta with marinara sauce, garlic bread, and Caesar salad',
      price: 'GHC 95.00',
      location: 'Airport Residential',
      time: '7:30 PM',
      rating: 4.7,
      reviews: 31,
      spotsLeft: 4,
      image: '/61f75ea9a680def2ed1c6929fe75aeee-3.png',
      category: 'continental'
    },
    {
      id: 4,
      hostName: 'Fatima Abdul',
      mealTitle: 'Vegetarian Delight',
      description: 'Mixed vegetable curry with quinoa, fresh salad, and homemade bread',
      price: 'GHC 60.00',
      location: 'Cantonments',
      time: '6:00 PM',
      rating: 4.6,
      reviews: 15,
      spotsLeft: 5,
      image: '/61f75ea9a680def2ed1c6929fe75aeee-3.png',
      category: 'vegetarian'
    },
    {
      id: 5,
      hostName: 'Chen Wei',
      mealTitle: 'Asian Fusion Experience',
      description: 'Stir-fried noodles, spring rolls, and sweet & sour chicken',
      price: 'GHC 80.00',
      location: 'Osu',
      time: '7:15 PM',
      rating: 4.8,
      reviews: 22,
      spotsLeft: 3,
      image: '/61f75ea9a680def2ed1c6929fe75aeee-3.png',
      category: 'asian'
    },
    {
      id: 6,
      hostName: 'Kwame Nkrumah',
      mealTitle: 'Sunday Fufu Special',
      description: 'Traditional fufu with light soup, goat meat, and assorted',
      price: 'GHC 90.00',
      location: 'Dansoman',
      time: '1:00 PM',
      rating: 4.9,
      reviews: 28,
      spotsLeft: 2,
      image: '/61f75ea9a680def2ed1c6929fe75aeee-3.png',
      category: 'african'
    }
  ];

  const filteredMeals = selectedCategory === 'all' 
    ? meals 
    : meals.filter(meal => meal.category === selectedCategory);

  return (
    <div className="bg-white min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="mt-16 md:mt-20 pt-8 md:pt-12 pb-6 md:pb-8 bg-gradient-to-r from-[#f0803e] to-[#fdaa00]">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center text-white">
            <h1 className="font-['Luckiest_Guy',Helvetica] text-3xl md:text-4xl lg:text-5xl mb-4">
              Find Your Perfect Meal
            </h1>
            <p className="text-lg md:text-xl mb-6 md:mb-8 max-w-2xl mx-auto">
              Discover delicious homemade meals from neighbors in your area
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-6 md:py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex flex-wrap gap-2 md:gap-4 justify-center">
            {categories.map((category) => (
              <Button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 md:px-6 py-2 rounded-full transition-colors text-sm md:text-base ${
                  selectedCategory === category.id
                    ? 'bg-[#f0803e] text-white'
                    : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-100'
                }`}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Meals Grid */}
      <section className="py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 md:mb-8 gap-4">
            <h2 className="font-['Luckiest_Guy',Helvetica] text-xl md:text-2xl text-gray-800">
              Available Meals ({filteredMeals.length})
            </h2>
            <select className="px-3 md:px-4 py-2 border border-gray-300 rounded-lg text-sm md:text-base w-full sm:w-auto">
              <option>Sort by Distance</option>
              <option>Sort by Price</option>
              <option>Sort by Rating</option>
              <option>Sort by Time</option>
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredMeals.map((meal) => (
              <Card key={meal.id} className="rounded-2xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                <div className="relative">
                  <img
                    className="w-full h-40 md:h-48 object-cover"
                    alt={meal.mealTitle}
                    src="/photo-2023-08-05-20-48-48-1.png"
                  />
                  <div className="absolute top-3 md:top-4 right-3 md:right-4 bg-white rounded-full px-2 md:px-3 py-1 text-xs md:text-sm font-medium text-[#f0803e]">
                    {meal.spotsLeft} spots left
                  </div>
                </div>
                
                <CardContent className="p-4 md:p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <img
                      className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover"
                      alt={meal.hostName}
                      src={meal.image}
                    />
                    <div>
                      <h3 className="font-medium text-gray-800 text-sm md:text-base">{meal.hostName}</h3>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-xs md:text-sm text-gray-600">{meal.rating} ({meal.reviews})</span>
                      </div>
                    </div>
                  </div>
                  
                  <h4 className="font-['Luckiest_Guy',Helvetica] text-base md:text-lg text-gray-800 mb-2">
                    {meal.mealTitle}
                  </h4>
                  
                  <p className="text-gray-600 text-xs md:text-sm mb-4 line-clamp-2">
                    {meal.description}
                  </p>
                  
                  <div className="flex items-center gap-3 md:gap-4 text-xs md:text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{meal.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{meal.time}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>{meal.spotsLeft} left</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="font-['Luckiest_Guy',Helvetica] text-lg md:text-xl text-[#f0803e]">
                      {meal.price}
                    </span>
                    <Link to={`/meal/${meal.id}`}>
                      <Button className="bg-[#f0803e] hover:bg-[#d96d35] text-white rounded-full px-4 md:px-6 text-sm md:text-base">
                        Join Now
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};