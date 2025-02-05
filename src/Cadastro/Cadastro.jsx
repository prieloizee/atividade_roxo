import * as React from "react";
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import Avatar from "@mui/material/Avatar"
import  Box from "@mui/material/Box"
import Person from "@mui/icons-material/Person";
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import { useState } from "react";


function Cadastro(){

    const[user, setUser] = useState({
        email:"",
        password:"",
        age:"",
        name:"",
    })

    const onChange = (event) =>{
        const{name, value} = event.target;
        setUser({...user,[name]:value})
    };

    const handleSubmit=(event)=>{
        event.preventDefault();
        alert("Email:"+user.email+""+"Senha:"+user.password+""+"Age:"+user.age+""+"Name:"+user.name+"")
    }

    return(
        <Container component="main" maxWidth="xs">
            <Box sx={{
                marginTop:8,
                display:"flex",
                flexDirection:"column",
                alignItems:"center"

            }}>
                <Avatar sx={{margin:1, backgroundColor:"rgb(128,0,128)"}}>
                    <Person/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Cadastro
                </Typography>
                <Box component="form" sx={{marginTop:1}} onSubmit={handleSubmit} noValidate>
                    <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email"
                    name="email"
                    margin="normal"
                    value={user.email}
                    onChange ={onChange}
                    />
                    <TextField
                    required
                    fullWidth
                    id="password"
                    label="Senha"
                    name="password"
                    margin="normal"
                    type="password"
                    value={user.password}
                    onChange ={onChange} 
                    />
                    <TextField
                    required
                    fullWidth
                    id="age"
                    label="Idade"
                    name="age"
                    margin="normal"
                    value={user.age}
                    onChange ={onChange} 
                    />
                    <TextField
                    required
                    fullWidth
                    id="name"
                    label="Nome"
                    name="name"
                    margin="normal"
                    value={user.name}
                    onChange ={onChange} 
                    />
                    <Button sx={{mt:3, mb:2, backgroundColor:"rgb(128,0,128)"}}
                    fullWidth
                    type="submit"
                    variant="contained"
                    >Entrar</Button>
                </Box>
            </Box>
        </Container>
    )
}
export default Cadastro;