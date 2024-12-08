import React from 'react'

const Contacts = () => {
  return (
    <div className='bg-black min-h-screen pt-10 px-4 text-white'>
      <div className=' flex justify-between'>
        <h1>Contacts</h1>
        <h1 className=' text-[#9747FF]'>+ Import Contacts</h1>
      </div>
      <div className="h-[40px] w-full bg-[#9747FF] opa rounded-lg mt-3 flex items-center px-3" style={{ backgroundColor: "rgba(151, 71, 255, 0.3)" }}>
      <input
        type="text"
        placeholder='Search'
        className="bg-transparent w-full h-full text-white placeholder-gray-200 outline-none"
      />
    </div>

    </div>
  )
}

export default Contacts


