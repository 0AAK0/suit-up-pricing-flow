
import React from 'react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { periodOptions } from '@/types/pricing';

interface BillingPeriodSelectorProps {
  billingPeriod: string;
  onPeriodChange: (period: string) => void;
}

const BillingPeriodSelector = ({ billingPeriod, onPeriodChange }: BillingPeriodSelectorProps) => {
  return (
    <>
      {/* Desktop Billing Period Tabs */}
      <div className="hidden md:block">
        <Tabs value={billingPeriod} onValueChange={onPeriodChange} className="mb-8">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-4 bg-white rounded-[15px] p-1 shadow-sm border">
            <TabsTrigger value="1" className="rounded-[15px]">1 Month</TabsTrigger>
            <TabsTrigger value="3" className="rounded-[15px]">3 Months</TabsTrigger>
            <TabsTrigger value="6" className="rounded-[15px]">6 Months</TabsTrigger>
            <TabsTrigger value="12" className="rounded-[15px]">12 Months</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {/* Mobile Billing Period Select */}
      <div className="mb-8 md:hidden">
        <Select value={billingPeriod} onValueChange={onPeriodChange}>
          <SelectTrigger className="w-full max-w-xs mx-auto">
            <SelectValue placeholder="Select billing period" />
          </SelectTrigger>
          <SelectContent>
            {periodOptions.map((period) => (
              <SelectItem key={period.value} value={period.value}>
                {period.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </>
  );
};

export default BillingPeriodSelector;
