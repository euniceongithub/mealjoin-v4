import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Navigation } from '../../components/shared/Navigation';
import { Footer } from '../../components/shared/Footer';
import { Button } from '../../components/ui/button';
import { Card, CardContent } from '../../components/ui/card';
import { MapPin, Star, Calendar, Users, ChefHat, Award, Clock, Heart } from 'lucide-react';

export const CookProfile = (): JSX.Element => {
  const { id } = useParams();
  const [isFollowing, setIsFollowing] = useState(false);

  // Mock cook data
  const cook = {
    id: parseInt(id || '1'),
    name: 'Kevin Asante',
    image: '/61f75ea9a680def2ed1c6929fe75aeee-3.png',
    location: 'Millennium City Estate, Accra',
    joinedDate: '2023-06-15',
    rating: 4.8,
    totalReviews: 156,
    totalMeals: 89,
    followers: 234,
    bio: 'Passionate home cook specializing in traditional Ghanaian cuisine. I learned my recipes from my grandmother and love sharing our rich culinary heritage with the community. Every meal I prepare is made with love and authentic ingredients.',
    specialties: ['Jollof Rice', 'Banku & Tilapia', 'Kelewele', 'Red Red', 'Fufu'],
    achievements: [
      { icon: '🏆', title: 'Top Host 2024', description: 'Highest rated host in Accra' },
      { icon: '⭐', title: '100+ Happy Diners', description: 'Served over 100 satisfied customers' },
      { icon: '🍽️', title: 'Master Chef', description: 'Completed 50+ successful meals' }
    ],
    upcomingMeals: [
      {
        id: 1,
        title: 'Traditional Jollof Rice Feast',
        date: '2025-01-15',
        time: '6:30 PM',
        price: 70.00,
        spotsLeft: 3,
        image: '/photo-2023-08-05-20-48-48-1.png'
      },
      {
        id: 2,
        title: 'Sunday Fufu Special',
        date: '2025-01-19',
        time: '1:00 PM',
        price: 90.00,
        spotsLeft: 2,
        image: '/photo-2023-08-05-20-48-48-1.png'
      }
    ],
    reviews: [
      {
        id: 1,
        userName: 'Ama Serwaa',
        userImage: '/61f75ea9a680def2ed1c6929fe75aeee-3.png',
        rating: 5,
        date: '2025-01-10',
        comment: 'Amazing jollof rice! Kevin is such a wonderful host and the food was absolutely delicious. Felt like eating at my grandmother\'s house.',
        mealTitle: 'Traditional Jollof Rice Feast'
      },
      {
        id: 2,
        userName: 'James Wilson',
        userImage: '/61f75ea9a680def2ed1c6929fe75aeee-3.png',
        rating: 5,
        date: '2025-01-08',
        comment: 'Best banku I\'ve had outside my hometown! Kevin\'s hospitality is exceptional and the meal was perfectly prepared.',
        mealTitle: 'Banku & Tilapia Special'
      }
    ]
  };

  return (
    <div className="bg-white min-h-screen">
      <Navigation />
      
      {/* Profile Header */}
      <section className="mt-20 pt-8 pb-8 bg-gradient-to-r from-[#f0803e] to-[#fdaa00]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-8 text-white">
            <img
              className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
              alt={cook.name}
              src={cook.image}
            />
            <div className="flex-1 text-center md:text-left">
              <h1 className="font-['Luckiest_Guy',Helvetica] text-4xl mb-2">
                {cook.name}
              </h1>
              <div className="flex items-center justify-center md:justify-start gap-4 mb-4">
                <div className="flex items-center gap-1">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium">{cook.rating}</span>
                  <span className="text-white/80">({cook.totalReviews} reviews)</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="w-5 h-5" />
                  <span>{cook.location}</span>
                </div>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-6 mb-4">
                <div className="text-center">
                  <div className="font-bold text-2xl">{cook.totalMeals}</div>
                  <div className="text-white/80 text-sm">Meals Shared</div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-2xl">{cook.followers}</div>
                  <div className="text-white/80 text-sm">Followers</div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-2xl">{new Date().getFullYear() - new Date(cook.joinedDate).getFullYear()}</div>
                  <div className="text-white/80 text-sm">Years Hosting</div>
                </div>
              </div>
              <Button
                onClick={() => setIsFollowing(!isFollowing)}
                className={`${
                  isFollowing 
                    ? 'bg-white text-[#f0803e] hover:bg-gray-100' 
                    : 'bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#f0803e]'
                } rounded-full px-8 py-2 transition-colors`}
              >
                <Heart className={`w-5 h-5 mr-2 ${isFollowing ? 'fill-current' : ''}`} />
                {isFollowing ? 'Following' : 'Follow'}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Profile Content */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* About */}
              <Card className="rounded-2xl shadow-lg">
                <CardContent className="p-6">
                  <h3 className="font-['Luckiest_Guy',Helvetica] text-xl text-gray-800 mb-4">
                    About {cook.name}
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {cook.bio}
                  </p>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-3">Specialties</h4>
                    <div className="flex flex-wrap gap-2">
                      {cook.specialties.map((specialty, index) => (
                        <span
                          key={index}
                          className="bg-[#f0803e] text-white px-3 py-1 rounded-full text-sm"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Achievements */}
              <Card className="rounded-2xl shadow-lg">
                <CardContent className="p-6">
                  <h3 className="font-['Luckiest_Guy',Helvetica] text-xl text-gray-800 mb-6">
                    Achievements
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {cook.achievements.map((achievement, index) => (
                      <div key={index} className="text-center p-4 bg-gray-50 rounded-xl">
                        <div className="text-3xl mb-2">{achievement.icon}</div>
                        <h4 className="font-medium text-gray-800 mb-1">{achievement.title}</h4>
                        <p className="text-sm text-gray-600">{achievement.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Reviews */}
              <Card className="rounded-2xl shadow-lg">
                <CardContent className="p-6">
                  <h3 className="font-['Luckiest_Guy',Helvetica] text-xl text-gray-800 mb-6">
                    Recent Reviews
                  </h3>
                  <div className="space-y-6">
                    {cook.reviews.map((review) => (
                      <div key={review.id} className="border-b border-gray-200 pb-6 last:border-b-0">
                        <div className="flex items-start gap-4">
                          <img
                            className="w-12 h-12 rounded-full object-cover"
                            alt={review.userName}
                            src={review.userImage}
                          />
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <h4 className="font-medium text-gray-800">{review.userName}</h4>
                              <div className="flex items-center gap-1">
                                {Array.from({ length: review.rating }, (_, i) => (
                                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                ))}
                              </div>
                              <span className="text-sm text-gray-500">
                                {new Date(review.date).toLocaleDateString()}
                              </span>
                            </div>
                            <p className="text-gray-700 mb-2">{review.comment}</p>
                            <p className="text-sm text-gray-500">Meal: {review.mealTitle}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Upcoming Meals */}
              <Card className="rounded-2xl shadow-lg">
                <CardContent className="p-6">
                  <h3 className="font-['Luckiest_Guy',Helvetica] text-lg text-gray-800 mb-4">
                    Upcoming Meals
                  </h3>
                  <div className="space-y-4">
                    {cook.upcomingMeals.map((meal) => (
                      <div key={meal.id} className="border border-gray-200 rounded-lg p-4">
                        <img
                          className="w-full h-24 object-cover rounded-lg mb-3"
                          alt={meal.title}
                          src={meal.image}
                        />
                        <h4 className="font-medium text-gray-800 mb-2">{meal.title}</h4>
                        <div className="space-y-1 text-sm text-gray-600">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span>{new Date(meal.date).toLocaleDateString()}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            <span>{meal.time}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Users className="w-4 h-4" />
                            <span>{meal.spotsLeft} spots left</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between mt-3">
                          <span className="font-bold text-[#f0803e]">GHC {meal.price.toFixed(2)}</span>
                          <Link to={`/meal/${meal.id}`}>
                            <Button className="bg-[#f0803e] hover:bg-[#d96d35] text-white rounded-full px-4 py-1 text-sm">
                              Book
                            </Button>
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Contact */}
              <Card className="rounded-2xl shadow-lg">
                <CardContent className="p-6">
                  <h3 className="font-['Luckiest_Guy',Helvetica] text-lg text-gray-800 mb-4">
                    Contact {cook.name}
                  </h3>
                  <div className="space-y-3">
                    <Link to="/messages">
                      <Button className="w-full bg-[#f0803e] hover:bg-[#d96d35] text-white rounded-lg">
                        Send Message
                      </Button>
                    </Link>
                    <Link to="/complaint">
                      <Button className="w-full bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 rounded-lg">
                        Report Issue
                      </Button>
                    </Link>
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