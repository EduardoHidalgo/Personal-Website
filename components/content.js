import React, { useEffect, useState, Fragment } from "react";
import Link from 'next/link';
import '../src/bootstrap';
import { makeStyles } from '@material-ui/styles';
import { Paper, Grid, Typography } from '@material-ui/core';
import { Hidden } from '@material-ui/core';
import '../src/styles/component.css';

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing.unit * 4,
        flexGrow: 1,
        position: 'absolute',
        width: '100vw',
        height: '1000vh'
    },
    //estilos de grids
    grid_container: {
        [theme.breakpoints.up('md')]: {
            width: '50vw'
          }
    },
    grid_divider: {
        paddingTop: '5px'
    },
    grid_portfolio: {
        paddingTop: theme.spacing.unit * 4,
        paddingRight: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 4
    },
    grid_proyects: {
        paddingBottom: theme.spacing.unit * 4,
    },
    grid_skills: {
        paddingTop: theme.spacing.unit,
        paddingRight: theme.spacing.unit,
    },
    grid_contact: {
        paddingTop: theme.spacing.unit * 4,
    },
    //estilos de papers
    paper_name: {
        background: 'transparent',
        color: 'white',
        boxShadow: 'none'
    },
    paper_job: {
        paddingTop: theme.spacing.unit * 3,
        background: 'transparent',
        color: 'white',
        boxShadow: 'none'
    },
    paper_portfolio: {
        background: 'rgba(0, 0, 0, 0.10)',
        height: '60px',
        borderBottom: '3px solid white'
    },
    paper_proyect: {
        background: 'transparent',
        color: 'white',
        boxShadow: 'none'
    },
    paper_skills: {
        background: 'white',
        color: 'black',
        boxShadow: 'none'
    },
    // estilos de tipografias
    typo_name: {
        color: 'white',
        fontFamily: 'Oswald, sans-serif',
        paddingLeft: '0',
    },
    typo_textdivider: {
        color: 'black',
        fontFamily: 'Oswald, sans-serif',
        paddingLeft: theme.spacing.unit * 1,
        paddingRight: theme.spacing.unit * 1
    },
    typo_text: {
        color: 'white',
        fontFamily: 'PT Sans Narrow, sans-serif',
        fontWeight: '300',
        paddingLeft: '0',
        display: 'inline-block'
    },
    typo_proyect: {
        color: 'white',
        fontFamily: 'PT Sans Narrow, sans-serif',
        fontWeight: '300',
        paddingLeft: '0',
        display: 'inline-block',
        lineHeight: 'initial',
        overflow: 'initial'
    },
    typo_skill: {
        color: 'black',
        fontFamily: 'PT Sans Narrow, sans-serif',
        fontWeight: '300',
        paddingLeft: '6px',
        paddingRight: '6px'
    }
}));

function Content(props) {
    const classes = useStyles();
    const skills = ["MERN", "React", "Next.js", "Express.js", "Webpack", 
    "Material-UI", "Now.sh", "C#", "SQL", "Firebase"];

    return (
        <div className={classes.root}>

            <Hidden smDown>
                <Grid container spacing={0} className={classes.grid_container}>
                    {/* Name */}
                    <Grid item xs={12} className={classes.grid_item}>
                        <Paper className={classes.paper_name}>
                            <Typography variant={'h4'} className={classes.typo_name}>EDUARDO HIDALGO</Typography>
                        </Paper>
                    </Grid>
                    {/* Divider */}
                    <Grid item className={classes.grid_divider}>
                    <Paper className={'divider'}>
                            <Typography noWrap variant={'h6'} className={classes.typo_textdivider + ' textdivider'}>SOFTWARE ENGINEER & FULLSTACK DEVELOPER</Typography>
                        </Paper>
                    </Grid>
                    {/* Job & Role */}
                    <Grid item xs={12} className={classes.grid_item}>
                        <Paper className={classes.paper_job}>
                            <Typography noWrap variant={'body2'} className={classes.typo_text}>MERN Web Developer at @</Typography>
                            <Typography noWrap variant={'body2'} className={classes.typo_text}>
                                <Link href="https://webmarina.now.sh/"><a target="_blank">&nbsp;Marina V&V</a></Link>
                            </Typography>
                        </Paper>
                    </Grid>
                    {/* Portfolio */}
                    <Hidden smDown>
                        <Grid container>
                            <Grid item xs={2} className={classes.grid_portfolio}>
                                <Paper square className={classes.paper_portfolio}>
                                    <div className='bg pt1'></div>
                                </Paper>
                            </Grid>
                            <Grid item xs={2} className={classes.grid_portfolio}>
                                <Paper square className={classes.paper_portfolio}>
                                    <div className='bg pt2'></div>
                                </Paper>
                            </Grid>
                        </Grid>
                    </Hidden>
                    {/* Proyects */}
                    <Grid container xs={12} className={classes.grid_proyects} direction="column" justify="flex-start" alignItems="flex-start">
                        <Paper className={classes.paper_proyect}>
                            <Typography noWrap variant={'body2'} className={classes.typo_proyect}>
                                <Link href="https://webmarina.now.sh/"><a target="_blank">&#x25CF; React-Material-UI</a></Link>
                            </Typography>
                            <Typography noWrap variant={'body2'} className={classes.typo_proyect}>&nbsp;- Few layouts builded in Semantic-UI</Typography>
                        </Paper>
                        <Paper className={classes.paper_proyect}>
                            <Typography noWrap variant={'body2'} className={classes.typo_proyect}>
                                <Link href="https://webmarina.now.sh/"><a target="_blank">&#x25CF; Boilerplate-React-CSR</a></Link>
                            </Typography>
                            <Typography noWrap variant={'body2'} className={classes.typo_proyect}>&nbsp;- Boilerplate to begin proyects with React in CSR architecture</Typography>
                        </Paper>
                        <Paper className={classes.paper_proyect}>
                            <Typography noWrap variant={'body2'} className={classes.typo_proyect}>
                                <Link href="https://webmarina.now.sh/"><a target="_blank">&#x25CF; Boilerplate-Nextjs</a></Link>
                            </Typography>
                            <Typography noWrap variant={'body2'} className={classes.typo_proyect}>&nbsp;- SSR boilerplate with React and Material-UI integration</Typography>
                        </Paper>
                        <Paper className={classes.paper_proyect}>
                            <Typography noWrap variant={'body2'} className={classes.typo_proyect}>
                                <Link href="https://webmarina.now.sh/"><a target="_blank">&#x25CF; CoveControl</a></Link>
                            </Typography>
                            <Typography noWrap variant={'body2'} className={classes.typo_proyect}>&nbsp;- some old c# winforms school proyect</Typography>
                        </Paper>
                        <Paper className={classes.paper_proyect}>
                            <Typography noWrap variant={'body2'} className={classes.typo_proyect}>
                                <Link href="https://webmarina.now.sh/"><a target="_blank">&#x25CF; Cell-Animation</a></Link>
                            </Typography>
                            <Typography noWrap variant={'body2'} className={classes.typo_proyect}>&nbsp;- nicely algorithm about cells movement</Typography>
                        </Paper>
                    </Grid>
                    {/* Skills */}
                    <Grid container spacing={16}>
                       {skills.map((skill, i) => 
                            <Grid item className={classes.grid_skills} key={i}>
                                <Paper className={classes.paper_skills}>
                                    <Typography noWrap variant={'body1'} className={classes.typo_skill}>{skill}</Typography>
                                </Paper>
                            </Grid>
                        )}
                    </Grid>
                    {/* Contact */}
                    <Grid container xs={12} className={classes.grid_contact} direction="column" justify="flex-start" alignItems="flex-start">
                        <Paper className={classes.paper_proyect}>
                            <Typography noWrap variant={'body2'} className={classes.typo_proyect}>You can contact me through my email</Typography>
                            <Typography noWrap variant={'body2'} className={classes.typo_proyect}>
                                <Link href="/"><a target="_blank">&nbsp;ingeduardohidalgo@hotmail.com</a></Link>
                            </Typography>
                            <Typography noWrap variant={'body2'} className={classes.typo_proyect}>, consult my profile</Typography>
                            <Typography noWrap variant={'body2'} className={classes.typo_proyect}>
                                <Link href="/"><a target="_blank">&nbsp;LinkedIn</a></Link>
                            </Typography>
                            <Typography noWrap variant={'body2'} className={classes.typo_proyect}>, follow me at</Typography>
                            <Typography noWrap variant={'body2'} className={classes.typo_proyect}>
                                <Link href="/"><a target="_blank">&nbsp;Twitter</a></Link>
                            </Typography>
                            <Typography noWrap variant={'body2'} className={classes.typo_proyect}>, see my proyects in</Typography>
                            <Typography noWrap variant={'body2'} className={classes.typo_proyect}>
                                <Link href="/"><a target="_blank">&nbsp;Github</a></Link>
                            </Typography>
                            <Typography noWrap variant={'body2'} className={classes.typo_proyect}>, and view my Platzi certificates at</Typography>
                            <Typography noWrap variant={'body2'} className={classes.typo_proyect}>
                                <Link href="/"><a target="_blank">&nbsp;Platzi.</a></Link>
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Hidden>

            {/* version mobile */}
            <Hidden mdUp>
                <Grid container spacing={24} className={classes.container}
                direction="column" justify="flex-start" alignItems="center">

                </Grid>
            </Hidden>
        </div>
    )
}

export default Content;
