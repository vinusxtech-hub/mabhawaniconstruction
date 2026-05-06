"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  MessageSquare,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  User,
} from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";

const PHONE = "918319213539";

const serviceOptions = [
  "Residential Construction",
  "Commercial Construction",
  "Home Renovation",
  "Kota Stone Polishing",
  "Marble Polishing",
  "Tile Installation",
  "Flooring Solutions",
  "Full Construction",
  "Other",
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Build WhatsApp message from form data
    const whatsappMessage = `Hello Maa Bhawani Construction!%0A%0A*New Inquiry:*%0A👤 Name: ${formData.name}%0A📞 Phone: ${formData.phone}%0A🏗️ Service: ${formData.service || "General Inquiry"}%0A💬 Message: ${formData.message}`;

    window.open(
      `https://wa.me/${PHONE}?text=${whatsappMessage}`,
      "_blank"
    );

    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleWhatsAppQuick = (topic: string) => {
    const messages: Record<string, string> = {
      general:
        "Hello Maa Bhawani Construction! I am interested in your services. Please share more details.",
      quote:
        "Hello Maa Bhawani Construction! I would like to get a quote for my project.%0A%0AProject Type: %0ALocation: %0ABudget Range: ",
      visit:
        "Hello Maa Bhawani Construction! I would like to schedule a free site visit.%0A%0APreferred Date: %0ALocation: ",
      renovation:
        "Hello Maa Bhawani Construction! I am interested in home renovation services.%0A%0AType of Renovation: %0ACurrent Condition: %0ABudget: ",
    };

    window.open(
      `https://wa.me/${PHONE}?text=${messages[topic] || messages.general}`,
      "_blank"
    );
  };

  return (
    <>
      {/* ═══════ HERO BANNER ═══════ */}
      <section className="relative pt-32 pb-20 bg-brand-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-black via-brand-black to-brand-gold/10" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-brand-gold text-sm font-medium tracking-wider uppercase">
              Get In Touch
            </span>
            <h1 className="font-poppins font-bold text-4xl md:text-5xl lg:text-6xl text-white mt-3">
              Contact{" "}
              <span className="text-brand-gold">Us</span>
            </h1>
            <p className="mt-4 text-white/60 text-lg max-w-2xl">
              Ready to start your project? Reach out for a free consultation
              and let&apos;s build something great together.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══════ CONTACT INFO CARDS ═══════ */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 -mt-12 sm:-mt-16 lg:-mt-24 relative z-20">
            {/* Phone */}
            <motion.a
              href="tel:+918319213539"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-xl border border-gray-100 p-6 shadow-lg hover:shadow-xl hover:border-brand-gold/40 transition-all duration-300 text-center group"
            >
              <div className="w-14 h-14 bg-brand-gold/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-gold/20 transition-colors">
                <Phone className="w-7 h-7 text-brand-gold" />
              </div>
              <h3 className="font-poppins font-semibold text-brand-black mb-1">
                Call Us
              </h3>
              <p className="text-brand-gold font-bold text-lg">
                +91 8319213539
              </p>
            </motion.a>

            {/* WhatsApp */}
            <motion.button
              onClick={() => handleWhatsAppQuick("general")}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-xl border border-gray-100 p-6 shadow-lg hover:shadow-xl hover:border-[#25D366]/40 transition-all duration-300 text-center group"
            >
              <div className="w-14 h-14 bg-[#25D366]/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[#25D366]/20 transition-colors">
                <MessageSquare className="w-7 h-7 text-[#25D366]" />
              </div>
              <h3 className="font-poppins font-semibold text-brand-black mb-1">
                WhatsApp
              </h3>
              <p className="text-[#25D366] font-bold text-sm">
                Message Us Directly
              </p>
            </motion.button>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-xl border border-gray-100 p-6 shadow-lg text-center"
            >
              <div className="w-14 h-14 bg-brand-gold/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-7 h-7 text-brand-gold" />
              </div>
              <h3 className="font-poppins font-semibold text-brand-black mb-1">
                Location
              </h3>
              <p className="text-brand-gray/70 text-sm">
                Madhya Pradesh, India
              </p>
            </motion.div>

            {/* Hours */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-xl border border-gray-100 p-6 shadow-lg text-center"
            >
              <div className="w-14 h-14 bg-brand-gold/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-7 h-7 text-brand-gold" />
              </div>
              <h3 className="font-poppins font-semibold text-brand-black mb-1">
                Working Hours
              </h3>
              <p className="text-brand-gray/70 text-sm">
                Mon - Sat: 8AM - 7PM
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════ FORM + MAP ═══════ */}
      <section className="py-16 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Send Us a Message"
            subtitle="Fill out the form and we'll connect with you on WhatsApp instantly"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm"
            >
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="font-poppins font-bold text-xl text-brand-black mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-brand-gray/70">
                    We&apos;ll respond to your inquiry on WhatsApp shortly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-brand-black mb-1.5"
                    >
                      Your Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        className="w-full pl-10 pr-4 py-3 bg-brand-light border border-gray-200 rounded-xl text-sm text-brand-black focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/30 placeholder:text-gray-400 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-brand-black mb-1.5"
                    >
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full pl-10 pr-4 py-3 bg-brand-light border border-gray-200 rounded-xl text-sm text-brand-black focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/30 placeholder:text-gray-400 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Service Selection */}
                  <div>
                    <label
                      htmlFor="service"
                      className="block text-sm font-medium text-brand-black mb-1.5"
                    >
                      Service Needed
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-brand-light border border-gray-200 rounded-xl text-sm text-brand-black focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/30 transition-colors appearance-none"
                    >
                      <option value="">Select a service</option>
                      {serviceOptions.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-brand-black mb-1.5"
                    >
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Describe your project or requirements..."
                      className="w-full px-4 py-3 bg-brand-light border border-gray-200 rounded-xl text-sm text-brand-black focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/30 placeholder:text-gray-400 transition-colors resize-none"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full px-6 py-3.5 bg-brand-gold text-brand-black font-semibold rounded-xl hover:bg-brand-gold-dark transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    Send via WhatsApp
                  </button>
                </form>
              )}
            </motion.div>

            {/* Right side - Map + Quick Actions */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Google Maps */}
              <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667000!2d77.4!3d23.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c428f8fd68fbd%3A0x2155716d572d4f8!2sMadhya%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Maa Bhawani Construction Location"
                  className="w-full"
                />
              </div>

              {/* WhatsApp Quick Messages */}
              <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
                <h3 className="font-poppins font-semibold text-brand-black mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Quick WhatsApp Messages
                </h3>
                <div className="space-y-3">
                  <button
                    onClick={() => handleWhatsAppQuick("general")}
                    className="w-full text-left px-4 py-3 bg-brand-light rounded-xl hover:bg-[#25D366]/10 transition-colors text-sm font-medium text-brand-gray group flex items-center justify-between"
                  >
                    <span>💬 General Inquiry</span>
                    <Send className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#25D366] transition-colors" />
                  </button>
                  <button
                    onClick={() => handleWhatsAppQuick("quote")}
                    className="w-full text-left px-4 py-3 bg-brand-light rounded-xl hover:bg-[#25D366]/10 transition-colors text-sm font-medium text-brand-gray group flex items-center justify-between"
                  >
                    <span>💰 Get a Quote</span>
                    <Send className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#25D366] transition-colors" />
                  </button>
                  <button
                    onClick={() => handleWhatsAppQuick("visit")}
                    className="w-full text-left px-4 py-3 bg-brand-light rounded-xl hover:bg-[#25D366]/10 transition-colors text-sm font-medium text-brand-gray group flex items-center justify-between"
                  >
                    <span>📍 Schedule Site Visit</span>
                    <Send className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#25D366] transition-colors" />
                  </button>
                  <button
                    onClick={() => handleWhatsAppQuick("renovation")}
                    className="w-full text-left px-4 py-3 bg-brand-light rounded-xl hover:bg-[#25D366]/10 transition-colors text-sm font-medium text-brand-gray group flex items-center justify-between"
                  >
                    <span>🏠 Renovation Inquiry</span>
                    <Send className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#25D366] transition-colors" />
                  </button>
                </div>
              </div>

              {/* Owners */}
              <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
                <h3 className="font-poppins font-semibold text-brand-black mb-4">
                  Our Team
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-brand-light rounded-xl">
                    <div className="w-10 h-10 bg-brand-gold/20 rounded-full flex items-center justify-center">
                      <span className="font-poppins font-bold text-brand-gold text-sm">
                        CS
                      </span>
                    </div>
                    <div>
                      <p className="font-medium text-sm text-brand-black">
                        Chainsingh Surawat
                      </p>
                      <p className="text-xs text-brand-gray/60">Proprietor</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-brand-light rounded-xl">
                    <div className="w-10 h-10 bg-brand-gold/20 rounded-full flex items-center justify-center">
                      <span className="font-poppins font-bold text-brand-gold text-sm">
                        KS
                      </span>
                    </div>
                    <div>
                      <p className="font-medium text-sm text-brand-black">
                        Kuldeep Singh Surawat
                      </p>
                      <p className="text-xs text-brand-gray/60">Co-Owner</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
