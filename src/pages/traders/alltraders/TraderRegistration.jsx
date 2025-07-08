import React, { useRef, useState, forwardRef } from "react";
import { useNavigate } from "react-router-dom";

// ✅ InputField component inline
const InputField = forwardRef(
  ({ label, name, value, onChange, placeholder, error, onKeyDown, maxLength, showCounter }, ref) => {
    return (
      <div className="mb-4">
        <label className="block font-medium mb-1 text-sm">{label}</label>
        <input
          ref={ref}
          type="text"
          name={name}
          value={value}
          onChange={onChange}
          onKeyDown={onKeyDown}
          placeholder={placeholder}
          maxLength={maxLength}
          className={`w-full p-2 border rounded ${
            error ? "border-red-500" : "border-gray-300"
          }`}
        />
        {showCounter && maxLength && (
          <div className="text-xs text-right text-gray-500 mt-1">
            {value.length}/{maxLength}
          </div>
        )}
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
      </div>
    );
  }
);

// ✅ FileInput component inline
const FileInput = ({ label, name, onChange, error }) => (
  <div className="mb-4">
    <label className="block font-medium mb-1 text-sm">{label}</label>
    <input
      type="file"
      name={name}
      onChange={onChange}
      accept=".pdf,.jpg,.jpeg,.png"
      className={`w-full p-2 border rounded ${
        error ? "border-red-500" : "border-gray-300"
      }`}
    />
    {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
  </div>
);

const TraderRegistration = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    aadharNumber: "",
    businessName: "",
    pin: "",
    city: "",
    state: "",
    licence: "",
    gst: "",
    adharcard: null,
    businessLicence: null,
    addressProof: null,
  });

  const [errors, setErrors] = useState({});
  const [submitError, setSubmitError] = useState("");
  const fieldRefs = useRef([]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const tempErrors = {};
    const phoneRegex = /^[0-9]{10}$/;
    const aadharRegex = /^[0-9]{12}$/;
    const pinRegex = /^[0-9]{6}$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!formData.name.trim()) tempErrors.name = "Name is required";
    if (!phoneRegex.test(formData.contact)) tempErrors.contact = "Enter valid 10-digit number";
    if (!emailRegex.test(formData.email)) tempErrors.email = "Enter valid email address";
    if (!aadharRegex.test(formData.aadharNumber)) tempErrors.aadharNumber = "Aadhar must be 12 digits";
    if (!formData.businessName.trim()) tempErrors.businessName = "Business Name is required";
    if (!pinRegex.test(formData.pin)) tempErrors.pin = "PIN must be 6 digits";
    if (!formData.city.trim()) tempErrors.city = "City is required";
    if (!formData.state.trim()) tempErrors.state = "State is required";
    if (!formData.licence.trim()) tempErrors.licence = "Licence number is required";
    if (!formData.gst.trim()) tempErrors.gst = "GST number is required";
    if (!formData.adharcard) tempErrors.adharcard = "Upload Aadharcard";
    if (!formData.businessLicence) tempErrors.businessLicence = "Upload Business Licence";
    if (!formData.addressProof) tempErrors.addressProof = "Upload Address Proof";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (index < fieldRefs.current.length - 1) {
        fieldRefs.current[index + 1].focus();
      } else {
        handleSubmit(e);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError("");

    if (validate()) {
      try {
        const formPayload = new FormData();
        Object.entries(formData).forEach(([key, value]) => {
          formPayload.append(key, value);
        });

        // 🔗 API call here if needed
        // const response = await fetch("/api/register", {
        //   method: "POST",
        //   body: formPayload,
        // });

        alert("Form submitted successfully!");
        // navigate("/success");
      } catch (err) {
        console.error(err);
        setSubmitError("Something went wrong while submitting the form.");
      }
    } else {
      alert("Please fix errors and fill required fields.");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-4">Trader Registration</h2>

      {submitError && (
        <div className="mb-4 bg-red-100 text-red-600 px-4 py-2 rounded">{submitError}</div>
      )}

      <form onSubmit={handleSubmit}>
        {[
          ["name", "Full Name", "Enter your full name"],
          ["contact", "Contact Number", "Enter 10-digit contact number"],
          ["email", "Email Address", "Enter your email address"],
          ["aadharNumber", "Aadhar Number", "Enter 12-digit Aadhar number"],
          ["businessName", "Business Name", "Enter your business name"],
          ["pin", "PIN Code", "Enter 6-digit PIN"],
          ["city", "City", "Enter your city"],
          ["state", "State", "Enter your state"],
          ["licence", "Licence Number", "Enter licence number"],
          ["gst", "GST Number", "Enter GST number"],
        ].map(([name, label, placeholder], i) => (
          <InputField
            key={name}
            ref={(el) => (fieldRefs.current[i] = el)}
            label={label}
            name={name}
            value={formData[name]}
            placeholder={placeholder}
            error={errors[name]}
            onChange={handleChange}
            onKeyDown={(e) => handleKeyDown(i, e)}
            maxLength={
              name === "contact"
                ? 10
                : name === "aadharNumber"
                ? 12
                : name === "pin"
                ? 6
                : undefined
            }
            showCounter={["contact", "aadharNumber", "pin"].includes(name)}
          />
        ))}

        {/* File Inputs */}
        {[
          ["adharcard", "Upload Aadharcard (PDF/JPG/PNG)"],
          ["businessLicence", "Upload Business Licence (PDF/JPG/PNG)"],
          ["addressProof", "Upload Address Proof (PDF/JPG/PNG)"],
        ].map(([name, label]) => (
          <FileInput
            key={name}
            label={label}
            name={name}
            onChange={handleChange}
            error={errors[name]}
          />
        ))}

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 mt-4"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default TraderRegistration;
