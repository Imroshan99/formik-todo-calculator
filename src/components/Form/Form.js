import React from 'react'
import { useFormik } from 'formik';
import * as Yup from "yup";
const Form = () => {
    const formik=useFormik({
        initialValues:{
            username:"",
            email:"",
            password:""
        },
        validationSchema:Yup.object({
            username:Yup.string()
                        .max(12,"max 12 char required")
                        .required("req field"),
            email:Yup.string()
                        .max(32,"req 32")
                        .required("req field"),
            password:Yup.string()
                        .max(12,"mex 12 re")
                        .required("req field")
        }),
        onSubmit:(values)=>{
            console.log("values",values);
        }
    })
  return (
    <form onSubmit={formik.handleSubmit}>
            <input onBlur={formik.handleBlur} name='username' value={formik.username} type="text" onChange={formik.handleChange} />
            {formik.errors.username && <span style={{color:"red"}}>{formik.errors.username}</span> }
            <input name='email' value={formik.email} type="email" onChange={formik.handleChange} />
            {formik.errors.email && <span style={{color:"red"}}>{formik.errors.email}</span> }
            <input name='password' value={formik.password} type="password" onChange={formik.handleChange} />
            {formik.errors.password && <span style={{color:"red"}}>{formik.errors.password}</span> }
            <button type='submit'  >Add+</button>
    </form>
  )
}

export default Form