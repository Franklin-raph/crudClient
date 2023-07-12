const CrudList = ({ crud, updateCrud, deleteCrud }) => {
  return (
    <div>
      {crud.map((list) => (
        <div key={list.id}>
          <h3>{list.title}</h3>
          <p>{list.description}</p>
          {/* <button onClick={() => handleEdit(movie)}>Edit</button>
          <button onClick={() => handleDelete(movie.id)}>Delete</button> */}

          <button
            onClick={() => {
              const newTitle = prompt("Enter new title:", list.title);
              if (newTitle) {
                updateCrud(list.id, { title: newTitle });
              }
            }}
          ></button>
        </div>
      ))}
    </div>
  );
};

export default CrudList;
