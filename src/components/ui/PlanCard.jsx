import React from 'react';
import { FaCheck } from 'react-icons/fa';

const PlanCard = ({ name, price, features, highlighted, footnote }) => {
  return (
    <div
      className={`rounded-lg shadow-lg p-8 ${
        highlighted
          ? 'transform scale-105 bg-blue-600 text-white'
          : 'bg-white'
      }`}
    >
      <h3 className="text-2xl font-bold mb-4">{name}</h3>
      <p className="text-3xl font-bold mb-6">{price}<span className="text-sm">/mês</span></p>
      <ul className="space-y-3 mb-8">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-center">
            <FaCheck className={`w-5 h-5 mr-2 flex-shrink-0 ${
              highlighted ? 'text-white' : 'text-blue-600'
            }`} />
            <span className="flex-1">{feature}</span>
          </li>
        ))}
      </ul>
      <a
        href="https://wa.me/551129376455"
        target="_blank"
        rel="noopener noreferrer"
        className={`w-full py-3 rounded-full font-semibold text-center block ${
          highlighted
            ? 'bg-white text-blue-600 hover:bg-gray-100'
            : 'bg-blue-600 text-white hover:bg-blue-700'
        }`}
      >
        Contratar
      </a>
      {footnote && (
        <p className={`text-sm mt-4 ${highlighted ? 'text-white/80' : 'text-gray-500'}`}>
          {footnote}
        </p>
      )}
    </div>
  );
};