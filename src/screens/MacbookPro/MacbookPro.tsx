import React from "react";
import { Link } from "react-router-dom";
import { Navigation } from "../../components/shared/Navigation";
import { Footer } from "../../components/shared/Footer";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const MacbookPro = (): JSX.Element => {
  // Featured meals data
  const featuredMeals = [
    {
      id: 1,
      hostName: "Kevin",
      mealDescription: "Traditional jollof rice with grilled chicken, coleslaw, and plantain",
      price: "GHC 70.00",
      location: "Millennium City Estate",
      image: "/photo-2023-08-05-20-48-48-1.png"
    },
    {
      id: 2,
      hostName: "Ama",
      mealDescription: "Homemade banku with fresh tilapia and spicy pepper sauce",
      price: "GHC 85.00",
      location: "East Legon",
      image: "/photo-2023-08-05-20-48-48-1.png"
    },
    {
      id: 3,
      hostName: "James",
      mealDescription: "Italian pasta with marinara sauce and garlic bread",
      price: "GHC 95.00",
      location: "Airport Residential",
      image: "/photo-2023-08-05-20-48-48-1.png"
    },
    {
      id: 4,
      hostName: "Fatima",
      mealDescription: "Vegetarian curry with quinoa and fresh salad",
      price: "GHC 60.00",
      location: "Cantonments",
      image: "/photo-2023-08-05-20-48-48-1.png"
    },
    {
      id: 5,
      hostName: "Chen",
      mealDescription: "Asian fusion stir-fried noodles with spring rolls",
      price: "GHC 80.00",
      location: "Osu",
      image: "/photo-2023-08-05-20-48-48-1.png"
    },
  ];

  // How it works steps
  const howItWorksSteps = [
    {
      number: "1",
      title: "Find a Meal",
      description: "Find cravings on MealJoin.",
    },
    {
      number: "2",
      title: "Reserve a plate",
      description: "Join and pay for your meal.",
    },
    {
      number: "3",
      title: "enjoy",
      description: "Relish your neighbour's good cooking.",
    },
  ];

  // Features data
  const features = [
    {
      icon: "/360-f-1155110145-dhdc4ekc2umix8xzhkpxfglpbyphjwug-1.png",
      title: "realtime",
    },
    {
      icon: "/2771401-1.png",
      title: "meal variety",
    },
    {
      icon: "/images-1.png",
      title: "a tap away",
    },
    {
      icon: "/ghana-currency-icon-symbol-ghanaian-cedi-ghs-sign-illustration-v.png",
      title: "sustainability",
    },
  ];

  // Pagination dots
  const paginationDots = [
    { active: true },
    { active: false },
    { active: false },
  ];

  const scrollFeaturedMeals = (direction: 'left' | 'right') => {
    const container = document.getElementById('featured-meals-container');
    if (container) {
      const scrollAmount = 320; // Width of one card plus gap
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white overflow-hidden w-full relative">
        <Navigation />

        {/* Hero Section */}
        <section className="mt-16 md:mt-20 pt-4 md:pt-8 relative">
          <div className="flex flex-col lg:flex-row items-center justify-between px-4 md:px-6 py-8 md:py-16 max-w-7xl mx-auto gap-8">
            <div className="max-w-2xl text-center lg:text-left">
              <h1 className="font-['Luckiest_Guy',Helvetica] text-3xl md:text-5xl lg:text-6xl leading-tight">
                <span className="text-black">Have someone over for a </span>
                <span className="text-[#f0803e]">meal</span>
              </h1>
              <p className="font-['Luckiest_Guy',Helvetica] text-black text-lg md:text-xl mt-4 md:mt-6">
                Share your meals today with MealJoin <br />
                and earn some money.
              </p>
              <Link to="/share-meal">
                <Button className="mt-6 md:mt-8 bg-[#f0803e] hover:bg-[#d96d35] rounded-full h-12 md:h-14 px-6 md:px-8 transition-colors">
                  <span className="font-['Luckiest_Guy',Helvetica] text-white text-base md:text-lg">
                    SHARE MEAL
                  </span>
                </Button>
              </Link>
            </div>
            <img
              className="w-full max-w-sm lg:w-80 h-64 md:h-80 lg:h-96 object-cover rounded-2xl"
              alt="Person sharing meal"
              src="/gemini-generated-image-zbgkyzbgkyzbgkyz-1.png"
            />
          </div>
        </section>

        {/* Featured Meals Section */}
        <section className="px-4 md:px-6 py-8 md:py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 md:mb-12 gap-4">
              <h2 className="font-['Luckiest_Guy',Helvetica] text-black text-2xl md:text-3xl">
                Featured Meals Near You
              </h2>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full md:w-auto">
                <div className="hidden md:flex gap-2">
                  <Button
                    onClick={() => scrollFeaturedMeals('left')}
                    className="w-10 h-10 rounded-full bg-white border border-gray-300 hover:bg-gray-50 p-0"
                  >
                    <ChevronLeft className="w-5 h-5 text-gray-600" />
                  </Button>
                  <Button
                    onClick={() => scrollFeaturedMeals('right')}
                    className="w-10 h-10 rounded-full bg-white border border-gray-300 hover:bg-gray-50 p-0"
                  >
                    <ChevronRight className="w-5 h-5 text-gray-600" />
                  </Button>
                </div>
                <Link to="/find-meal">
                  <Button className="bg-[#f0803e] hover:bg-[#d96d35] rounded-full h-10 md:h-12 px-4 md:px-6 transition-colors w-full sm:w-auto">
                    <span className="font-['Luckiest_Guy',Helvetica] text-white text-sm md:text-base">
                      SHOW AS LIST
                    </span>
                  </Button>
                </Link>
              </div>
            </div>

            {/* Horizontal Scrolling Container */}
            <div className="relative">
              <div 
                id="featured-meals-container"
                className="flex gap-4 md:gap-6 overflow-x-auto scrollbar-hide pb-4"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {featuredMeals.map((meal, index) => (
                  <Card
                    key={index}
                    className="flex-shrink-0 w-72 md:w-80 rounded-3xl bg-white shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <div className="flex justify-center -mt-8">
                      <div className="w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center">
                        <img
                          className="w-12 h-12 object-cover rounded-full"
                          alt="Host profile"
                          src="/61f75ea9a680def2ed1c6929fe75aeee-3.png"
                        />
                      </div>
                    </div>
                    <CardContent className="p-4 md:p-6 bg-[#f0efef] rounded-3xl mx-4 mb-4 mt-4">
                      <div className="flex flex-col gap-3">
                        <h3 className="font-['Luckiest_Guy',Helvetica] text-black text-base md:text-lg">
                          {meal.hostName} wants to have you over for a meal
                        </h3>
                        <p className="font-['Luckiest_Guy',Helvetica] text-black text-sm md:text-base">
                          {meal.mealDescription}
                        </p>
                        <p className="font-['Luckiest_Guy',Helvetica] text-black text-base md:text-lg font-bold">
                          {meal.price}
                        </p>
                        <p className="font-['Luckiest_Guy',Helvetica] text-gray-600 text-sm">
                          {meal.location}
                        </p>
                      </div>
                    </CardContent>
                    <div className="flex justify-center mb-6">
                      <Link to={`/meal/${meal.id}`}>
                        <Button className="bg-[#f0803e] hover:bg-[#d96d35] rounded-full h-10 px-4 md:px-6 transition-colors">
                          <span className="font-['Luckiest_Guy',Helvetica] text-white text-base">
                            JOIN
                          </span>
                        </Button>
                      </Link>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Value Proposition Section */}
        <section className="px-4 md:px-6 py-8 md:py-16 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-8 md:gap-12">
              <h2 className="font-['Luckiest_Guy',Helvetica] text-[#4f000b] text-2xl md:text-3xl lg:text-4xl max-w-2xl text-center lg:text-left">
                We're redefining the way you satisfy the meals you crave
              </h2>
              <p className="font-['Luckiest_Guy',Helvetica] text-black text-base md:text-lg leading-relaxed max-w-2xl text-center lg:text-left">
                MealJoin is a dine-in platform that lets you enjoy homemade meals in
                your neighbor's home, offering both delicious food and a sense
                of community and connection.
              </p>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="px-4 md:px-6 py-8 md:py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-['Luckiest_Guy',Helvetica] text-black text-2xl md:text-3xl text-center mb-8 md:mb-16">
              HOW MEALJOIN WORKS
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {howItWorksSteps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="bg-[#720026] rounded-3xl p-6 md:p-8 shadow-lg">
                    <div className="bg-[#f0efef] rounded-3xl p-4 md:p-6 -mt-4 -mx-4">
                      <div className="flex justify-center -mt-12 mb-6">
                        <div className="w-16 h-16 bg-[#d9d9d9] rounded-full flex items-center justify-center shadow-lg">
                          <span className="font-['Luckiest_Guy',Helvetica] text-[#4f000b] text-xl md:text-2xl">
                            {step.number}
                          </span>
                        </div>
                      </div>
                      <h3 className="font-['Luckiest_Guy',Helvetica] text-[#4f000b] text-lg md:text-xl text-center mb-4">
                        {step.title}
                      </h3>
                      <p className="font-['Inter',Helvetica] text-black text-sm md:text-base text-center">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Sections */}
        <section className="px-4 md:px-6 py-8 md:py-16 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 mb-12 md:mb-24">
              <img
                className="w-full lg:w-1/2 h-48 md:h-64 lg:h-80 object-cover rounded-2xl"
                alt="Home-cooked meal"
                src="/photo-2023-08-05-20-48-48-1.png"
              />
              <div className="flex-1">
                <h3 className="font-['Luckiest_Guy',Helvetica] text-[#4f000b] text-xl md:text-2xl lg:text-3xl text-center lg:text-left">
                  Enjoy hot, home-cooked meals, just like mama makes it
                </h3>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row-reverse items-center gap-8 md:gap-12">
              <img
                className="w-full lg:w-1/2 h-48 md:h-64 lg:h-80 object-cover rounded-2xl"
                alt="Ready-to-eat meal"
                src="/photo-2023-08-05-20-48-49.png"
              />
              <div className="flex-1">
                <h3 className="font-['Luckiest_Guy',Helvetica] text-[#4f000b] text-xl md:text-2xl lg:text-3xl text-center lg:text-left">
                  Skip the queue- enjoy a ready-to-eat meal
                </h3>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="px-4 md:px-6 py-8 md:py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {features.map((feature, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <img
                    className="w-16 h-16 md:w-20 md:h-20 object-fit mb-3 md:mb-4"
                    alt={feature.title}
                    src={feature.icon}
                  />
                  <h3 className="font-['Luckiest_Guy',Helvetica] text-black text-base md:text-lg">
                    {feature.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-8 md:py-16 bg-[#f0efef]">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <h2 className="font-['Luckiest_Guy',Helvetica] text-[#4f000b] text-2xl md:text-3xl text-center mb-8 md:mb-16">
              meet the community
            </h2>

            <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12">
              <div className="flex-1">
                <blockquote className="font-['Inter',Helvetica] text-black text-base md:text-lg lg:text-xl text-center leading-relaxed">
                  "It turns out I run a free food shelter for my friends. They are bonded to my food like strong WI-FI. It's cool to keep your friends smiling always, else Legon will make them go crazy."
                </blockquote>
                <div className="font-['Luckiest_Guy',Helvetica] text-[#4f000b] text-base md:text-lg text-center mt-6 md:mt-8">
                  -Ama Serwaa<br />
                  Student, University of Ghana.
                </div>
              </div>

              <div className="flex-1 relative">
                <div className="w-64 h-64 md:w-80 md:h-80 bg-[#720026] rounded-full mx-auto" />
                <img
                  className="absolute w-64 h-64 md:w-80 md:h-80 top-4 left-1/2 transform -translate-x-1/2 object-cover rounded-full"
                  alt="Student testimonial"
                  src="/photo-2025-06-06-06-07-49.png"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-8 md:py-16 bg-[#d9d9d9]">
          <div className="max-w-4xl mx-auto px-4 md:px-6">
            <strong><h2 className="font-['Inter',Helvetica] text-black text-2xl md:text-3xl text-center mb-6 md:mb-8">
              Join the MealJoin Waitlist
            </h2></strong>

            {/* <p className="font-['Inter',Helvetica] text-black text-base md:text-lg text-center mb-8 md:mb-12">
              Stay in the loop with quick bites, budget meals, and campus food hacks.
            </p> */}

              <p className="font-['Inter',Helvetica] text-black text-base md:text-lg text-center mb-8 md:mb-12">
             Early access isn’t for everyone. It’s for you.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 max-w-2xl mx-auto">
              <Input
                className="h-10 md:h-12 flex-1 bg-[#eeeeee] rounded-full text-sm md:text-base px-4 md:px-6"
                placeholder="Your email"
              />
              <Button className="h-10 md:h-12 px-6 md:px-8 bg-[#d9d9d9] hover:bg-[#c9c9c9] rounded-full border border-solid border-black transition-colors">
                <span className="font-['Inter',Helvetica] text-black text-sm md:text-base font-medium">
                  SUBSCRIBE
                </span>
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};