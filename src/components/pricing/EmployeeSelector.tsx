
import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { employeeOptions } from '@/types/pricing';

interface EmployeeSelectorProps {
  selectedEmployees: number;
  onEmployeeChange: (employees: number) => void;
}

const EmployeeSelector = ({ selectedEmployees, onEmployeeChange }: EmployeeSelectorProps) => {
  return (
    <>
      {/* Desktop Employee Selection */}
      <div className="mb-8 hidden md:block">
        <div className="flex justify-center">
          <div className="bg-white rounded-[15px] p-1 shadow-sm border inline-flex flex-wrap gap-1">
            {employeeOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => onEmployeeChange(option.value)}
                className={`px-3 py-1.5 rounded-[15px] text-sm font-medium transition-colors ${
                  selectedEmployees === option.value
                    ? 'text-[#F9F7FA] font-semibold'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
                style={{
                  backgroundColor: selectedEmployees === option.value ? '#055f47' : 'transparent'
                }}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Employee Selection */}
      <div className="mb-4 md:hidden">
        <Select value={selectedEmployees.toString()} onValueChange={(value) => onEmployeeChange(parseInt(value))}>
          <SelectTrigger className="w-full max-w-xs mx-auto">
            <SelectValue placeholder="Select employees" />
          </SelectTrigger>
          <SelectContent>
            {employeeOptions.map((option) => (
              <SelectItem key={option.value} value={option.value.toString()}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </>
  );
};

export default EmployeeSelector;
