import React from 'react'
import toast from 'react-hot-toast';

function App() {
  const handleAllData=(e)=>{
    e.preventDefault();
    const form=e.target
    const name=form.name.value
    const email=form.email.value
    const number=form.number.value
    const address=form.address.value
    console.log(name,email,number,address)
    const data={name,email,number,address}
    fetch("http://localhost:5000/debate",{
      method:"POST",
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify(data)
    })
    .then(res=>res.json())
    .then(()=>{
      console.log('Data Send Success')
      toast.success("Data Request Succesfull")
    })

  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 to-purple-700 p-4">
      
      <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl p-6">
        
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
          Debate Competition
        </h2>
        <p className="text-center text-gray-500 mb-6">
          Registration Form
        </p>

        <form onSubmit={handleAllData} className="space-y-4">
          
          {/* Name */}
          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-1">
              Full Name
            </label>
            <input
            name='name'
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-1">
              Email Address
            </label>
            <input
            name='email'
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-1">
              Phone Number
            </label>
            <input
            name='number'
              type="tel"
              placeholder="01XXXXXXXXX"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Address */}
          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-1">
              Address
            </label>
            <textarea
            name='address'
              rows="3"
              placeholder="Enter your address"
              className="w-full px-4 py-2 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
            ></textarea>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 transition duration-300"
          >
            Register Now
          </button>

        </form>
      </div>

    </div>
  )
}

export default App
