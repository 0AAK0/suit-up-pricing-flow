
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
    pro: 149,
    elite: 179
  };

  const unlimitedPrice = 1301;
  const extraEmployeeCost = 50;
  const vatRate = 0.05; // 5% VAT

  // Calculate price based on employees and billing period
  const calculatePrice = (basePrice: number) => {
    let monthlyPrice;
    
    if (selectedEmployees === 999) { // unlimited
      monthlyPrice = basePrice + unlimitedPrice;
    } else {
      const extraEmployees = Math.max(0, selectedEmployees - 2);
      monthlyPrice = basePrice + (extraEmployees * extraEmployeeCost);
    }
    
    const totalBeforeVAT = monthlyPrice * parseInt(billingPeriod);
    const vatAmount = totalBeforeVAT * vatRate;
    return Math.round(totalBeforeVAT + vatAmount);
  };

  const getMonthlyPrice = (basePrice: number) => {
    if (selectedEmployees === 999) {
      const monthlyTotal = basePrice + unlimitedPrice;
      const vatAmount = monthlyTotal * vatRate;
      return Math.round(monthlyTotal + vatAmount);
    }
    const extraEmployees = Math.max(0, selectedEmployees - 2);
    const monthlyTotal = basePrice + (extraEmployees * extraEmployeeCost);
    const vatAmount = monthlyTotal * vatRate;
    return Math.round(monthlyTotal + vatAmount);
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
    <div className="max-w-7xl mx-auto p-6 bg-gray-50 min-h-screen font-inter">
      <div className="text-center mb-8">
        {/* Compact Employee Selection */}
        <div className="mb-8">
          <div className="flex justify-center">
            <div className="bg-white rounded-full p-1 shadow-sm border inline-flex flex-wrap gap-1">
              {employeeOptions.map((count) => (
                <button
                  key={count}
                  onClick={() => setSelectedEmployees(count)}
                  className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                    selectedEmployees === count
                      ? 'text-[#F9F7FA] font-semibold'
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                  style={{
                    backgroundColor: selectedEmployees === count ? '#055f47' : 'transparent'
                  }}
                >
                  {count === 999 ? 'No limits' : count === 2 ? 'Up to 2' : count}
                </button>
              ))}
            </div>
          </div>
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
              <span className="text-4xl font-bold" style={{ color: '#055f47' }}>
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
              <summary style={{ color: '#055f47' }} className="text-sm font-medium">Show all features</summary>
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
        <div className="bg-white rounded-lg shadow-lg p-6 border">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Pro Suit</h3>
            <div className="mb-4">
              <span className="text-4xl font-bold" style={{ color: '#055f47' }}>
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
        <div className="bg-white rounded-lg shadow-lg p-6 border-2 relative" style={{ borderColor: '#055f47' }}>
          <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 text-white" style={{ backgroundColor: '#055f47' }}>
            Most Popular
          </Badge>
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Elite Suit</h3>
            <div className="mb-4">
              <span className="text-4xl font-bold" style={{ color: '#055f47' }}>
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
        <h4 className="font-semibold text-gray-900 mb-2">Pricing Summary (including 5% VAT)</h4>
        <p className="text-sm text-gray-600">
          {selectedEmployees === 999 
            ? `Unlimited employees plan with VAT included`
            : selectedEmployees <= 2 
              ? `${selectedEmployees} employees included at base price + VAT`
              : `${selectedEmployees} employees: ${selectedEmployees - 2} extra × 50 AED + base price + VAT`
          }
        </p>
      </div>
    </div>
  );
};

export default PricingModel;
