import React from 'react'

const Footer = () => {
    return (
        <div>
            <div className='lg:flex justify-around w-10/12 mx-auto mt-8 flex-row'>
                <div className=' mt-[10px] mx-auto w-10/12'>
                    <h1 className='text-[#000000]  font-semibold text-2xl lg:w-[54%]  my-5 '>Dananz</h1>
                    <p className='text-[#333333] lg:text-4xl lg:w-5/12 '>One of the best furniture agency.</p>
                </div>
                <div>
                    <div className='flex'>
                        <div className='border-2 h-5 w-5 rounded-full  my-7 bg-gray-500'></div>
                        <p className='text-[#333333] lg:text-lg lg:w-12/12 mt-6 mx-6'>Enter  your email to get the laterst news</p>
                    </div>
                    <input className='mt-4 ml-10 w-24 h-10 border-none' type="email" placeholder="email address" />
                    <div className='border-[1px] border-[#000000] h-0 w-[350px] my-5 mx-10'></div>
                </div>
            </div>
        </div>
    )
}

export default Footer