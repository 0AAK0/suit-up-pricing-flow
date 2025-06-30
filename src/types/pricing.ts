
export interface PlanFeatures {
  [key: string]: string[];
}

export interface EmployeeOption {
  value: number;
  label: string;
}

export interface PeriodOption {
  value: string;
  label: string;
}

export const employeeOptions: EmployeeOption[] = [
  { value: 2, label: 'Up to 2' },
  { value: 3, label: '3' },
  { value: 4, label: '4' },
  { value: 5, label: '5' },
  { value: 6, label: '6' },
  { value: 7, label: '7' },
  { value: 8, label: '8' },
  { value: 9, label: '9' },
  { value: 10, label: '10' },
  { value: 11, label: '11' },
  { value: 12, label: '12' },
  { value: 13, label: '13' },
  { value: 14, label: '14' },
  { value: 15, label: '15' },
  { value: 20, label: '20' },
  { value: 999, label: 'Unlimited' }
];

export const periodOptions: PeriodOption[] = [
  { value: '1', label: '1 Month' },
  { value: '3', label: '3 Months' },
  { value: '6', label: '6 Months' },
  { value: '12', label: '12 Months' }
];

export const basePrices = {
  starter: 99,
  pro: 149,
  elite: 179
};

export const unlimitedPrice = 1301;
export const extraEmployeeCost = 50;
