import React from 'react'
import toast from 'react-hot-toast'
import { BsBack, BsBackpack3Fill, BsSkipBackwardCircleFill } from 'react-icons/bs'
import { Link, useLoaderData, useNavigate } from 'react-router'

function UpdatePeople() {
  const navigate=useNavigate()
    const data=useLoaderData()
    console.log(data)
    const handleUpdateForm=(e)=>{
       e.preventDefault();
    const form=e.target
    const name=form.name.value
    console.log(name)

    fetch(`http://localhost:5002/people/${data._id}`,{
        method:"PATCH",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify({name})
    })
    .then(()=>{
        toast.success("hurrey!Succesfully changed the name")
        navigate("/people")
    })
    // setTimeout(() => {
    //     window.location.reload()
    // }, 1000);
    }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 p-6">
      <div className="w-full max-w-md bg-white shadow-2xl rounded-2xl p-6">
       
        <h2 className="text-2xl font-bold text-center text-indigo-600 mb-6">
          ✏️ Update Name
        </h2>

        <form onSubmit={handleUpdateForm} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              defaultValue={data.name}
              name='name'
              className="w-full px-4 py-2 border border-indigo-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Enter new name"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 font-semibold text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition"
          >
            Update Name
          </button>
        </form>
      </div>
    </div>
  )
}

export default UpdatePeople