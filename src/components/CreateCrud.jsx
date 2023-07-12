import CrudForm from "./CrudForm";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateCrud = () => {

  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
const [success, setSuccess] = useState("");

const handleFormSubmit = async (event) => {
  
   event.preventDefault();
  const res = await fetch("http://localhost:8000/api/v1/test", {
    method: "POST",
    body: JSON.stringify({ title, description }),
    headers: {
      "Content-type": "application/json",
    },
  });
  const data = await res.json();
  if (res.ok) {
    navigate('/')
    setSuccess("Data successfully saved");
  }
  console.log(data);
  console.log(success);
};

 

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };


  return (
    <div>
      <h1 className="text-2xl text-center mb-5">Create Crud</h1>
      <CrudForm
        handleSubmit={handleFormSubmit}
        handleTitleChange={handleTitleChange}
        handleDescriptionChange={handleDescriptionChange}
        title={title}
        description={description}
      />
    </div>
  );
};

export default CreateCrud;
