import React from 'react';   
import Header from './Header';
import Footer from './Footer';  
import imageOne from './images/imageone.jpeg'
import imageTwo from './images/imagetwo.jpeg'
import imageThree from './images/imageThree.jpeg'
import imageFour from './images/imageFour.jpeg'
import imageFive from './images/image5.jpeg';
import mainImage from './images/mainImage.jpeg'; 
import cattle2 from './images/Cattle_2.jpeg'

 
 
function Other(props) {
    return ( 
  <div className="flex flex-col min-h-screen overflow-hidden">
    <div className="sticky"> 
      <Header/>
    </div>
    <main className="flex-grow"> 
      <div className="bg-white"> 
        <div className="relative ">
          <div className=" max-w-full mx-auto  ">
            <div className="relative  max-w-full  sm:overflow-hidden">
              <div className="absolute inset-0">
                <img
                  className="h-full w-full object-fill"
                  src={mainImage}
                  alt="People working on laptops"
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
                  <div className="mt-6">
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
                      Semper curabitur ullamcorper posuere nunc sed. Ornare iaculis bibendum malesuada faucibus lacinia
                      porttitor. Pulvinar laoreet sagittis viverra duis. In venenatis sem arcu pretium pharetra at.
                      Lectus viverra dui tellus ornare pharetra.
                    </p> 
                  </div>
                </div> 
              </div> 
            </div>
            </div>
          </div> 
        </div>

        <div className="relative ">
          <div className=" max-w-full h-auto mx-auto  ">
            <div className="relative  max-w-full  sm:overflow-hidden">
              <div className="absolute inset-0">
                <img
                  className="h-full w-full object-fill"
                  src={cattle2}
                  alt="People working on laptops"
                /> 
                <div className="absolute inset-0 bg-gradient-to-r   mix-blend-multiply" />
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
                      src={imageOne}
                      alt="Image one"
                    />
                    <img
                      className=" pt-3 object-cover flex items-center justify-center h-50 w-50
                       rounded-md bg-white bg-opacity-10"
                      src={imageTwo}
                      alt="Image one"
                    />
                    </div>
                    <div className=" pb-3 flex-auto">
                    <img
                      className=" object-cover flex items-center justify-center h-50 w-50
                       rounded-md bg-white bg-opacity-10"
                      src={imageFive}
                      alt="Image one"
                    />
                    <img
                      className="pt-6  object-cover flex items-center justify-center h-50 w-50
                       rounded-md bg-white bg-opacity-10"
                      src={imageThree}
                      alt="Image one"
                    />
                    </div>
                    <div className="flex-auto">
                    <img
                      className="  object-cover items-center justify-center h-50 w-50
                       rounded-md bg-white bg-opacity-10"
                      src={imageFour}
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

export default Other;