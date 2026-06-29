import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import trophyImg from "../assets/images/trophy.png";

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbw8v1AoBaR3sHoRF8bc86YZtq2W8CvVyb0LiPEp6wS3gcuj1BdFLFI8hzeFpIL2BIifXA/exec";

const initialForm = {
  schoolName: "",
  contactPerson: "",
  designation: "",
  phone: "",
};

const RegisterSchoolPopup = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [phoneError, setPhoneError] = useState("");

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      const onlyNumbers = value.replace(/\D/g, "").slice(0, 10);

      setFormData((prev) => ({
        ...prev,
        phone: onlyNumbers,
      }));

      if (onlyNumbers.length > 0 && onlyNumbers.length < 10) {
        setPhoneError("Phone number must be exactly 10 digits");
      } else {
        setPhoneError("");
      }

      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleClose = () => {
    setFormData(initialForm);
    setIsSuccess(false);
    setIsSubmitting(false);
    setPhoneError("");
    onClose();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.phone.length !== 10) {
      setPhoneError("Phone number must be exactly 10 digits");
      return;
    }

    setIsSubmitting(true);

    try {
      const formBody = new URLSearchParams();

      formBody.append("schoolName", formData.schoolName);
      formBody.append("contactPerson", formData.contactPerson);
      formBody.append("designation", formData.designation);
      formBody.append("phone", formData.phone);

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
    <div className="fixed inset-0 z-[10000] flex items-center justify-center overflow-y-auto bg-black/85 px-4 py-6">
      {!isSuccess ? (
        <div className="relative max-h-[calc(100dvh-48px)] w-full max-w-[560px] overflow-y-auto rounded-[10px] bg-white px-5 py-7 sm:px-10 sm:py-10">
          <button
            type="button"
            onClick={handleClose}
            className="absolute right-5 top-5 flex h-[34px] w-[34px] items-center justify-center rounded-full bg-[#FFC928] text-black transition hover:rotate-90"
            aria-label="Close popup"
          >
            <IoClose className="text-[26px]" />
          </button>

          <div className="mb-6 max-w-[640px]">
            <h2 className="font-heading text-[25px] leading-tight text-black sm:text-[30px] sm:leading-none">
              Register Your School for{" "}
              <br className="hidden sm:block" /><span className="text-[#007BFF]">Fin-Edu Quest</span>
            </h2>

            <p className="mt-3 text-left text-[13px] sm:text-[14px] leading-[20px] text-[#555]">
              Fill out the form below to enroll your school in our financial
              literacy program.
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-4">
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
                  placeholder="School name"
                  className="h-[42px] w-full rounded-[6px] border border-[#cfd6df] px-3 text-[13px] outline-none focus:border-[#007BFF]"
                />
              </div>

              <div>
                <label className="mb-1 block text-[13px] font-medium text-black">
                  Contact Person*
                </label>
                <input
                  type="text"
                  name="contactPerson"
                  value={formData.contactPerson}
                  onChange={handleChange}
                  required
                  placeholder="Contact person"
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
                  placeholder="Principal / Teacher"
                  className="h-[42px] w-full rounded-[6px] border border-[#cfd6df] px-3 text-[13px] outline-none focus:border-[#007BFF]"
                />
              </div>

              <div>
                <label className="mb-1 block text-[13px] font-medium text-black">
                  Phone Number*
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  inputMode="numeric"
                  maxLength={10}
                  placeholder="10 digit number"
                  className="h-[42px] w-full rounded-[6px] border border-[#cfd6df] px-3 text-[13px] outline-none focus:border-[#007BFF]"
                />
                {phoneError && (
                  <p className="mt-1 text-[12px] text-red-500">
                    {phoneError}
                  </p>
                )}
              </div>
            </div>

            <div className="mt-6 flex justify-stretch border-t border-[#d7dce2] pt-6 sm:justify-end">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-full bg-[#FFC928] px-6 py-3 text-[13px] font-medium text-black shadow-[0_3px_0_#111] transition hover:translate-y-[2px] hover:shadow-[0_1px_0_#111] disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
              >
                {isSubmitting ? "Submitting..." : "Request a callback"}
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
            Your school has been successfully registered for Fin-edu Quest. Our
            team will contact you shortly.
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
