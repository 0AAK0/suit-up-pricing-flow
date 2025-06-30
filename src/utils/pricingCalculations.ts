
import { basePrices, unlimitedPrice, extraEmployeeCost } from '@/types/pricing';

export const calculatePrice = (basePrice: number, selectedEmployees: number, billingPeriod: string) => {
  let monthlyPrice;
  
  if (selectedEmployees === 999) { // unlimited
    monthlyPrice = basePrice + unlimitedPrice;
  } else {
    const extraEmployees = Math.max(0, selectedEmployees - 2);
    monthlyPrice = basePrice + (extraEmployees * extraEmployeeCost);
  }
  
  return monthlyPrice * parseInt(billingPeriod);
};

export const getMonthlyPrice = (basePrice: number, selectedEmployees: number) => {
  if (selectedEmployees === 999) {
    return basePrice + unlimitedPrice;
  }
  const extraEmployees = Math.max(0, selectedEmployees - 2);
  return basePrice + (extraEmployees * extraEmployeeCost);
};

export const getTotalWithVAT = (basePrice: number, selectedEmployees: number, billingPeriod: string) => {
  const priceBeforeVAT = calculatePrice(basePrice, selectedEmployees, billingPeriod);
  return Math.round(priceBeforeVAT * 1.05);
};
