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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setEnteredFormData((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

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

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // ...
  };

  return (
    <>
      <div className="flex flex-col">
        <span className="mb-6 bg-gradient-to-bl from-[#1D2B41] to-mint bg-clip-text py-4 text-center text-2xl font-extrabold tracking-wide text-transparent">
          Provide data for contact
        </span>
        <form onSubmit={handleFormSubmit}>
          <div className="flex flex-col items-center gap-14">
            <div className="float-label-input relative w-3/4">
              <input
                name="fullName"
                type="text"
                id="fullName"
                placeholder=" "
                onChange={handleInputChange}
                onBlur={handleFullNameValidation}
                required
                className={`${
                  !validationData.fullNameValidation
                    ? "border-red-600 focus:border-red-600"
                    : ""
                } focus:shadow-outline w-full appearance-none border-b-2 border-slate-900 bg-slate-600 py-3 px-3 leading-normal text-white focus:border-mint  focus:outline-none`}
              />
              <label
                htmlFor="fullName"
                className={`${
                  !validationData.fullNameValidation
                    ? "text-red-600"
                    : "text-white"
                } pointer-events-none absolute top-3 left-0 px-4  transition duration-200 ease-in-out`}
              >
                Full Name
              </label>
              {!validationData.fullNameValidation && (
                <p className="absolute top-12 text-red-600">Incorrect data</p>
              )}
            </div>
            <div className="float-label-input relative w-3/4">
              <input
                name="email"
                type="email"
                id="email"
                placeholder=" "
                onChange={handleInputChange}
                onBlur={handleEmailValidation}
                required
                className={`${
                  !validationData.emailValidation
                    ? "border-red-600 focus:border-red-600"
                    : ""
                } focus:shadow-outline w-full appearance-none border-b-2 border-slate-900 bg-slate-600 py-3 px-3 leading-normal text-white focus:border-mint  focus:outline-none`}
              />
              <label
                htmlFor="email"
                className={`${
                  !validationData.emailValidation
                    ? "text-red-600"
                    : "text-white"
                } pointer-events-none absolute top-3 left-0 px-4  transition duration-200 ease-in-out`}
              >
                Email
              </label>
              {!validationData.emailValidation && (
                <p className="absolute top-12 text-red-600">Incorrect data</p>
              )}
            </div>
            <div className="float-label-input relative w-3/4">
              <input
                name="phoneNumber"
                type="tel"
                id="phoneNumber"
                placeholder=" "
                onChange={handleInputChange}
                onBlur={handlePhoneNumberValidation}
                required
                className={`${
                  !validationData.phoneValidation
                    ? "border-red-600 focus:border-red-600"
                    : ""
                } focus:shadow-outline w-full appearance-none border-b-2 border-slate-900 bg-slate-600 py-3 px-3 leading-normal text-white focus:border-mint  focus:outline-none`}
              />
              <label
                htmlFor="phoneNumber"
                className={`${
                  !validationData.phoneValidation
                    ? "text-red-600"
                    : "text-white"
                } pointer-events-none absolute top-3 left-0 px-4  transition duration-200 ease-in-out`}
              >
                Phone number
              </label>
              {!validationData.phoneValidation && (
                <p className="absolute top-12 text-red-600">Incorrect data</p>
              )}
            </div>
            <button
              disabled={
                !validationData.fullNameValidation ||
                !validationData.emailValidation ||
                !validationData.phoneValidation
              }
              className=" h-12 w-40 rounded-full border border-mint font-medium text-white shadow-2xl  transition-all  duration-1000 hover:bg-mint hover:bg-opacity-60 disabled:border-red-600 disabled:bg-transparent disabled:text-red-600 "
            >
              Contact
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ContactSectionForm;
