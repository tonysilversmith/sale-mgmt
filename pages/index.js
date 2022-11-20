import styled from '@emotion/styled'
import { Button } from '@mui/material'
import { Box } from '@mui/system'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
import styles from '../styles/Home.module.css'
import Purchase from './purchase/index'

export default function Home() {
  const router = useRouter()
  React.useEffect(() => {
    //if cookie set
    document.cookie ? alert("You are Logged in ") : router.push("/login");
    console.log(document.cookie)
    return () => {

    }
  },)

  return (
    <div className={styles.container}>
      <Head>
        <title>Sale Mgmt</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="#">This Programm</a>
        </h1>
        <div className={styles.grid}>
          <Button variant="contained" size="large" color="error" onClick={() => { router.push('/sale') }}>Sell</Button>
          <Button variant="contained" size="large" color="success" onClick={() => { router.push('/purchase') }}>Purchase</Button>
          <Button variant="contained" size="large" onClick={() => { router.push('/lookup') }}>Look up</Button>
          <Button variant="contained" size="large" onClick={() => { router.push('/login') }}>Log In</Button>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '} Tony Silversmith
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="logo" width={72} height={16} />
          </span>
        </a>
      </footer>

    </div>
  )
}
