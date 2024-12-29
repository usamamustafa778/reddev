import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Container from "./Container";
import { RxCross2 } from "react-icons/rx";
import { IoTimeOutline, IoCalendarClearOutline } from "react-icons/io5";
import { motion } from "framer-motion";

function Form({ setform, form }) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
    date: null,
    time: "",
  });

  const [isFormVisible, setIsFormVisible] = useState(false);
  const timeSlots = [
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
    "05:00 PM",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleDateSelect = (date) => {
    setFormData({
      ...formData,
      date: date,
    });
  };

  const handleTimeSelect = (time) => {
    setFormData({
      ...formData,
      time: time,
    });
    setIsFormVisible(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`fixed top-0 z-50 w-full h-screen bg-gradient-to-br from-black/90 to-gray-900/90 backdrop-blur-xl ${
        form ? "flex items-center justify-center" : "hidden"
      }`}
    >
      <div className="relative w-full max-w-4xl mx-4">
        <RxCross2
          onClick={() => setform(false)}
          className="absolute text-white/90 hover:text-white -top-12 right-0 text-2xl p-2 cursor-pointer z-10 transition-all duration-300 hover:rotate-90 bg-white/10 rounded-full backdrop-blur-sm"
        />

        {!isFormVisible ? (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="bg-white/95 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl"
          >
            <div className="grid md:grid-cols-2 gap-6 p-8">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <IoCalendarClearOutline className="text-2xl text-primary" />
                  <h2 className="text-2xl font-bold text-gray-900">
                    Select Date
                  </h2>
                </div>
                <div className="calendar-wrapper bg-gray-50/50 p-4 rounded-2xl">
                  <Calendar
                    onChange={handleDateSelect}
                    value={formData.date}
                    className="w-full border-0 rounded-xl shadow-sm"
                    minDate={new Date()}
                  />
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <IoTimeOutline className="text-2xl text-primary" />
                  <h2 className="text-2xl font-bold text-gray-900">
                    Select Time
                  </h2>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      onClick={() => handleTimeSelect(time)}
                      className={`p-4 rounded-xl text-center transition-all duration-300 ${
                        formData.time === time
                          ? "bg-primary text-white shadow-lg"
                          : "bg-gray-50/50 hover:bg-gray-50 text-gray-700"
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {formData.date && (
              <div className="border-t border-gray-100 p-6 bg-gray-50/50">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-sm text-gray-500">Selected DateTime</p>
                    <p className="text-lg font-medium text-gray-900">
                      {formData.date.toDateString()} {formData.time}
                    </p>
                  </div>
                  {formData.time && (
                    <button
                      onClick={() => setIsFormVisible(true)}
                      className="bg-primary text-white px-6 py-3 rounded-xl hover:bg-primary/90 transition-all duration-300"
                    >
                      Continue →
                    </button>
                  )}
                </div>
              </div>
            )}
          </motion.div>
        ) : (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="bg-white/95 backdrop-blur-xl rounded-3xl p-8 shadow-2xl"
          >
            <div className="max-w-md mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Complete Your Booking
              </h2>

              <div className="mb-6 p-4 bg-gray-50/50 rounded-xl">
                <p className="text-sm text-gray-500">Selected DateTime</p>
                <p className="text-lg font-medium text-gray-900">
                  {formData.date?.toDateString()} {formData.time}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Full Name"
                    className="w-full px-5 py-4 bg-gray-50/50 rounded-xl border-0 focus:ring-2 focus:ring-primary/30 transition-all duration-300"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    className="w-full px-5 py-4 bg-gray-50/50 rounded-xl border-0 focus:ring-2 focus:ring-primary/30 transition-all duration-300"
                    required
                  />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className="w-full px-5 py-4 bg-gray-50/50 rounded-xl border-0 focus:ring-2 focus:ring-primary/30 transition-all duration-300"
                    required
                  />
                </div>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  rows="3"
                  className="w-full px-5 py-4 bg-gray-50/50 rounded-xl border-0 focus:ring-2 focus:ring-primary/30 transition-all duration-300 resize-none"
                  required
                ></textarea>

                <div className="flex gap-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setIsFormVisible(false)}
                    className="flex-1 px-6 py-4 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-all duration-300"
                  >
                    ← Back
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-6 py-4 bg-primary text-white rounded-xl hover:bg-primary/90 transition-all duration-300"
                  >
                    Confirm Booking →
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

export default Form;
