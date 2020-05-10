import React from 'react'
import {Typography, Avatar, Grid, Box} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import Typed from 'react-typed'
import avatar from '../avatar.png'

const useStyles = makeStyles(theme => ({
    avatar: {
        width: theme.spacing(30),
        height: theme.spacing(40),
        margin: theme.spacing(1)
    },
    title: {
        color: 'tomato'
    },
    subtitle: {
        color: 'tan',
        marginBottom: '3rem'
    },
    typeContainer: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '100vw',
        textAlign: 'center',
        zIndex: 1
    }
}))

const Header = () => {
    const classes = useStyles()
    return (
        <Box className={classes.typeContainer}>
            <Grid container justify="center">
                <Avatar className={classes.avatar} src={avatar} alt='right' />
            </Grid>
            <Typography className={classes.title} variant="h4">
                <Typed strings={["Ranjan Kumar"]} 
                typeSpeed={40}
                backSpeed={50}
                loop
                />
            </Typography>
            <br />
            <Typography className={classes.subtitle} variant="h5">
                <Typed strings={["Web Design, Front-End Development"]} 
                typeSpeed={40}
                backSpeed={50}
                loop
                />
            </Typography>
        </Box>
    )
}

export default Header
