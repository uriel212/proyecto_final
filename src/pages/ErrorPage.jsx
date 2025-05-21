import React from 'react'
import { NavLink } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbnVvNzhlMHI1YmliMmpobHNla3lwcXU5MDhwanFxeWVvcm9tenNkdSZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/42veFaIwEoPETh9gNB/giphy.gif" alt="" />
        <NavLink to="/">Regresar</NavLink>
      </div>
    </div>
  )
}

export default ErrorPage