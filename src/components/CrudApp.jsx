import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import { MdModeEditOutline, MdDelete } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";

const CrudApp = ({ handleDelete, handleEdit }) => {
  const navigate = useNavigate();
  const [click, setClick] = useState(false);
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);

  const handleClick = () => setClick(!click);
  useEffect(() => {
    getAllCruds();
  }, []);

  const getAllCruds = async () => {
    setLoader(true);
    const res = await fetch("http://localhost:8000/api/v1");
    if (res) setLoader(false);
    const data = await res.json();
    console.log(data);
    setData(data);
  };
  return (
    <div className="">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl">CRUD APP</h1>
        <Link
          to="create"
          className="flex items-center gap-2 bg-[#54c954] cursor-pointer px-6 py-2 text-base text-white rounded-[100px] "
          type="submit"
        >
          {" "}
          <FaPlus className="text-[#fff]" />
          New Crud
        </Link>
      </div>
      <div className="flex justify-center items-center text-[4rem] mt-[3rem]">{loader && <i className="fa-solid fa-spinner fa-spin"></i>}</div>
      {data.map((item, index) => (
        <div className="bg-[#dcd9d9] p-3 rounded-2xl mb-10" key={index}>
          <div className="flex justify-between items-center mb-4">
            <h3>Title: {item.title}</h3>
            <div
              className=" bg-[#808080] rounded-full  px-2 py-1 cursor-pointer"
              onClick={handleClick}
            >
              {!click ? (
                <BsThreeDotsVertical className="text-[#fff] text-2xl" />
              ) : (
                <div className=" flex">
                  <Link to={`edit/${item._id}`}>
                    <MdModeEditOutline className=" text-2xl" />
                  </Link>
                  <Link to="">
                    <MdDelete
                      className=" text-2xl text-red-900"
                      onClick={() => handleDelete(item._id)}
                    />
                  </Link>

                  <BsThreeDotsVertical className="text-[#fff] text-2xl" />
                </div>
              )}
            </div>
          </div>

          <div className="flex gap-1">
            <p>Description:</p>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CrudApp;
