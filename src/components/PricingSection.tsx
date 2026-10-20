import React from 'react';
import { Check, Sparkles, ArrowRight } from 'lucide-react';
import { PRICING_PLANS, PricingPlan } from '../data/danceData';

interface PricingSectionProps {
  onSelectPlan: (plan: PricingPlan) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectPlan }) => {
  return (
    <section id="membership-pricing" className="py-28 bg-[#F3ECE2] text-[#26160F] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#8C5535] uppercase font-bold mb-3">
            <span>04. Membership & Passes</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-display font-extrabold uppercase tracking-tight text-[#26160F] leading-none">
            INVEST IN YOUR RHYTHM
          </h2>
          <p className="mt-4 text-[#5C3D2E] text-base sm:text-lg font-light leading-relaxed">
            Transparent, flexible access designed for both curious explorers and relentless daily performers.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_PLANS.map((plan) => {
            const isFeatured = plan.isPopular;

            return (
              <div
                key={plan.id}
                className={`relative rounded-2xl flex flex-col justify-between transition-all duration-300 p-8 ${
                  isFeatured
                    ? 'bg-[#FFFDFB] border-2 border-[#26160F] shadow-2xl shadow-[#26160F]/15 lg:-translate-y-3'
                    : 'bg-[#FFFDFB] border border-[#E5D9CB] hover:border-[#26160F]/30 shadow-sm'
                }`}
              >
                {/* Featured Badge */}
                {isFeatured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#26160F] text-[#FAF6F0] text-[11px] font-mono font-bold tracking-widest uppercase px-3.5 py-1 rounded-full shadow-md flex items-center gap-1.5 whitespace-nowrap">
                    <Sparkles className="w-3 h-3 text-[#FAF6F0]" />
                    <span>RECOMMENDED BY INSTRUCTORS</span>
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-display font-extrabold uppercase tracking-wider text-[#26160F]">
                      {plan.name}
                    </h3>
                  </div>

                  {/* Price Display */}
                  <div className="mb-6 flex items-baseline gap-2">
                    <span className="text-5xl font-display font-extrabold tracking-tight text-[#26160F] tabular-nums">
                      {plan.price}
                    </span>
                    <span className="text-xs font-mono text-[#8C5535] font-semibold">
                      / {plan.period}
                    </span>
                  </div>

                  <div className="w-full h-px bg-[#E5D9CB] mb-6" />

                  {/* Features List */}
                  <ul className="space-y-3.5 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-[#3D271D]">
                        <Check className="w-4 h-4 text-[#8C5535] shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Plan Action CTA */}
                <div>
                  <button
                    onClick={() => onSelectPlan(plan)}
                    type="button"
                    className={`w-full py-4 text-xs font-bold uppercase tracking-widest rounded-xl transition-all flex items-center justify-center gap-2 ${
                      isFeatured
                        ? 'bg-[#26160F] hover:bg-[#3D271D] text-[#FAF6F0] shadow-lg shadow-[#26160F]/20 hover:scale-[1.02]'
                        : 'bg-[#F3ECE2] hover:bg-[#E5D9CB] text-[#26160F] border border-[#E5D9CB]'
                    }`}
                  >
                    <span>{plan.cta}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <p className="mt-3 text-[11px] font-mono text-center text-[#5C3D2E]">
                    Instant confirmation · No hidden registration fees
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Illustrative Pricing Disclaimer */}
        <div className="mt-12 text-center text-xs font-mono text-[#5C3D2E] max-w-2xl mx-auto">
          Note: Membership dues and availability are illustrative demonstration rates and can be tailored by academy management. Taxes applicable as per local statutory guidelines.
        </div>
      </div>
    </section>
  );
};
