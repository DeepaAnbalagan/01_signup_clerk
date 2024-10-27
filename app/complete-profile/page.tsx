"use client";
import React, { useEffect, useState } from "react";
import Form1 from "./components/form1";
import Form2 from "./components/form2";

export default function CompleteProfile() {
  const [step, setStep] = useState(1);
  const [allTags, setAllTags] = useState({});
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    userType: "ino", // Default value
    schoolName: "",
    tags: [""],
    projectLimit: "0-100000",
  });

  //testing api handler for fetch tag
  useEffect(() => {
    async function fetchTags() {
      try {
        const res = await fetch("/api/fetch-tag", { method: "GET" });
        const data = await res.json();
        console.log(data);
        setAllTags(data);
      } catch (error) {
        console.error("error fetching allTags", error);
      }
    }
    fetchTags();
  }, []);

  // Handler for input fields in the first form
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handler for genre selection in the second form
  const handleGenreChange = (tag: string) => {
    setFormData((prevData) => {
      const newTag = prevData.tags.includes(tag)
        ? prevData.tags.filter((t) => t !== tag)
        : [...prevData.tags, tag];
      return { ...prevData, newTag };
    });
  };

  // Final submit function
  const handleSubmit = async () => {
    try {
      const response = await fetch("/api/complete-profile", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert("Profile completed!");
      } else {
        alert("Failed to save profile data");
      }
    } catch (error) {
      console.error(error);
      alert("Error occurred while saving profile data");
    }
  };

  return (
    <div className="p-8">
      {step === 1 && (
        <Form1
          formData={formData}
          handleInputChange={handleInputChange}
          setStep={setStep}
        />
      )}
      {step === 2 && (
        <Form2
          allTags={allTags}
          formData={formData}
          handleGenreChange={handleGenreChange}
          setFormData={setFormData}
        />
      )}
    </div>
  );
}
