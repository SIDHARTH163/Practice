import Layouts from "../Components/layout";

import 'tailwindcss/tailwind.css'
import '../styles/globals.css'


export default function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Layouts>
      <Component {...pageProps} />
      </Layouts>
      
    </div>
  )
}
