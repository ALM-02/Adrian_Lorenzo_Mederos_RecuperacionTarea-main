import { Button, Grid, Container, Toolbar, Typography, AppBar } from "@mui/material";
import React from "react";
import AddModeratorIcon from '@mui/icons-material/AddModerator';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon'
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginActions } from '../store/storelogin';
import { Tooltip } from "@mui/material";

function Topbar() {
    const userData = useSelector(state => state.login);
    const dispatch = useDispatch();
    const handleOnClick = (e) => {
        dispatch(loginActions.logout());
    }
    return <>
        <AppBar position='static'>
            <Container>
                <Toolbar>
                    <Grid container spacing={2} alignItems="center">
                        <Grid item xs={12} md={1} lg={1}>
                            {userData.userRol === 'admin' && <AddModeratorIcon />}
                            {userData.userRol === 'invitado' && <InsertEmoticonIcon />}
                            {userData.userRol === 'user' && <AccountCircleIcon />}
                        </Grid>
                        <Grid item xs={12} md={1} lg={1}>
                            <Typography>{userData.userName}</Typography>
                        </Grid>
                        <Grid item xs={12} md={1} lg={2}>
                            <Link to='/home'>Inicio</Link>
                        </Grid>
                        <Grid item xs={12} md={1} lg={2}>
                        {userData.userRol==='admin' && <Link to='/gesuser'>Gestión usuarios</Link>}
                        </Grid>
                        <Grid item xs={12} md={1} lg={2}>
                            {userData.userRol==='admin' && <Link to='/informes'>Informes</Link>}
                        </Grid>
                        <Grid item xs={12} md={1} lg={2}>
                            <Link to ={'/ManualUsuarioPDF.pdf'} target="_blank">Ayuda</Link>
                        </Grid>
                        <Grid item xs={12} md={1} lg={2}>
                            <Tooltip title="Volver al login" arrow>
                                <Button variant="contained" onClick={handleOnClick}>
                                    Salir
                                </Button>
                            </Tooltip>
                        </Grid>
                    </Grid>
                </Toolbar>
            </Container>
        </AppBar>
    </>
}
export default Topbar;