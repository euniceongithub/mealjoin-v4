import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Navigation } from '../../components/shared/Navigation';
import { Footer } from '../../components/shared/Footer';
import { Button } from '../../components/ui/button';
import { Card, CardContent } from '../../components/ui/card';
import { MapPin, Clock, Users, Star, Calendar, ChefHat, Utensils } from 'lucide-react';

export const MealDetails = (): JSX.Element => {
  const { id } = useParams();
  const [selectedGuests, setSelectedGuests] = useState(1);

  // Mock meal data - in a real app, this would come from an API
  const meal = {
    id: parseInt(id || '1'),
    hostName: 'Kevin Asante',
    hostImage: '/61f75ea9a680def2ed1c6929fe75aeee-3.png',
    mealTitle: 'Traditional Jollof Rice Feast',
    description: 'Experience authentic Ghanaian cuisine with my grandmother\'s secret jollof rice recipe. This hearty meal includes perfectly seasoned jollof rice, grilled chicken marinated in local spices, fresh coleslaw, and sweet fried plantain. Perfect for anyone wanting to taste real Ghanaian flavors in a warm, welcoming home environment.',
    ingredients: ['Premium jasmine rice', 'Fresh tomatoes', 'Bell peppers', 'Onions', 'Free-range chicken', 'Traditional spices', 'Fresh plantain', 'Cabbage', 'Carrots'],
    price: 70.00,
    currency: 'GHC',
    location: 'Millennium City Estate, Accra',
    distance: '0.8 km',
    date: '2025-01-15',
    time: '6:30 PM',
    duration: '2 hours',
    rating: 4.8,
    reviews: 24,
    totalSpots: 6,
    spotsLeft: 3,
    images: [
      '/photo-2023-08-05-20-48-48-1.png',
      '/photo-2023-08-05-20-48-49.png',
      '/photo-2023-08-05-20-48-48-1.png'
    ],
    hostBio: 'I\'m Kevin, a passionate home cook who learned traditional Ghanaian recipes from my grandmother. I love sharing our rich culinary heritage with neighbors and creating connections through food.',
    dietaryInfo: ['Gluten-free option available', 'Can accommodate mild spice preference'],
    houseRules: ['Please arrive on time', 'Let me know about allergies in advance', 'Comfortable casual attire'],
    category: 'African',
    cuisineType: 'Ghanaian'
  };

  const handleBooking = () => {
    // Navigate to booking confirmation
    window.location.href = `/booking/${meal.id}?guests=${selectedGuests}`;
  };

  return (
    <div className="bg-white min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="mt-20 pt-8">
        <div className="max-w-7xl mx-auto px-6">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-6">
            <Link to="/" className="hover:text-[#f0803e]">Home</Link>
            <span>/</span>
            <Link to="/find-meal" className="hover:text-[#f0803e]">Find Meal</Link>
            <span>/</span>
            <span className="text-gray-800">{meal.mealTitle}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Image Gallery */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <img
                  className="w-full h-80 object-cover rounded-2xl"
                  alt={meal.mealTitle}
                  src={meal.images[0]}
                />
                <div className="grid grid-cols-1 gap-4">
                  <img
                    className="w-full h-38 object-cover rounded-2xl"
                    alt="Meal view 2"
                    src={meal.images[1]}
                  />
                  <img
                    className="w-full h-38 object-cover rounded-2xl"
                    alt="Meal view 3"
                    src={meal.images[2]}
                  />
                </div>
              </div>

              {/* Meal Info */}
              <div className="mb-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-[#f0803e] text-white px-3 py-1 rounded-full text-sm font-medium">
                    {meal.category}
                  </span>
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                    {meal.cuisineType}
                  </span>
                </div>

                <h1 className="font-['Luckiest_Guy',Helvetica] text-3xl text-gray-800 mb-4">
                  {meal.mealTitle}
                </h1>

                <div className="flex items-center gap-6 text-gray-600 mb-6">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    <span>{meal.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    <span>{new Date(meal.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    <span>{meal.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    <span>{meal.spotsLeft} spots left</span>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed mb-6">
                  {meal.description}
                </p>
              </div>

              {/* Host Info */}
              <Card className="rounded-2xl shadow-lg mb-8">
                <CardContent className="p-6">
                  <h3 className="font-['Luckiest_Guy',Helvetica] text-xl text-gray-800 mb-4">
                    Meet Your Host
                  </h3>
                  <div className="flex items-start gap-4">
                    <img
                      className="w-16 h-16 rounded-full object-cover"
                      alt={meal.hostName}
                      src={meal.hostImage}
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h4 className="font-medium text-lg text-gray-800">{meal.hostName}</h4>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm text-gray-600">{meal.rating} ({meal.reviews} reviews)</span>
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {meal.hostBio}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Ingredients */}
              <Card className="rounded-2xl shadow-lg mb-8">
                <CardContent className="p-6">
                  <h3 className="font-['Luckiest_Guy',Helvetica] text-xl text-gray-800 mb-4 flex items-center gap-2">
                    <ChefHat className="w-6 h-6 text-[#f0803e]" />
                    Ingredients
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {meal.ingredients.map((ingredient, index) => (
                      <div key={index} className="flex items-center gap-2 text-gray-700">
                        <div className="w-2 h-2 bg-[#f0803e] rounded-full"></div>
                        <span className="text-sm">{ingredient}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Additional Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="rounded-2xl shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="font-['Luckiest_Guy',Helvetica] text-lg text-gray-800 mb-4">
                      Dietary Information
                    </h3>
                    <ul className="space-y-2">
                      {meal.dietaryInfo.map((info, index) => (
                        <li key={index} className="flex items-center gap-2 text-gray-700 text-sm">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          {info}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="rounded-2xl shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="font-['Luckiest_Guy',Helvetica] text-lg text-gray-800 mb-4">
                      House Rules
                    </h3>
                    <ul className="space-y-2">
                      {meal.houseRules.map((rule, index) => (
                        <li key={index} className="flex items-center gap-2 text-gray-700 text-sm">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          {rule}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Booking Sidebar */}
            <div className="lg:col-span-1">
              <Card className="rounded-2xl shadow-lg sticky top-24">
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <div className="font-['Luckiest_Guy',Helvetica] text-3xl text-[#f0803e] mb-2">
                      {meal.currency} {meal.price.toFixed(2)}
                    </div>
                    <div className="text-gray-600">per person</div>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Number of Guests
                      </label>
                      <select
                        value={selectedGuests}
                        onChange={(e) => setSelectedGuests(parseInt(e.target.value))}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f0803e] focus:border-transparent"
                      >
                        {Array.from({ length: meal.spotsLeft }, (_, i) => i + 1).map(num => (
                          <option key={num} value={num}>
                            {num} {num === 1 ? 'Guest' : 'Guests'}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-700">Subtotal ({selectedGuests} guests)</span>
                        <span className="font-medium">{meal.currency} {(meal.price * selectedGuests).toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-700">Service fee</span>
                        <span className="font-medium">{meal.currency} {(meal.price * selectedGuests * 0.1).toFixed(2)}</span>
                      </div>
                      <div className="border-t pt-2 mt-2">
                        <div className="flex justify-between items-center font-bold text-lg">
                          <span>Total</span>
                          <span className="text-[#f0803e]">{meal.currency} {(meal.price * selectedGuests * 1.1).toFixed(2)}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Button 
                    onClick={handleBooking}
                    className="w-full h-12 bg-[#f0803e] hover:bg-[#d96d35] text-white rounded-lg font-medium mb-4"
                  >
                    Book Now
                  </Button>

                  <div className="text-center text-sm text-gray-600">
                    You won't be charged yet
                  </div>

                  <div className="mt-6 pt-6 border-t">
                    <div className="flex items-center gap-3 text-sm text-gray-600">
                      <Utensils className="w-5 h-5" />
                      <span>Meal duration: {meal.duration}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-600 mt-2">
                      <MapPin className="w-5 h-5" />
                      <span>{meal.location}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};