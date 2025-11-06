import React, { useState } from 'react';
import { Navigation } from '../../components/shared/Navigation';
import { Footer } from '../../components/shared/Footer';
import { Button } from '../../components/ui/button';
import { Card, CardContent } from '../../components/ui/card';
import { Input } from '../../components/ui/input';
import { Calendar, Clock, MapPin, Upload, User, ChefHat } from 'lucide-react';

export const ShareMeal = (): JSX.Element => {
  const [formData, setFormData] = useState({
    firstName: '',
    otherNames: '',
    mealName: '',
    description: '',
    ingredientsUsed: '',
    category: '',
    cuisineType: '',
    pricePerPlate: '',
    numberOfPlates: '',
    dateAvailable: '',
    timeAvailable: '',
    location: ''
  });

  const categories = [
    'Breakfast',
    'Lunch', 
    'Dinner',
    'Snack',
    'Dessert',
    'Vegetarian',
    'Vegan'
  ];

  const cuisineTypes = [
    'Ghanaian',
    'Nigerian', 
    'Continental',
    'Asian',
    'Italian',
    'Mexican',
    'Indian',
    'Other'
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

  return (
    <div className="bg-white min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="mt-20 pt-12 pb-8 bg-gradient-to-r from-orange-50 to-orange-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-['Luckiest_Guy',Helvetica] text-4xl md:text-5xl text-gray-800 mb-4">
            Share Your Meal
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Turn your passion for cooking into income. Share delicious homemade meals with your community.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-white rounded-2xl shadow-lg">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-8">
                
                {/* Personal Information Section */}
                <div>
                  <h3 className="font-['Luckiest_Guy',Helvetica] text-xl text-gray-800 mb-6 flex items-center gap-2">
                    <User className="w-6 h-6 text-[#f0803e]" />
                    Personal Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name *
                      </label>
                      <Input
                        className="h-12 rounded-lg border-gray-300 focus:ring-2 focus:ring-[#f0803e] focus:border-transparent"
                        placeholder="Enter your first name"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Other Names
                      </label>
                      <Input
                        className="h-12 rounded-lg border-gray-300 focus:ring-2 focus:ring-[#f0803e] focus:border-transparent"
                        placeholder="Enter your other names"
                        value={formData.otherNames}
                        onChange={(e) => handleInputChange('otherNames', e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                {/* Meal Information Section */}
                <div>
                  <h3 className="font-['Luckiest_Guy',Helvetica] text-xl text-gray-800 mb-6 flex items-center gap-2">
                    <ChefHat className="w-6 h-6 text-[#f0803e]" />
                    Meal Information
                  </h3>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Meal Name *
                      </label>
                      <Input
                        className="h-12 rounded-lg border-gray-300 focus:ring-2 focus:ring-[#f0803e] focus:border-transparent"
                        placeholder="e.g., Traditional Jollof Rice with Grilled Chicken"
                        value={formData.mealName}
                        onChange={(e) => handleInputChange('mealName', e.target.value)}
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Description (optional) 
                      </label>
                      <textarea
                        className="w-full h-24 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f0803e] focus:border-transparent resize-none"
                        placeholder="Describe your meal, cooking style, and what makes it special..."
                        value={formData.description}
                        onChange={(e) => handleInputChange('description', e.target.value)}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Ingredients Used *
                      </label>
                      <textarea
                        className="w-full h-24 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f0803e] focus:border-transparent resize-none"
                        placeholder="List the main ingredients you'll be using..."
                        value={formData.ingredientsUsed}
                        onChange={(e) => handleInputChange('ingredientsUsed', e.target.value)}
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Beverage Options (checkboxes for water / drink) */}
                <div>
                  <h3 className="font-['Luckiest_Guy',Helvetica] text-xl text-gray-800 mb-6">
                  Beverage Options
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                  <label className="flex items-center gap-3">
                    <input
                    type="checkbox"
                    className="w-5 h-5"
                    checked={formData.category === 'true'}
                    onChange={(e) => handleInputChange('category', e.target.checked ? 'true' : '')}
                    aria-label="Include water with the meal"
                    />
                    <span className="text-sm text-gray-700">Water</span>
                  </label>

                  <label className="flex items-center gap-3">
                    <input
                    type="checkbox"
                    className="w-5 h-5"
                    checked={formData.cuisineType === 'true'}
                    onChange={(e) => handleInputChange('cuisineType', e.target.checked ? 'true' : '')}
                    aria-label="Include a drink with the meal"
                    />
                    <span className="text-sm text-gray-700">Drink</span>
                  </label>
                  </div>
                </div>

                {/* Pricing & Quantity Section */}
                <div>
                  <h3 className="font-['Luckiest_Guy',Helvetica] text-xl text-gray-800 mb-6">
                    Pricing & Quantity
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Price per Plate (GHS) *
                      </label>
                      <Input
                        className="h-12 rounded-lg border-gray-300 focus:ring-2 focus:ring-[#f0803e] focus:border-transparent"
                        type="number"
                        placeholder="70.00"
                        min="0"
                        step="0.01"
                        value={formData.pricePerPlate}
                        onChange={(e) => handleInputChange('pricePerPlate', e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Number of Plates Available *
                      </label>
                      <Input
                        className="h-12 rounded-lg border-gray-300 focus:ring-2 focus:ring-[#f0803e] focus:border-transparent"
                        type="number"
                        placeholder="6"
                        min="1"
                        value={formData.numberOfPlates}
                        onChange={(e) => handleInputChange('numberOfPlates', e.target.value)}
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Date & Time Section */}
                <div>
                  <h3 className="font-['Luckiest_Guy',Helvetica] text-xl text-gray-800 mb-6">
                    Date & Time
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Date Available *
                      </label>
                      <div className="relative">
                        <Input
                          className="h-12 pr-12 rounded-lg border-gray-300 focus:ring-2 focus:ring-[#f0803e] focus:border-transparent"
                          type="date"
                          value={formData.dateAvailable}
                          onChange={(e) => handleInputChange('dateAvailable', e.target.value)}
                          required
                        />
                        <Calendar className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Time Available *
                      </label>
                      <div className="relative">
                        <Input
                          className="h-12 pr-12 rounded-lg border-gray-300 focus:ring-2 focus:ring-[#f0803e] focus:border-transparent"
                          type="time"
                          value={formData.timeAvailable}
                          onChange={(e) => handleInputChange('timeAvailable', e.target.value)}
                          required
                        />
                        <Clock className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hall/Hostel Section */}
                {/* <div>
                  <h3 className="font-['Luckiest_Guy',Helvetica] text-xl text-gray-800 mb-6">
                    Hall/Hostel Information
                  </h3>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Hall/Hostel Name *
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <Input
                        className="h-12 pl-12 rounded-lg border-gray-300 focus:ring-2 focus:ring-[#f0803e] focus:border-transparent"
                        placeholder="e.g., Commonwealth Hall, Legon Hall"
                        value={formData.location}
                        onChange={(e) => handleInputChange('location', e.target.value)}
                        required
                      />
                    </div>
                    <p className="text-sm text-gray-500 mt-2">
                      Enter your hall or hostel name (room number not required)
                    </p>
                  </div>
                </div> */}

    <div>
      

        <div className="relative">
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 mt-3">

          <button
            type="button"
            onClick={() => {
              if (!navigator.geolocation) {
                alert('Geolocation is not supported by your browser.');
                return;
              }
              navigator.geolocation.getCurrentPosition(
                (pos) => {
                  const lat = pos.coords.latitude;
                  const lng = pos.coords.longitude;
                  // store as "lat,lng" so we can render a preview map
                  handleInputChange('location', `${lat},${lng}`);
                },
                () => {
                  alert('Unable to retrieve your location. Please ensure location services are enabled.');
                },
                { enableHighAccuracy: true, timeout: 10000 }
              );
            }}
            className="inline-flex items-center px-4 pr-2 py-2 bg-[#f0803e] hover:bg-[#d96d35] text-white rounded-lg shadow-sm text-sm"
          >
          <MapPin className=" w-5 h-5 text-gray-400" />

            Use my current location
          </button>

         
        </div>

        {/* Static map preview when a lat,lng value is present in formData.location.
            Replace YOUR_GOOGLE_MAPS_API_KEY with your Maps Static API key. */}
        {formData.location && /^[\d\-.]+,[\d\-.]+$/.test(formData.location) && (
          <div className="mt-4 rounded-lg overflow-hidden border">
            <img
              src={`https://maps.googleapis.com/maps/api/staticmap?center=${encodeURIComponent(
                formData.location
              )}&zoom=16&size=600x300&markers=color:red%7C${encodeURIComponent(
                formData.location
              )}&scale=2&key=YOUR_GOOGLE_MAPS_API_KEY`}
              alt="Selected location preview"
              className="w-full h-48 object-cover"
            />
            <p className="text-sm text-gray-500 p-2">
              Preview of selected location. The value saved will be latitude,longitude.
            </p>
          </div>
        )}
      </div>
    </div>

                {/* Photo Upload Section */}
                <div>
                  <h3 className="font-['Luckiest_Guy',Helvetica] text-xl text-gray-800 mb-6">
                    Meal Photos
                  </h3>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center bg-gray-50 hover:bg-gray-100 transition-colors">
                    <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <h4 className="font-medium text-gray-800 mb-2">Click to upload photos of your meal</h4>
                    <p className="text-gray-600 mb-4">Show off your delicious creation with high-quality photos</p>
                    <p className="text-sm text-gray-500 mb-4">
                      Supported formats: JPG, PNG, WEBP • Max file size: 5MB each
                    </p>
                    <Button 
                      type="button"
                      className="bg-white border-2 border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 rounded-lg px-6 py-2"
                    >
                      Choose Files
                    </Button>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-6">
                  <Button 
                    type="submit"
                    className="w-full h-14 bg-[#f0803e] hover:bg-[#d96d35] text-white rounded-lg font-['Luckiest_Guy',Helvetica] text-lg transition-colors shadow-lg"
                  >
                    LIST MY MEAL
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};