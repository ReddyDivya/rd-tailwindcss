import React from 'react'

const Tables = () => {
  return (
    <div className="text-center mx-80 my-32">
        <table className="table-auto border border-slate-500 m-4">
          <thead className="text-slate-500">
            <tr>
              <th className="border border-slate-400 p-2">Song</th>
              <th className="border border-slate-400 p-2">Artist</th>
              <th className="border border-slate-400 p-2">Year</th>
            </tr>
          </thead>
          <tbody className="text-slate-500">
            <tr>
              <td className="border border-slate-400 p-2">The Sliding Mr. Bones (Next Stop, Pottersville)</td>
              <td className="border border-slate-400 p-2">Malcolm Lockyer</td>
              <td className="border border-slate-400 p-2">1961</td>
            </tr>
            <tr>
              <td className="border border-slate-400 p-2">Shining Star</td>
              <td className="border border-slate-400 p-2">Earth, Wind, and Fire</td>
              <td className="border border-slate-400 p-2">1975</td>
            </tr>
            <tr>
              <td className="border border-slate-400 p-2">Witchy Woman</td>
              <td className="border border-slate-400 p-2">The Eagles</td>
              <td className="border border-slate-400 p-2">1972</td>
            </tr>
            <tr>
              <td className="border border-slate-400 p-2">The Sliding Mr. Bones (Next Stop, Pottersville)</td>
              <td className="border border-slate-400 p-2">Malcolm Lockyer</td>
              <td className="border border-slate-400 p-2">1961</td>
            </tr>
            <tr>
              <td className="border border-slate-400 p-2">Shining Star</td>
              <td className="border border-slate-400 p-2">Earth, Wind, and Fire</td>
              <td className="border border-slate-400 p-2">1975</td>
            </tr>
            <tr>
              <td className="border border-slate-400 p-2">Witchy Woman</td>
              <td className="border border-slate-400 p-2">The Eagles</td>
              <td className="border border-slate-400 p-2">1972</td>
            </tr>
          </tbody>
        </table>
    </div>
  )
}

export default Tables