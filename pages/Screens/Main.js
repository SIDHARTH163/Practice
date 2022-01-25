import logo from '../../Components/images/logo.jpg'
import Image from 'next/image'
export default function Main() {
    return (
        <div>
          <div className='p-1 w-full flex lg:flex-row flex-col  '>
              <Image src={logo} alt={logo} className='object-contain' width="300" height="300" />
             <div className=' p-2'>
                 <p className='text-justify text-gray-800 text-xl font-serif hover:underline cursor-pointer my-1'>Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño.</p>
                 <p className='text-justify text-gray-700 text-md font-serif'>Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño.</p>
             </div>
         
          </div>
        </div>
    )
}
