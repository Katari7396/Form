import { Box, Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

function SignUp() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();

        sessionStorage.setItem("username", username)
        sessionStorage.setItem("password", password)
        alert ("sign up successfull");

        setUsername("");
        setPassword("")

    };

  return (
    <Box sx={{
        display: "flex",
        flexDirection: "column",
        maxWidth: 400,
        margin: "auto",
        padding: 2,
        boxShadow: 8,
        paddingTop: 4,marginTop:2
    }}>
        <Typography variant='h5'>Sign Up</Typography>
        <TextField
            label = "Username"
            variant='outlined'
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            fullWidth
            margin='normal'
        />
        <TextField
            label = "password"
            variant='outlined'
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            fullWidth
            margin='normal'
        />
        <Button 
            variant='contained'
            onClick={handleSubmit}
            sx={{mt:2}}
        >
            Sign Up
        </Button>

    </Box>
  )
}

export default SignUp
