import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // Import default styles
import Container from "./Container";
import { RxCross2 } from "react-icons/rx";

function Form({ setform, form }) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
    date: null,
  });

  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      message: "",
      date: null, // Reset the date as well
    });
    setIsFormVisible(false); // Go back to the calendar
  };

  const handleDateSelect = (date) => {
    setFormData({
      ...formData,
      date: date, // Save the selected date in formData
    });
    setIsFormVisible(true); // Show the form after selecting a date
  };

  return (
    <div
      className={`fixed top-0 z-50 w-full h-screen bg-gray-700/70 ${
        form ? "flex flex-col opacity-100" : "hidden opacity-0"
      }`}
    >
      <div className="justify-center m-auto flex relative">
        <div className="relative">
          <RxCross2
            onClick={() => setform(false)}
            className="absolute text-black top-2 right-2 bg-white text-2xl p-1 cursor-pointer"
          />
          <Container className="text-black">
            {!isFormVisible ? (
              <div className="border flex flex-col gap-5  form w-screen md:w-[440px] lg:mx-auto rounded-2xl bg-white p-8 shadow-md h-[630px]">
                <h2 className="text-xl font-semibold">Select a Date</h2>
                <div className="calendar w-full h-full">
                  <Calendar
                    onChange={handleDateSelect}
                    value={formData.date}
                    className="w-full h-full" // Ensure full width and height for the calendar
                  />
                </div>
              </div>
            ) : (
              <div className="border form w-screen md:w-[440px]  lg:mx-auto rounded-2xl bg-white p-8 shadow-md h-[630px]">
                <h1 className="text-xl font-semibold mb-6">
                  Fill out the form, and we&apos;ll contact you
                </h1>
                <form onSubmit={handleSubmit}>
                  {/* Full Name */}
                  <div className="mb-3">
                    <label className="block text-gray-700">Full Name*</label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                      required
                    />
                  </div>

                  {/* Email Address */}
                  <div className="mb-3">
                    <label className="block text-gray-700">
                      Email Address*
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                      required
                    />
                  </div>

                  {/* Phone Number */}
                  <div className="mb-3">
                    <label className="block text-gray-700">Phone Number*</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                      required
                    />
                  </div>

                  {/* Message */}
                  <div className="mb-3">
                    <label className="block text-gray-700">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                      rows="4"
                      placeholder="Describe your project and goal"
                      required
                    />
                  </div>

                  {/* Display selected date */}
                  <div className="mb-3">
                    <label className="block text-gray-700">
                      Selected Date*
                    </label>
                    <input
                      type="text"
                      name="date"
                      value={formData.date ? formData.date.toDateString() : ""}
                      readOnly
                      className="w-full px-3 py-1 border border-gray-300 rounded-md focus:outline-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div>
                    <button
                      type="submit"
                      className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-secondary transition-colors"
                    >
                      Submit
                    </button>
                  </div>
                </form>

                {/* Button to go back to calendar */}
                <button
                  onClick={() => {
                    setIsFormVisible(false); // Show the calendar again
                    setFormData({ ...formData, date: null }); // Reset the selected date
                  }}
                  className="mt-4 w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-secondary transition-colors "
                >
                  Select a different date
                </button>
              </div>
            )}
          </Container>
        </div>
      </div>
    </div>
  );
}

export default Form;
