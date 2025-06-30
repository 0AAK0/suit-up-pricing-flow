
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';

interface PlanFeatures {
  [key: string]: string[];
}

const PricingModel = () => {
  const [selectedEmployees, setSelectedEmployees] = useState(2);
  const [billingPeriod, setBillingPeriod] = useState('1');

  // Base prices per month in AED
  const basePrices = {
    starter: 99,
    pro: 139,
    elite: 169
  };

  const unlimitedPrice = 1301;
  const extraEmployeeCost = 50;

  // Calculate price based on employees and billing period
  const calculatePrice = (basePrice: number) => {
    if (selectedEmployees === 999) { // unlimited
      return billingPeriod === '1' ? unlimitedPrice : unlimitedPrice * parseInt(billingPeriod);
    }
    
    const extraEmployees = Math.max(0, selectedEmployees - 2);
    const monthlyPrice = basePrice + (extraEmployees * extraEmployeeCost);
    return monthlyPrice * parseInt(billingPeriod);
  };

  const getMonthlyPrice = (basePrice: number) => {
    if (selectedEmployees === 999) {
      return unlimitedPrice;
    }
    const extraEmployees = Math.max(0, selectedEmployees - 2);
    return basePrice + (extraEmployees * extraEmployeeCost);
  };

  const planFeatures: PlanFeatures = {
    starter: [
      'Multi-locations',
      'CRM',
      'Conversation Hub (Email, SMS, FB Messenger, Whatsapp, Instagram)',
      'Conversation AI (Check rates)',
      'Voice AI (Check rates)',
      'Integrated Email System (150 Emails/Day - Check Rates)',
      'Email & SMS Notifications',
      'Online Calendars & Scheduling',
      'Online Payment',
      'Workflow Automation',
      'Invoicing & Estimates',
      'Products & Orders',
      'Inventory',
      'Loyalty Program',
      'Coupon Codes',
      'Client Portal',
      'Forms & Surveys',
      'Documents & Contracts',
      'Email Templates',
      'Snippets',
      'Surveys',
      'QR Codes',
      'Media Storage',
      'Countdown Timers',
      'App Marketplace',
      'Reports/Analytics',
      '1 Custom Report',
      '1 Custom Dashboard',
      'Google Analytics',
      'Meta Pixel Ad'
    ],
    pro: [
      'All Starter Suit Features +',
      'Pipelines/Opportunities',
      'Funnels',
      'Blogs',
      'Memberships',
      'Quizzes',
      'Certificates',
      'Communities',
      'Trigger Links',
      'Smart Chat Widget',
      '350 Emails/Day - Check Rates'
    ],
    elite: [
      'All Starter Suit Features +',
      'All Pro Suit Features +',
      'Google Reputation Manager',
      'Social Planner',
      'Smart Websites Builder',
      'E-Commerce',
      'Webinars',
      'Marketing Campaigns',
      'Emil Marketing',
      'Payment Links',
      '700 Emails/Day - Check Rates'
    ]
  };

  const employeeOptions = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 20, 999];

  return (
    <div className="max-w-7xl mx-auto p-6 bg-gray-50 min-h-screen">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Choose Your Perfect Suit Plan
        </h1>
        <p className="text-gray-600 mb-8">
          All prices are in AED. Each plan includes 2 employees by default.
        </p>
        
        {/* Employee Selection */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">How many employees do you have?</h2>
          <div className="flex flex-wrap justify-center gap-2 mb-4">
            {employeeOptions.map((count) => (
              <Button
                key={count}
                variant={selectedEmployees === count ? "default" : "outline"}
                onClick={() => setSelectedEmployees(count)}
                className="min-w-[60px]"
              >
                {count === 999 ? 'Unlimited' : count === 2 ? 'Up to 2' : count}
              </Button>
            ))}
          </div>
          <p className="text-sm text-gray-600">
            Extra employees cost 50 AED per month each (beyond the included 2 employees)
          </p>
        </div>

        {/* Billing Period Tabs */}
        <Tabs value={billingPeriod} onValueChange={setBillingPeriod} className="mb-8">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-4">
            <TabsTrigger value="1">1 Month</TabsTrigger>
            <TabsTrigger value="3">3 Months</TabsTrigger>
            <TabsTrigger value="6">6 Months</TabsTrigger>
            <TabsTrigger value="12">12 Months</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {/* Pricing Cards */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Starter Suit */}
        <div className="bg-white rounded-lg shadow-lg p-6 border">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Starter Suit</h3>
            <div className="mb-4">
              <span className="text-4xl font-bold text-blue-600">
                {calculatePrice(basePrices.starter).toLocaleString()}
              </span>
              <span className="text-gray-600"> AED</span>
              {parseInt(billingPeriod) > 1 && (
                <div className="text-sm text-gray-500 mt-1">
                  {getMonthlyPrice(basePrices.starter)} AED/month
                </div>
              )}
            </div>
            <p className="text-gray-600">
              {billingPeriod === '1' ? 'per month' : `for ${billingPeriod} months`}
            </p>
          </div>
          
          <div className="space-y-3 mb-6">
            {planFeatures.starter.slice(0, 8).map((feature, index) => (
              <div key={index} className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-sm text-gray-700">{feature}</span>
              </div>
            ))}
            <details className="cursor-pointer">
              <summary className="text-blue-600 text-sm font-medium">Show all features</summary>
              <div className="mt-3 space-y-2">
                {planFeatures.starter.slice(8).map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </details>
          </div>
          
          <Button className="w-full" size="lg">
            Get Started
          </Button>
        </div>

        {/* Pro Suit */}
        <div className="bg-white rounded-lg shadow-lg p-6 border-2 border-yellow-400 relative">
          <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-black">
            Most Popular
          </Badge>
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Pro Suit</h3>
            <div className="mb-4">
              <span className="text-4xl font-bold text-blue-600">
                {calculatePrice(basePrices.pro).toLocaleString()}
              </span>
              <span className="text-gray-600"> AED</span>
              {parseInt(billingPeriod) > 1 && (
                <div className="text-sm text-gray-500 mt-1">
                  {getMonthlyPrice(basePrices.pro)} AED/month
                </div>
              )}
            </div>
            <p className="text-gray-600">
              {billingPeriod === '1' ? 'per month' : `for ${billingPeriod} months`}
            </p>
          </div>
          
          <div className="space-y-3 mb-6">
            {planFeatures.pro.map((feature, index) => (
              <div key={index} className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-sm text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
          
          <Button className="w-full" size="lg">
            Get Started
          </Button>
        </div>

        {/* Elite Suit */}
        <div className="bg-white rounded-lg shadow-lg p-6 border">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Elite Suit</h3>
            <div className="mb-4">
              <span className="text-4xl font-bold text-blue-600">
                {calculatePrice(basePrices.elite).toLocaleString()}
              </span>
              <span className="text-gray-600"> AED</span>
              {parseInt(billingPeriod) > 1 && (
                <div className="text-sm text-gray-500 mt-1">
                  {getMonthlyPrice(basePrices.elite)} AED/month
                </div>
              )}
            </div>
            <p className="text-gray-600">
              {billingPeriod === '1' ? 'per month' : `for ${billingPeriod} months`}
            </p>
          </div>
          
          <div className="space-y-3 mb-6">
            {planFeatures.elite.map((feature, index) => (
              <div key={index} className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-sm text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
          
          <Button className="w-full" size="lg">
            Get Started
          </Button>
        </div>
      </div>

      {/* Additional Info */}
      <div className="text-center mt-8 p-4 bg-blue-50 rounded-lg max-w-4xl mx-auto">
        <h4 className="font-semibold text-gray-900 mb-2">Pricing Summary</h4>
        <p className="text-sm text-gray-600">
          {selectedEmployees === 999 
            ? `Unlimited employees: 1,301 AED per month for any plan`
            : selectedEmployees <= 2 
              ? `${selectedEmployees} employees included at no extra cost`
              : `${selectedEmployees} employees: ${selectedEmployees - 2} extra × 50 AED = ${(selectedEmployees - 2) * 50} AED additional per month`
          }
        </p>
      </div>
    </div>
  );
};

export default PricingModel;
