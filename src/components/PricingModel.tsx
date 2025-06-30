
import React, { useState } from 'react';
import EmployeeSelector from './pricing/EmployeeSelector';
import BillingPeriodSelector from './pricing/BillingPeriodSelector';
import PricingCard from './pricing/PricingCard';
import { basePrices } from '@/types/pricing';

const PricingModel = () => {
  const [selectedEmployees, setSelectedEmployees] = useState(2);
  const [billingPeriod, setBillingPeriod] = useState('1');

  return (
    <div className="pricing-container">
      <div className="pricing-header">
        <EmployeeSelector 
          selectedEmployees={selectedEmployees}
          onEmployeeChange={setSelectedEmployees}
        />
        
        <div className="duration-section">
          <h3 className="duration-title">Choose Your Perfect Plan Duration</h3>
          <BillingPeriodSelector 
            billingPeriod={billingPeriod}
            onPeriodChange={setBillingPeriod}
          />
        </div>
      </div>

      <div className="pricing-cards">
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
