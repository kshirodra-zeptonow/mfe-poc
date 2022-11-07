import React from "react";
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import dynamic from 'next/dynamic'


const ClientApp = dynamic(() => import('reactApp/App'), {
  ssr: false,
})

// const ServerApp = React.lazy( () => import('reactApp/App'));


const Home = () => {
  const clickMe = (data) => {
    alert(data)
  }
  return (
    <div className={styles.container}>
     {/* <ServerApp /> */}
     <ClientApp data={"vishaldsd"} onClickHandler={clickMe}/>

     <button onClick={() => clickMe("data from host app")}>host click</button>
     <h1>Next App</h1>
    </div>
  )
}


export default Home;
