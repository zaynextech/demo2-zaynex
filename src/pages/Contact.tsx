import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, ArrowRight, MessageSquare, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function ContactPage() {
  const [formState, setFormState] = useState({ name: '', email: '', phone: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API pipeline ingestion
    if (formState.name && formState.email) {
      setIsSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#F9F9F9] font-sans antialiased text-black selection:bg-black selection:text-white flex flex-col justify-between">
      
      <main className="w-full max-w-7xl mx-auto px-6 md:px-12 pt-20 pb-24 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* --- LEFT COLUMN: BRAND DIRECTORY & TOUCHPOINTS --- */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full">
            <div>
              <span className="text-xs font-bold tracking-widest uppercase text-gray-400 block mb-3">
                Concierge Desk
              </span>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.15] mb-6">
                Connect With <br />Our Advisors
              </h1>
              <p className="text-gray-500 text-sm md:text-base font-normal leading-relaxed max-w-sm mb-12">
                Whether you are seeking unlisted off-market villas or looking to secure a private structural consultation, our desk responds within two business hours.
              </p>
            </div>

            {/* Structured Contact Directory Grid */}
            <div className="flex flex-col gap-6">
              <div className="flex gap-4 items-center bg-white p-4 rounded-2xl border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.01)]">
                <div className="w-11 h-11 shrink-0 bg-[#F9F9F9] rounded-xl flex items-center justify-center text-black">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Direct Inquiries</p>
                  <p className="text-sm font-semibold text-black mt-0.5">+919258885837</p>
                </div>
              </div>

              <div className="flex gap-4 items-center bg-white p-4 rounded-2xl border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.01)]">
                <div className="w-11 h-11 shrink-0 bg-[#F9F9F9] rounded-xl flex items-center justify-center text-black">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Digital Correspondence</p>
                  <p className="text-sm font-semibold text-black mt-0.5">hello@zaynex.tech</p>
                </div>
              </div>

              <div className="flex gap-4 items-center bg-white p-4 rounded-2xl border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.01)]">
                <div className="w-11 h-11 shrink-0 bg-[#F9F9F9] rounded-xl flex items-center justify-center text-black">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Main Office</p>
                  <p className="text-sm font-semibold text-black mt-0.5">Global Service</p>
                </div>
              </div>

              <div className="flex gap-4 items-center bg-white p-4 rounded-2xl border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.01)]">
                <div className="w-11 h-11 shrink-0 bg-[#F9F9F9] rounded-xl flex items-center justify-center text-black">
                  <Clock size={18} />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Operating Windows</p>
                  <p className="text-sm font-semibold text-black mt-0.5">24/7</p>
                </div>
              </div>
            </div>
          </div>

          {/* --- RIGHT COLUMN: CONTACT INTERACTION INTERFACE --- */}
          <div className="lg:col-span-7 w-full">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-[0_30px_60px_rgba(0,0,0,0.02)] border border-gray-100 relative overflow-hidden">
              
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6 relative z-10">
                  <div className="flex items-center gap-2 mb-2">
                    <MessageSquare size={18} className="text-gray-400" />
                    <h3 className="text-lg font-bold">Secure Submission Channel</h3>
                  </div>

                  {/* Name Input */}
                  <div className="flex flex-col text-left">
                    <label className="text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-2">Full Name</label>
                    <input 
                      type="text" 
                      required
                      placeholder="George DC"
                      value={formState.name}
                      onChange={(e) => setFormState({...formState, name: e.target.value})}
                      className="w-full bg-[#F9F9F9] px-4 py-3.5 rounded-xl text-sm border border-transparent outline-none focus:bg-white focus:border-black transition-all"
                    />
                  </div>

                  {/* Dual Grid Row (Email & Phone) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col text-left">
                      <label className="text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-2">Email Address</label>
                      <input 
                        type="email" 
                        required
                        placeholder="example@domain.com"
                        value={formState.email}
                        onChange={(e) => setFormState({...formState, email: e.target.value})}
                        className="w-full bg-[#F9F9F9] px-4 py-3.5 rounded-xl text-sm border border-transparent outline-none focus:bg-white focus:border-black transition-all"
                      />
                    </div>
                    <div className="flex flex-col text-left">
                      <label className="text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-2">Phone Number</label>
                      <input 
                        type="tel" 
                        placeholder="+1 (310) 000-0000"
                        value={formState.phone}
                        onChange={(e) => setFormState({...formState, phone: e.target.value})}
                        className="w-full bg-[#F9F9F9] px-4 py-3.5 rounded-xl text-sm border border-transparent outline-none focus:bg-white focus:border-black transition-all"
                      />
                    </div>
                  </div>

                  {/* Message Textarea */}
                  <div className="flex flex-col text-left">
                    <label className="text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-2">Consultation Notes / Requirements</label>
                    <textarea 
                      rows={4}
                      required
                      placeholder="Tell us about the property classification, desired budget parameters, or architectural layouts you are tracking..."
                      value={formState.message}
                      onChange={(e) => setFormState({...formState, message: e.target.value})}
                      className="w-full bg-[#F9F9F9] px-4 py-3.5 rounded-xl text-sm border border-transparent outline-none focus:bg-white focus:border-black transition-all resize-none leading-relaxed"
                    />
                  </div>

                  {/* Submission Action Trigger */}
                  <div className="mt-4 pt-4 border-t border-gray-50 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-2 text-xs text-gray-400 font-medium">
                      <ShieldCheck size={14} className="text-gray-400 shrink-0" />
                      <span>Data protected via TLS encryption routing.</span>
                    </div>

                    <button 
                      type="submit"
                      className="bg-black text-white px-8 py-4 rounded-xl text-xs font-semibold tracking-wide flex items-center justify-center gap-2 group hover:bg-gray-800 transition-all duration-200 active:scale-95 shadow-md"
                    >
                      Transmit Request
                      <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  </div>
                </form>
              ) : (
                /* Success Transmitted Interface State */
                <div className="py-16 text-center flex flex-col items-center justify-center relative z-10 animate-fade-in">
                  <div className="w-14 h-14 bg-black text-white rounded-full flex items-center justify-center mb-6 shadow-sm">
                    <CheckCircle2 size={26} />
                  </div>
                  <h3 className="text-xl font-bold tracking-tight mb-2">Transmission Confirmed</h3>
                  <p className="text-gray-400 text-sm max-w-sm leading-relaxed mb-8">
                    Thank you, <span className="text-black font-semibold">{formState.name}</span>. Your structural intent parameters have bypassed validation and are successfully assigned to an estate strategist.
                  </p>
                  <button 
                    onClick={() => { setIsSubmitted(false); setFormState({ name: '', email: '', phone: '', message: '' }); }}
                    className="text-xs font-bold tracking-wider uppercase border-b border-black pb-0.5 text-black hover:text-gray-500 hover:border-gray-500 transition-colors"
                  >
                    Submit Alternative Form
                  </button>
                </div>
              )}

            </div>
          </div>

        </div>
      </main>

    </div>
  );
}