import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Registration = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobileNo: '',
    password: '',
    picture: '',
    level: 'New Recruit',
  });
const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await fetch("http://localhost:4000/user/register", {
          method: "POST",
          body: JSON.stringify(formData),
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        if (response.ok) {
          setFormData({
            name: '',
            email: '',
            mobileNo: '',
            password: '',
            picture: '',
            level: '',
          });
          navigate("/");l
          alert(data.message); 
        } else {
          alert(data.message);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  const validateForm = () => {
    let formErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!formData.email || !emailRegex.test(formData.email)) {
      formErrors.email = 'Invalid email address';
    }
    if (!formData.password || !passwordRegex.test(formData.password)) {
      formErrors.password = 'Password must be alphanumeric with at least one special character';
    }
    if (!formData.mobileNo || formData.mobileNo.length !== 10) {
      formErrors.mobileNo = 'Mobile number must be 10 digits';
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const convertToBase64 =(e)=>{
    var img = e.target.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(img);
    reader.onload=()=>{
      setFormData({...formData, image: reader.result})
    }
    reader.onerror=error=>{
      console.log("Error: ",error)
    }
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-md">
        <h1 className="text-2xl text-center mb-4">Mechanic Registration</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor='name'>Name</label>
            <input id='name' name='name' type='text' value={formData.name} onChange={handleChange} required />
          </div>
          <div>
            <label htmlFor='email'>Email</label>
            <input id='email' name='email' type='email' value={formData.email} onChange={handleChange} required />
            {errors.email && <span className='text-red-500'>{errors.email}</span>}
          </div>
          <div>
            <label htmlFor='mobileNo'>Mobile No.</label>
            <input id='mobileNo' name='mobileNo' type='text' value={formData.mobileNo} onChange={handleChange} required />
            {errors.mobileNo && <span className='text-red-500'>{errors.mobileNo}</span>}
          </div>
          <div>
            <label htmlFor='password'>Password</label>
            <input id='password' name='password' type='password' value={formData.password} onChange={handleChange} required />
            {errors.password && <span className='text-red-500'>{errors.password}</span>}
          </div>
          <div>
            <label htmlFor='picture'>Picture</label>
            <input id='picture' accept='image/*' name='image' type='file' onChange={convertToBase64}  />
          </div>
          <div>
            <label htmlFor='level'>Level of Mechanic</label>
            <select id='level' name='level' value={formData.level} onChange={handleChange} required>
              <option value='Expert'>Expert</option>
              <option value='Medium'>Medium</option>
              <option value='New Recruit'>New Recruit</option>
              <option value='Trainee'>Trainee</option>
            </select>
          </div>
          <div>
            <button type='submit' className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">Register</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;
