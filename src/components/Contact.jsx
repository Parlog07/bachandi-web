import React, { useState } from 'react';
import { MapPin, Phone, Clock, Mail, Calendar, Users, Send } from 'lucide-react';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    guests: '2',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', date: '', guests: '2', message: '' });
    }, 4000);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section 
      id="contact" 
      className="section-padding relative overflow-hidden bg-islamic-pattern"
      style={{
        backgroundColor: 'var(--color-bg-darker)'
      }}
    >
      {/* Background glow effects */}
      <div className="absolute right-0 bottom-1/4 w-[350px] h-[350px] ambient-glow-red rounded-full opacity-15 pointer-events-none" />
      <div className="absolute left-0 top-1/4 w-[350px] h-[350px] ambient-glow-gold rounded-full opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-gold-gradient text-xs uppercase tracking-widest font-semibold mb-3">
            Join Our Table
          </h2>
          <h3 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Find & Book
          </h3>
          <p className="text-gray-400">
            Visit us in our lantern-lit bazaar or reserve a private table for an Arabian nights banquet.
          </p>
        </div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Contact & Hours info */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8">
            <div className="glass-panel p-8 text-left bg-[#170a0a]/50 h-full flex flex-col justify-between">
              <div>
                <h4 className="text-2xl font-bold mb-6 text-[#f4edd8]" style={{ fontFamily: 'var(--font-heading)' }}>
                  Information
                </h4>
                
                {/* Details list */}
                <div className="space-y-6">
                  {/* Location */}
                  <div className="flex gap-4 items-start">
                    <MapPin className="w-5 h-5 text-[#d4af37] shrink-0 mt-1" />
                    <div>
                      <h5 className="font-semibold text-gray-200">Location</h5>
                      <p className="text-sm text-gray-400 mt-1">45 Al-Muizz Street, Historic District, Cairo, Egypt</p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex gap-4 items-start">
                    <Phone className="w-5 h-5 text-[#d4af37] shrink-0 mt-1" />
                    <div>
                      <h5 className="font-semibold text-gray-200">Reservations & Delivery</h5>
                      <p className="text-sm text-gray-400 mt-1">+20 2 2786 5432</p>
                    </div>
                  </div>

                  {/* Mail */}
                  <div className="flex gap-4 items-start">
                    <Mail className="w-5 h-5 text-[#d4af37] shrink-0 mt-1" />
                    <div>
                      <h5 className="font-semibold text-gray-200">Email Inquiry</h5>
                      <p className="text-sm text-gray-400 mt-1">royal@bachandi.com</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hours Grid */}
              <div className="border-t border-white/5 pt-8 mt-8">
                <div className="flex gap-4 items-start mb-4">
                  <Clock className="w-5 h-5 text-[#d4af37] shrink-0 mt-1" />
                  <div>
                    <h5 className="font-semibold text-gray-200">Opening Hours</h5>
                    <div className="grid grid-cols-2 gap-x-8 gap-y-2 mt-3 text-sm">
                      <span className="text-gray-400">Weekdays:</span>
                      <span className="text-gold-light text-right">12:00 PM – 12:00 AM</span>
                      <span className="text-gray-400">Friday & Saturday:</span>
                      <span className="text-gold-light text-right">12:00 PM – 02:00 AM</span>
                      <span className="text-gray-400">Sunday:</span>
                      <span className="text-gold-light text-right">04:00 PM – 11:00 PM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry / Booking Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-8 text-left bg-[#170a0a]/50 h-full">
              <h4 className="text-2xl font-bold mb-6 text-[#f4edd8]" style={{ fontFamily: 'var(--font-heading)' }}>
                Reserve a Table
              </h4>

              {submitted ? (
                <div className="h-64 flex flex-col items-center justify-center text-center gap-4">
                  <div className="w-12 h-12 rounded-full border-2 border-[#d4af37] flex items-center justify-center animate-bounce">
                    <Send className="w-6 h-6 text-[#d4af37]" />
                  </div>
                  <h5 className="text-xl font-bold text-gold-light" style={{ fontFamily: 'var(--font-heading)' }}>
                    Reservation Received!
                  </h5>
                  <p className="text-sm text-gray-400 max-w-sm">
                    A host from Bachandi will review your request and contact you shortly to confirm your booking. Shokran!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* Name */}
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-gray-400 mb-2 font-semibold">Name</label>
                      <input 
                        type="text" 
                        name="name" 
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full bg-[#080202]/60 border border-[#d4af37]/20 rounded-lg py-3 px-4 text-[#fbf8f3] placeholder-gray-600 focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37]/50 transition-colors"
                        placeholder="Karim Haddad"
                      />
                    </div>
                    {/* Email */}
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-gray-400 mb-2 font-semibold">Email Address</label>
                      <input 
                        type="email" 
                        name="email" 
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full bg-[#080202]/60 border border-[#d4af37]/20 rounded-lg py-3 px-4 text-[#fbf8f3] placeholder-gray-600 focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37]/50 transition-colors"
                        placeholder="karim@gmail.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* Date */}
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-gray-400 mb-2 font-semibold flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" /> Date & Time
                      </label>
                      <input 
                        type="datetime-local" 
                        name="date" 
                        required
                        value={formData.date}
                        onChange={handleInputChange}
                        className="w-full bg-[#080202]/60 border border-[#d4af37]/20 rounded-lg py-3 px-4 text-[#fbf8f3] placeholder-gray-600 focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37]/50 transition-colors"
                      />
                    </div>
                    {/* Guests */}
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-gray-400 mb-2 font-semibold flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5" /> Table Size
                      </label>
                      <select 
                        name="guests" 
                        value={formData.guests}
                        onChange={handleInputChange}
                        className="w-full bg-[#080202]/60 border border-[#d4af37]/20 rounded-lg py-3 px-4 text-[#fbf8f3] focus:outline-none focus:border-[#d4af37] transition-colors"
                      >
                        <option value="1">1 Guest</option>
                        <option value="2">2 Guests</option>
                        <option value="4">4 Guests</option>
                        <option value="6">6 Guests</option>
                        <option value="8">8+ Guests</option>
                      </select>
                    </div>
                  </div>

                  {/* Special Requests */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-gray-400 mb-2 font-semibold">Special Request</label>
                    <textarea 
                      name="message" 
                      rows="3"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full bg-[#080202]/60 border border-[#d4af37]/20 rounded-lg py-3 px-4 text-[#fbf8f3] placeholder-gray-600 focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37]/50 transition-colors"
                      placeholder="Let us know if you have food allergies or require a private lounge..."
                    />
                  </div>

                  {/* Submit */}
                  <button 
                    type="submit" 
                    className="w-full btn-primary py-3.5 flex justify-center items-center gap-2"
                  >
                    <Send className="w-4 h-4" /> Request Booking
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
