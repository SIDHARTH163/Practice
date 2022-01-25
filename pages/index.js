import Headnews from "./Screens/Headnews";
import Main from "./Screens/Main";
import {useState} from 'react'
import News_row from './Components/News_row'
import News_section from './Components/News_section'
export default function Home() {
  const [showSection , setshowsection]=useState(false)
  const [section , setsection]=useState("")

  const changestate=(section)=>{
    setshowsection(!showSection)
    setsection(section)
  }
  return (
    <>
    {
      showSection?<News_section section={section} changestate={changestate}/>:
<div>
 <News_row title="Sports" changestate={changestate}/>
<News_row title="Cricie" changestate={changestate}/>
<News_row title="scjsnvabsn" changestate={changestate}/>
<News_row title="nbsnxbsabnxv" changestate={changestate}/>
</div>
    }
    </>
  )
}
//  */}