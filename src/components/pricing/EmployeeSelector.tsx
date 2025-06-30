
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
      <div className="employee-selector-desktop">
        <div className="employee-buttons-container">
          <div className="employee-buttons">
            {employeeOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => onEmployeeChange(option.value)}
                className={`employee-btn ${selectedEmployees === option.value ? 'employee-btn-selected' : ''}`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="employee-selector-mobile">
        <Select value={selectedEmployees.toString()} onValueChange={(value) => onEmployeeChange(parseInt(value))}>
          <SelectTrigger className="employee-select">
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
