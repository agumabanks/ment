import Image from 'next/image'
export default function ProductsUsers(){
    return (
        

        <div className=''>
            <div className="bg-black ">
          
                <div className='flex items-center justify-center min-h-screen    '>
                    
                <div className='grid grid-cols-1 lg:grid-cols-2 items-center max-w-5xl'>
                    <div className='rounded w-full h-auto'>
                        <Image
                        className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] 
                        dark:invert h-400 w-400"
                        src="/ip.png"
                        alt=""
                        width={400}
                        height={400}
                        priority
                        />
                    </div>

                    <div> 
                        <div className='flex items-start justify-between '>
                        <h2  className='font-black text-7xl text-white dark:text-white'>AND SEND ACROSS  THE GLOBE TOO</h2></div>
                        
                        <div className='mt-8  text-lg text-white dark:text-white'> Whether it’s Morocco or Mexico, you can transfer there — really, really fast. Oh, and the rates are as good as you’ve heard.</div> 
                        
                        <div className='flex items-center justify-center rounded-full bg-white text-black p-4 mt-8 w-40  h-10'>
                            See how to send 
                        </div>
                    </div>

                    </div>   
                
                </div>

                <div className='flex flex-col items-center justify-center'>
                    <div className='flex flex-col items-center justify-center'>
                        <h2 className='text-2xl font-black text-white'> CHECK OUT THAT CARD </h2>
                        <div>Get the one that matches your vibe.</div>
                        <div>Some cards are only available on subscription plans. Fees may apply.</div>


                    </div>

                    <Image
                        className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]   w-full"
                        src="/picsfloder/akangotab.png"//public\picsfloder\akangotab.png
                        alt="Next.js Logo"
                        width={400}
                        height={400}
                        priority
                        />
                </div>

          </div>
        
        </div>

        
    )
}