import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import CrudApp from "./components/CrudApp";
import CreateCrud from "./components/CreateCrud";
import EditCrud from "./components/EditCrud";

function App() {
  const [data, setData] = useState([]);
  const [editingItem, setEditingItem] = useState(null);

  //retrieve data from local storage
  // useEffect(() => {
  //   getAllCruds();
  // }, []);

  // const getAllCruds = async () => {
  //   const res = await fetch("http://localhost:8000/api/v1");
  //   const data = await res.json();
  //   console.log(data);
  //   setData(data);
  // };

  // Function to update a title and description

  const handleUpdate = (updatedItem) => {
    const updatedData = data.map((item) =>
      item === editingItem ? updatedItem : item
    );
    setData(updatedData);
    setEditingItem(null);
  };

  const handleEdit = (item) => {
    setEditingItem(item);
  };

  // Function to delete a movie from the list

  const handleDelete = async (itemId) => {
    const res = await fetch(`http://localhost:8000/api/v1/test/${itemId}`, {
      method: "DELETE",
    });
    const data = await res.json();
    console.log(data);
    console.log(itemId);
  };

  return (
    <div className="App container">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <CrudApp
                // data={data}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
              />
            }
          />
          <Route path="/create" element={<CreateCrud />} />
          <Route
            path="/edit/:id"
            element={
              <EditCrud item={editingItem} handleUpdate={handleUpdate} />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
