import React, {useEffect, useState} from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import {Navbar} from '../components/Navbar'
const CustomMap = dynamic(
	() => import('../components/CustomMap').then(mod => mod.CustomMap),
	{
		ssr: false
	}
)
import {Body} from '../components/Body'

export default function Home() {
	const [pos, setPos] = useState({
        latitude: 0,
        longitude: 0,
        zoom: 13
	})
	const [region, setRegion] = useState({
		city: 'Ooga',
		region_name: 'Booga'
	})
    useEffect(() => {
        if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(newPos => {
				setPos(prev => {
					return {
						...prev,
						latitude: newPos.coords.latitude,
						longitude: newPos.coords.longitude
					}
				})
			});
		}
	}, [])
	useEffect(() => {
		// update region here using api call
	}, [pos])
	return (
		<div className="container">
			<Head>
				<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/leaflet.css" />
				<title>CITINFO</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Navbar region={region} />
			<Body>
				<CustomMap pos={pos} />
			</Body>
			
			
			
			
			
			
			<style jsx>{`
			.container {
				padding: 0 0 50px 0;
			}
			`}</style>
			<style jsx global>{`
			html,
			body {
				padding: 0;
				margin: 0;
				font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
					Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
					sans-serif;
			}
			* {
				box-sizing: border-box;
			}
      `}</style>
    </div>
  )
}
