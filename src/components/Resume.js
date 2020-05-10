import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {Typography, Box} from '@material-ui/core'
import Navbar from './Navbar'

const useStyles = makeStyles(theme => ({
    mainContainer: {
        background: "#233"
    },
    timeLine: {
        position: "relative",
        padding: "1rem",
        margin: "0 auto",
        "&:before":{
            content: "''",
            position: "absolute",
            height: "100%",
            border: "1px solid tan",
            right: "40px",
            top: 0
        },
        "&:after":{
            content: "''",
            display: "table",
            clear: "both"
        },
        [theme.breakpoints.up("md")]:{
            padding: "2rem",
            "&:before": {
                left: "calc(50% - 1px)",
                right: "auto"
            }
        }
    },
    timeLineItem: {
        padding: "1rem",
        borderBottom: "2px solid tan",
        position: "relative",
        margin: "1rem 3rem 1rem 1rem",
        clear: "both",
        "&:after": {
            content: "''",
            position: "absolute",
        },
        "&:before":{
            content: "''",
            position: "absolute",
            right: "-0.625rem",
            top: "calc(50% - 5px)",
            borderStyle: "solid",
            borderColor: "tomato tomato transparent transparent",
            borderWidth: "0.265rem",
            transform: "rotate(45deg)"
        },
        [theme.breakpoints.up("md")]: {
            width: "44%",
            margin: "1rem",
            "&:nth-of-type(2n)": {
                float: "left",
                margin: "1rem",
                borderColor: "tan"
            },
            "&:nth-of-type(2n):before": {
                right: "auto",
                left: "-0.625rem",
                borderColor: "tomato tomato transparent transparent",
            }
        }
    },
    timeLineItems: {
        padding: "1rem",
        borderBottom: "2px solid tan",
        position: "relative",
        margin: "1rem 3rem 1rem 1rem",
        clear: "both",
        "&:after": {
            content: "''",
            position: "absolute",
        },
        "&:before":{
            content: "''",
            position: "absolute",
            right: "-0.625rem",
            top: "calc(50% - 5px)",
            borderStyle: "solid",
            borderColor: "tomato tomato transparent transparent",
            borderWidth: "0.265rem",
            transform: "rotate(45deg)"
        },
        [theme.breakpoints.up("md")]: {
            width: "44%",
            margin: "1rem",
            "&:nth-of-type(2n)": {
                float: "right",
                margin: "1rem",
                borderColor: "tan"
            },
            "&:nth-of-type(2n):before": {
                right: "auto",
                left: "-0.625rem",
                borderColor: "tomato tomato transparent transparent",
            }
        }
    },
    timeLineYear: {
        textAlign: "center",
        maxWidth: "9.237rem",
        margin: "0 3rem 0 auto",
        fontSize: "1.8rem",
        background: "tomato",
        color: "white",
        lineHeight: 1,
        padding: "0.5rem 0 1rem",
        "&:before":{
            display: "none"
        },
        [theme.breakpoints.up("md")]:{
            textAlign: "center",
            margin: "0 auto",
            "&:nth-of-type(2n):before":{
                display: "none"
            }
        }
    },
    heading: {
        color: "tomato",
        padding: "3rem 0",
        textTransform: "uppercase"
    },
    subHeading: {
        color: "white",
        padding: "0",
        textTransform: "uppercase"
    }
}))

const Resume = () => {
    const classes = useStyles()
    return (
        <div>
            <Navbar />
            <Box component="header" className={classes.mainContainer}>
                <Typography variant="h4" align="center" className={classes.heading}>
                    Working Experience
                </Typography>
                <Box component="div" className={classes.timeLine}>
                    <Typography variant="h2" align="center" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                        2020
                    </Typography>
                </Box>
                <Box component="div" className={classes.timeLineItem} >
                    <Typography variant="h5" align="center" className={classes.subHeading}>
                        Web Design
                    </Typography>
                    <Typography variant="body1" align="center" style={{color: "tomato"}}>
                        Company Name where work
                    </Typography>
                    <Typography variant="subtitle1" align="center" style={{color: "tan"}}>
                    Note :-Fresh contract of appointment shall be made for a fresh tenure after completion of the existing tenure each
                    time upto the age of superannuation (determined by the Governing Council of RGSSH society for said post from time
                    to time/NCT of Delhi) based on their performance in annual performance appraisal report of previous tenure from the
                    willing persons.
                    </Typography>
                </Box>
                <Box component="div" className={classes.timeLine}>
                    <Typography variant="h2" align="center" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                        2020
                    </Typography>
                </Box>
                <Box component="div" className={classes.timeLineItems}>
                    <Typography variant="h5" align="center" className={classes.subHeading}>
                        Web Design
                    </Typography>
                    <Typography variant="body1" align="center" style={{color: "tomato"}}>
                        Company Name where work
                    </Typography>
                    <Typography variant="subtitle1" align="center" style={{color: "tan"}}>
                    Note :-Fresh contract of appointment shall be made for a fresh tenure after completion of the existing tenure each
                    time upto the age of superannuation (determined by the Governing Council of RGSSH society for said post from time
                    to time/NCT of Delhi) based on their performance in annual performance appraisal report of previous tenure from the
                    willing persons.
                    </Typography>
                </Box>
                <Box component="div" className={classes.timeLine}>
                    <Typography variant="h2" align="center" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                        2020
                    </Typography>
                </Box>
                <Box component="div" className={classes.timeLineItem}>
                    <Typography variant="h5" align="center" className={classes.subHeading}>
                        Web Design
                    </Typography>
                    <Typography variant="body1" align="center" style={{color: "tomato"}}>
                        Company Name where work
                    </Typography>
                    <Typography variant="subtitle1" align="center" style={{color: "tan"}}>
                    Note :-Fresh contract of appointment shall be made for a fresh tenure after completion of the existing tenure each
                    time upto the age of superannuation (determined by the Governing Council of RGSSH society for said post from time
                    to time/NCT of Delhi) based on their performance in annual performance appraisal report of previous tenure from the
                    willing persons.
                    </Typography>
                </Box>

                <Box component="div" className={classes.timeLine}>
                    <Typography variant="h2" align="center" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                        2020
                    </Typography>
                </Box>
                <Box component="div" className={classes.timeLineItems}>
                    <Typography variant="h5" align="center" className={classes.subHeading}>
                        Web Design
                    </Typography>
                    <Typography variant="body1" align="center" style={{color: "tomato"}}>
                        Company Name where work
                    </Typography>
                    <Typography variant="subtitle1" align="center" style={{color: "tan"}}>
                    Note :-Fresh contract of appointment shall be made for a fresh tenure after completion of the existing tenure each
                    time upto the age of superannuation (determined by the Governing Council of RGSSH society for said post from time
                    to time/NCT of Delhi) based on their performance in annual performance appraisal report of previous tenure from the
                    willing persons.
                    </Typography>
                </Box>
                <Box component="div" className={classes.timeLine}>
                    <Typography variant="h2" align="center" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                        2020
                    </Typography>
                </Box>
                <Box component="div" className={classes.timeLineItem}>
                    <Typography variant="h5" align="center" className={classes.subHeading}>
                        Web Design
                    </Typography>
                    <Typography variant="body1" align="center" style={{color: "tomato"}}>
                        Company Name where work
                    </Typography>
                    <Typography variant="subtitle1" align="center" style={{color: "tan"}}>
                    Note :-Fresh contract of appointment shall be made for a fresh tenure after completion of the existing tenure each
                    time upto the age of superannuation (determined by the Governing Council of RGSSH society for said post from time
                    to time/NCT of Delhi) based on their performance in annual performance appraisal report of previous tenure from the
                    willing persons.
                    </Typography>
                </Box>
            </Box>
        </div>
    )
}

export default Resume
