import React, { useState } from 'react'

const HospitalToDo = () => {
    const initialval={name:"",address:"",contact:"",bill:""};
        const [inputdata,setInputData]=useState(initialval);
        const {name,address,contact,bill}=inputdata;
        const [data,setData]=useState([]);
        const inputHandler =(e)=>{
            setInputData((prevstate)=>{
                return {...prevstate,[e.target.name]:e.target.value};
            })
        }
        const addHandler=()=>{
            if(name ==""){
              return  alert("name  is required")
            }
            setData((prevState)=>{
                return [...prevState,inputdata]
            });
            setInputData({name:"",address:"",contact:"",bill:""})
        }
        const editHandler=(currval)=>{
            setInputData({name:currval.name,address:currval.address,contact:currval.contact,bill:currval.bill});
            setData(
                data.filter((datas)=>{
                    return currval != datas;
                })
            )
        }
        const deleteHandler =(currval)=>{
            setData(
                data.filter((data)=>{
                    return data != currval;
                })
            )
        }
  return (
    <>
        <input type="text" name='name' value={name} placeholder='Enter the patient name' onChange={inputHandler} />
        <input type="text" name='address'  value={address} placeholder='Enter the patient address' onChange={inputHandler} />
        <input type="text" name='contact' value={contact} placeholder='Enter the patient contact' onChange={inputHandler} />
        <input type="text" name='bill'  value={bill} placeholder='Enter the patient bill' onChange={inputHandler} />
        <button type='button' onClick={addHandler} >Add</button>
                <table className="table table-striped">
                    <thead>
                        <tr>
                        <th scope="col">Sr.No</th>
                        <th scope="col">Name</th>
                        <th scope="col">Address</th>
                        <th scope="col">Contact</th>
                        <th scope="col">Bill</th>
                        <th scope="col"></th>

                        </tr>
                    </thead>
                    
        {data.map((currval,index)=>{
                  return <tbody key={index}>
                            <tr>
                            <th scope="row">{index+1}</th>
                            <td>{currval.name}</td>
                            <td>{currval.address}</td>
                            <td>{currval.contact}</td>
                            <td>{currval.bill}</td>
                            <td>
                                <button type='button' onClick={()=>{editHandler(currval)}}>Edit</button>
                                <button type='button'onClick={()=>{deleteHandler(currval)}} >Delete</button>

                                </td>
                            </tr>                   
                        </tbody>
              })}
                            </table>

    </>
  )
}

export default HospitalToDo