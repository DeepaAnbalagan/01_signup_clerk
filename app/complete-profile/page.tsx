export default async function CompleteProfile() {
  return (
    <form>
      <label htmlFor="fName">First Name</label>
      <input type="text" id="fName" placeholder="First Name" />
      <label htmlFor="lName">Last Name</label>
      <input type="text" id="lName" placeholder="Last Name" />
      <label htmlFor="dob">Date of Birth</label>
      <input type="date" id="dob" />
      <label htmlFor="phone">Date of Birth</label>
      <input
        type="tel"
        id="phone"
        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
        placeholder="123-456-7890"
      />
    </form>
  );
}
