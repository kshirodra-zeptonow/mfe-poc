import React from "react";
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import dynamic from 'next/dynamic'

const Home = () => {
  const clickMe = (data) => {
    alert(data)
  }
  return (
    <div className={styles.container}>
     {/* <ServerApp /> */}
     <button onClick={() => clickMe("data from host app")}>host click</button>
     <h1>Next App - 1 ***###*</h1>
    </div>
  )
}


export default Home;
