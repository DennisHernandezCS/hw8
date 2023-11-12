import Image from 'next/image'
import BrandDen from '../public/BranDen.jpg'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <main className="flex flex-col items-center justify-center h-full bg-gray-900">
        <div className="flex flex-col items-center justify-center bg-gray-900">
        
          <h1 className="text-6xl font-bold text-white">Welcome to my website</h1>      

          <Image 
            className="rounded-full shadow-[5px_5px_4px_3px_#4A5568]"
            src={BrandDen}
            alt="IMG_3508"
            width={500}
            height={500}
          />

          <h2 className="text-2xl font-bold mt-3 text-white">My name is <Link className="text-red-600" href="https://www.linkedin.com/in/dennishernandez2">
                                                                        Dennis Hernandez
                                                                      </Link>
          </h2>
          
          <h6 className="text-2xl font-bold text-white">I am a Full Stack Developer</h6>

          <form className="flex flex-col items-center justify-center mt-4 bg-gray-900"> 
            <input className="bg-gray-800 text-white px-4 py-2 rounded-md mt-1" type="text" placeholder="Host Name" />
            <input className="bg-gray-800 text-white px-4 py-2 rounded-md mt-1" type="text" placeholder="User Name" />
            <input className="bg-gray-800 text-white px-4 py-2 rounded-md mt-1" type="password" placeholder="Password" />
            <Button className="bg-red-600 text-white px-4 py-2 rounded-lg mt-1 btn-" href="/">
              Access The Database
            </Button>
          </form>
        </div>
      </main>
    </>
  )
}
