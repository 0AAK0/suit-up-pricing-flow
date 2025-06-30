
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
    <div className={`pricing-card ${isPopular ? 'pricing-card-popular' : ''}`}>
      {isPopular && (
        <Badge className="popular-badge">
          Most Popular
        </Badge>
      )}
      
      <div className="card-header">
        <h3 className="plan-name">{planName}</h3>
        <div className="price-section">
          <span className="price-amount">
            {price.toLocaleString()}
          </span>
          <span className="currency"> AED</span>
          {parseInt(billingPeriod) > 1 && (
            <div className="monthly-price">
              {monthlyPrice} AED/month
            </div>
          )}
        </div>
        <p className="vat-info">
          + 5% VAT (total = {totalWithVAT.toLocaleString()} AED)
        </p>
        <p className="billing-period">
          Per Month
        </p>
      </div>
      
      <div className="features-list">
        {planKey === 'starter' ? (
          <>
            {features.slice(0, 8).map((feature, index) => (
              <FeatureItem key={index} feature={feature} />
            ))}
            <details className="show-more">
              <summary className="show-more-summary">Show all features</summary>
              <div className="additional-features">
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
      
      <Button className="get-started-btn">
        Get Started
      </Button>
    </div>
  );
};

const FeatureItem = ({ feature }: { feature: string }) => {
  const details = getFeatureDetails(feature);
  
  return (
    <div className="feature-item">
      <div className="feature-main">
        <span className="checkmark">✓</span>
        <span className={`feature-text ${feature.includes('**') ? 'feature-bold' : ''}`}>
          {feature.replace(/\*\*/g, '')}
        </span>
      </div>
      {details && (
        <div className="feature-details">
          <a href="#" className="feature-link">
            {details}
          </a>
        </div>
      )}
    </div>
  );
};

export default PricingCard;
