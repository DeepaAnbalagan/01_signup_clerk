"use client";
import React, { useEffect, useState } from "react";

export default function CompleteProfile() {
  const [allTags, setAllTags] = useState([]);
  const [selectedTags, setSelectedTags] = useState<Array<any>>([]); // State for selected tags

  useEffect(() => {
    // Fetch tags (assuming the API call is set up correctly)
    const fetchTags = async () => {
      try {
        const res = await fetch("/api/fetch-tag", { method: "GET" });
        const data = await res.json();
        setAllTags(data); // Assuming data is an array of tags
      } catch (error) {
        console.error("Error fetching tags:", error);
      }
    };
    fetchTags();
  }, []);

  const handleCheckboxChange = (tag: string) => {
    setSelectedTags((prevSelectedTags) => {
      if (prevSelectedTags.includes(tag)) {
        // If tag is already selected, remove it
        return prevSelectedTags.filter((t) => t !== tag);
      } else {
        // If tag is not selected, add it
        return [...prevSelectedTags, tag];
      }
    });
  };

  return (
    <div>
      <h1>Select Tags</h1>
      <div>
        {allTags.map((tag: string | any, index) => (
          <div key={index}>
            <input
              type="checkbox"
              id={`tag-${index}`}
              checked={selectedTags.includes(tag.tag_name)}
              onChange={() => handleCheckboxChange(tag.tag_name)}
            />
            <label htmlFor={`tag-${index}`}>{tag.tag_name}</label>
          </div>
        ))}
      </div>

      <h2>Selected Tags:</h2>
      <ul>
        {selectedTags.map((tag, index) => (
          <li key={index}>{tag}</li>
        ))}
      </ul>
    </div>
  );
}
