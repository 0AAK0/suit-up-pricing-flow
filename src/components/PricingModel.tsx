
import React, { useState } from 'react';
import EmployeeSelector from './pricing/EmployeeSelector';
import BillingPeriodSelector from './pricing/BillingPeriodSelector';
import PricingCard from './pricing/PricingCard';
import { basePrices } from '@/types/pricing';

const PricingModel = () => {
  const [selectedEmployees, setSelectedEmployees] = useState(2);
  const [billingPeriod, setBillingPeriod] = useState('1');

  return (
    <div className="max-w-7xl mx-auto p-6 bg-gray-50 min-h-screen font-inter">
      <div className="text-center mb-8">
        <EmployeeSelector 
          selectedEmployees={selectedEmployees}
          onEmployeeChange={setSelectedEmployees}
        />
        
        <BillingPeriodSelector 
          billingPeriod={billingPeriod}
          onPeriodChange={setBillingPeriod}
        />
      </div>

      {/* Pricing Cards */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <PricingCard
          planName="Starter Suit"
          planKey="starter"
          basePrice={basePrices.starter}
          selectedEmployees={selectedEmployees}
          billingPeriod={billingPeriod}
        />
        
        <PricingCard
          planName="Pro Suit"
          planKey="pro"
          basePrice={basePrices.pro}
          selectedEmployees={selectedEmployees}
          billingPeriod={billingPeriod}
        />
        
        <PricingCard
          planName="Elite Suit"
          planKey="elite"
          basePrice={basePrices.elite}
          selectedEmployees={selectedEmployees}
          billingPeriod={billingPeriod}
          isPopular={true}
        />
      </div>
    </div>
  );
};

export default PricingModel;
