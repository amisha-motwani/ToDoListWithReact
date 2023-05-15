import React, { useState } from "react";

const Todo = () => {
  const [inputs, setInputs] = useState({
    name: "",
  
  });
  
  const [tableData, setTableData] = useState([]);
  const [editClick, setEditClick] = useState(false);
  const [editIndex, setEditIndex] = useState("");

  const handleChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("inputs", inputs);
    if (editClick) {
      const tempTableData = tableData;
      Object.assign(tempTableData[editIndex], inputs);
      setTableData([...tempTableData]);
      setEditClick(false);
      setInputs({
        name: "",
      });
    } else {
      setTableData([...tableData, inputs]);
      setInputs({
        name: "",
    
      });
    }
  };

  const handleDelete = (index) => {
    const filterData = tableData.filter((item, i) => i !== index);
    setTableData(filterData);
  };
  const handleEdit = (index) => {
    const tempData = tableData[index];

    setInputs({ name: tempData.name, email: tempData.email });
    setEditClick(true);
    setEditIndex(index);
  };
  return (
    <div className="Container">
      <div className="row form justify-content-center">
          <div className ="col-9 border bg-secondary border ">
              <h1 className ="mt-1 elegantshadow"><b>To-Do List</b></h1>
              <form onSubmit={handleSubmit}>
                  <div className="flex flex-col">
                     <label className="EnterYourTask ms-5 mt-3" style ={{textAlign:'center', color:'black'}}><b>Enter your task</b></label>
                      <br></br>
                     <textarea name="name" value={inputs.name}  onChange={handleChange} className="field ms-5 text-dark" style={{width:"90%", height:"100px"}}>
                      </textarea>
                  </div>
                  <br></br>
                 <button type="submit" className="mybtn text-light button-7 py-3 px-5" style={{marginLeft:"43%"}} role="button">{editClick ? "Update" : "Submit"}</button>
                  <br></br>
              </form>
               <div>
                  <table className="table table-dark table-striped table-hover mt-4"style={{color:'white'}}>
                  <thead>
                       <tr>
                         <th scope="col" className="ms-3 text-light">TASK</th>   
                         <th scope="col" className="ms-5" style={{textAlign:"center"}}>Action</th>
                       </tr>
                   </thead>
                   <tbody className="text-white" style ={{color:'white'}}>
                      {tableData.map((item, i) => (
                      <tr>
                     <td>{item.name}</td>
                     <td>
                        <button onClick={() => handleEdit(i)} className="mr-3 p-2 EditBtn" style={{marginLeft:"60%"}}>
                         <i class="fa-solid edit fa-pen-to-square" ></i>
                       </button>
                       <button onClick={() => handleDelete(i)} className="p-2 DeletetBtn">
                         <i class="fa-solid delete fa-trash-can"></i>
                       </button>
                     </td>
                     </tr>
                      ))}
                  </tbody>
                 </table>
              </div>
          </div>
       </div>
    </div>
  );
};

export default Todo;