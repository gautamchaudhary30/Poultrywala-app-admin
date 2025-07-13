import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  companyName: Yup.string()
    .min(2, "At least 2 characters")
    .max(50, "Max 50 characters")
    .required("Company name is required"),
  contactPerson: Yup.string()
    .min(2, "At least 2 characters")
    .matches(/^[A-Za-z ]+$/, "Only letters allowed")
    .required("Contact person is required"),
  scale: Yup.string().required("Scale of operation is required"),
  farmsManaged: Yup.number()
    .typeError("Must be a number")
    .min(1, "At least 1 farm")
    .required("Farms managed is required"),
  productionVolume: Yup.string().required("Production volume is required"),
  serviceArea: Yup.string().required("Service area is required"),
  companyReg: Yup.mixed()
    .test("fileSize", "Max size 2MB", (val) => !val || val.size <= 2000000)
    .required("Company registration is required"),
  bankDetails: Yup.mixed()
    .test("fileSize", "Max size 2MB", (val) => !val || val.size <= 2000000)
    .required("Bank details are required"),
  license: Yup.mixed()
    .test("fileSize", "Max size 2MB", (val) => !val || val.size <= 2000000)
    .required("License is required"),
  fssai: Yup.mixed()
    .test("fileSize", "Max size 2MB", (val) => !val || val.size <= 2000000)
});

const CompanyRegistration = () => {
  const initialValues = {
    companyName: "",
    contactPerson: "",
    scale: "",
    farmsManaged: "",
    productionVolume: "",
    serviceArea: "",
    AccountHolderName: "",
    AccountNumber: "",
    IFSC: "",
    BankName: "",

    
    companyReg: null,
    bankDetails: null,
    license: null,
    fssai: null,
  };

  const handleFileChange = (setFieldValue, field, e) => {
    setFieldValue(field, e.currentTarget.files[0]);
  };

  return (
    <div className="max-w-[885px] mx-auto p-6 bg-white rounded shadow overflow-y-auto max-h-[90vh]">
      <h2 className="text-3xl font-semibold mb-4 text-center">Company Registration</h2>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          alert("Company Registered Successfully!");
        }}
      >
        {({ setFieldValue }) => (
          <Form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <TextField label="Company Name" name="companyName" />
              <TextField label="Contact Number" name="contactPerson" />
              <SelectField
                label="Scale of Operation"
                name="scale"
                options={["Small", "Medium", "Large"]}
              />
              <TextField label="Farms Managed" name="farmsManaged" type="number" />
              <TextField label="Production Volume" name="productionVolume" />
              <TextField label="Service Area" name="serviceArea" />
              <TextField label="Account Holder Name" name="AccountHolderName" />
              <TextField label="Account Number" name="AccountNumber" type="text" />
              <TextField label="IFSC Code" name="IFSC" />
              <TextField label="Bank Name" name="BankName" />

              {/* <FileUpload
                label="Upload Company Registration"
                name="companyReg"
                setFieldValue={setFieldValue}
                onChange={handleFileChange}
              />
              <FileUpload
                label="Upload Bank Details"
                name="bankDetails"
                setFieldValue={setFieldValue}
                onChange={handleFileChange}
              />
              <FileUpload
                label="Upload License"
                name="license"
                setFieldValue={setFieldValue}
                onChange={handleFileChange}
              /> */}
              <FileUpload
                label="Upload FSSAI (Optional)"
                name="fssai"
                setFieldValue={setFieldValue}
                onChange={handleFileChange}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 text-white mt-6 py-2 rounded hover:bg-green-700"
            >
              Register Company
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

const TextField = ({ label, name, type = "text" }) => {
  const handleKeyPress = (e) => {
    if (name === "contactPerson") {
      const allowed = /^[A-Za-z\s]*$/;
      if (!allowed.test(e.key)) {
        e.preventDefault();
      }
    }
  };

  return (
    <div className="flex flex-col">
      <label className="mb-1 font-medium">{label}</label>
      <Field
        name={name}
        type={type}
        onKeyPress={handleKeyPress}
        className="px-4 py-2 border rounded focus:outline-none focus:ring"
        placeholder={`Enter ${label.toLowerCase()}`}
      />
      <ErrorMessage
        name={name}
        component="div"
        className="text-red-500 text-sm mt-1"
      />
    </div>
  );
};

const SelectField = ({ label, name, options }) => (
  <div className="flex flex-col">
    <label className="mb-1 font-medium">{label}</label>
    <Field
      as="select"
      name={name}
      className="px-4 py-2 border rounded focus:outline-none focus:ring"
    >
      <option value="">Select</option>
      {options.map((option, i) => (
        <option key={i} value={option}>
          {option}
        </option>
      ))}
    </Field>
    <ErrorMessage
      name={name}
      component="div"
      className="text-red-500 text-sm mt-1"
    />
  </div>
);

const FileUpload = ({ label, name, onChange, setFieldValue }) => (
  <div className="flex flex-col">
    <label className="mb-1 font-medium">{label}</label>
    <input
      type="file"
      name={name}
      accept=".pdf,.jpg,.jpeg,.png"
      onChange={(e) => onChange(setFieldValue, name, e)}
      className="px-4 py-2 border rounded focus:outline-none focus:ring"
    />
    <ErrorMessage
      name={name}
      component="div"
      className="text-red-500 text-sm mt-1"
    />
  </div>
);

export default CompanyRegistration;
