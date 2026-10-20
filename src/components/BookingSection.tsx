import React, { useState, useEffect } from 'react';
import { CheckCircle2, AlertCircle, Loader2, Download, ArrowRight } from 'lucide-react';
import { ClassScheduleItem, PricingPlan } from '../data/danceData';
import { supabase } from '../lib/supabase';

interface BookingSectionProps {
  prefilledClass?: ClassScheduleItem | null;
  prefilledPlan?: PricingPlan | null;
}

export const BookingSection: React.FC<BookingSectionProps> = ({
  prefilledClass,
  prefilledPlan,
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    danceStyle: 'Hip-Hop',
    dayAndTime: 'Tue, Thu, Sat · 5:30–6:30 PM',
    experienceLevel: 'Beginner (No experience required)',
    membershipOption: 'Drop-in Trial Pass (₹399)',
    notes: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  useEffect(() => {
    if (prefilledClass) {
      setFormData((prev) => ({
        ...prev,
        danceStyle: prefilledClass.danceStyle,
        dayAndTime: `${prefilledClass.dayDisplay} · ${prefilledClass.time}`,
        experienceLevel: prefilledClass.level === 'All levels' ? 'All levels' : prefilledClass.level,
      }));
    }
  }, [prefilledClass]);

  useEffect(() => {
    if (prefilledPlan) {
      setFormData((prev) => ({
        ...prev,
        membershipOption: `${prefilledPlan.name} (${prefilledPlan.price})`,
      }));
    }
  }, [prefilledPlan]);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      errs.fullName = 'Please enter your full name';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      errs.email = 'Please provide a valid email address';
    }
    const phoneClean = formData.phone.replace(/[^0-9+]/g, '');
    if (!phoneClean || phoneClean.length < 8) {
      errs.phone = 'Please enter a valid phone or mobile number';
    }
    return errs;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setIsSubmitting(true);
    const generatedId = `MH-${Math.floor(100000 + Math.random() * 900000)}`;

    const { error } = await supabase.from('motion_house_bookings').insert({
      booking_ref: generatedId,
      full_name: formData.fullName.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      dance_style: formData.danceStyle,
      day_and_time: formData.dayAndTime,
      experience_level: formData.experienceLevel,
      membership_option: formData.membershipOption,
      notes: formData.notes || '',
    });

    setIsSubmitting(false);
    if (error) {
      console.error('Motion House booking submission failed:', error.message);
      setErrors({ submit: 'We could not save your booking right now. Please try again in a moment.' });
      return;
    }

    setBookingRef(generatedId);
    setIsSuccess(true);
  };

  const handleDownloadCalendar = () => {
    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Motion House Dance Academy//EN',
      'BEGIN:VEVENT',
      `SUMMARY:Motion House Dance: ${formData.danceStyle} Class`,
      `DESCRIPTION:Your dance session at Motion House. Style: ${formData.danceStyle}. Time: ${formData.dayAndTime}. Ref: ${bookingRef}`,
      'LOCATION:Motion House Dance Academy, Level 2, 42 Rhythm Boulevard, Bengaluru',
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `MotionHouse-${bookingRef || 'Booking'}.ics`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <section id="book-trial" className="py-28 bg-[#F3ECE2] text-[#26160F] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#8C5535] uppercase font-bold mb-3">
            <span>08. Reserve Your Spot</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-display font-extrabold uppercase tracking-tight text-[#26160F] leading-none">
            YOUR FIRST STEP STARTS HERE.
          </h2>
          <p className="mt-4 text-[#5C3D2E] text-lg font-light">
            Come for one class. Leave with a new rhythm.
          </p>

          <div className="mt-4 inline-flex items-center gap-2 text-xs font-mono text-[#3D271D] bg-[#FFFDFB] border border-[#E5D9CB] px-4 py-2 rounded-full shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#8C5535]" />
            <span>Secure booking requests are saved to our booking system.</span>
          </div>
        </div>

        {/* Card Container */}
        <div className="rounded-2xl bg-[#FFFDFB] border border-[#E5D9CB] p-6 sm:p-10 shadow-xl shadow-[#26160F]/5 relative overflow-hidden">
          {isSuccess ? (
            <div className="py-6 flex flex-col items-center text-center animate-in fade-in zoom-in-95 duration-400">
              <div className="w-16 h-16 rounded-full bg-[#F3ECE2] text-[#26160F] flex items-center justify-center border border-[#E5D9CB] mb-6 shadow-sm">
                <CheckCircle2 className="w-9 h-9 text-[#8C5535]" />
              </div>

              <span className="text-xs font-mono text-[#8C5535] uppercase tracking-widest font-bold">
                Class Reserved Successfully
              </span>

              <h3 className="mt-2 text-3xl font-display font-extrabold uppercase text-[#26160F]">
                WE’LL SEE YOU ON THE FLOOR, {formData.fullName.split(' ')[0].toUpperCase()}!
              </h3>

              <p className="mt-2 text-sm text-[#5C3D2E] max-w-lg font-normal leading-relaxed">
                Your demonstration pass has been registered under booking reference{' '}
                <span className="text-[#26160F] font-mono font-bold bg-[#F3ECE2] px-2 py-0.5 rounded border border-[#E5D9CB]">
                  {bookingRef}
                </span>.
                Your booking request has been saved. The studio team can follow up at {formData.email}.
              </p>

              {/* Digital Pass Ticket Card */}
              <div className="mt-8 w-full max-w-md rounded-2xl bg-[#26160F] border border-[#3D271D] p-6 text-left font-mono text-xs space-y-3 text-[#FAF6F0] shadow-xl">
                <div className="flex justify-between items-center border-b border-[#FAF6F0]/15 pb-3">
                  <span className="text-[#D8C7B3] font-bold tracking-wider">MOTION HOUSE PASS</span>
                  <span className="text-[#FAF6F0]/70">{bookingRef}</span>
                </div>
                <div className="grid grid-cols-2 gap-2.5">
                  <div>
                    <span className="text-[#FAF6F0]/60 block text-[11px]">Dancer:</span>
                    <span className="text-[#FAF6F0] font-semibold">{formData.fullName}</span>
                  </div>
                  <div>
                    <span className="text-[#FAF6F0]/60 block text-[11px]">Style:</span>
                    <span className="text-[#FAF6F0] font-semibold">{formData.danceStyle}</span>
                  </div>
                  <div>
                    <span className="text-[#FAF6F0]/60 block text-[11px]">Time Slot:</span>
                    <span className="text-[#FAF6F0]">{formData.dayAndTime}</span>
                  </div>
                  <div>
                    <span className="text-[#FAF6F0]/60 block text-[11px]">Pass Type:</span>
                    <span className="text-[#D8C7B3] font-semibold">{formData.membershipOption}</span>
                  </div>
                </div>
                <div className="pt-2 border-t border-[#FAF6F0]/15 text-[#FAF6F0]/60 text-[11px]">
                  Studio: 42 Rhythm Boulevard, Level 2 · Arrive 10 min early in athletic footwear
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleDownloadCalendar}
                  type="button"
                  className="px-6 py-3 bg-[#26160F] hover:bg-[#3D271D] text-[#FAF6F0] font-bold uppercase tracking-wider text-xs rounded-xl transition-colors flex items-center justify-center gap-2 shadow-md shadow-[#26160F]/20"
                >
                  <Download className="w-4 h-4" />
                  <span>Add To Calendar (.ICS)</span>
                </button>
                <button
                  onClick={() => setIsSuccess(false)}
                  type="button"
                  className="px-6 py-3 bg-[#FAF6F0] hover:bg-[#F3ECE2] text-[#26160F] font-mono text-xs rounded-xl border border-[#E5D9CB] transition-colors"
                >
                  Book Another Session
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#26160F] font-bold mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Maya Patel"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className={`w-full bg-[#FAF6F0] border rounded-xl px-4 py-3 text-sm text-[#26160F] placeholder-[#5C3D2E]/40 focus:outline-none transition-colors ${
                      errors.fullName ? 'border-red-500 ring-1 ring-red-500' : 'border-[#E5D9CB] focus:border-[#26160F]'
                    }`}
                  />
                  {errors.fullName && (
                    <p className="mt-1 text-xs text-red-500 flex items-center gap-1 font-mono">
                      <AlertCircle className="w-3 h-3" /> {errors.fullName}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#26160F] font-bold mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="maya@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full bg-[#FAF6F0] border rounded-xl px-4 py-3 text-sm text-[#26160F] placeholder-[#5C3D2E]/40 focus:outline-none transition-colors ${
                      errors.email ? 'border-red-500 ring-1 ring-red-500' : 'border-[#E5D9CB] focus:border-[#26160F]'
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-500 flex items-center gap-1 font-mono">
                      <AlertCircle className="w-3 h-3" /> {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#26160F] font-bold mb-2">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98200 12345"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className={`w-full bg-[#FAF6F0] border rounded-xl px-4 py-3 text-sm text-[#26160F] placeholder-[#5C3D2E]/40 focus:outline-none transition-colors ${
                      errors.phone ? 'border-red-500 ring-1 ring-red-500' : 'border-[#E5D9CB] focus:border-[#26160F]'
                    }`}
                  />
                  {errors.phone && (
                    <p className="mt-1 text-xs text-red-500 flex items-center gap-1 font-mono">
                      <AlertCircle className="w-3 h-3" /> {errors.phone}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#26160F] font-bold mb-2">
                    Preferred Dance Style
                  </label>
                  <select
                    value={formData.danceStyle}
                    onChange={(e) => setFormData({ ...formData, danceStyle: e.target.value })}
                    className="w-full bg-[#FAF6F0] border border-[#E5D9CB] rounded-xl px-4 py-3 text-sm text-[#26160F] focus:outline-none focus:border-[#26160F]"
                  >
                    <option value="Hip-Hop">Hip-Hop (Grooves & Isolations)</option>
                    <option value="Contemporary">Contemporary (Floor & Release)</option>
                    <option value="Bollywood">Bollywood Fusion</option>
                    <option value="Jazz Funk">Jazz Funk</option>
                    <option value="Freestyle">Freestyle & Cyphers</option>
                    <option value="Dance Fitness">Dance Fitness</option>
                    <option value="Kids Dance">Kids Dance</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#26160F] font-bold mb-2">
                    Preferred Timing
                  </label>
                  <select
                    value={formData.dayAndTime}
                    onChange={(e) => setFormData({ ...formData, dayAndTime: e.target.value })}
                    className="w-full bg-[#FAF6F0] border border-[#E5D9CB] rounded-xl px-4 py-3 text-sm text-[#26160F] focus:outline-none focus:border-[#26160F]"
                  >
                    <option value="Mon, Wed, Fri · 4:00–5:00 PM">Mon, Wed, Fri · 4:00–5:00 PM (Kids Dance)</option>
                    <option value="Mon, Wed, Fri · 5:00–6:00 PM">Mon, Wed, Fri · 5:00–6:00 PM (Bollywood)</option>
                    <option value="Tue, Thu, Sat · 5:30–6:30 PM">Tue, Thu, Sat · 5:30–6:30 PM (Hip-Hop)</option>
                    <option value="Tue, Thu, Sat · 6:30–7:30 PM">Tue, Thu, Sat · 6:30–7:30 PM (Contemporary)</option>
                    <option value="Mon, Wed, Fri · 7:00–8:00 PM">Mon, Wed, Fri · 7:00–8:00 PM (Freestyle)</option>
                    <option value="Tue, Thu, Sat · 7:30–8:30 PM">Tue, Thu, Sat · 7:30–8:30 PM (Advanced)</option>
                    <option value="Weekend Special Workshops">Weekend Special Workshops (Sat/Sun Morning)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#26160F] font-bold mb-2">
                    Experience Level
                  </label>
                  <select
                    value={formData.experienceLevel}
                    onChange={(e) => setFormData({ ...formData, experienceLevel: e.target.value })}
                    className="w-full bg-[#FAF6F0] border border-[#E5D9CB] rounded-xl px-4 py-3 text-sm text-[#26160F] focus:outline-none focus:border-[#26160F]"
                  >
                    <option value="Beginner (No experience required)">Beginner (Complete beginner, never danced)</option>
                    <option value="Elementary (A few informal classes)">Elementary (Some informal videos/social dance)</option>
                    <option value="Intermediate (1-2 years training)">Intermediate (1–2 years regular training)</option>
                    <option value="Advanced (Pre-professional)">Advanced (Crew / pre-professional training)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#26160F] font-bold mb-2">
                  Membership or Pass Option
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { label: 'Drop-in Trial Pass (₹399)', id: 'drop' },
                    { label: 'Monthly Membership (₹2,499)', id: 'month' },
                    { label: 'Unlimited Pass (₹3,999)', id: 'unlimited' },
                  ].map((opt) => (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setFormData({ ...formData, membershipOption: opt.label })}
                      className={`py-3.5 px-4 rounded-xl text-xs font-semibold border text-left transition-all ${
                        formData.membershipOption.includes(opt.label) || formData.membershipOption.includes(opt.id)
                          ? 'border-[#26160F] bg-[#26160F] text-[#FAF6F0] shadow-sm'
                          : 'border-[#E5D9CB] bg-[#FAF6F0] text-[#3D271D] hover:border-[#26160F]/30'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-4">
                {errors.submit && (
                <p role="alert" className="mb-3 text-sm text-red-600">{errors.submit}</p>
              )}
              <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-[#26160F] hover:bg-[#3D271D] text-[#FAF6F0] font-bold uppercase tracking-widest text-sm rounded-xl shadow-xl shadow-[#26160F]/20 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin text-[#FAF6F0]" />
                      <span>Verifying Studio Availability...</span>
                    </>
                  ) : (
                    <>
                      <span>REQUEST MY TRIAL CLASS</span>
                      <ArrowRight className="w-4 h-4 text-[#FAF6F0]" />
                    </>
                  )}
                </button>
                <p className="mt-3 text-center text-[11px] font-mono text-[#5C3D2E]">
                  By submitting, you agree to studio etiquette guidelines. No upfront card charge required in demo.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
