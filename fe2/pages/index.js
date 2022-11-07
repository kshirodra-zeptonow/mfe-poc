import React from "react";
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import dynamic from 'next/dynamic'


const ClientApp = dynamic(() => import('reactApp/App'), {
  ssr: false,
})

// const ServerApp = React.lazy( () => import('reactApp/App'));


export default function Home() {
  return (
    <div className={styles.container}>
     {/* <ServerApp /> */}
     <ClientApp data={"vishaldsd"} />
     <h1>Next App</h1>
    </div>
  )
}
