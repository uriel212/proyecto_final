import React from 'react'
import { NavLink } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbnVvNzhlMHI1YmliMmpobHNla3lwcXU5MDhwanFxeWVvcm9tenNkdSZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/42veFaIwEoPETh9gNB/giphy.gif" alt="" />
        <NavLink to="/" className="px-6 py-3 bg-matrix rounded-lg font-medium hover:shadow-lg hover:shadow-cyan-500/30 transition-all">Regresar</NavLink>
      </div>
    </div>
  )
}

export default ErrorPage