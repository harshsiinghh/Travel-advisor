import React , { useState  ,useEffect , createRef} from 'react';
import { CircularProgress , Grid, Typography , InputLabel , MenuItem , FormControl , Select } from '@material-ui/core';

import useStyles from './style';
import PlaceDetails from "../PlaceDetails/PlaceDetails"


const List =({places ,childClick  , loading , type, setType, rating , setRating}  )=>{
    const classes=useStyles();

    const[elRef,setElRef]=useState([]);

    useEffect(()=>{
        const refs=Array(places?.length).fill().map((_,i)=> elRef[i] || createRef());
        setElRef(refs);
    },[places])

    return( 
        <div className={classes.container}>
            <Typography variant="h4">Restraurants, Hotels & Attractions Around You </Typography>
            {loading? (
                <div className={classes.loading}>
                    <CircularProgress size="5rem"/>
                </div>
            ):(
                <>
            <FormControl className={classes.formControl}>
                <InputLabel>Type..</InputLabel>
                <Select value={type} onChange={(e)=>setType(e.target.value)}>
                    <MenuItem value="restaurants">Restaurants</MenuItem>
                    <MenuItem value="hotels">Hotels</MenuItem>
                    <MenuItem value="attractions">Attractionss</MenuItem>
                </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel>Rating</InputLabel>
                <Select value={rating} onChange={(e)=>setRating(e.target.value)}>
                    <MenuItem value="0">All</MenuItem>
                    <MenuItem value="3">Abolve 3.0</MenuItem>
                    <MenuItem value="4">Above 4.0</MenuItem>
                    <MenuItem value="4.5">Above 4.5</MenuItem>
                </Select>
            </FormControl>

            <Grid container spacing={3} className={classes.list}>
                {places?.map((place,i) => (
                    <Grid item key={i} xs={12}>
                        <PlaceDetails place={place}
                        selected={Number(childClick)===i}
                        refProp={elRef[i]}
                        />
                    </Grid>
                ))}
            </Grid>
            </>
            )}
        </div>
    )
}

export default List