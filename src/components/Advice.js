import React, { useEffect, useState } from 'react'

const Advice = () => {

    const [url, setUrl] = useState(null)

    useEffect(() => {
        const fetchAdvice = async () => {
            const response = await fetch('https://api.adviceslip.com/advice')
            const data = await response.json()
            setUrl(data)
            console.log(data)
        }
        
        fetchAdvice()
    }, [])

    
  return (
      <div className='bg-[#333] w-screen h-screen flex justify-center items-center'>
          {url && (
              <div className='bg-gray-700 w-[85%] h-[35%] shadow-2xl rounded-lg text-lg
              text-white md:w-[36%] text-center space-y-8 py-12 px-4 relative con'>
                <p className='text-cyan-500'>ADVICE  #{url.slip.id}</p>
                <h1>{url.slip.advice}</h1>
                <div className="flex justify-between max-w-[80%] mx-auto text-center">
                    <p className='w-[47.5%] h-[0.1em] bg-white mt-[0.5em]'></p>
                    <p className='text-x'>""</p>
                    <p className='w-[47.5%] h-[0.1em] bg-white mt-[0.5em]'></p>
                </div>
                <div style={divStyle} onClick={() => window.location.reload(false)} className="bg-green-500 rounded-full w-[3em] h-[3em] flex 
                  justify-center items-center absolute right-[45%] bottom-[-1.75em]">
                    <div className="bg-black  w-[1em] h-[1em]"></div>
                </div>
                
              </div>
              
          )}
    </div>
  )
}

const divStyle = {
    cursor: 'pointer'
}

export default Advice