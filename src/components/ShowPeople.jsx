import React, { useEffect, useState } from 'react'

function ShowPeople() {
  const [people, setPeople] = useState([])

  useEffect(() => {
    fetch("http://localhost:5002/people")
      .then(res => res.json())
      .then(data => setPeople(data))
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 p-6">
      
      <div className="max-w-6xl mx-auto bg-white shadow-2xl rounded-2xl p-6">

        <h1 className="text-3xl font-bold text-center text-indigo-600 mb-6">
          👥 People List
        </h1>

        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse">

            <thead>
              <tr className="bg-indigo-600 text-white text-left">
                <th className="py-3 px-4 rounded-tl-xl">#</th>
                <th className="py-3 px-4">Name</th>
                <th className="py-3 px-4">Email</th>
                <th className="py-3 px-4">Phone</th>
                <th className="py-3 px-4 rounded-tr-xl">Address</th>
              </tr>
            </thead>

            <tbody>
              {people.map((person, index) => (
                <tr
                  key={person._id}
                  className="border-b hover:bg-indigo-50 transition duration-300"
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
