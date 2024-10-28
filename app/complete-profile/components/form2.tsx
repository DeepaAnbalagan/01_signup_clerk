import formDataI from "@/app/interfaces";
import { FormEvent } from "react";

export default function Form2(props: formDataI | any) {
  function handleNext(e: FormEvent) {
    e.preventDefault();
    props.setStep((prevValue: number) => prevValue - 1);
  }
  return (
    <form className="max-w-2xl mx-auto bg-white px-8 py-6 rounded-lg shadow-md">
      <h2 className="text-3xl font-semibold text-center mb-2">
        Preferences and Project Limit
      </h2>
      <p className="text-center text-gray-500 mb-8">
        Please select your preferences and set your project funding limit.
      </p>
      {/* Tags Section */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Tags (Select at least 3)
        </label>
        <div className="flex flex-wrap gap-2 p-4 border border-gray-200 rounded-lg">
          {props.allTags.map((tag: { tag_name: string }) => (
            <label key={tag.tag_name} className="flex items-center space-x-2">
              <input
                type="checkbox"
                value={tag.tag_name}
                checked={props.formData.tags.includes(tag)}
                onChange={() => props.handleTagChange(tag)}
                className="form-checkbox text-purple-600"
              />
              <span className="text-sm">{tag.tag_name}</span>
            </label>
          ))}
        </div>
      </div>
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Project Funding Limit
        </label>
        <input
          type="range"
          name="projectLimit"
          min="0"
          max="1000000"
          step="100000"
          value={props.formData.projectLimit}
          onChange={(e) =>
            props.setFormData({
              ...props.formData,
              projectLimit: e.target.value,
            })
          }
          // onChange={props.handleInputChange} //not working so used different onChange
          className="w-full mb-2"
        />
        <div className="text-gray-600">
          Selected Limit: $
          {parseInt(props.formData.projectLimit).toLocaleString()}
        </div>
      </div>
      <div className="flex justify-between items-center mt-6">
        <button
          type="button"
          onClick={handleNext}
          className="flex items-center text-blue-600 font-semibold"
        >
          <span className="mr-2">◀</span>Prev
        </button>
        <button
          type="submit"
          className="bg-blue-600 text-white p-2 rounded-full px-6 font-semibold"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
