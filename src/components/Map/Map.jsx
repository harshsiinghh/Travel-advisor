import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper , Typography , useMediaQuery  } from '@material-ui/core';
import  LocationOnOutlinedIcon  from '@material-ui/icons/LocationOnOutlined';
import { Rating } from '@material-ui/lab';

import useStyles from './style'

const Map =({ setCoordinates , setBounds , coordinates , places ,setChildClick})=>{
    const classes=useStyles();
    const isDesktop=useMediaQuery('(min-width:600px)');


    // const coordinates={ lat: 0 , lng : 0};

    return( 
        <div className={classes.mapContainer}>
            <GoogleMapReact
                bootstrapURLKeys={{key:'AIzaSyCes-Ey2wVGOpqAm0km189k0wPS7VRQeQw'}}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={14}
                margin={[50,50,50,50]}
                option={ '' }
                onChange={ (e)=>{
                    setCoordinates({lat:e.center.lat , lng:e.center.lng});
                    setBounds({ne:e.marginBounds.ne , sw:e.marginBounds.sw});
                }}
                onChildClick={(child)=>setChildClick(child)}
                >

                    {places?.map((place,i)=>(
                            <div
                            className={classes.markerContainer}
                            lat={Number(place.latitude)}
                            lng={Number(place.longitude)}
                            key={i}
                            >
                                {
                                    !isDesktop ? ( 
                                    <LocationOnOutlinedIcon color='primary' fontSize='large'/>
                                    ): (
                                        <Paper elevation={3} className={classes.paper}>
                                                <Typography className={classes.typography} variant="subtitle3">
                                                    {place.name}
                                                </Typography>
                                                <img className={classes.pointer} 
                                                src={place.photo? place.photo.images.large.url: 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'} 
                                                alt={place.name}/>
                                                <Rating size="small" value={Number(place.rating)}readOnly/>
                                        </Paper>
                                    )
                                }

                            </div>
                    ))}
                    
            </GoogleMapReact>
            
        </div>
    )
}

export default Map