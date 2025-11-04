import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { Navigate, useNavigate } from 'react-router-dom';
import { Navigation } from '../../components/shared/Navigation';
import { Footer } from '../../components/shared/Footer';
import { Button } from '../../components/ui/button';
import { Card, CardContent } from '../../components/ui/card';
import { Input } from '../../components/ui/input';
import { Calendar, Clock, MapPin, Camera, Plus, X } from 'lucide-react';

export const CreateMeal = (): JSX.Element => {
  const { isAuthenticated, isCook } = useAuth();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    cuisineType: '',
    ingredients: [''],
    price: '',
    maxGuests: '',
    date: '',
    time: '',
    duration: '',
    location: '',
    dietaryInfo: [''],
    houseRules: [''],
    images: [] as string[]
  });

  if (!isAuthenticated || !isCook) {
    return <Navigate to="/sign-in" replace />;
  }

  const categories = [
    'African', 'Continental', 'Asian', 'Vegetarian', 'Vegan', 'Gluten-Free', 'Dessert', 'Breakfast'
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleArrayChange = (field: 'ingredients' | 'dietaryInfo' | 'houseRules', index: number, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].map((item, i) => i === index ? value : item)
    }));
  };

  const addArrayItem = (field: 'ingredients' | 'dietaryInfo' | 'houseRules') => {
    setFormData(prev => ({
      ...prev,
      [field]: [...prev[field], '']
    }));
  };

  const removeArrayItem = (field: 'ingredients' | 'dietaryInfo' | 'houseRules', index: number) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = () => {
    // Handle meal creation
    console.log('Creating meal:', formData);
    navigate('/cook-dashboard');
  };

  const steps = [
    { number: 1, title: 'Basic Info', description: 'Meal details and description' },
    { number: 2, title: 'Ingredients', description: 'What goes into your meal' },
    { number: 3, title: 'Logistics', description: 'When, where, and how much' },
    { number: 4, title: 'Guidelines', description: 'Rules and dietary information' },
    { number: 5, title: 'Photos', description: 'Show off your delicious meal' }
  ];

  const renderStep1 = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Meal Title *
        </label>
        <Input
          className="h-12"
          placeholder="e.g., Traditional Jollof Rice Feast"
          value={formData.title}
          onChange={(e) => handleInputChange('title', e.target.value)}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Description *
        </label>
        <textarea
          className="w-full h-32 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f0803e] focus:border-transparent resize-none"
          placeholder="Describe your meal, cooking style, and what makes it special..."
          value={formData.description}
          onChange={(e) => handleInputChange('description', e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Category *
          </label>
          <select
            className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f0803e] focus:border-transparent"
            value={formData.category}
            onChange={(e) => handleInputChange('category', e.target.value)}
          >
            <option value="">Select category</option>
            {categories.map((category) => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Cuisine Type
          </label>
          <Input
            className="h-12"
            placeholder="e.g., Ghanaian, Italian, Chinese"
            value={formData.cuisineType}
            onChange={(e) => handleInputChange('cuisineType', e.target.value)}
          />
        </div>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-4">
          Ingredients *
        </label>
        <div className="space-y-3">
          {formData.ingredients.map((ingredient, index) => (
            <div key={index} className="flex gap-3">
              <Input
                className="h-12 flex-1"
                placeholder="e.g., Premium jasmine rice"
                value={ingredient}
                onChange={(e) => handleArrayChange('ingredients', index, e.target.value)}
              />
              {formData.ingredients.length > 1 && (
                <Button
                  type="button"
                  onClick={() => removeArrayItem('ingredients', index)}
                  className="h-12 w-12 bg-red-500 hover:bg-red-600 text-white rounded-lg p-0"
                >
                  <X className="w-5 h-5" />
                </Button>
              )}
            </div>
          ))}
          <Button
            type="button"
            onClick={() => addArrayItem('ingredients')}
            className="bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 rounded-lg"
          >
            <Plus className="w-5 h-5 mr-2" />
            Add Ingredient
          </Button>
        </div>
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Price per Person (GHC) *
          </label>
          <Input
            className="h-12"
            type="number"
            placeholder="70.00"
            value={formData.price}
            onChange={(e) => handleInputChange('price', e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Maximum Guests *
          </label>
          <Input
            className="h-12"
            type="number"
            placeholder="6"
            value={formData.maxGuests}
            onChange={(e) => handleInputChange('maxGuests', e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Date *
          </label>
          <div className="relative">
            <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              className="h-12 pl-12"
              type="date"
              value={formData.date}
              onChange={(e) => handleInputChange('date', e.target.value)}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Time *
          </label>
          <div className="relative">
            <Clock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              className="h-12 pl-12"
              type="time"
              value={formData.time}
              onChange={(e) => handleInputChange('time', e.target.value)}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Duration
          </label>
          <Input
            className="h-12"
            placeholder="e.g., 2 hours"
            value={formData.duration}
            onChange={(e) => handleInputChange('duration', e.target.value)}
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Location *
        </label>
        <div className="relative">
          <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <Input
            className="h-12 pl-12"
            placeholder="Your address or neighborhood"
            value={formData.location}
            onChange={(e) => handleInputChange('location', e.target.value)}
          />
        </div>
      </div>
    </div>
  );

  const renderStep4 = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-4">
          Dietary Information
        </label>
        <div className="space-y-3">
          {formData.dietaryInfo.map((info, index) => (
            <div key={index} className="flex gap-3">
              <Input
                className="h-12 flex-1"
                placeholder="e.g., Gluten-free option available"
                value={info}
                onChange={(e) => handleArrayChange('dietaryInfo', index, e.target.value)}
              />
              {formData.dietaryInfo.length > 1 && (
                <Button
                  type="button"
                  onClick={() => removeArrayItem('dietaryInfo', index)}
                  className="h-12 w-12 bg-red-500 hover:bg-red-600 text-white rounded-lg p-0"
                >
                  <X className="w-5 h-5" />
                </Button>
              )}
            </div>
          ))}
          <Button
            type="button"
            onClick={() => addArrayItem('dietaryInfo')}
            className="bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 rounded-lg"
          >
            <Plus className="w-5 h-5 mr-2" />
            Add Dietary Info
          </Button>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-4">
          House Rules
        </label>
        <div className="space-y-3">
          {formData.houseRules.map((rule, index) => (
            <div key={index} className="flex gap-3">
              <Input
                className="h-12 flex-1"
                placeholder="e.g., Please arrive on time"
                value={rule}
                onChange={(e) => handleArrayChange('houseRules', index, e.target.value)}
              />
              {formData.houseRules.length > 1 && (
                <Button
                  type="button"
                  onClick={() => removeArrayItem('houseRules', index)}
                  className="h-12 w-12 bg-red-500 hover:bg-red-600 text-white rounded-lg p-0"
                >
                  <X className="w-5 h-5" />
                </Button>
              )}
            </div>
          ))}
          <Button
            type="button"
            onClick={() => addArrayItem('houseRules')}
            className="bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 rounded-lg"
          >
            <Plus className="w-5 h-5 mr-2" />
            Add House Rule
          </Button>
        </div>
      </div>
    </div>
  );

  const renderStep5 = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-4">
          Meal Photos
        </label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
          {formData.images.map((image, index) => (
            <div key={index} className="relative">
              <img
                className="w-full h-32 object-cover rounded-lg"
                alt={`Meal ${index + 1}`}
                src={image}
              />
              <Button
                type="button"
                onClick={() => setFormData(prev => ({
                  ...prev,
                  images: prev.images.filter((_, i) => i !== index)
                }))}
                className="absolute top-2 right-2 w-8 h-8 bg-red-500 hover:bg-red-600 text-white rounded-full p-0"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          ))}
        </div>
        
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
          <Camera className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <h4 className="font-medium text-gray-800 mb-2">Upload Meal Photos</h4>
          <p className="text-gray-600 mb-4">Show off your delicious meal with high-quality photos</p>
          <Button className="bg-[#f0803e] hover:bg-[#d96d35] text-white rounded-lg">
            <Plus className="w-5 h-5 mr-2" />
            Add Photos
          </Button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-white min-h-screen">
      <Navigation />
      
      <section className="mt-20 pt-8 pb-8 bg-gradient-to-r from-[#f0803e] to-[#fdaa00]">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <h1 className="font-['Luckiest_Guy',Helvetica] text-4xl mb-4">
            Create New Meal
          </h1>
          <p className="text-xl">
            Share your culinary passion with the community
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-6">
          {/* Progress Steps */}
          <div className="mb-12">
            <div className="flex items-center justify-between">
              {steps.map((step, index) => (
                <div key={step.number} className="flex items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                    currentStep >= step.number
                      ? 'bg-[#f0803e] text-white'
                      : 'bg-gray-200 text-gray-600'
                  }`}>
                    {step.number}
                  </div>
                  <div className="ml-3 hidden md:block">
                    <div className={`font-medium ${
                      currentStep >= step.number ? 'text-[#f0803e]' : 'text-gray-600'
                    }`}>
                      {step.title}
                    </div>
                    <div className="text-sm text-gray-500">{step.description}</div>
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`w-16 h-1 mx-4 ${
                      currentStep > step.number ? 'bg-[#f0803e]' : 'bg-gray-200'
                    }`} />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Form Content */}
          <Card className="rounded-2xl shadow-lg">
            <CardContent className="p-8">
              <div className="mb-8">
                <h2 className="font-['Luckiest_Guy',Helvetica] text-2xl text-gray-800 mb-2">
                  {steps[currentStep - 1].title}
                </h2>
                <p className="text-gray-600">{steps[currentStep - 1].description}</p>
              </div>

              {currentStep === 1 && renderStep1()}
              {currentStep === 2 && renderStep2()}
              {currentStep === 3 && renderStep3()}
              {currentStep === 4 && renderStep4()}
              {currentStep === 5 && renderStep5()}

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8 pt-8 border-t border-gray-200">
                <Button
                  onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
                  disabled={currentStep === 1}
                  className="bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 rounded-lg px-6"
                >
                  Previous
                </Button>
                
                {currentStep < 5 ? (
                  <Button
                    onClick={() => setCurrentStep(Math.min(5, currentStep + 1))}
                    className="bg-[#f0803e] hover:bg-[#d96d35] text-white rounded-lg px-6"
                  >
                    Next
                  </Button>
                ) : (
                  <Button
                    onClick={handleSubmit}
                    className="bg-[#f0803e] hover:bg-[#d96d35] text-white rounded-lg px-6"
                  >
                    Create Meal
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};