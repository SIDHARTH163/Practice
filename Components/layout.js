
import Header from './Header'
import Head from 'next/head'

export default function Layouts({ children }) {
  
  return (
    <>
<Head>
  <title>SportsMadness247</title>
  

   
   
</Head>
 
      <Header  />
   
     
      <main>{children}</main>
      
    </>
  )
}