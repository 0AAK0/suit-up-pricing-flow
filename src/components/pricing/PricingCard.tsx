
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { calculatePrice, getMonthlyPrice, getTotalWithVAT } from '@/utils/pricingCalculations';
import { planFeatures, getFeatureDetails } from '@/data/planFeatures';

interface PricingCardProps {
  planName: string;
  planKey: 'starter' | 'pro' | 'elite';
  basePrice: number;
  selectedEmployees: number;
  billingPeriod: string;
  isPopular?: boolean;
}

const PricingCard = ({ planName, planKey, basePrice, selectedEmployees, billingPeriod, isPopular }: PricingCardProps) => {
  const price = calculatePrice(basePrice, selectedEmployees, billingPeriod);
  const monthlyPrice = getMonthlyPrice(basePrice, selectedEmployees);
  const totalWithVAT = getTotalWithVAT(basePrice, selectedEmployees, billingPeriod);
  const features = planFeatures[planKey];

  return (
    <div className={`bg-white rounded-lg shadow-lg p-6 border${isPopular ? '-2' : ''} relative`} 
         style={isPopular ? { borderColor: '#055f47' } : {}}>
      {isPopular && (
        <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 text-white" 
               style={{ backgroundColor: '#055f47' }}>
          Most Popular
        </Badge>
      )}
      
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{planName}</h3>
        <div className="mb-4">
          <span className="text-4xl font-bold" style={{ color: '#055f47' }}>
            {price.toLocaleString()}
          </span>
          <span className="text-gray-600"> AED</span>
          {parseInt(billingPeriod) > 1 && (
            <div className="text-sm text-gray-500 mt-1">
              {monthlyPrice} AED/month
            </div>
          )}
        </div>
        <p className="text-gray-600">
          {billingPeriod === '1' ? 'Per Month' : `for ${billingPeriod} months`}
        </p>
        <p className="text-sm text-gray-500 mt-1">
          + 5% VAT (total = {totalWithVAT.toLocaleString()} AED)
        </p>
      </div>
      
      <div className="space-y-3 mb-6">
        {planKey === 'starter' ? (
          <>
            {features.slice(0, 8).map((feature, index) => (
              <FeatureItem key={index} feature={feature} />
            ))}
            <details className="cursor-pointer">
              <summary style={{ color: '#055f47' }} className="text-sm font-medium">Show all features</summary>
              <div className="mt-3 space-y-2">
                {features.slice(8).map((feature, index) => (
                  <FeatureItem key={index} feature={feature} />
                ))}
              </div>
            </details>
          </>
        ) : (
          features.map((feature, index) => (
            <FeatureItem key={index} feature={feature} />
          ))
        )}
      </div>
      
      <Button className="w-full bg-black hover:bg-[#055f47] text-white" size="lg">
        Get Started
      </Button>
    </div>
  );
};

const FeatureItem = ({ feature }: { feature: string }) => {
  const details = getFeatureDetails(feature);
  
  return (
    <div>
      <div className="flex items-start">
        <span className="text-green-500 mr-2">✓</span>
        <span className={`text-sm text-gray-700 ${feature.includes('**') ? 'font-bold' : ''}`}>
          {feature.replace(/\*\*/g, '')}
        </span>
      </div>
      {details && (
        <div className="ml-6 mt-1">
          <a href="#" className="text-xs" style={{ color: '#055f47' }}>
            {details}
          </a>
        </div>
      )}
    </div>
  );
};

export default PricingCard;
