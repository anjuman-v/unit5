import { useState } from "react";

export const Form = () =>{

    const [formData, setFormData] = useState({
        userName: "",
        age: "",
    })

    const handleChange = (e) =>{
        const {name} = e.target;

        setFormData({
            ...formData, 
            [name]: e.target.value
        })
        
    };

    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log("Submitting", formData);
        }}
      >
        <input
          name="userName"
          type="text"
          onChange={handleChange}
          placeholder="Enter User Name..."
        />

        <input
          name="age"
          type="number"
          onChange={handleChange}
          placeholder="Enter Age..."
        />

        <input
          name="email"
          type="email"
          onChange={handleChange}
          placeholder="Enter email..."
        />

        <input type="submit" />
      </form>
    ); 

}