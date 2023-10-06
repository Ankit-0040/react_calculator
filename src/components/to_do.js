import React, { useState } from 'react';
import './to_do.css'
function ToDo() {
  const[value,setValue] = useState('');
  const[listvalue,setlistvalue]=useState([]);
  const handleAddtask = () =>{
    setlistvalue((listvalue)=>{
      const updatedList=[...listvalue,value];
      setValue('');  
      return updatedList;
  })
  console.log(value);
  }
  return (
    <>
        <div className='to-do'>TO-DO List</div>
        <div className='input'>
        <div className='input_box_add_button'>
        <input type='text' placeholder='Enter Task' className='input-textbox' value={value} onChange={(e) => setValue(e.target.value)}></input>
        <button type= "button" className='button' onClick={() => handleAddtask()}>Add Task</button>
         </div>
         <div className='input_box_add_button'>
          
          {listvalue.map((data,i)=>{
                return(
                    <>
                    <div key={i}>
                        {data}
                    </div>
                    </>
                )
            })}
         </div>
        </div>
    </>

  )
}

export default ToDo