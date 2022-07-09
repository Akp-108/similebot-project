import React, { useState } from 'react'
import './pcss/order.css'
const Contact = () => {
  const[Userdata,setUserData]= useState([
    {
        fName : '',
        lname : '',
        mobileNo:'',

    }
])
const[data,setData] = useState([])

    const inputChange = (e) =>{
        setUserData({...Userdata,[e.target.name]:e.target.value})
        // console.log(Userdata);
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        const newData = {...Userdata, id : new Date().getTime().toString()}
        setData([newData])
        setUserData( {
            fName : '',lname : '',Age : '',mobileNo:''
        })
    }
    console.log(data)
  return (
  
    <div>
      <div className='product__order'>
        <h1>Request a Call back</h1><br />
        <hr />
        <div className='login__page'>
        <form action="" onClick={handleSubmit} >
            <section>
                <input type="text" name="fName" id="" value={Userdata.fName} onChange ={inputChange} placeholder = "First Name" />
            </section> <br />
            <section>
                <input type="text" name="lname" id="" value={Userdata.lname} onChange ={inputChange} placeholder = "Last Name" />
            </section><br />
          
            <section>
                <input type="text" name="mobileNo" id="" value={Userdata.mobileNo} onChange ={inputChange} placeholder = "Phone" />
            </section><br />
            
            
            

           <button>Submit</button>
        </form>
    </div>
    </div>
    </div>
  )
}

export default Contact;