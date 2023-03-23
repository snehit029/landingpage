import React from 'react'

const Button = ({styles}) => {
  return (
    <button type='button' className={`py-6 px-6 bg-blue-gradient
    font-poppins font-medium text-[18px] text-primary
    outline-none ${styles}`}>
      Get Started
    </button>
  )
}

export default Button