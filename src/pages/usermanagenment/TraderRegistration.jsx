import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { tradersData } from './AproovedTraders';

const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, 'Name must be at least 2 characters')
    .max(30, 'Name cannot exceed 30 characters')
    .matches(/^[A-Za-z ]+$/, 'Only letters are allowed')
    .required('Name is required'),
  contact: Yup.string()
    .matches(/^\d{10}$/, 'Enter a valid 10-digit number')
    .required('Contact is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  aadharNumber: Yup.string()
    .matches(/^\d{12}$/, 'Aadhar must be exactly 12 digits')
    .required('Aadhar is required'),
  businessName: Yup.string()
    .min(2, 'Business Name must be at least 2 characters')
    .max(30, 'Business Name cannot exceed 30 characters')
    .matches(/^[A-Za-z ]+$/, 'Only letters are allowed')
    .required('Business Name is required'),
  pin: Yup.string()
    .matches(/^\d{6}$/, 'PIN must be 6 digits')
    .required('PIN is required'),
  city: Yup.string().required('City is required'),
  state: Yup.string().required('State is required'),
  licence: Yup.string().required('Licence is required'),
  gst: Yup.string().required('GST is required'),
  accountNumber: Yup.string()
    .matches(/^\d{10}$/, 'Account number must be exactly 10 digits')
    .required('Account number is required'),
  adharcard: Yup.mixed()
    .test('fileSize', 'File too large (Max 2MB)', value => !value || value.size <= 2000000)
    .required('Aadharcard is required'),
  businessLicence: Yup.mixed()
    .test('fileSize', 'File too large (Max 2MB)', value => !value || value.size <= 2000000)
    .required('Business Licence is required'),
  addressProof: Yup.mixed()
    .test('fileSize', 'File too large (Max 2MB)', value => !value || value.size <= 2000000)
    .required('Address Proof is required')
});

const TraderRegistration = () => {
  const initialValues = {
    name: '',
    contact: '',
    email: '',
    aadharNumber: '',
    businessName: '',
    pin: '',
    city: '',
    state: '',
    licence: '',
    gst: '',
    accountNumber: '',
    adharcard: null,
    businessLicence: null,
    addressProof: null
  };

  const handleFileChange = (setFieldValue, field, e) => {
    setFieldValue(field, e.currentTarget.files[0]);
  };

  return (
    <div className="max-w-[885px] mx-auto p-6 bg-white rounded shadow overflow-y-auto max-h-[90vh] dark:bg-slate-800">
      <h2 className="text-3xl font-semibold mb-4 text-center dark:text-gray-100">Trader Registration</h2>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        validateOnChange={true}
        validateOnBlur={true}
        onSubmit={(values) => {
          // pushing submit data on tradersData array
          tradersData.push({
            id: tradersData.length + 1,
            name: values.name,
            contact: values.contact,
            email: values.email,
            aadharNumber: values.aadharNumber,
            businessName: values.businessName,
            status: 'Approved',
            pin: values.pin,
            city: values.city,
            state: values.state,
            licence: values.licence,
            gst: values.gst,
            accountNumber: values.accountNumber,
            adharcard: values.adharcard.name,
            businessLicence: values.businessLicence.name,
            pancard: values.pancard.name
          });
          alert('Form submitted successfully!');
          resetForm();
        }}
      >
        {({ setFieldValue }) => (
          <Form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 dark:text-gray-400">
              <TextField  label="Full Name" name="name" />
              <TextField  label="Contact Number" name="contact" type="tel" />
              <TextField  label="Email Address" name="email" type="email" />
              <TextField  label="Aadhar Number" name="aadharNumber" />
              <TextField  label="Business Name" name="businessName" />
              <TextField  label="PIN Code" name="pin" />
              <TextField  label="City" name="city" />
              <TextField  label="State" name="state" />
              <TextField  label="Licence Number" name="licence" />
              <TextField  label="GST Number" name="gst" />
              <TextField  label="Account Number" name="accountNumber" />

              <FileUpload label="Upload Aadharcard" name="adharcard" onChange={handleFileChange} setFieldValue={setFieldValue} />
              <FileUpload label="Upload Business Licence" name="businessLicence" onChange={handleFileChange} setFieldValue={setFieldValue} />
              <FileUpload label="Upload PAN Card" name="addressProof" onChange={handleFileChange} setFieldValue={setFieldValue} />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white mt-6 py-2 rounded hover:bg-blue-700"
            >
              Register
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

const TextField = ({ label, name, type = 'text' }) => {
  const handleKey = (e) => {
    if (name === "name" || name === "businessName") {
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
        as="input"
        name={name}
        type={type}
        className="px-4 py-2 border rounded focus:outline-none focus:ring"
        placeholder={`Enter ${label.toLowerCase()}`}
        onKeyPress={handleKey}
      />
      <ErrorMessage
        name={name}
        component="div"
        className="text-red-500 text-sm mt-1"
      />
    </div>
  );
};

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

export default TraderRegistration;
