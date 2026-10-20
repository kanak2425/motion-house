import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { CinematicHero } from './components/CinematicHero';
import { WelcomeSection } from './components/WelcomeSection';
import { DanceStylesSection } from './components/DanceStylesSection';
import { ClassScheduleSection } from './components/ClassScheduleSection';
import { PricingSection } from './components/PricingSection';
import { InstructorsSection } from './components/InstructorsSection';
import { StudioGallerySection } from './components/StudioGallerySection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { BookingSection } from './components/BookingSection';
import { LocationContactSection } from './components/LocationContactSection';
import { Footer } from './components/Footer';
import { FloatingMobileCTA } from './components/FloatingMobileCTA';
import { ClassScheduleItem, PricingPlan } from './data/danceData';

export default function App() {
  const [filterStyle, setFilterStyle] = useState<string>('All');
  const [prefilledClass, setPrefilledClass] = useState<ClassScheduleItem | null>(null);
  const [prefilledPlan, setPrefilledPlan] = useState<PricingPlan | null>(null);

  const scrollToBooking = () => {
    const el = document.getElementById('book-trial');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSchedule = () => {
    const el = document.getElementById('class-schedule');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToStyles = () => {
    const el = document.getElementById('dance-styles');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectStyle = (styleName: string) => {
    setFilterStyle(styleName);
    scrollToSchedule();
  };

  const handleBookSlot = (slot: ClassScheduleItem) => {
    setPrefilledClass(slot);
    scrollToBooking();
  };

  const handleSelectPlan = (plan: PricingPlan) => {
    setPrefilledPlan(plan);
    scrollToBooking();
  };

  return (
    <div className="min-h-screen bg-[#FAF6F0] text-[#26160F] selection:bg-[#26160F] selection:text-[#FAF6F0] font-sans antialiased">
      {/* Top Navigation */}
      <Navbar onBookClick={scrollToBooking} />

      {/* Main Content Sections */}
      <main>
        {/* Section 1 & 2: Cinematic Opening Experience */}
        <CinematicHero
          onExploreClasses={scrollToStyles}
          onBookClass={scrollToBooking}
        />

        {/* Section A: Welcome to Motion House */}
        <WelcomeSection onLearnMore={scrollToSchedule} />

        {/* Section B: Explore Dance Styles */}
        <DanceStylesSection onSelectStyle={handleSelectStyle} />

        {/* Section C: Class Timings (Schedule) */}
        <ClassScheduleSection
          initialFilterStyle={filterStyle}
          onBookSlot={handleBookSlot}
        />

        {/* Section D: Membership and Pricing */}
        <PricingSection onSelectPlan={handleSelectPlan} />

        {/* Section E: Meet the Instructors */}
        <InstructorsSection />

        {/* Section F: Inside the Studio */}
        <StudioGallerySection />

        {/* Section G: Student Testimonials */}
        <TestimonialsSection />

        {/* Section H: Book a Trial Class */}
        <BookingSection
          prefilledClass={prefilledClass}
          prefilledPlan={prefilledPlan}
        />

        {/* Section I: Location and Contact */}
        <LocationContactSection />
      </main>

      {/* Section J: Footer */}
      <Footer />

      {/* Floating Mobile Booking CTA */}
      <FloatingMobileCTA onBookClick={scrollToBooking} />
    </div>
  );
}
