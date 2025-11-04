import React, { useState } from 'react';
import { useParams, useSearchParams, Link } from 'react-router-dom';
import { Navigation } from '../../components/shared/Navigation';
import { Footer } from '../../components/shared/Footer';
import { Button } from '../../components/ui/button';
import { Card, CardContent } from '../../components/ui/card';
import { Input } from '../../components/ui/input';
import { MapPin, Clock, Users, Calendar, CreditCard, Shield, CheckCircle } from 'lucide-react';

export const BookingConfirmation = (): JSX.Element => {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const guests = parseInt(searchParams.get('guests') || '1');
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    specialRequests: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardName: ''
  });

  const [isProcessing, setIsProcessing] = useState(false);
  const [bookingComplete, setBookingComplete] = useState(false);

  // Mock meal data
  const meal = {
    id: parseInt(id || '1'),
    hostName: 'Kevin Asante',
    hostImage: '/61f75ea9a680def2ed1c6929fe75aeee-3.png',
    mealTitle: 'Traditional Jollof Rice Feast',
    price: 70.00,
    currency: 'GHC',
    location: 'Millennium City Estate, Accra',
    date: '2025-01-15',
    time: '6:30 PM',
    image: '/photo-2023-08-05-20-48-48-1.png'
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setBookingComplete(true);
    }, 3000);
  };

  if (bookingComplete) {
    return (
      <div className="bg-white min-h-screen">
        <Navigation />
        
        <section className="mt-20 pt-12 pb-16">
          <div className="max-w-2xl mx-auto px-6 text-center">
            <div className="mb-8">
              <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-4" />
              <h1 className="font-['Luckiest_Guy',Helvetica] text-3xl text-gray-800 mb-4">
                Booking Confirmed!
              </h1>
              <p className="text-gray-600 text-lg">
                Your meal with {meal.hostName} has been successfully booked.
              </p>
            </div>

            <Card className="rounded-2xl shadow-lg mb-8">
              <CardContent className="p-6">
                <h3 className="font-['Luckiest_Guy',Helvetica] text-xl text-gray-800 mb-4">
                  Booking Details
                </h3>
                <div className="space-y-3 text-left">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Booking ID:</span>
                    <span className="font-medium">MJ-{Date.now().toString().slice(-6)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Meal:</span>
                    <span className="font-medium">{meal.mealTitle}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Host:</span>
                    <span className="font-medium">{meal.hostName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Date & Time:</span>
                    <span className="font-medium">{new Date(meal.date).toLocaleDateString()} at {meal.time}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Guests:</span>
                    <span className="font-medium">{guests}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total Paid:</span>
                    <span className="font-medium text-[#f0803e]">{meal.currency} {(meal.price * guests * 1.1).toFixed(2)}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-4">
              <p className="text-gray-600">
                A confirmation email has been sent to your email address with all the details.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/find-meal">
                  <Button className="w-full sm:w-auto bg-[#f0803e] hover:bg-[#d96d35] text-white rounded-lg px-6">
                    Find More Meals
                  </Button>
                </Link>
                <Link to="/">
                  <Button className="w-full sm:w-auto bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 rounded-lg px-6">
                    Back to Home
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      <Navigation />
      
      <section className="mt-20 pt-8 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-8">
            <h1 className="font-['Luckiest_Guy',Helvetica] text-3xl text-gray-800 mb-4">
              Complete Your Booking
            </h1>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Link to="/" className="hover:text-[#f0803e]">Home</Link>
              <span>/</span>
              <Link to="/find-meal" className="hover:text-[#f0803e]">Find Meal</Link>
              <span>/</span>
              <Link to={`/meal/${meal.id}`} className="hover:text-[#f0803e]">{meal.mealTitle}</Link>
              <span>/</span>
              <span className="text-gray-800">Booking</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Booking Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Guest Information */}
                <Card className="rounded-2xl shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="font-['Luckiest_Guy',Helvetica] text-xl text-gray-800 mb-6">
                      Guest Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          First Name *
                        </label>
                        <Input
                          className="h-12"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange('firstName', e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Last Name *
                        </label>
                        <Input
                          className="h-12"
                          value={formData.lastName}
                          onChange={(e) => handleInputChange('lastName', e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <Input
                          className="h-12"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number *
                        </label>
                        <Input
                          className="h-12"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div className="mt-4">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Special Requests or Dietary Requirements
                      </label>
                      <textarea
                        className="w-full h-24 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f0803e] focus:border-transparent resize-none"
                        placeholder="Let your host know about any allergies or special requirements..."
                        value={formData.specialRequests}
                        onChange={(e) => handleInputChange('specialRequests', e.target.value)}
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* Payment Information */}
                <Card className="rounded-2xl shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="font-['Luckiest_Guy',Helvetica] text-xl text-gray-800 mb-6 flex items-center gap-2">
                      <CreditCard className="w-6 h-6 text-[#f0803e]" />
                      Payment Information
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Cardholder Name *
                        </label>
                        <Input
                          className="h-12"
                          value={formData.cardName}
                          onChange={(e) => handleInputChange('cardName', e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Card Number *
                        </label>
                        <Input
                          className="h-12"
                          placeholder="1234 5678 9012 3456"
                          value={formData.cardNumber}
                          onChange={(e) => handleInputChange('cardNumber', e.target.value)}
                          required
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Expiry Date *
                          </label>
                          <Input
                            className="h-12"
                            placeholder="MM/YY"
                            value={formData.expiryDate}
                            onChange={(e) => handleInputChange('expiryDate', e.target.value)}
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            CVV *
                          </label>
                          <Input
                            className="h-12"
                            placeholder="123"
                            value={formData.cvv}
                            onChange={(e) => handleInputChange('cvv', e.target.value)}
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="mt-6 flex items-center gap-2 text-sm text-gray-600">
                      <Shield className="w-5 h-5 text-green-500" />
                      <span>Your payment information is secure and encrypted</span>
                    </div>
                  </CardContent>
                </Card>

                <Button 
                  type="submit"
                  disabled={isProcessing}
                  className="w-full h-14 bg-[#f0803e] hover:bg-[#d96d35] text-white rounded-lg font-medium text-lg"
                >
                  {isProcessing ? 'Processing Payment...' : `Pay ${meal.currency} ${(meal.price * guests * 1.1).toFixed(2)}`}
                </Button>
              </form>
            </div>

            {/* Booking Summary */}
            <div className="lg:col-span-1">
              <Card className="rounded-2xl shadow-lg sticky top-24">
                <CardContent className="p-6">
                  <h3 className="font-['Luckiest_Guy',Helvetica] text-xl text-gray-800 mb-6">
                    Booking Summary
                  </h3>
                  
                  <div className="flex gap-4 mb-6">
                    <img
                      className="w-20 h-20 object-cover rounded-lg"
                      alt={meal.mealTitle}
                      src={meal.image}
                    />
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-800 mb-1">{meal.mealTitle}</h4>
                      <p className="text-sm text-gray-600">Hosted by {meal.hostName}</p>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3 text-sm text-gray-600">
                      <Calendar className="w-5 h-5" />
                      <span>{new Date(meal.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-600">
                      <Clock className="w-5 h-5" />
                      <span>{meal.time}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-600">
                      <Users className="w-5 h-5" />
                      <span>{guests} {guests === 1 ? 'Guest' : 'Guests'}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-600">
                      <MapPin className="w-5 h-5" />
                      <span>{meal.location}</span>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">{meal.currency} {meal.price.toFixed(2)} x {guests} guests</span>
                        <span>{meal.currency} {(meal.price * guests).toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Service fee</span>
                        <span>{meal.currency} {(meal.price * guests * 0.1).toFixed(2)}</span>
                      </div>
                    </div>
                    <div className="border-t pt-2">
                      <div className="flex justify-between font-bold text-lg">
                        <span>Total</span>
                        <span className="text-[#f0803e]">{meal.currency} {(meal.price * guests * 1.1).toFixed(2)}</span>
                      </div>
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