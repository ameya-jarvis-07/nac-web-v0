import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import SakuraBackground from './components/SakuraBackground';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import TicketModal from './components/TicketModal';

// Pages
import HomePage from './pages/HomePage';
import EventsPage from './pages/EventsPage';
import SchedulePage from './pages/SchedulePage';
import TicketsPage from './pages/TicketsPage';
import CosplayPage from './pages/CosplayPage';
import QuizPage from './pages/QuizPage';
import VenuePage from './pages/VenuePage';
import AboutPage from './pages/AboutPage';

export default function App() {
  const [sakuraActive, setSakuraActive] = useState(true);
  const [ticketModalOpen, setTicketModalOpen] = useState(false);
  const [defaultTier, setDefaultTier] = useState('ota');

  const handleOpenTicketModal = (tier = 'ota') => {
    setDefaultTier(tier);
    setTicketModalOpen(true);
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-[#1A1A1F] text-[#FAF6F2] relative flex flex-col">
        {/* Falling Sakura Petals Particle Simulation */}
        <SakuraBackground active={sakuraActive} />

        {/* Global Multi-Page Navbar with official NAC Logo */}
        <Navbar
          sakuraActive={sakuraActive}
          setSakuraActive={setSakuraActive}
          onOpenTicketModal={handleOpenTicketModal}
        />

        {/* Page Content Routes */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage onOpenTicketModal={handleOpenTicketModal} />} />
            <Route path="/events" element={<EventsPage onOpenTicketModal={handleOpenTicketModal} />} />
            <Route path="/schedule" element={<SchedulePage onOpenTicketModal={handleOpenTicketModal} />} />
            <Route path="/tickets" element={<TicketsPage onOpenTicketModal={handleOpenTicketModal} />} />
            <Route path="/cosplay" element={<CosplayPage onOpenTicketModal={handleOpenTicketModal} />} />
            <Route path="/quiz" element={<QuizPage onOpenTicketModal={handleOpenTicketModal} />} />
            <Route path="/venue" element={<VenuePage onOpenTicketModal={handleOpenTicketModal} />} />
            <Route path="/about" element={<AboutPage onOpenTicketModal={handleOpenTicketModal} />} />
            {/* Fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Global Footer with official NAC Logo */}
        <Footer onOpenTicketModal={handleOpenTicketModal} />

        {/* Global Ticket Booking Modal & E-Pass Generator */}
        <TicketModal
          isOpen={ticketModalOpen}
          onClose={() => setTicketModalOpen(false)}
          defaultTier={defaultTier}
        />
      </div>
    </BrowserRouter>
  );
}
