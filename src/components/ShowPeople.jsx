import React, { useEffect, useState } from 'react'
import { BiLeftArrow, BiLeftArrowAlt } from 'react-icons/bi'
import { BsBackpack3, BsBackpack3Fill } from 'react-icons/bs'
import { FaBackward } from 'react-icons/fa'
import { Link } from 'react-router'

function ShowPeople() {
  const [people, setPeople] = useState([])

  useEffect(() => {
    fetch("http://localhost:5002/people")
      .then(res => res.json())
      .then(data => setPeople(data))
  }, [])

  const handleDelete=(user)=>{
    console.log(user._id)
  //    // Delete with body
  //  fetch("http://localhost:5002/delete",{
  //    method:"DELETE",
  //    headers:{
  //       "content-type":"application/json"
  //    },
  //      body:JSON.stringify({id:user._id})
  //    })

  fetch(`http://localhost:5002/delete/${user._id}`,{
    method:"DELETE",
    headers:{
      "content-type":"application/json"
    }
  })
  .then(()=>{
    window.location.reload()
  })

  }

 

  return (
   <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 p-6">
  <div className="max-w-6xl mx-auto bg-white shadow-2xl rounded-2xl p-6">
    <Link to={"/"}> <BiLeftArrowAlt size={30}/> </Link>
    <h1 className="text-3xl font-bold text-center text-indigo-600 mb-6">
      👥 People List
    </h1>

    <div className="overflow-x-auto rounded-xl border border-indigo-100">
      <table className="min-w-full text-sm">
        <thead>
          <tr className="bg-indigo-600 text-white">
            <th className="py-3 px-4 text-left rounded-tl-xl">#</th>
            <th className="py-3 px-4 text-left">Name</th>
            <th className="py-3 px-4 text-left">Email</th>
            <th className="py-3 px-4 text-left">Phone</th>
            <th className="py-3 px-4 text-left">Address</th>
            <th className="py-3 px-4 text-center">Actions</th>
            <th className="py-3 px-4 text-center rounded-tr-xl">Edit</th>
          </tr>
        </thead>

        <tbody>
          {people.map((person, index) => (
            <tr
              key={person._id}
              className="border-b last:border-none hover:bg-indigo-50 transition duration-200"
            >
              <td className="py-3 px-4 font-semibold text-gray-700">
                {index + 1}
              </td>

              <td className="py-3 px-4 font-medium text-gray-800">
                {person.name}
              </td>

              <td className="py-3 px-4 text-blue-600">
                {person.email}
              </td>

              <td className="py-3 px-4 text-gray-700">
                {person.number}
              </td>

              <td className="py-3 px-4 text-gray-600">
                {person.address}
              </td>

              <td  className="py-3 px-4 text-center">
                <button onClick={()=>handleDelete(person)} className="px-4 py-1.5 text-sm font-medium text-white bg-red-500 rounded-lg hover:bg-red-600 transition">
                  Delete
                </button>
              </td>

              <td className="py-3 px-4 text-center">
                <Link to={`/people/${person._id}`}>
                <button  className="px-4 py-1.5 text-sm font-medium text-white bg-indigo-500 rounded-lg hover:bg-indigo-600 transition">
                  Edit
                </button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
</div>

  )
}

export default ShowPeople
