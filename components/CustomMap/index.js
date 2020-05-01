import React, {useState, useEffect} from 'react'
import {Map, TileLayer, Marker, Popup} from 'react-leaflet'

import classes from './style.module.scss'

export const CustomMap = ({pos}) => {
    const position = [pos.latitude, pos.longitude]
    return (
        <>
        <Map className={classes.map} center={position} zoom={pos.zoom}>
            <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </Map>
        </>
    )
}
