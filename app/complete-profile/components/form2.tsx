export default function Form2(props: any) {
  return (
    <form>
      <h2 className="text-lg font-bold mb-4">Preferences and Project Limit</h2>
      <div>
        <label>Tags (Select at least 3)</label>
        <div className="flex flex-wrap gap-2 mb-4">
          {props.allTags.map((tag: { tag_name: string }) => (
            <label key={tag.tag_name} className="flex items-center space-x-2">
              <input
                type="checkbox"
                value={tag.tag_name}
                checked={props.formData.tags.includes(tag)}
                onChange={() => props.handleGenreChange(tag)}
              />
              <span>{tag.tag_name}</span>
            </label>
          ))}
        </div>
      </div>
      <div>
        <label>Project Funding Limit</label>
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
          className="w-full mb-4"
        />
        <div>
          Selected Limit: $
          {parseInt(props.formData.projectLimit).toLocaleString()}
        </div>
      </div>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Submit
      </button>
    </form>
  );
}
