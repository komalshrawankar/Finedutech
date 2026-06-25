import React, { useState } from "react";
import { IoClose } from "react-icons/io5";

// Replace with your trophy image
import trophyImg from "../assets/images/trophy.png";

const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwvn8CqNWLzx0yQQ0AEFVMNg4bu2eU_xwp0YmfxupWh0yWj6tmDbhXf8iP2eelFI00X/exec";

const initialForm = {
  schoolName: "",
  contactPerson: "",
  email: "",
  designation: "",
  phone: "",
  city: "",
  message: "",
};

const RegisterSchoolPopup = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleClose = () => {
    setFormData(initialForm);
    setIsSuccess(false);
    setIsSubmitting(false);
    onClose();
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  setIsSubmitting(true);

  try {
    const formBody = new URLSearchParams();

    formBody.append("schoolName", formData.schoolName);
    formBody.append("contactPerson", formData.contactPerson);
    formBody.append("email", formData.email);
    formBody.append("designation", formData.designation);
    formBody.append("phone", formData.phone);
    formBody.append("city", formData.city);
    formBody.append("message", formData.message);

    await fetch(SCRIPT_URL, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formBody.toString(),
    });

    setIsSuccess(true);
    setFormData(initialForm);
  } catch (error) {
    console.error("Form submit error:", error);
    alert("Something went wrong. Please try again.");
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <div className="fixed inset-0 z-[10000] bg-black/85 flex items-center justify-center px-4 py-6">
      {!isSuccess ? (
        <div className="relative w-full max-w-[760px] rounded-[10px] bg-white px-6 sm:px-10 py-8 sm:py-10">
          {/* Close Button */}
          <button
            type="button"
            onClick={handleClose}
            className="absolute right-5 top-5 flex h-[34px] w-[34px] items-center justify-center rounded-full bg-[#FFC928] text-black transition hover:rotate-90"
            aria-label="Close popup"
          >
            <IoClose className="text-[26px]" />
          </button>

          {/* Heading */}
          <div className="mb-6 max-w-[560px]">
            <h2 className="font-heading text-[26px] sm:text-[30px] leading-none text-black">
              Register Your School for{" "}
              <span className="text-[#007BFF]">FinEdutect</span>
            </h2>

            <p className="mt-3 text-left text-[13px] sm:text-[14px] leading-[20px] text-[#555]">
              Fill out the form below to enroll your school in our financial
              literacy program. Our team will guide you through the process.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
              <div>
                <label className="mb-1 block text-[13px] font-medium text-black">
                  School Name*
                </label>
                <input
                  type="text"
                  name="schoolName"
                  value={formData.schoolName}
                  onChange={handleChange}
                  required
                  placeholder="Enter your school's full name"
                  className="h-[42px] w-full rounded-[6px] border border-[#cfd6df] px-3 text-[13px] outline-none focus:border-[#007BFF]"
                />
              </div>

              <div>
                <label className="mb-1 block text-[13px] font-medium text-black">
                  Contact Person Name*
                </label>
                <input
                  type="text"
                  name="contactPerson"
                  value={formData.contactPerson}
                  onChange={handleChange}
                  required
                  placeholder="Enter your name"
                  className="h-[42px] w-full rounded-[6px] border border-[#cfd6df] px-3 text-[13px] outline-none focus:border-[#007BFF]"
                />
              </div>

              <div>
                <label className="mb-1 block text-[13px] font-medium text-black">
                  Email Address*
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter a valid email address"
                  className="h-[42px] w-full rounded-[6px] border border-[#cfd6df] px-3 text-[13px] outline-none focus:border-[#007BFF]"
                />
              </div>

              <div>
                <label className="mb-1 block text-[13px] font-medium text-black">
                  Designation / Role*
                </label>
                <input
                  type="text"
                  name="designation"
                  value={formData.designation}
                  onChange={handleChange}
                  required
                  placeholder="Principal / Teacher / Administrator"
                  className="h-[42px] w-full rounded-[6px] border border-[#cfd6df] px-3 text-[13px] outline-none focus:border-[#007BFF]"
                />
              </div>

              <div>
                <label className="mb-1 block text-[13px] font-medium text-black">
                  Phone / Mobile Number*
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="Enter contact number with country code"
                  className="h-[42px] w-full rounded-[6px] border border-[#cfd6df] px-3 text-[13px] outline-none focus:border-[#007BFF]"
                />
              </div>

              <div>
                <label className="mb-1 block text-[13px] font-medium text-black">
                  City / State*
                </label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  placeholder="Enter city and state"
                  className="h-[42px] w-full rounded-[6px] border border-[#cfd6df] px-3 text-[13px] outline-none focus:border-[#007BFF]"
                />
              </div>
            </div>

            <div className="mt-4">
              <label className="mb-1 block text-[13px] font-medium text-black">
                Message / Notes
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Additional details or questions (optional)"
                className="h-[110px] w-full resize-none rounded-[6px] border border-[#cfd6df] px-3 py-3 text-[13px] outline-none focus:border-[#007BFF]"
              />
            </div>

            <div className="mt-6 border-t border-[#d7dce2] pt-6 flex justify-end">
              <button
                type="submit"
                disabled={isSubmitting}
                className="rounded-full bg-[#FFC928] px-6 py-3 text-[13px] font-medium text-black shadow-[0_3px_0_#111] transition hover:translate-y-[2px] hover:shadow-[0_1px_0_#111] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? "Submitting..." : "Submit Registration"}
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className="relative w-full max-w-[520px] rounded-[16px] bg-white px-6 sm:px-10 py-10 text-center">
          <img
            src={trophyImg}
            alt="Trophy"
            className="mx-auto mb-5 w-[80px] h-auto object-contain"
          />

          <h2 className="font-heading text-[26px] sm:text-[30px] text-[#007BFF] leading-none">
            Congratulations!
          </h2>

          <p className="mx-auto mt-5 max-w-[410px] text-center text-[14px] leading-[22px] text-[#555]">
            Your school has been successfully registered for Finedutech. Our
            team will contact you shortly with next steps to get your students
            started on their financial literacy journey.
          </p>

          <button
            type="button"
            onClick={handleClose}
            className="mt-6 rounded-full bg-[#FFC928] px-6 py-3 text-[13px] font-medium text-black shadow-[0_3px_0_#111] transition hover:translate-y-[2px] hover:shadow-[0_1px_0_#111]"
          >
            Go to Home Page
          </button>
        </div>
      )}
    </div>
  );
};

export default RegisterSchoolPopup;