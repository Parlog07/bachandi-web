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
        backgroundColor: 'rgba(18, 3, 3, 0.55)'
      }}
    >
      {/* Background glow effects */}
      <div className="absolute right-0 bottom-1/4 w-[350px] h-[350px] ambient-glow-red rounded-full opacity-15 pointer-events-none" />
      <div className="absolute left-0 top-1/4 w-[350px] h-[350px] ambient-glow-gold rounded-full opacity-15 pointer-events-none" />

      <div className="container-max relative z-10">
        
        {/* Title */}
        <div className="section-header">
          <h2 className="section-subtitle">
            Join Our Table
          </h2>
          <h3 
            className="section-title"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Find & Book
          </h3>
          <p className="section-header-desc">
            Visit us in our lantern-lit bazaar or reserve a private table for an Arabian nights banquet.
          </p>
        </div>

        {/* Split Layout */}
        <div className="contact-grid">
          
          {/* Left Column: Contact & Hours info */}
          <div className="contact-info-card glass-panel">
            <div>
              <h4 className="contact-info-title" style={{ fontFamily: 'var(--font-heading)' }}>
                Information
              </h4>
              
              {/* Details list */}
              <div className="contact-list">
                {/* Location */}
                <div className="contact-item">
                  <MapPin className="contact-item-icon" />
                  <div>
                    <h5 className="contact-item-label">Location</h5>
                    <p className="contact-item-val">45 Al-Muizz Street, Historic District, Cairo, Egypt</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="contact-item">
                  <Phone className="contact-item-icon" />
                  <div>
                    <h5 className="contact-item-label">Reservations & Delivery</h5>
                    <p className="contact-item-val">+20 2 2786 5432</p>
                  </div>
                </div>

                {/* Mail */}
                <div className="contact-item">
                  <Mail className="contact-item-icon" />
                  <div>
                    <h5 className="contact-item-label">Email Inquiry</h5>
                    <p className="contact-item-val">royal@bachandi.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Hours Grid */}
            <div className="contact-hours-box">
              <div className="contact-hours-title-box">
                <Clock className="contact-item-icon" />
                <div>
                  <h5 className="contact-hours-title">Opening Hours</h5>
                  <div className="contact-hours-table">
                    <span className="contact-hours-day">Weekdays:</span>
                    <span className="contact-hours-time">12:00 PM – 12:00 AM</span>
                    <span className="contact-hours-day">Friday & Saturday:</span>
                    <span className="contact-hours-time">12:00 PM – 02:00 AM</span>
                    <span className="contact-hours-day">Sunday:</span>
                    <span className="contact-hours-time">04:00 PM – 11:00 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry / Booking Form */}
          <div className="contact-form-card glass-panel">
            <h4 className="contact-info-title" style={{ fontFamily: 'var(--font-heading)' }}>
              Reserve a Table
            </h4>

            {submitted ? (
              <div className="contact-success">
                <div className="contact-success-icon-box">
                  <Send size={20} className="text-[#d4af37]" />
                </div>
                <h5 className="contact-success-title" style={{ fontFamily: 'var(--font-heading)' }}>
                  Reservation Received!
                </h5>
                <p className="contact-success-desc">
                  A host from Bachandi will review your request and contact you shortly to confirm your booking. Shokran!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  {/* Name */}
                  <div className="form-group">
                    <label className="form-label">Name</label>
                    <input 
                      type="text" 
                      name="name" 
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="Karim Haddad"
                    />
                  </div>
                  {/* Email */}
                  <div className="form-group">
                    <label className="form-label">Email Address</label>
                    <input 
                      type="email" 
                      name="email" 
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="karim@gmail.com"
                    />
                  </div>
                </div>

                <div className="form-row">
                  {/* Date */}
                  <div className="form-group">
                    <label className="form-label flex items-center gap-1.5">
                      <Calendar size={14} /> Date & Time
                    </label>
                    <input 
                      type="datetime-local" 
                      name="date" 
                      required
                      value={formData.date}
                      onChange={handleInputChange}
                      className="form-input"
                    />
                  </div>
                  {/* Guests */}
                  <div className="form-group">
                    <label className="form-label flex items-center gap-1.5">
                      <Users size={14} /> Table Size
                    </label>
                    <select 
                      name="guests" 
                      value={formData.guests}
                      onChange={handleInputChange}
                      className="form-input"
                      style={{ height: '42px' }}
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
                <div className="form-group">
                  <label className="form-label">Special Request</label>
                  <textarea 
                    name="message" 
                    rows="3"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="Let us know if you have food allergies or require a private lounge..."
                  />
                </div>

                {/* Submit */}
                <button 
                  type="submit" 
                  className="w-full btn-primary"
                  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem', height: '48px', marginTop: '0.5rem' }}
                >
                  <Send size={16} /> Request Booking
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
