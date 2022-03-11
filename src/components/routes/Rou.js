import React from 'react'
import Form from '../Form/Form'
import { Route, Routes } from 'react-router-dom'
import Calculator from "../Calculator/Calculator.js"
import Practice from '../Practice/Practice'
import HospitalToDo from '../Hospital/HospitalToDo'
const Rou = () => {
  return (
    <div>
        <Routes>
              <Route path='/' element={<Practice/>}/>
              <Route path='/form' element={<Form/>}/>\
              <Route path='/hospital' element={<HospitalToDo/>}/>
              <Route path="/calculator" element={<Calculator/>}/>
        </Routes>
    </div>
  )
}

export default Rou