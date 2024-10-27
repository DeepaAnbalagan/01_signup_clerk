"use client";
import { useUser } from "@clerk/nextjs";
import { FormEvent, useState } from "react";

export default function Profile() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const { user } = useUser();

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    console.log(user?.id);
    console.log("check img has" + user?.hasImage);
    console.log(user?.imageUrl);

    if (user) {
      console.log("inside if final");
      await user.update({
        unsafeMetadata: {
          userId: user.id,
          firstName,
          lastName,
          phoneNumber,
        },
      });
    }
    alert("updated success");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>please enters you profil details below</h1>
        <label htmlFor="fName">First Name</label>
        <input
          type="text"
          id="fName"
          placeholder="First Name"
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        />
        <label htmlFor="lName">Last Name</label>
        <input
          type="text"
          id="lName"
          placeholder="Last Name"
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        />
        <label htmlFor="phone">First Name</label>
        <input
          type="tel"
          id="phone"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          placeholder="123-456-7890"
          onChange={(e) => {
            setPhoneNumber(e.target.value);
          }}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
