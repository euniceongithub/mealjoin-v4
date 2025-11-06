import React from 'react';
import { Navigation } from '../../components/shared/Navigation';
import { Footer } from '../../components/shared/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Separator } from '../../components/ui/separator';
import { 
  Shield, 
  Database, 
  Lock, 
  Users, 
  Mail, 
  CreditCard, 
  RefreshCw,
  AlertTriangle,
  Phone,
  Clock,
  XCircle
} from 'lucide-react';

export const PrivacyPolicy = (): JSX.Element => {
  const privacySections = [
    {
      icon: <Database className="w-6 h-6 text-[#f0803e]" />,
      title: 'Data Collection',
      content: 'We collect personal information from our users only when necessary to provide our services. MealJoin has two categories of users: MealJoin (people who prepare meals at home and are willing to accommodate other people to dine-in in their homes) and eaters (people who use the website to find MealJoin and go over to eat).',
      subsections: [
        {
          title: 'Eater Data',
          items: [
            'Full name, nationality, date of birth, sex, and contact information (email, phone number, and GPS location)',
            'Usage data (such as frequency of use, pages visited, and search terms)',
            'Eating time at MealJoins\' home'
          ]
        },
        {
          title: 'MealJoin Data',
          items: [
            'Full name, nationality, sex, date of birth, and contact information (email, GPS location, house number, and phone number)',
            'Name of meal, ingredients used to prepare meals, cooking time, cost of ingredients',
            'Usage data (such as frequency of use, pages visited, and search terms)'
          ]
        }
      ]
    },
    {
      icon: <Users className="w-6 h-6 text-[#f0803e]" />,
      title: 'Data Use',
      content: 'The personal data we collect is used only for the purpose of providing our services to our users. This includes:',
      list: [
        'Creating and managing user accounts',
        'Communication between users',
        'Communicating with users about our services'
      ],
      note: 'No data is shared or sold to third parties. We do not take data on what transpires during physical interactions between users and also during eating. Any information entered by users is solely for the purpose of creating and managing their own accounts.'
    },
    {
      icon: <Lock className="w-6 h-6 text-[#f0803e]" />,
      title: 'Data Protection',
      content: 'Measures taken to protect the data obtained include:',
      protectionMeasures: [
        {
          title: 'Data Encryption',
          description: 'At MealJoin, Transport Layer Security (TLS); a standard industry protocol is used to protect the transmission between your device and our servers. This is to ensure that your data remains confidential during transit.'
        },
        {
          title: 'Access Control',
          description: 'MealJoin implements robust access controls to restrict access to your data. Our access control measures include user authentication, role-based access, and stringent password policies. Only authorized personnel have access to your data.'
        },
        {
          title: 'Data Storage',
          description: 'Your data is stored securely on our servers. We employ encryption at rest to safeguard your information when it is not in use. This means that if unauthorized access to our servers occurs, your data remains protected.'
        },
        {
          title: 'Data Backup',
          description: 'At MealJoin, we perform regular data backups to ensure that your data is recoverable in the event of data loss due to unforeseen circumstances. Backup data is also subject to the same stringent security measures.'
        },
        {
          title: 'Incident Response',
          description: 'In the unlikely event of a data breach or security incident, we have an incident response plan in place. This plan outlines how we respond to such incidents and how we notify affected users, as required by law.'
        },
        {
          title: 'Third-Party Data Processors',
          description: 'MealJoin works with trusted Third-Party service providers who adhere to our stringent data protection and security requirements. These partners are chosen carefully to ensure that your data is secured.'
        },
        {
          title: 'Data Privacy Compliance',
          description: 'MealJoin is committed to compliance with data protection regulations that apply to your data. If you have privacy rights under these regulations, you can exercise them through the channels we provide.'
        },
        {
          title: 'User Education and Training',
          description: 'At MealJoin, team members are educated and trained on data protection best practices to reduce the risk of human errors that could compromise your data security.'
        }
      ]
    }
  ];

  const paymentSections = [
    {
      icon: <CreditCard className="w-6 h-6 text-[#f0803e]" />,
      title: 'Payment Policy',
      content: 'This document applies to the payment of users\' commission and charges payable to MealJoin Technologies Ltd by the MealJoin Network for the use of our platform.',
      details: [
        'MealJoin Technologies Ltd collects a commission of 10% on the cost of all meal requests received through either the App or the website.',
        'MealJoins will be settled 24 hours after an eater makes payment and completes the dine-in process. This does not include weekends and holidays.'
      ]
    }
  ];

  const refundSections = [
    {
      icon: <RefreshCw className="w-6 h-6 text-[#f0803e]" />,
      title: 'Meal Request Error',
      content: 'We sincerely apologise if you receive any meal that differs from what was purchased. Please adhere to our request not to eat any meal that differs from what you paid for. Please contact us within 1 hour via email or our helpline as soon as you discover a problem with the meal. You will be repaid in full for our online payment after our thorough investigations are completed and consensus is reached.'
    },
    {
      icon: <XCircle className="w-6 h-6 text-[#f0803e]" />,
      title: 'Meal Dissatisfaction',
      content: 'Refunds are not given for meals that an eater just does not like. We would welcome it if you could leave a review, send us an email, or call us to let us know about your issue.'
    },
    {
      icon: <Clock className="w-6 h-6 text-[#f0803e]" />,
      title: 'Cancel Meal Request',
      content: 'If you change your mind or incorrectly request and pay for a meal, we cannot refund or reimburse you.'
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="mt-20 pt-12 pb-8 bg-gradient-to-r from-[#f0803e] to-[#fdaa00]">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <h1 className="font-['Luckiest_Guy',Helvetica] text-4xl md:text-5xl mb-4">
            Privacy Policy
          </h1>
          <p className="text-xl mb-4">
            Your privacy and security are our top priorities
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
                <Shield className="w-8 h-8 text-[#f0803e]" />
                Privacy Policy
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-gray-600 leading-relaxed">
                MealJoin is keen on taking the privacy and security of our users' data very seriously. 
                This privacy policy outlines the types of data we collect, how we use it, and how we protect it.
              </p>
            </CardContent>
          </Card>

          {/* Privacy Sections */}
          <div className="space-y-6">
            {privacySections.map((section, index) => (
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
                  
                  {/* Subsections for Data Collection */}
                  {section.subsections && (
                    <div className="space-y-4">
                      {section.subsections.map((subsection, subIndex) => (
                        <div key={subIndex} className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                            <div className="w-3 h-3 bg-[#f0803e] rounded-full"></div>
                            {subsection.title}
                          </h4>
                          <ul className="space-y-2 ml-5">
                            {subsection.items.map((item, itemIndex) => (
                              <li key={itemIndex} className="flex items-start gap-2 text-gray-600">
                                <div className="w-2 h-2 bg-[#f0803e] rounded-full mt-2 flex-shrink-0"></div>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Regular List */}
                  {section.list && (
                    <ul className="space-y-2 ml-4 mb-4">
                      {section.list.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-2 text-gray-600">
                          <div className="w-2 h-2 bg-[#f0803e] rounded-full mt-2 flex-shrink-0"></div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Protection Measures */}
                  {section.protectionMeasures && (
                    <div className="space-y-4">
                      {section.protectionMeasures.map((measure, measureIndex) => (
                        <div key={measureIndex} className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                            <Lock className="w-4 h-4 text-[#f0803e]" />
                            {measure.title}
                          </h4>
                          <p className="text-gray-600 leading-relaxed ml-6">
                            {measure.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Note */}
                  {section.note && (
                    <div className="mt-4 p-4 bg-blue-50 border-l-4 border-blue-400 rounded-r-lg">
                      <p className="text-blue-700 text-sm leading-relaxed">
                        <strong>Note:</strong> {section.note}
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          <Separator className="my-12" />

          {/* Changes to Policy */}
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-xl text-gray-800 flex items-center gap-3">
                <RefreshCw className="w-6 h-6 text-[#f0803e]" />
                Changes to Policy
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 leading-relaxed">
                This privacy policy may be updated occasionally to reflect changes to our services 
                or evolving legal requirements. Any significant changes will be communicated to users, 
                who will then have the chance to evaluate and accept the updated policies.
              </p>
            </CardContent>
          </Card>

          <Separator className="my-12" />

          {/* Payment Policy Section */}
          <div className="mb-8">
            <h2 className="font-['Luckiest_Guy',Helvetica] text-3xl text-gray-800 mb-6 text-center">
              Payment Policy
            </h2>
            <p className="text-center text-gray-600 mb-8">
              Last updated: Wednesday, February 3rd, 2024
            </p>
            
            {paymentSections.map((section, index) => (
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
                  {section.details && (
                    <ul className="space-y-3 ml-4">
                      {section.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start gap-2 text-gray-600">
                          <div className="w-2 h-2 bg-[#f0803e] rounded-full mt-2 flex-shrink-0"></div>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          <Separator className="my-12" />

          {/* Refund Policy Section */}
          <div className="mb-8">
            <h2 className="font-['Luckiest_Guy',Helvetica] text-3xl text-gray-800 mb-6 text-center">
              Refund Policy
            </h2>
            <p className="text-center text-gray-600 mb-8">
              We offer the following solutions to ensure the highest level of customer satisfaction. 
              If you have any queries about the Refund Policy, please contact us at mealjoin@gmail.com.
            </p>
            
            <div className="space-y-6">
              {refundSections.map((section, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl text-gray-800 flex items-center gap-3">
                      {section.icon}
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
              <p className="text-gray-600 leading-relaxed mb-6">
                Should you have any questions or concerns about these terms and conditions, 
                please don't hesitate to reach out to us.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-[#f0803e] font-medium">
                  <Mail className="w-5 h-5" />
                  <a 
                    href="mailto:mealjoin@gmail.com"
                    className="hover:underline transition-all duration-200"
                  >
                    mealjoin@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3 text-[#f0803e] font-medium">
                  <Phone className="w-5 h-5" />
                  <a 
                    href="tel:0248680999"
                    className="hover:underline transition-all duration-200"
                  >
                    0248680999
                  </a>
                </div>
               
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
                  This privacy policy is legally binding. Please read it carefully and 
                  contact us if you have any questions before using our services. By continuing 
                  to use MealJoin, you acknowledge that you have read, understood, and agree to 
                  be bound by this privacy policy and our terms of service.
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
