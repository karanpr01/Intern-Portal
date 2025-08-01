import { Button } from '@/Components/ui/button'
import React from 'react'
import { useNavigate } from 'react-router-dom';

const Setting = () => {
    const navigate = useNavigate()

     const handleClick = () => {
    navigate("/dashboard");
  };
  return (
    <div className='flex flex-col items-center'>
        <h1 className='text-center font-bold text-3xl'>Settings</h1>

          <Button onClick={handleClick} variant="outline" className="m-10">Go Back</Button>
    </div>
  
  )
}

export default Setting