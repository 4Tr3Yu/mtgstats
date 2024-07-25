"use client";

import React from 'react';

interface InputProps {
  type: string;
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  className?: string;
}

const Input: React.FC<InputProps> = ({ type, id, value, onChange, placeholder, className }) => {
    return (
        <label htmlFor={id} className="block text-sm font-medium text-red-200">
            {placeholder}
            <input
            type={type}
            id={id}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className={`mt-1 block w-full px-3 py-2 border bg-red-300 bg-opacity-30 border-red-300 rounded-md shadow-sm focus:outline-none focus:red-indigo-500 focus:border-red-500 sm:text-sm ${className}`}
            />
        </label>
    );
};

export default Input;
