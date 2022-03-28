import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import dynamic from 'next/dynamic'
const Content = dynamic(() => import('../Components/Content'))

export default function Home(props) {
  return (
    <div className={styles.container}>
      <Content data={props.data}/>
    </div>
  )
}

export const getStaticProps = async () => {
  const data = await fetch(
    "https://jsonplaceholder.typicode.com/todos?_limit=50"
  ).then(response => response.json())

  return {
    props: {data}
  }
}
