import React from 'react';   

import Header from './Header';
import Footer from './Footer';   
import organicBeef from './images/OrganicBeef.jpeg';
import certificateone from './images/location1.jpeg'; 
import organicCertification from './images/OrganicCertification.jpeg'; 

 


const certificates = [
  {
    title: 'Organic Certified',
    description: `Not all beef is created equally, and we believe that organic beef tastes better. There are a number of reasons for this. Organic livestock production is about good practises, like choosing quality breeding stock, looking after our country long-term and natural nutrition for our animals. Our cattle move together through their lives as a mob, grazing freely on bio-diverse pastures with ample shade, low est numbers, and access to some of the purest spring water on the planet. We never use antibiotics and sythetic hormones. We try to intervene in their lives as little as possible and when we do, we use low-stress stock handling techiques to ensure our impacts is minimal. The foundation of our business is about exceptional animal practices. We know that produces the highest-quality beef and for the past decade, has also enaled us to obtain organic certification. `, 
    imageUrl: organicCertification, 
  },
  {
    title: 'Quality Assurance',
    description: `We work hard to produce the highest-quality beef by caring for our livestock, the land and the environment. But we don't expect you to jsut take our word for it.  We engage independent consultants to help refine our internal processes and support us through annual auditing processes.  Maintaining trust with the people who eat our beef isn't something we leave to chance. We undertake a number of quality assurance programs to ensure that our meat is ethically produced and a premium quality. Our soil, water and grass is tested for contaminants, along with samples of our meat during processing.`, 
    imageUrl: certificateone,  
  }  
] 


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
                  src={organicBeef}
                  alt="Main image"
                /> 
              </div>
              <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                 
                <h1 className="text-center block  text-white text-4xl font-extrabold  sm:text-5xl lg:text-6xl"> 
                    Organic Certified Beef 
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
                  <div>
                    <h1 className="text-5xl  text-right  font-extrabold tracking-tight text-white">
                      Organic and sustainable <br/> are more than just buzz <br/> words to us. 
                    </h1> 
                  </div>
                </div> 
              </div>
              <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
                <div> 
                  <div className="mt-12"> 
                    <p className="mt-8 text-base text-white">
                       The trust the consumers of our beef place in us is important to us. That's why we have put in place a seris of certifications and quality assurance checks to ensure our beef maintains the highest quality and lives up to the promise. 
                    </p> 
                  </div>
                </div> 
              </div> 
            </div>
            </div>
          </div> 
        </div>
        
    <div className="bg-gray-200">
      <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-12 lg:grid lg:grid-cols-2 lg:gap-8 lg:space-y-0">
           
          <div className="lg:col-span-2">
            <ul 
              className="space-y-12 sm:divide-y sm:divide-gray-200 sm:space-y-0 sm:-mt-8 lg:gap-x-8 lg:space-y-0"
            >
              {certificates.map((certificate) => (
                <li key={certificate.title} className="sm:py-8">
                  <div className="space-y-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-6 sm:space-y-0">
                    <div className="aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4">
                      <img className="object-cover shadow-lg rounded-lg" src={certificate.imageUrl} alt="" />
                    </div>
                    <div className="sm:col-span-2">
                      <div className="space-y-4">
                        <div className="text-gray-400 leading-6 font-medium space-y-1">
                          <h1 className='text-6xl'>{certificate.title}</h1>
                          <p>{certificate.description}</p>
                        </div>  
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
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