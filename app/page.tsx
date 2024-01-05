import Image from 'next/image'
import MobileMenu from './components/mobilemenu'
// import Footer from 'components/footer'
import RoundedButtons from './components/round_buttons'
import Testimonials from './components/testmonies'
import ProductsUsers from './components/productUsers'
import NewsComponent from './components/news'
import Logos from './components/logos'
import SupportComponent from './components/support'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      
      <div className='mx-auto my-40 grid lg:max-w-5xl lg:w--full lg:grid-cols-2 gap-4 content-center lg:text-left'>
        <div className=' py-20'>
            <h3 className='mb-3 text-3xl font-semibold'>Welcome to Matic Entreprises.</h3> 
          <div >
          Where innovation meets empowerment! Unleash Africa's potential with our tech. Work smarter, automate, and redefine the future on our trusted platform.
          </div>

          <div className='mt-8'>
                <button
                  type="button"
                  className="inline-flex items-center rounded-md border border-red-700 bg-transparent px-4 py-2 text-sm font-medium  shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 hover:text-white"
                >
                  Get started
                </button>

                <button
                  type="button"
                  className="inline-flex items-center ml-2 rounded-md border border-transparent bg-red-700 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                >
                  Contact Sales
                </button>
          </div>
        </div>
        
        <div className='grid grid-cols-3 gap-4 items-center justify-center'>
        
            <Image
              className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
              src="https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Next.js Logo"
              width={180}
              height={27}
              priority
            />

            <Image
              className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] w-full h-full object-cover"
              src="/picsfloder/2.png"
              alt=""
              width={180}
              height={100}
              priority
            />

            <Image
              className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
              src="/picsfloder/3.png"
              alt="Next.js Logo"
              width={180}
              height={17}
              priority
            />
        </div>
      </div>

      <div className="relative flex place-items-start 
      before:absolute before:h-[300px] before:w-[480px] 
      before:-translate-x-1/2 before:rounded-full 
      before:bg-gradient-radial before:from-white 
      before:to-transparent before:blur-2xl 
      before:content-[''] 
      after:absolute 
      after:-z-20 after:h-[180px] 
      after:w-[240px] after:translate-x-1/3 
      after:bg-gradient-conic after:from-sky-200 
      after:via-blue-200 after:blur-2xl after:content-[''] 
      before:dark:bg-gradient-to-br before:dark:from-transparent 
      before:dark:to-blue-
      700 before:dark:opacity-10 
      after:dark:from-sky-900 after:dark:via-[#EAFF01] 
      after:dark:opacity-40 before:lg:h-[360px] z-[-1]
      ">
        
        <div>
          {/* <h3>Sell anywhere easily, quickly, and seamlessly.</h3>
           Try the new Square POS demo */}
        </div>
      </div>

      <div className="my-32 grid gap-4 sm:grid-cols-3  lg:max-w-7xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left ">
        
        
        <div className=' items-center m-4 '>
      
          <video className='' src="/videos/v1.mp4"  >
          
          </video>

          <div className='mt-10 text-xl '>
          Empower Africa with digital cutting-edge tech solutions.
          </div>
        </div>



        <div className=' m-4'>
             <video src="/videos/v2.mp4"></video>
             <div className='mt-10 text-xl '>
            Our Innovations propels Africa forward, fostering empowerment.
          </div>
        </div> 
        
        <div  className=' m-4'>
            <video src="/videos/v3.mp4"></video>
            <div className='mt-10 text-xl '>
            Tech-driven empowerment: Africa rises through innovation.
          </div>
            

        </div>
        


      </div>
    
      <div className='container mx-auto  mt-20 max-w-7xl my-20'>
          <div className='grid grid-cols-1 sm:grid-cols-2 items-center bg-white rounded-xl  '>
          <div className='mx-auto p-8 text-xl'> 
         <div>
          Matic Entreprises, founded in 2013, is a pioneering technology firm dedicated to designing and developing 
          cutting-edge computer products. Our mission is to provide high-performance desktop and laptop solutions 
          that meet the diverse needs of our customers and development partners.
         </div>
          <button type="button"
                  className="inline-flex items-center rounded-md border border-red-700 bg-transparent px-4 py-2 text-sm font-medium  shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 hover:text-white"
                >
                  Read More
                </button>

          </div>
         
          {/* <div className='' ></div> */}
          <Image
            className=" h-full w-full object-cover -mr-40 rounded-xl"
            src="/picsfloder/p3.png"
            alt=""
            width={400}
            height={400}
            priority
          />
        </div>
      </div>
      



      <div className="bg-white  p-15 lg:py-14 m-22 w-full ">
              
              <div className=''>
                    <div className='flex flex-col items-center justisfy-center'>
                      
                      <div className='flex flex-col content-center items-center mb-6'>
                        <div className='font-bold text-5xl pb-10'>
                           Enigma X
                        </div>
                        <div className='text-lg font-light'>Titanium. So Stron. So light. So Pro</div>
                        <div> 
                        <a className='px-3 text-red-700 font-medium hover:text-blue-300 ' href="">Learn More </a>
                        <a className='px-3 text-red-700 font-medium hover:text-blue-300 ' href="">Buy Now</a>
                        </div>
                      </div>

                      <Image
                        className="relative mt-15 pt-10 dark:drop-shadow-[0_0_0.3rem_#ffffff70] 
                        dark:invert h-full w-auto"
                        src="/picsfloder/22.png"
                        alt="Next.js Logo"
                        width={400}
                        height={400}
                        priority
                      />
                    </div>  
              </div>
               
      </div>


      <div className='Container mx-auto px-24 sm:px-8 bg-black min-w-screen w-full h-full  p-10 '>
        <div className='flex  flex-col items-center justify-between '>
          <h2 className='font-black text-7xl text-white p-5  mt-5'>
            CONTINUUM  IS  HERE
          </h2>

          <div className='flex items-center justify-center rounded-full  bg-white text-md text-black font-light text-black px-4 py-3 h-26 w-40 my-10 '> Check it out </div>
          <div>
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] 
            dark:invert h-500 w-500"
            src="/picsfloder/ip.png"
            alt="Next.js Logo"
            width={500}
            height={500}
            priority
          />

          
          </div>
        </div>
        {/* <ProductsUsers></ProductsUsers> */}
      </div>


      <div className='Container  bg-black min-w-screen w-full h-full '>


         <ProductsUsers></ProductsUsers>
      </div>

    <div className='container mx-auto px-4 sm:px-6 lg:px-8 my-10 max-w-full min-h-screen bg-gray'>
      <div className='p-20'>
          <div className='text-5xl text-black font-semibold mb-14 ml-5'> 
         
            <div>
              Hear from
            </div>

            <div>
              Matic.
            </div> 
            
          </div >
         
         <NewsComponent />
         
      </div>
    </div>
    
  {/* Get support */}
  <div className="bg-black  p-2 lg:py-4  w-full min-h-screen "> 
    <SupportComponent />

  </div>


  <div className='py-30 mb-40'>
      <Testimonials></Testimonials>
  </div>
    

   <div className='container  mx-auto px-4 sm:px-6 lg:px-8 my-40  mb-30 max-w-5xl'>
        

      <div className='relative '>
        <div className='flex flex-col items-center  mx-auto'>
          <h2 className='flex items-center justify-center font-black text-6xl text-center '>
            JOIN THE 1000+ USING MATIC PRODUCTS
          </h2> 

          <a href="">
              <div className='bg-black flex items-center justify-center rounded-full text-white font-bold p-2 mt-12 w-32 '>
                  Get Started
              </div> 
                
          </a> 
        </div>
      </div>
        
  </div>

  <div className='py-30 mb-40'>
      <Testimonials></Testimonials>
  </div>
    

     
    </main>
  )
}
