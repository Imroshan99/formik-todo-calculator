import { Button, ButtonGroup } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'

const Practice = () => {
  return (
    <div>
        <ButtonGroup color="primary" variant='outlined'>
            <Button><Link to="/form">Formik form</Link></Button>
            <Button><Link to="/hospital">Hospital To Do</Link></Button>
            <Button><Link to="/calculator">Calculator</Link></Button>

        </ButtonGroup>
    </div>
  )
}

export default Practice