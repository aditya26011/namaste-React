import React from 'react'

const ContactComponent = () => {
  return (
    <div>
      <h1 className='font-bold text-3xl m-4 p-4'>Contact us Page</h1>
      <form >
        <input type="text" placeholder='name' className='border border-black m-2 p-2' />
        <input type="text" placeholder='message' className='border border-black m-2 p-2' />
        <button className='border border-black m-2 p-2 rounded-md bg-black text-white'>Submit</button>
      </form>
    </div>
  )
}

export default ContactComponent
