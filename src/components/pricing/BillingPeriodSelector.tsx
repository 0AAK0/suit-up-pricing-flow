
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
      <div className="billing-period-desktop">
        <Tabs value={billingPeriod} onValueChange={onPeriodChange} className="period-tabs">
          <TabsList className="period-tabs-list">
            <TabsTrigger value="1" className="period-tab">1 Month</TabsTrigger>
            <TabsTrigger value="3" className="period-tab">3 Months</TabsTrigger>
            <TabsTrigger value="6" className="period-tab">6 Months</TabsTrigger>
            <TabsTrigger value="12" className="period-tab">12 Months</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div className="billing-period-mobile">
        <Select value={billingPeriod} onValueChange={onPeriodChange}>
          <SelectTrigger className="period-select">
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
