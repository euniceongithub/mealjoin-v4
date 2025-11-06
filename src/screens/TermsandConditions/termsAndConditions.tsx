import React from 'react';
import { Navigation } from '../../components/shared/Navigation';
import { Footer } from '../../components/shared/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Separator } from '../../components/ui/separator';
import { FileText, Shield, Users, Mail, Globe, AlertTriangle } from 'lucide-react';

export const TermsAndConditions = (): JSX.Element => {
  const sections = [
    {
      icon: <FileText className="w-6 h-6 text-[#f0803e]" />,
      title: 'Acceptance of Terms',
      content: 'By accessing and using this website and any features therein, you agree and accept to be bound and comply by these terms and conditions and any other notices. If you do not agree, do not use the site.'
    },
    {
      icon: <Users className="w-6 h-6 text-[#f0803e]" />,
      title: 'Services Provided',
      content: 'MealJoin is a software platform that enables people to dine-in at hosts\' homes. Our services include but are not limited to:',
      list: [
        'Sharing meals online by hosts',
        'Find meals prepared by hosts at home',
        'Access to dine-in at the hosts\' home'
      ]
    },
    {
      icon: <Shield className="w-6 h-6 text-[#f0803e]" />,
      title: 'User Responsibilities',
      content: 'Any user of MealJoin agrees to:',
      list: [
        'Provide accurate and up-to-date information',
        'Maintain the confidentiality of your account credentials',
        'Use the services in compliance with applicable laws and regulations',
        'Refrain from unauthorized use or distribution of content from the company\'s website'
      ]
    },
    {
      icon: <Globe className="w-6 h-6 text-[#f0803e]" />,
      title: 'Intellectual Property',
      content: 'Intellectual property laws protect the MealJoin website and its contents. You may not reproduce, modify, distribute, or display any part of our website without prior written consent from MealJoin.'
    },
    {
      icon: <AlertTriangle className="w-6 h-6 text-[#f0803e]" />,
      title: 'Limitation of Liability',
      content: 'Hosts have the sole right to accept or decline requests from people based on their own discretion. MealJoin shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from the use or inability to use our services or any content provided on the website.'
    }
  ];

  const additionalSections = [
    {
      title: 'Privacy',
      content: 'Your privacy is important to us. Please refer to our Privacy Policy to understand how we collect, use, and protect your personal information.'
    },
    {
      title: 'Governing Law',
      content: 'These terms and conditions shall be governed by and construed in accordance with the laws of [your jurisdiction].'
    },
    {
      title: 'Changes to Terms and Conditions',
      content: 'MealJoin reserves the right, at its sole discretion, to change, modify, add, or remove any parts of these terms and conditions at any time. It is your responsibility to check for changes. We will notify users of any significant changes through our website. Continued use of our services after changes will mean you accept and agree to the changes.'
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="mt-20 pt-12 pb-8 bg-gradient-to-r from-[#f0803e] to-[#fdaa00]">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <h1 className="font-['Luckiest_Guy',Helvetica] text-4xl md:text-5xl mb-4">
            Terms & Conditions
          </h1>
          <p className="text-xl mb-4">
            Understanding our guidelines for a safe dining experience
          </p>
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 inline-block">
            <p className="text-sm font-medium">
              Last updated: Wednesday, October 29th, 2023
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          
          {/* Introduction */}
          <Card className="mb-8 border-l-4 border-l-[#f0803e]">
            <CardHeader>
              <CardTitle className="font-['Luckiest_Guy',Helvetica] text-2xl text-gray-800 flex items-center gap-3">
                <FileText className="w-8 h-8 text-[#f0803e]" />
                Terms and Conditions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-gray-600 leading-relaxed">
                Welcome to MealJoin! These terms and conditions outline the rules and regulations 
                for the use of our platform. By using our service, you agree to comply with these terms.
              </p>
            </CardContent>
          </Card>

          {/* Main Sections */}
          <div className="space-y-6">
            {sections.map((section, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-800 flex items-center gap-3">
                    {section.icon}
                    {section.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {section.content}
                  </p>
                  {section.list && (
                    <ul className="space-y-2 ml-4">
                      {section.list.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-2 text-gray-600">
                          <div className="w-2 h-2 bg-[#f0803e] rounded-full mt-2 flex-shrink-0"></div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          <Separator className="my-12" />

          {/* Additional Sections */}
          <div className="space-y-6">
            {additionalSections.map((section, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-800">
                    {section.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">
                    {section.content}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Separator className="my-12" />

          {/* Contact Section */}
          <Card className="bg-gradient-to-r from-[#f0803e]/10 to-[#fdaa00]/10 border-[#f0803e]/20">
            <CardHeader>
              <CardTitle className="text-xl text-gray-800 flex items-center gap-3">
                <Mail className="w-6 h-6 text-[#f0803e]" />
                Contact Us
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 leading-relaxed mb-4">
                Should you have any questions or concerns about these terms and conditions, 
                please don't hesitate to reach out to us.
              </p>
              <div className="flex items-center gap-2 text-[#f0803e] font-medium">
                <Mail className="w-5 h-5" />
                <a 
                  href="mailto:mealjoin@gmail.com"
                  className="hover:underline transition-all duration-200"
                >
                  mealjoin@gmail.com
                </a>
              </div>
            </CardContent>
          </Card>

          {/* Important Notice */}
          <div className="mt-8 p-6 bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-yellow-800 mb-2">Important Notice</h4>
                <p className="text-yellow-700 text-sm leading-relaxed">
                  These terms and conditions are legally binding. Please read them carefully and 
                  contact us if you have any questions before using our services. By continuing 
                  to use MealJoin, you acknowledge that you have read, understood, and agree to 
                  be bound by these terms.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
};
