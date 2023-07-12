import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CrudForm from "./CrudForm";

const EditCrud = ({ item, handleUpdate }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(()=>{
getACrud()
  },[])
  const getACrud = async () => {
    const res = await fetch(`http://localhost:8000/api/v1/test/${id}`);
    const data = await res.json()
    if (res.ok){
      console.log(data);
      setTitle(data.title)
      setDescription(data.description)
    }
    console.log(res);
  };

  const handleFormSubmit = async(event) => {
    event.preventDefault();
    const res = await fetch(`http://localhost:8000/api/v1/test/${id}`, {
      method: "PATCH",
      body: JSON.stringify({ title, description }),
      headers: {
        "Content-type": "application/json",
      },
    });
  const data = await res.json();
  if (res.ok) {
    navigate('/')
   
  }
  console.log(data);
    
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  return (
    <div>
      <h1 className="text-2xl text-center mb-5">Edit CRUD</h1>
      <CrudForm
        // handleSubmit={handleFormSubmit}
        // defaultTitle={editingItem.title}
        // defaultDescription={editingItem.description}
        handleSubmit={handleFormSubmit}
        handleTitleChange={handleTitleChange}
        handleDescriptionChange={handleDescriptionChange}
        title={title}
        description={description}
      />
    </div>
  );
};

export default EditCrud;
