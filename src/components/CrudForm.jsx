const CreateCrud = ({
  handleSubmit,
  handleTitleChange,
  handleDescriptionChange,
  title,
  description,
}) => {
  return (
    <form
      className="flex flex-col gap-8 justify-center "
      onSubmit={handleSubmit}
    >
      <input
        className="p-4 text-[#6e6d6d] rounded-md border-solid border-[1px] border-[#6e6d6d]"
        type="text"
        placeholder="Title"
        value={title}
        onChange={handleTitleChange}
        required
      />
      <textarea
        className="p-4 text-[#6e6d6d] rounded-md border-solid border-[1px] border-[#6e6d6d]"
        placeholder="Description"
        cols="30"
        rows="10"
        value={description}
        onChange={handleDescriptionChange}
      ></textarea>
      <button
        className="bg-[#54c954] cursor-pointer px-6 py-2 text-white rounded-[100px]  m-auto"
        type="submit"
      >
        Add Crud
      </button>
    </form>
  );
};

export default CreateCrud;
