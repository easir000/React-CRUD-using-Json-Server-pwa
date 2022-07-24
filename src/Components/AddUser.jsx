import React, { useState } from 'react';
import { Container, Typography, FormControl, InputLabel, Input, Box, FormGroup, Button } from '@material-ui/core';
import { addUser } from '../service/api';
import { useHistory } from 'react-router-dom';

const initialValue = {
    title: "",
    userId : "",
    body: "",
    
}

const AddUser = () => {

    const [user, setUser] = useState(initialValue);
    const {title, userId, body} = user;

    const history = useHistory();

    const onValueChange = (e) =>
    {
      //  console.log(e);
      // console.log(e.target.value);
        setUser({...user, [e.target.name]: e.target.value});
       console.log(user);
    }

    const addUserDetails = async () =>{
       await addUser(user);
       history.push('/all');
    }

    return (
        <Container maxWidth="sm">
            <Box my={5}>
            <Typography variant="h5" align="center">Add Posts Details</Typography>
            <FormGroup>
                <FormControl>
                    <InputLabel>Title</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name="title" value={title} />
                </FormControl>
                <FormControl>
                    <InputLabel>User Name</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name="userId" value={userId} />
                </FormControl>
                <FormControl>
                    <InputLabel>body address</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name="body" value={body} />
                </FormControl>
                
                <Box my={3}>
                    <Button variant="contained" onClick={() => addUserDetails() } color="primary" align="center">Add Post</Button>
                    <Button onClick={()=> history.push("/all")} variant="contained" color="secondary" align="center" style={{margin: '0px 20px'}}>Cancel</Button>
                </Box>
            </FormGroup>
            </Box>
        </Container>
    )
}


export default AddUser;