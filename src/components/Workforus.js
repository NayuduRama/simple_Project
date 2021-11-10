import React from 'react';
import Header from './Header';
import Footer from './Footer';
import organicBeef from './images/OrganicBeef.jpeg';

function Workforus(props) {
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
                    Work for us
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
                    <h1 className="text-5xl mt-12 text-right  font-extrabold tracking-tight text-white">
                      Looking for a job in the  <br/> livestock industry?  
                    </h1> 
                  </div>
                </div> 
              </div>
              <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
                <div> 
                  <div className="text-white"> 
                    <p className="text-base">
                        Bunderra Cattle Co is always looking for the right candidates to fill a range of roles from station manager to machine operators. <br/>
                        We work hard to foster a sense of community in our workforce and welcome a diverse and varied range of team members. We're committed to continued education and training and offer ongoing opportunities for career progression.
                    </p>
                    <br/> 
                    <h3 className='text-2xl'>Applay now</h3>
                    <br/> 
                    <p>send your resume to hte email below <br/> admin@bunderracattleco.com.au</p>
                  </div>
                </div> 
              </div> 
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

export default Workforus;