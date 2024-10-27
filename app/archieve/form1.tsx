import { FormEvent, useState } from "react";
import formDataI from "@/app/interfaces";

export default function Form1(props: formDataI | any) {
  function handleNext(e: FormEvent) {
    e.preventDefault();
    props.setStep((prevValue: number) => prevValue + 1);
  }

  return (
    <form
      onSubmit={handleNext}
      className="max-w-2xl mx-auto px-8 py-6 bg-white shadow-md rounded-lg"
    >
      {/* Header */}
      <h1 className="text-3xl font-semibold text-center mb-2">Welcome</h1>
      <p className="text-center text-gray-500 mb-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.
      </p>

      {/* Tab selection */}
      <div className="flex justify-center mb-6">
        <div className="text-center px-6 cursor-pointer text-purple-600 font-semibold border-b-2 border-purple-500">
          Sign Up
        </div>
        <div className="text-center px-6 cursor-pointer text-gray-400">
          Log In
        </div>
      </div>

      {/* Form Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            value={props.formData.firstName}
            onChange={props.handleInputChange}
            className="border p-2 w-full rounded-md"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            value={props.formData.lastName}
            onChange={props.handleInputChange}
            className="border p-2 w-full rounded-md"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            E-Mail
          </label>
          <input
            type="email"
            name="email"
            value={props.formData.email}
            onChange={props.handleInputChange}
            className="border p-2 w-full rounded-md"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            MM/DD/YY
          </label>
          <input
            type="date"
            name="dob"
            value={props.formData.dob}
            onChange={props.handleInputChange}
            className="border p-2 w-full rounded-md"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Phone Number
          </label>
          <input
            type="tel"
            name="phoneNumber"
            value={props.formData.phoneNumber}
            onChange={props.handleInputChange}
            className="border p-2 w-full rounded-md"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Business Name / Institute Name
          </label>
          {props.formData.userType === "ino" ? (
            <input
              type="text"
              name="schoolName"
              value={props.formData.schoolName}
              onChange={props.handleInputChange}
              className="border p-2 w-full rounded-md"
              required
            />
          ) : (
            <input
              type="text"
              name="businessName"
              value={props.formData.businessName}
              onChange={props.handleInputChange}
              className="border p-2 w-full rounded-md"
              required
            />
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            City/Province
          </label>
          <input
            type="text"
            name="city"
            value={props.formData.city}
            onChange={props.handleInputChange}
            className="border p-2 w-full rounded-md"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Postal Code
          </label>
          <input
            type="text"
            name="postalCode"
            value={props.formData.postalCode}
            onChange={props.handleInputChange}
            className="border p-2 w-full rounded-md"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Plan
          </label>
          <select
            name="userType"
            value={props.formData.userType}
            onChange={props.handleInputChange}
            className="border p-2 w-full rounded-md"
          >
            <option value="inv">Investor Tier</option>
            <option value="ino">Innovator Tier</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Billing Address 1
          </label>
          <input
            type="text"
            name="billingAddress"
            value={props.formData.billingAddress}
            onChange={props.handleInputChange}
            className="border p-2 w-full rounded-md"
            required
          />
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-between items-center mt-6">
        <button
          type="button"
          onClick={props.handlePrevious}
          className="flex items-center text-gray-400 cursor-not-allowed"
        >
          <span className="mr-2">&#9664;</span>Prev
        </button>
        <button
          type="submit"
          className="flex items-center bg-black text-white p-2 rounded-full px-6"
        >
          Next <span className="ml-2">&#9654;</span>
        </button>
      </div>
    </form>
  );
}
