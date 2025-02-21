import { Box, Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

function Signin() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = () => {

        const storedUsername = sessionStorage.getItem("username");
        const storedPassword = sessionStorage.getItem("password");

        if(username === storedUsername && password === storedPassword) {
            alert("signin sucessfull");
        } else{
            setError("Invalid Credentials");
        }

        // setUsername("");
        // setPassword("")
    }

  return (
    <Box sx={{
        display: "flex",
        flexDirection: "column",
        maxWidth: 400,
        margin: "auto",
        padding: 2,
        boxShadow: 10,
        paddingTop: 4, marginTop:2
    }}>
        <Typography variant='h5'>Sign In</Typography>
        <TextField 
            label = "Username"
            variant='outlined'
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            fullWidth
            margin='normal'
        />
        <TextField
            label = "Password"
            variant='outlined'
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            fullWidth
            margin='normal'
        />
        {error && (
            <Typography color='error' variant='body2' sx={{mt:1}}>
                {error}
            </Typography>
        )}
        <Button
            variant='contained'
            onClick={handleSubmit}
            sx={{mt:2}}
        >
            Sign In
        </Button>
    </Box>
  )
}

export default Signin