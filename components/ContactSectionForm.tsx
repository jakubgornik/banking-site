import { validationSchema } from "@/utilities/validationSchemas";
import { useFormik } from "formik";

const ContactSectionForm = () => {
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      const response = await fetch(
        "https://easybanking-caca4-default-rtdb.europe-west1.firebasedatabase.app/contact-data.json",
        {
          method: "POST",
          body: JSON.stringify(values),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    formik.setFieldValue(name, value);
    // false to prevent Formik from running the validation logic for other fields when marking the current field as touched
    formik.setFieldTouched(name, true, false);
  };

  return (
    <>
      <div className="flex flex-col">
        <span className="mb-6 bg-gradient-to-bl from-[#1D2B41] to-mint bg-clip-text py-4 text-center text-2xl font-extrabold tracking-wide text-transparent">
          Provide data for contact
        </span>
        <form onSubmit={formik.handleSubmit}>
          <div className="flex flex-col items-center gap-14">
            <div className="float-label-input relative w-3/4">
              <input
                name="fullName"
                type="text"
                id="fullName"
                placeholder=" "
                value={formik.values.fullName}
                onChange={handleChange}
                required
                className={`${
                  formik.touched.fullName && formik.errors.fullName
                    ? "border-red-600 focus:border-red-600"
                    : ""
                } focus:shadow-outline w-full appearance-none border-b-2 border-slate-900 bg-slate-600 py-3 px-3 leading-normal text-white focus:border-mint  focus:outline-none`}
              />
              <label
                htmlFor="fullName"
                className={`${
                  formik.touched.fullName && formik.errors.fullName
                    ? "text-red-600"
                    : "text-white"
                } pointer-events-none absolute top-3 left-0 px-4  transition duration-200 ease-in-out`}
              >
                Full Name
              </label>
              {formik.touched.fullName && formik.errors.fullName && (
                <p className="absolute top-12 text-red-600">
                  {formik.errors.fullName}
                </p>
              )}
            </div>
            <div className="float-label-input relative w-3/4">
              <input
                name="email"
                type="email"
                id="email"
                placeholder=" "
                value={formik.values.email}
                onChange={handleChange}
                required
                className={`${
                  formik.touched.email && formik.errors.email
                    ? "border-red-600 focus:border-red-600"
                    : ""
                } focus:shadow-outline w-full appearance-none border-b-2 border-slate-900 bg-slate-600 py-3 px-3 leading-normal text-white focus:border-mint  focus:outline-none`}
              />
              <label
                htmlFor="email"
                className={`${
                  formik.touched.email && formik.errors.email
                    ? "text-red-600"
                    : "text-white"
                } pointer-events-none absolute top-3 left-0 px-4  transition duration-200 ease-in-out`}
              >
                Email
              </label>
              {formik.touched.email && formik.errors.email && (
                <p className="absolute top-12 text-red-600">
                  {formik.errors.email}
                </p>
              )}
            </div>
            <div className="float-label-input relative w-3/4">
              <input
                name="phoneNumber"
                type="tel"
                id="phoneNumber"
                placeholder=" "
                value={formik.values.phoneNumber}
                onChange={handleChange}
                required
                className={`${
                  formik.touched.phoneNumber && formik.errors.phoneNumber
                    ? "border-red-600 focus:border-red-600"
                    : ""
                } focus:shadow-outline w-full appearance-none border-b-2 border-slate-900 bg-slate-600 py-3 px-3 leading-normal text-white focus:border-mint  focus:outline-none`}
              />
              <label
                htmlFor="phoneNumber"
                className={`${
                  formik.touched.phoneNumber && formik.errors.phoneNumber
                    ? "text-red-600"
                    : "text-white"
                } pointer-events-none absolute top-3 left-0 px-4  transition duration-200 ease-in-out`}
              >
                Phone number
              </label>
              {formik.touched.phoneNumber && formik.errors.phoneNumber && (
                <p className="absolute top-12 text-red-600">
                  {formik.errors.phoneNumber}
                </p>
              )}
            </div>
            <button
              type="submit"
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
