import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { Navigate } from 'react-router-dom';
import { Navigation } from '../../components/shared/Navigation';
import { Footer } from '../../components/shared/Footer';
import { Button } from '../../components/ui/button';
import { Card, CardContent } from '../../components/ui/card';
import { Input } from '../../components/ui/input';
import { MessageSquare, Send, Search, User, Clock } from 'lucide-react';

export const Messages = (): JSX.Element => {
  const { isAuthenticated } = useAuth();
  const [selectedConversation, setSelectedConversation] = useState<number | null>(1);
  const [newMessage, setNewMessage] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  if (!isAuthenticated) {
    return <Navigate to="/sign-in" replace />;
  }

  const conversations = [
    {
      id: 1,
      name: 'Kevin Asante',
      lastMessage: 'Thank you for booking my jollof rice meal!',
      time: '2 hours ago',
      unread: true,
      avatar: '/61f75ea9a680def2ed1c6929fe75aeee-3.png',
      messages: [
        { id: 1, sender: 'Kevin Asante', message: 'Hi! Thanks for booking my Traditional Jollof Rice Feast.', time: '10:30 AM', isOwn: false },
        { id: 2, sender: 'You', message: 'Hi Kevin! I\'m really excited about tomorrow\'s meal.', time: '10:35 AM', isOwn: true },
        { id: 3, sender: 'Kevin Asante', message: 'Great! Do you have any dietary restrictions I should know about?', time: '10:40 AM', isOwn: false },
        { id: 4, sender: 'You', message: 'No restrictions, but I prefer mild spice levels.', time: '10:45 AM', isOwn: true },
        { id: 5, sender: 'Kevin Asante', message: 'Perfect! I\'ll make sure to adjust the spice level. See you tomorrow at 6:30 PM!', time: '10:50 AM', isOwn: false }
      ]
    },
    {
      id: 2,
      name: 'Ama Serwaa',
      lastMessage: 'The banku was absolutely delicious!',
      time: '1 day ago',
      unread: false,
      avatar: '/61f75ea9a680def2ed1c6929fe75aeee-3.png',
      messages: [
        { id: 1, sender: 'Ama Serwaa', message: 'Hi! I wanted to thank you for joining my banku meal last week.', time: 'Yesterday', isOwn: false },
        { id: 2, sender: 'You', message: 'Thank you for having me! The banku was absolutely delicious!', time: 'Yesterday', isOwn: true }
      ]
    },
    {
      id: 3,
      name: 'James Wilson',
      lastMessage: 'Looking forward to your next Italian night!',
      time: '3 days ago',
      unread: false,
      avatar: '/61f75ea9a680def2ed1c6929fe75aeee-3.png',
      messages: [
        { id: 1, sender: 'James Wilson', message: 'Hey! When are you planning your next Italian pasta night?', time: '3 days ago', isOwn: false },
        { id: 2, sender: 'You', message: 'I\'m thinking next weekend. I\'ll post it soon!', time: '3 days ago', isOwn: true },
        { id: 3, sender: 'James Wilson', message: 'Perfect! Looking forward to your next Italian night!', time: '3 days ago', isOwn: false }
      ]
    }
  ];

  const filteredConversations = conversations.filter(conv =>
    conv.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const selectedConv = conversations.find(conv => conv.id === selectedConversation);

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // Add message logic here
      setNewMessage('');
    }
  };

  return (
    <div className="bg-white min-h-screen">
      <Navigation />
      
      <section className="mt-20 pt-8 pb-8 bg-gradient-to-r from-[#f0803e] to-[#fdaa00]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center text-white">
            <h1 className="font-['Luckiest_Guy',Helvetica] text-4xl mb-4">
              Messages
            </h1>
            <p className="text-xl">
              Connect with hosts and guests
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-[600px]">
            {/* Conversations List */}
            <div className="lg:col-span-1">
              <Card className="rounded-2xl shadow-lg h-full">
                <CardContent className="p-6 h-full flex flex-col">
                  <div className="mb-4">
                    <div className="relative">
                      <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <Input
                        className="h-12 pl-12"
                        placeholder="Search conversations..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                    </div>
                  </div>
                  
                  <div className="flex-1 overflow-y-auto space-y-2">
                    {filteredConversations.map((conversation) => (
                      <div
                        key={conversation.id}
                        onClick={() => setSelectedConversation(conversation.id)}
                        className={`p-4 rounded-lg cursor-pointer transition-colors ${
                          selectedConversation === conversation.id
                            ? 'bg-[#f0803e] text-white'
                            : 'hover:bg-gray-50'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <img
                            className="w-12 h-12 rounded-full object-cover"
                            alt={conversation.name}
                            src={conversation.avatar}
                          />
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between">
                              <h4 className="font-medium truncate">{conversation.name}</h4>
                              {conversation.unread && (
                                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                              )}
                            </div>
                            <p className={`text-sm truncate ${
                              selectedConversation === conversation.id ? 'text-white/80' : 'text-gray-600'
                            }`}>
                              {conversation.lastMessage}
                            </p>
                            <p className={`text-xs ${
                              selectedConversation === conversation.id ? 'text-white/60' : 'text-gray-500'
                            }`}>
                              {conversation.time}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Chat Area */}
            <div className="lg:col-span-2">
              <Card className="rounded-2xl shadow-lg h-full">
                <CardContent className="p-0 h-full flex flex-col">
                  {selectedConv ? (
                    <>
                      {/* Chat Header */}
                      <div className="p-6 border-b border-gray-200">
                        <div className="flex items-center gap-3">
                          <img
                            className="w-12 h-12 rounded-full object-cover"
                            alt={selectedConv.name}
                            src={selectedConv.avatar}
                          />
                          <div>
                            <h3 className="font-medium text-gray-800">{selectedConv.name}</h3>
                            <p className="text-sm text-gray-600">Active now</p>
                          </div>
                        </div>
                      </div>

                      {/* Messages */}
                      <div className="flex-1 p-6 overflow-y-auto space-y-4">
                        {selectedConv.messages.map((message) => (
                          <div
                            key={message.id}
                            className={`flex ${message.isOwn ? 'justify-end' : 'justify-start'}`}
                          >
                            <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                              message.isOwn
                                ? 'bg-[#f0803e] text-white'
                                : 'bg-gray-100 text-gray-800'
                            }`}>
                              <p className="text-sm">{message.message}</p>
                              <p className={`text-xs mt-1 ${
                                message.isOwn ? 'text-white/70' : 'text-gray-500'
                              }`}>
                                {message.time}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Message Input */}
                      <div className="p-6 border-t border-gray-200">
                        <div className="flex gap-3">
                          <Input
                            className="flex-1 h-12"
                            placeholder="Type your message..."
                            value={newMessage}
                            onChange={(e) => setNewMessage(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                          />
                          <Button
                            onClick={handleSendMessage}
                            className="h-12 px-6 bg-[#f0803e] hover:bg-[#d96d35] text-white rounded-lg"
                          >
                            <Send className="w-5 h-5" />
                          </Button>
                        </div>
                      </div>
                    </>
                  ) : (
                    <div className="flex-1 flex items-center justify-center">
                      <div className="text-center">
                        <MessageSquare className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                        <h3 className="text-xl text-gray-600 mb-2">Select a conversation</h3>
                        <p className="text-gray-500">Choose a conversation from the list to start messaging</p>
                      </div>
                    </div>
                  )}
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