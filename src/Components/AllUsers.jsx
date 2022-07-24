
import React, { useEffect, useState } from 'react';
import { Table, TableCell, TableRow, TableHead, TableBody, makeStyles, Button } from '@material-ui/core';
import { deleteUser ,getallUsers } from '../service/api';
import { Link } from 'react-router-dom';

const useStyle = makeStyles({
    table: {
        background: '#000080',
        width: '80%',
        margin: '50px 100px 100px 140px',
    },
    thead:{
        '& > *':{
            background: '#051c2c',
            color:'#FFFFFF',
            fontSize: '16px'
        }
    },
    trow:{
        '& > *':{
            fontSize: '16px',
            color: 'white'
        }
    }
})

const AllUsers = () => {

    const classes = useStyle();

    const [user, setUser] = useState([]);
    useEffect(() => {
        getUsers();
    }, [])

    const getUsers = async () =>{
        const response = await getallUsers();
        console.log(response);
        setUser(response.data);
    }

    const deleteData = async (id) => {
        await deleteUser(id);
        getUsers();
    }

    return (
        <Table className={classes.table}>
            <TableHead>
                <TableRow className={classes.thead}>
                    <TableCell>ID</TableCell>
                    <TableCell>UserId</TableCell>
                    <TableCell>Title</TableCell>
                    <TableCell>Body</TableCell>
                    
                    <TableCell></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
            {
                user.map((data) => (
                    <TableRow className={classes.trow}>
                        <TableCell>{data.id}</TableCell>
                        <TableCell>{data.userId}</TableCell>
                        <TableCell>{data.title}</TableCell>
                        <TableCell>{data.body}</TableCell>
                        
                        <TableCell>
                            <Button variant="contained" color="primary" style={{margin: '0px 20px'}} component={Link} to={`/edit/${data.id}`}>Edit</Button>
                            <Button variant="contained" color="secondary" style={{margin: '0px 20px'}} onClick={() => deleteData(data.id)}>Cancel</Button>
                        </TableCell>
                        
                    </TableRow>
                    
                ))
            }
            
            </TableBody>
        </Table>
    )
}

export default AllUsers;
