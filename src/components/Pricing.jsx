import React from 'react';
import { plans } from '../constants/plans';
import PlanCard from './ui/cards/PlanCard';

const Pricing = () => {
  return (
    <section id="planos" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Nossos Planos</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <PlanCard key={index} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;