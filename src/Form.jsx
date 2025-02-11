import React, { useState } from 'react'

export const Form = () => {
    const[data, setData] = useState({
        username: '',
        password:''
    });
    const[formData, setFormData] = useState({
        username : '',
        password : ''
    })
    const[submitted, setSubmitted] = useState(false);

    const dataHandle = ((e) => {
       
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
        console.log(data.username);
        console.log(data.password);
    })

    const submitFunc = (e)=>{
        console.log(data.username);
        console.log(data.password);
        e.preventDefault();
        setFormData({
            username : data.username,
            password : data.password
        });
        setSubmitted(true);
    }

  return (
    <div>
        <form onSubmit={submitFunc}>
            <label>Username : <input name="username" value={data.username} onChange={dataHandle}></input></label>
            <br></br>
            <label>Password : <input name="password" value={data.password} onChange={dataHandle}></input></label>
            <br></br>
            <button type="submit">Submit</button>
        </form>

        <p>{submitted ? formData.username : null}</p>
        <p>{submitted ? formData.password : null}</p>
    </div>
  )
}
