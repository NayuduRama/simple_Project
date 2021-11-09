import React from 'react';   
import Header from './Header';
import Footer from './Footer';  
import kid from './images/Kid.jpeg';
import family from './images/family.jpeg';
import cow from './images/cow.jpeg';
import land from './images/land.jpeg';
import workforus from './images/workforus.jpeg';
import factory from './images/factory.jpeg';
import mainImg from './images/mainImg.jpeg';
 


function OrganicCertifiedBeef(props) {
    return (
        
        
  <div className="flex flex-col min-h-screen overflow-hidden">
    <div>
      <Header />
    </div>
    <main className="flex-grow"> 
      <div className="bg-white"> 
        <div className="relative ">
          <div className=" max-w-full mx-auto  ">
            <div className="relative  max-w-full  sm:overflow-hidden">
              <div className="absolute inset-0">
                <img
                  className="h-full w-full object-cover"
                  src={mainImg}
                  alt="Main image"
                /> 
                <div className="absolute inset-0 bg-gradient-to-r   mix-blend-multiply" />
              </div>
              <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                  <span className="block text-white">this is bunderra</span> 
                </h1>  
              </div>
            </div>
          </div>
        </div> 
        <div className="relative overflow-hidden"> 
          <div className="relative">
            <div className='bg-gray-400'>
            <div className="lg:mx-auto lg:max-w-6xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-5">
              <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0 mt-5 ">
                <div> 
                  <div className="mt-12">
                    <h1 className="text-3xl  text-right  font-extrabold tracking-tight text-white">
                      Free-range beef from the pure, grassy heart of Australia. 
                    </h1> 
                  </div>
                </div> 
              </div>
              <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
                <div> 
                  <div className="mt-6"> 
                    <p className="mt-4 text-lg text-white">
                       Bunderra, or 'Among the Hills' is an organic beef operation with over half a milllion hectares of some of the best grazing country in Queensland and the Nothern Territory. 
                       <br/>
                       Our Brahman-Cross herd originated from the foothills of the Carnavon Ranges in Queesnsland's Central Highlands, and our cattle roam on those same bio-diverse pastures, free of chemicals and stress. They have an harmounious journey from paddock to plate, and we believe that's why our beef tastes better. 
                    </p> 
                  </div>
                </div> 
              </div> 
            </div>
            </div>
          </div> 
        </div>
        <div className="relative"> 
          <div className="max-w-full max-h-full mx-auto ">
            <div className="relative shadow-xl  sm:overflow-hidden">
              <div className="absolute inset-0">
                <img
                  className="h-full w-full object-cover"
                  src={kid}
                  alt="Cattle image"
                /> 
              </div>
              <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8 object-right">
                <h2 className="absolute right-20 text-left text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                  <span className="block text-white pr-2">Australian  owned <br/>family run</span> 
                </h2>  
              </div>
            </div>
          </div>
        </div> 

        <div className="">
          <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:pt-24 lg:px-8">
             
            <div className="mt-12 flex items-center flex-cols-1 gap-x-3 gap-y-3 sm:flex-cols-2 lg:mt-16  ">
              
                  <div className='pt-6 flex-auto'>
                    <img
                      className="object-cover flex items-center justify-center h-50 w-50
                       rounded-md bg-white bg-opacity-10"
                      src={cow}
                      alt="Image one"
                    />
                    <img
                      className=" pt-3 object-cover flex items-center justify-center h-50 w-50
                       rounded-md bg-white bg-opacity-10"
                      src={workforus}
                      alt="Image one"
                    />
                    </div>
                    <div className=" pb-3 flex-auto">
                    <img
                      className=" object-cover flex items-center justify-center h-50 w-50
                       rounded-md bg-white bg-opacity-10"
                      src={factory}
                      alt="Image one"
                    />
                    <img
                      className="pt-6  object-cover flex items-center justify-center h-50 w-50
                       rounded-md bg-white bg-opacity-10"
                      src={family}
                      alt="Image one"
                    />
                    </div>
                    <div className="flex-auto">
                    <img
                      className="  object-cover items-center justify-center h-100 w-50
                       rounded-md bg-white bg-opacity-10"
                      src={land}
                      alt="Image one"
                    /> 
                    </div> 
            </div>
          </div>
        </div> 
    </div> 
    </main> 
      <Footer />
    </div>  
    );
}

export default OrganicCertifiedBeef;