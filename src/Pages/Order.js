import React, { useState } from 'react'
import './pcss/order.css'
const Order = () => {
  const[Userdata,setUserData]= useState([
    {
        fName : '',
        lname : '',
        mobileNo:'',
        address : '',
        email: '',

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
            fName : '',lname : '',mobileNo:'',address : '',email: ''
        })
    }
    console.log(data)
  return (
  
    <div>
      <div className='product__order'>
        <h1>Place Our Order</h1><br />
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
            <section>
                <input type="text" name="address" id="" value={Userdata.address} onChange ={inputChange} placeholder = 'Address' />
            </section><br />
            <section>
                <input type="text" name="email" id="" value={Userdata.email} onChange ={inputChange} placeholder = "Email"/>
            </section><br />
            

           <button>Order</button>
        </form>
    </div>
    </div>
    </div>
  )
}

export default Order