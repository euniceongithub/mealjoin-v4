import React, { useState } from 'react';
import { Navigation } from '../../components/shared/Navigation';
import { Footer } from '../../components/shared/Footer';
import { Button } from '../../components/ui/button';
import { Card, CardContent } from '../../components/ui/card';
import { Input } from '../../components/ui/input';
import { AlertTriangle, MessageSquare, User, Mail, Phone, FileText, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Complaint = (): JSX.Element => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    complaintType: '',
    subject: '',
    description: '',
    orderId: '',
    hostName: '',
    incidentDate: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const complaintTypes = [
    { value: 'food-quality', label: 'Food Quality Issues' },
    { value: 'host-behavior', label: 'Host Behavior' },
    { value: 'hygiene', label: 'Hygiene Concerns' },
    { value: 'payment', label: 'Payment Issues' },
    { value: 'cancellation', label: 'Booking Cancellation' },
    { value: 'safety', label: 'Safety Concerns' },
    { value: 'other', label: 'Other' }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Complaint submitted:', formData);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="bg-white min-h-screen">
        <Navigation />
        
        <section className="mt-20 pt-12 pb-16">
          <div className="max-w-2xl mx-auto px-6 text-center">
            <div className="mb-8">
              <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-4" />
              <h1 className="font-['Luckiest_Guy',Helvetica] text-3xl text-gray-800 mb-4">
                Complaint Submitted Successfully
              </h1>
              <p className="text-gray-600 text-lg">
                Thank you for bringing this to our attention. We take all complaints seriously and will investigate this matter promptly.
              </p>
            </div>

            <Card className="rounded-2xl shadow-lg mb-8">
              <CardContent className="p-6">
                <h3 className="font-['Luckiest_Guy',Helvetica] text-xl text-gray-800 mb-4">
                  What Happens Next?
                </h3>
                <div className="space-y-4 text-left">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-[#f0803e] text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                    <div>
                      <h4 className="font-medium text-gray-800">Acknowledgment</h4>
                      <p className="text-sm text-gray-600">You'll receive an email confirmation with your complaint reference number within 24 hours.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-[#f0803e] text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                    <div>
                      <h4 className="font-medium text-gray-800">Investigation</h4>
                      <p className="text-sm text-gray-600">Our team will investigate your complaint and may contact you for additional information.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-[#f0803e] text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                    <div>
                      <h4 className="font-medium text-gray-800">Resolution</h4>
                      <p className="text-sm text-gray-600">We'll provide a resolution and update you on any actions taken within 5-7 business days.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-4">
              <p className="text-gray-600">
                Your complaint reference number: <strong>MJ-{Date.now().toString().slice(-8)}</strong>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={() => setIsSubmitted(false)}
                  className="bg-[#f0803e] hover:bg-[#d96d35] text-white rounded-lg px-6"
                >
                  Submit Another Complaint
                </Button>
                <Link to="/">
                  <Button className="bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 rounded-lg px-6">
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
      
      {/* Header */}
      <section className="mt-20 pt-8 pb-8 bg-gradient-to-r from-[#f0803e] to-[#fdaa00]">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <div className="flex items-center justify-center gap-3 mb-4">
            <AlertTriangle className="w-8 h-8" />
            <h1 className="font-['Luckiest_Guy',Helvetica] text-4xl">
              Submit a Complaint
            </h1>
          </div>
          <p className="text-xl">
            We're here to help resolve any issues you may have experienced
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-12">
        <div className="max-w-3xl mx-auto px-6">
          <Card className="rounded-2xl shadow-lg">
            <CardContent className="p-8">
              <div className="mb-8">
                <h2 className="font-['Luckiest_Guy',Helvetica] text-2xl text-gray-800 mb-4">
                  Tell Us What Happened
                </h2>
                <p className="text-gray-600">
                  Please provide as much detail as possible to help us understand and resolve your concern quickly.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <Input
                        className="h-12 pl-12"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <Input
                        className="h-12 pl-12"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <Input
                        className="h-12 pl-12"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Complaint Type *
                    </label>
                    <select
                      className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f0803e] focus:border-transparent"
                      value={formData.complaintType}
                      onChange={(e) => handleInputChange('complaintType', e.target.value)}
                      required
                    >
                      <option value="">Select complaint type</option>
                      {complaintTypes.map((type) => (
                        <option key={type.value} value={type.value}>
                          {type.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Incident Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Booking/Order ID (if applicable)
                    </label>
                    <Input
                      className="h-12"
                      placeholder="e.g., MJ-123456"
                      value={formData.orderId}
                      onChange={(e) => handleInputChange('orderId', e.target.value)}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Host Name (if applicable)
                    </label>
                    <Input
                      className="h-12"
                      value={formData.hostName}
                      onChange={(e) => handleInputChange('hostName', e.target.value)}
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Date of Incident
                    </label>
                    <Input
                      className="h-12"
                      type="date"
                      value={formData.incidentDate}
                      onChange={(e) => handleInputChange('incidentDate', e.target.value)}
                    />
                  </div>
                </div>

                {/* Complaint Details */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <Input
                    className="h-12"
                    placeholder="Brief summary of your complaint"
                    value={formData.subject}
                    onChange={(e) => handleInputChange('subject', e.target.value)}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Detailed Description *
                  </label>
                  <textarea
                    className="w-full h-32 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f0803e] focus:border-transparent resize-none"
                    placeholder="Please provide a detailed description of what happened, including dates, times, and any relevant circumstances..."
                    value={formData.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    required
                  />
                </div>

                {/* File Upload */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Supporting Documents (Optional)
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <FileText className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-600 mb-2">Upload photos, screenshots, or documents</p>
                    <p className="text-sm text-gray-500">Max file size: 10MB. Supported formats: JPG, PNG, PDF</p>
                    <Button 
                      type="button"
                      className="mt-3 bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 rounded-lg"
                    >
                      Choose Files
                    </Button>
                  </div>
                </div>

                {/* Privacy Notice */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-800 mb-2">Privacy & Confidentiality</h4>
                  <p className="text-sm text-gray-600">
                    Your complaint will be handled confidentially and in accordance with our privacy policy. 
                    We may share relevant information with the host or third parties only as necessary to 
                    investigate and resolve your complaint.
                  </p>
                </div>

                {/* Submit Button */}
                <div className="pt-6">
                  <Button 
                    type="submit"
                    className="w-full h-14 bg-[#f0803e] hover:bg-[#d96d35] text-white rounded-lg font-medium text-lg"
                  >
                    Submit Complaint
                  </Button>
                </div>
              </form>

              {/* Contact Info */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h4 className="font-medium text-gray-800 mb-3">Need Immediate Assistance?</h4>
                <div className="flex flex-col sm:flex-row gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    <span>Emergency: 0248680999</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    <span>complaints@mealjoin.com</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};