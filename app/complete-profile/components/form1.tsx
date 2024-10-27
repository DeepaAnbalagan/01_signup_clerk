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
        Please complete the following form to complete your signup process.
      </p>
      {/* Tab selection */}
      <div className="flex justify-center mb-6">
        <div className="text-center px-6 cursor-pointer text-purple-600 font-semibold border-b-2 border-purple-500">
          Sign Up
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
            Date of Birth
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
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="userType"
          >
            User Type
          </label>
          <select
            name="userType"
            id="userType"
            value={props.formData.userType}
            onChange={props.handleInputChange}
            className="border p-2 w-full mb-4"
          >
            <option value="ino">Innovator</option>
            <option value="inv">Investor</option>
          </select>
        </div>
        {props.formData.userType === "ino" ? (
          <div>
            <label className="block text-sm font-medium text-gray-700">
              School Name
            </label>
            <input
              type="text"
              name="schoolName"
              value={props.formData.schoolName}
              onChange={props.handleInputChange}
              className="border p-2 w-full mb-4"
              required
            />
          </div>
        ) : (
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Business Name
            </label>
            <input
              type="text"
              name="schoolName" //to capture businessName of investor, thought name is same
              value={props.formData.schoolName}
              onChange={props.handleInputChange}
              className="border p-2 w-full mb-4"
              required
            />
          </div>
        )}
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
