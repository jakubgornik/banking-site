import {
  fullNameValidationSchema,
  emailValidationSchema,
  phoneValidationSchema,
} from "@/utilities/validationSchemas";
import { useState } from "react";

const ContactSectionForm = () => {
  const [enteredFormData, setEnteredFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
  });

  const [validationData, setValidationData] = useState({
    fullNameValidation: true,
    emailValidation: true,
    phoneValidation: true,
  });

  const handleFullNameValidation = async () => {
    const isFullNameValid = await fullNameValidationSchema.isValid({
      fullName: enteredFormData.fullName,
    });
    setValidationData((prevData) => ({
      ...prevData,
      fullNameValidation: isFullNameValid,
    }));
  };

  const handleEmailValidation = async () => {
    const isEmailValid = await emailValidationSchema.isValid({
      email: enteredFormData.email,
    });
    setValidationData((prevData) => ({
      ...prevData,
      emailValidation: isEmailValid,
    }));
  };

  const handlePhoneNumberValidation = async () => {
    const isPhoneNumberValid = await phoneValidationSchema.isValid({
      phone: enteredFormData.phoneNumber,
    });
    setValidationData((prevData) => ({
      ...prevData,
      phoneValidation: isPhoneNumberValid,
    }));
  };

  // ...

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // ...
  };

  return (
    <>
      <div className="flex flex-col">
        <span className="bg-gradient-to-bl from-[#1D2B41] to-mint bg-clip-text py-4 text-center text-2xl font-extrabold tracking-wide text-transparent">
          Provide data for contact
        </span>
        <form onSubmit={handleFormSubmit}>
          <div className="flex flex-col items-center ">
            {/* Full name todo valdiation */}
            <label
              htmlFor="full-name"
              className="ml-[50px] self-start font-semibold text-white"
            >
              Full name*
            </label>
            <div className="relative flex w-3/4 flex-col pb-8 pt-2 text-left">
              <input
                id="full-name"
                className={`h-10 w-full border bg-slate-600 text-white  ${
                  false
                    ? "border-2 border-red-800 outline-red-800"
                    : "border-slate-900"
                }`}
                type="text"
                name="name"
                required
              />
              {true && (
                <span className="absolute top-4 right-2">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 23C5.9 23 1 18.1 1 12C1 5.9 5.9 1 12 1C18.1 1 23 5.9 23 12C23 18.1 18.1 23 12 23ZM12 3C7 3 3 7 3 12C3 17 7 21 12 21C17 21 21 17 21 12C21 7 17 3 12 3ZM13 12V8C13 7.4 12.6 7 12 7C11.4 7 11 7.4 11 8V12C11 12.6 11.4 13 12 13C12.6 13 13 12.6 13 12ZM13 16C13 15.4 12.6 15 12 15C11.4 15 11 15.4 11 16C11 16.6 11.5 17 12 17C12.5 17 13 16.6 13 16Z"
                      fill="#A3270C"
                    />
                  </svg>
                </span>
              )}
            </div>
            {/* Email */}
            <label
              htmlFor="email"
              className="ml-[50px] self-start font-semibold text-white"
            >
              Email*
            </label>
            <div className="relative flex w-3/4 flex-col pb-8 pt-2 text-left">
              <input
                id="email"
                className={`h-10 w-full border bg-slate-600 text-white  ${
                  false
                    ? "border-2 border-red-800 outline-red-800"
                    : "border-slate-900"
                }`}
                type="email"
                name="name"
                required
              />
              {true && (
                <span className="absolute top-4 right-2">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 23C5.9 23 1 18.1 1 12C1 5.9 5.9 1 12 1C18.1 1 23 5.9 23 12C23 18.1 18.1 23 12 23ZM12 3C7 3 3 7 3 12C3 17 7 21 12 21C17 21 21 17 21 12C21 7 17 3 12 3ZM13 12V8C13 7.4 12.6 7 12 7C11.4 7 11 7.4 11 8V12C11 12.6 11.4 13 12 13C12.6 13 13 12.6 13 12ZM13 16C13 15.4 12.6 15 12 15C11.4 15 11 15.4 11 16C11 16.6 11.5 17 12 17C12.5 17 13 16.6 13 16Z"
                      fill="#A3270C"
                    />
                  </svg>
                </span>
              )}
            </div>
            {/* Phone number */}
            <label
              htmlFor="phone-number"
              className="ml-[50px] self-start font-semibold text-white"
            >
              Phone*
            </label>
            <div className="relative flex w-3/4 flex-col pb-8 pt-2 text-left">
              <input
                id="phone-number"
                className={`h-10 w-full border bg-slate-600 text-white  ${
                  false
                    ? "border-2 border-red-800 outline-red-800"
                    : "border-slate-900"
                }`}
                type="tel"
                name="name"
                required
              />
              {true && (
                <span className="absolute top-4 right-2">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 23C5.9 23 1 18.1 1 12C1 5.9 5.9 1 12 1C18.1 1 23 5.9 23 12C23 18.1 18.1 23 12 23ZM12 3C7 3 3 7 3 12C3 17 7 21 12 21C17 21 21 17 21 12C21 7 17 3 12 3ZM13 12V8C13 7.4 12.6 7 12 7C11.4 7 11 7.4 11 8V12C11 12.6 11.4 13 12 13C12.6 13 13 12.6 13 12ZM13 16C13 15.4 12.6 15 12 15C11.4 15 11 15.4 11 16C11 16.6 11.5 17 12 17C12.5 17 13 16.6 13 16Z"
                      fill="#A3270C"
                    />
                  </svg>
                </span>
              )}
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default ContactSectionForm;
