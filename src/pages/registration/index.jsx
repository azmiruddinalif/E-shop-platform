import React from 'react'
import Container from '../../globalComponents/Container'
import RegistrationForm from './components/RegistrationForm'

const Registration = () => {
  return (
    <>
    <Container>
        <div className='max-w-[600px] mx-auto mt-20'>
            <h1 className='font-poppins font-bold text-[56px] text-black01 text-center'>Register</h1>
            <div className='mt-5'>
                <RegistrationForm/>
            </div>
        </div>
    </Container>
    </>
  )
}

export default Registration