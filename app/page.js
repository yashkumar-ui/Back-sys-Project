import React from 'react'
import Image from 'next/image'
import Group35923 from '@/public/assets/Group 35923.svg'
import Group35896 from '@/public/assets/Group 35896.png'
import Star1 from '@/public/assets/Star 1.svg';
import Frame1 from '@/public/assets/Frame 1.svg';
import Frame2 from '@/public/assets/iPhone-13-Pro-Front (1).svg';
import Frame3 from '@/public/assets/iPhone-13-Pro-Front.svg';
import Section1 from '@/public/assets/Group 35933.svg'
import Section1Bg1 from '@/public/assets/Group 35897.png';
import Section1Bg2 from '@/public/assets/Group 35930.png';
import Section2 from '@/public/assets/Group 35935.svg';
import Section2Bg1 from '@/public/assets/Group 35899.svg';
import Section2Bg2 from '@/public/assets/Group 35931.png';
import Section3 from '@/public/assets/Group.svg';
import Section3bg1 from '@/public/assets/Group 35898.svg';
import Section4 from '@/public/assets/Group 1000002332.svg';
import Section4bg1 from '@/public/assets/Group 35917.svg';
import Section4bg2 from '@/public/assets/Group 1000002356.png';
import Cube1 from '@/public/assets/cube-02.svg';
import Cube2 from '@/public/assets/cube-04.svg';
import Cube3 from '@/public/assets/star-05.svg';
import star3 from '@/public/assets/Star 3.svg';
import Ellipse2 from '@/public/assets/Ellipse 2.png';
import { HiArrowLongRight } from "react-icons/hi2";
import { FaPlay } from 'react-icons/fa';


const page = () => {
  return (
    <div className='relative w-full h-full p-0 m-0'>
        {/* Hero-Section  */}
        <section className='relative p-0 m-0 '>
          {/* <div className='w-full '> */}
            <div className='w-10/12 px-3 h-full mx-auto pt-[4rem] flex flex-col gap-y-5 '>
                <h1 className='font-bold text-6xl max-w-[60%]'>Make The Best Finanical Decisions</h1>
                <p className='font-light  max-w-[45%] capitalize '>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
                <div className='flex gap-x-[3rem] max-w-[60%]'>
                   <button className='flex w-[11rem] h-[60px] bg-[#000000] justify-center gap-2 text-white items-center' >Get Started <HiArrowLongRight/> </button>
                   <button className='flex text-base font-[400] leading-[1.2] items-center gap-x-3'> <div className='border-[1.3px] border-black rounded-full p-[0.4rem] flex items-center justify-center'> <FaPlay size={12} /> </div>  Watch Video</button>
                </div>
                <div>
                  <Image src={Group35923} loading='lazy' className='w-[470px] h-[390px]  select-none'/>
                  <Image/>
                </div>

                <Image src={Group35896} loading='lazy' className='absolute -z-[1] -top-[5rem] left-[9%]  '/>

            </div>

            <Image src={star3} loading='lazy' className='w-[44px] h-[44px] absolute top-[3rem] left-[2rem]' />
            
            <Image src={Frame2} loading='lazy' className=' -z-[16] absolute w-[540px] right-11 top-[1%] h-[700px]' />
            <Image src={Frame3} loading='lazy' className=' -z-[12] absolute w-[540px] right-[10.8%] -top-[10%] h-[700px]' />
            <Image src={Frame1} loading='lazy' className='absolute w-[580px] h-[720px] -z-[20] top-[6%] right-3'/>
            <Image src={Ellipse2} loading='lazy' className='absolute -z-[22] right-[3%] bottom-[8%] '/>

          {/* </div> */}

        </section>

        {/* Section- 1  */}
        <section className='relative p-0 m-0 w-full h-full'>
             <Image src={star3} className='absolute z-[3] left-3 top-[5%]'/>
             <div className='max-w-[1200px] relative flex gap-x-[3rem] justify-center items-center  mx-auto'>    
               <div className='w-[46%] relative'>
                  <Image src={Section1} loading='lazy' className='w-full h-full scale-125 '/>
                  <Image src={Section1Bg2} loading='lazy' className='absolute -z-[3] top-1 left-0 '/>
               </div>
               

                <div className='w-[54%] flex flex-col my-auto items-start gap-y-7'>
                    <div className='w-[100%]'>
                       <h4 className='font-[400] tracking-[.23em] uppercase text-[#FF5555]'>Features</h4>
                       <h2 className=' text-5xl tracking-wide leading-[1.2] py-1 font-bold'>Uifry Premium</h2>
                    </div>
                    <div className='w-[80%] capitalize tracking-wide flex flex-col gap-y-3'>
                      <h3 className='font-semibold text-[#000000] flex gap-x-2 '> <Image size={24} src={Cube3}/> Budegetting Intervals</h3>
                      <p className='font-[500] text-[#808080]'>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
                    </div>
                    <div className='w-[80%] capitalize tracking-wide flex flex-col gap-y-3'>
                      <h3 className='font-semibold text-[#000000] flex gap-x-2 '> <Image src={Cube1}/> Budegetting Intervals</h3>
                      <p className='font-[500] text-[#808080]'>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
                    </div>
                    <div className='w-[80%] capitalize tracking-wide flex flex-col gap-y-3'>
                       <h3 className='font-semibold text-[#000000] flex gap-x-2'> <Image src={Cube2}/> Budegetting Intervals</h3>
                       <p className='font-[500] text-[#808080]'>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
                    </div>
                    
                </div>

             </div>

             <Image src={Section1Bg1} loading='lazy' className='absolute -z-[2] right-0 top-4'/>
             
             
        </section>

        {/* Section - 2 */}
        <section className='relative p-0 m-0'>
            <div className='max-w-[1200px] mx-auto flex justify-center items-center gap-2'>
                <div className='max-w-[40%] flex flex-col items-start gap-y-3'>
                   <div className='w-full pb-2 '>
                       <h4 className='text-[#ff5555] font-regular capitalize tracking-[.25em]'>ADVANTAGES</h4>
                       <h2 className='text-[#000000] text-5xl font-bold py-2'>Why Choose Uifry?</h2>
                   </div>
                   <div className='w-full flex items-center gap-x-4 py-3'>
                      <Image src={Section2Bg1} loading='lazy' className='w-[42px] h-[42px]'/>
                      <h3 className='text-2xl font-[600]'> Clever Notifications</h3>
                   </div>

                   <p className='w-full capitalize font-[500] leading-[1.7] text-[#808080]'>Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.</p>

                </div>
                <div className='max-w-[60%] relative'>
                  <Image src={Section2} loading='lazy'/>
                  <Image src={Section2Bg2} loading='lazy' className='absolute  right-[15%] bottom-[10%] scale-125 -z-[3]'/>
                </div>
            </div>

            <Image src={Star1} loading='lazy' className='w-[64px] absolute h-[64px] z-[1]  right-7 top-[4rem]' />
        </section>

        {/* Section - 3 */}
        <section className='relative p-0 m-0'>
           <div className='max-w-[1200px] mx-auto flex justify-center items-center gap-x-[3rem]'>
              <div className='w-[46%] relative '>
                 <Image src={Section1} loading='lazy' className='w-full h-full scale-125'/>
                 <Image src={Section3} loading='lazy' className=' z-[2] absolute top-[23%] left-[32%] w-[240px]'/>
                 <Image src={Section1Bg2} loading='lazy' className='-z-[2] scale-110 absolute bottom-[3%] right-0'/>
              </div>
              <div className='w-[54%] flex flex-col items-start gap-y-7 '>
                 <div className='w-full flex items-center gap-x-[1rem]'>
                    <Image src={Section3bg1} className='w-[42px] h-[42px]'/>
                    <h3 className='font-[600] text-2xl'>Fully Customizable</h3>
                 </div>
                 <p className='max-w-[80%] capitalize font-[500] leading-[1.7] text-[#808080]' >Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.</p>
              </div>
           </div>

           <Image src={star3} className='absolute -top-5 left-[47%] translate-x-[-50%]'/>

           <Image src={Star1} className='absolute right-[20%] bottom-0 w-[50px] h-[50px]'/>

        </section>

        {/* Section - 4 */}
        <section className='p-0 m-0 relative'>
            
               <div className='w-full text-center mx-auto pt-[4rem]'>
                  <h5 className='text-[#000000] font-[400] uppercase tracking-[.20em] text-lg'>Testimonal</h5>
                  <h3 className='text-[#000000] font-bold py-2 text-5xl'>What Our Users <br/> Say AboutUs? </h3>
               </div>
               {/* Second-part */}
               <div className='max-w-[1200px] mx-auto flex items-center justify-center gap-x-[1rem]'>
                  <div className='w-[60%] relative'>
                     <Image src={Section4}/>
                     <Image src={Section4bg2} className='absolute top-[20%] left-[3%] scale-125 -z-[2]'/>
                  </div>
                  <div className='w-[40%] flex flex-col items-start gap-y-5'>
                     <h3 className='text-[#000000] md:w-[80%] leading-[1.2] text-2xl font-[600]'>The Best Finanical Accounting App Ever!</h3>
                     <p className='w-full md:w-[80%] capitalize font-[500] leading-[1.6] text-[#808080]'>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.”</p>
                     <div> <Image src={Section4bg1}/> </div>
                     <h4 className='font-bold text-md'>Nick Jonas</h4>
                  </div>
               </div>

               <Image src={star3} className='absolute left-3 bottom-[5%]'/>
            
        </section>

        {/* Section - 5 */}
        <section className='p-0 pt-4 m-0'>
           <div className='max-w-[1200px]  mx-auto flex flex-col gap-y-4'>
              <div className='w-11/12 mx-auto relative '>
                 <h6 className='text-[#ff5555] font-regular capitalize tracking-[.25em] ' >FAQ</h6>
                 <h3 className='text-[#000000] font-bold text-5xl py-2 w-full md:w-[40%]'>Frequently Asked Questions</h3>
                 <Image src={Star1} className='absolute top-5 translate-x-[-50%] left-[50%]'/>
              </div>
              {/* Grid uses */}
              <div className='py-3 w-11/12 mx-auto  grid grid-cols-2 gap-x-[4rem] gap-4'>
                 <div className='w-full p-[2rem] flex flex-col gap-y-2 rounded-md text-white bg-[#ff5555]'>
                    <h4 className=' md:w-[90%] capitalize font-[600] text-2xl'>the best financial accounting app ever!</h4>
                    <p className='font-[400] capitalize leading-[1.5] gridSpace '>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</p>
                 </div>

                 <div className='w-full p-[2rem] flex flex-col gap-y-2 rounded-md text-[#000000] '>
                    <h4 className=' md:w-[90%] capitalize font-[600] text-2xl'>the best financial accounting app ever!</h4>
                    <p className='font-[400] capitalize leading-[1.5] gridSpace '>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</p>
                 </div>

                 <div className='w-full p-[2rem] flex flex-col gap-y-2 rounded-md text-[#000000]'>
                    <h4 className=' md:w-[90%] capitalize font-[600] text-2xl'>the best financial accounting app ever!</h4>
                    <p className='font-[400] capitalize leading-[1.5] gridSpace '>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</p>
                 </div>

                 <div className='w-full p-[2rem] flex flex-col gap-y-2 rounded-md text-white bg-[#ff5555]'>
                    <h4 className=' md:w-[90%] capitalize font-[600] text-2xl'>the best financial accounting app ever!</h4>
                    <p className='font-[400] capitalize leading-[1.5] gridSpace '>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</p>
                 </div>

                 <div className='w-full p-[2rem] flex flex-col gap-y-2 rounded-md text-white bg-[#ff5555]'>
                    <h4 className=' md:w-[90%] capitalize font-[600] text-2xl'>the best financial accounting app ever!</h4>
                    <p className='font-[400] capitalize leading-[1.5] gridSpace '>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</p>
                 </div>

                 <div className='w-full p-[2rem] flex flex-col gap-y-2 rounded-md text-[#000000]'>
                    <h4 className=' md:w-[90%] capitalize font-[600] text-2xl'>the best financial accounting app ever!</h4>
                    <p className='font-[400] capitalize leading-[1.5] gridSpace '>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</p>
                 </div>

              </div>
           </div>
            
        </section>

        {/* Section - 6 */}
        <section className='p-0 m-0 relative'>
            <div className='max-w-[1200px] mx-auto'>
               
            </div>
            
        </section>
    </div>
  )
}

export default page