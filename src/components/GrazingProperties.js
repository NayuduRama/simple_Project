import React from 'react';
import Header from './Header';
import Footer from './Footer';   
import mainImg from './images/mainImg.jpeg';
import bpng from './images/Bpng.png';
import land from './images/land.jpeg'; 
import locationone from './images/location1.jpeg';
import locationtwo from './images/location2.jpeg';
import locationthree from './images/location3.jpeg';
import locationfour from './images/location4.jpeg';





const locations = [
  {
    name: 'Wash pool',
    role: 'Bauhinia QLD 4718', 
    imageUrl: locationfour,
    bio:
      `High-value buffel grass and a wide variety of native grasses. Home to Bunderras's headquaters and where the operation was established in 1969`,
    cattle: ['cattle1', 'cattle2', 'cattle3'], 
  },
  {
    name: 'Shauna Hills',
    role: 'Humbolt QLD 4702', 
    imageUrl: locationone,
    bio:
      `High-value buffel grass and a wide variety of native grasses. Home to Bunderras's headquaters and where the operation was established in 1969`,
    cattle: ['cattle1', 'cattle2', 'cattle3'], 
  },
  {
    name: 'Brooklee',
    role: 'Rolleston QLD 4702', 
    imageUrl: locationtwo,
    bio:
      `High-value buffel grass and a wide variety of native grasses. Home to Bunderras's headquaters and where the operation was established in 1969`,
    cattle: [1, '2', '3'], 
  }, 
  {
    name: 'Bandana',
    role: 'Rewan QLD 4702', 
    imageUrl: locationthree,
    bio:
      `High-value buffel grass and a wide variety of native grasses. Home to Bunderras's headquaters and where the operation was established in 1969`,
    cattle: [1, '2', '3'], 
  }, 
] 

function GrazingProperties(props) {
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
                <img
                  className="h-auto w-50 object-cover"
                  src={bpng}
                  alt="Main image"
                /> 
                <h1 className="text-center block  text-white text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-9xl">
                  {/* <span className="block text-white"> */}
                   grazaing properties
                    {/* </span>  */}
                </h1>  
              </div>
            </div>
          </div>
        </div> 
        <div className="relative overflow-hidden"> 
          <div className="relative">
            <div className='bg-gray-400'>
            <div className="py-12 lg:mx-auto lg:max-w-8xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-5">
              <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0 mt-5 ">
                <div> 
                  <div className="mt-12">
                    <h1 className="text-6xl  text-right  font-extrabold tracking-tight text-white">
                      We've selected properties <br/> to grow the highest <br/> quality beef
                    </h1> 
                  </div>
                </div> 
              </div>
              <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
                <div> 
                  <div className="mt-6"> 
                    <p className="mt-4 text-lg text-white">
                        Our breeding operation centeres around our Northern Territoru holdings at Murranji Station. Once weaned, cattle are brought south to live out their days on exceptionally beautiful fattening country in the foothills of the Great Dividing Range. Our pastures are regenerative, nutrient-rich and fed by natural springs.
                        
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
              {locations.map((location) => (
                <li key={location.name} className="sm:py-8">
                  <div className="space-y-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-6 sm:space-y-0">
                    <div className="aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4">
                      <img className="object-cover shadow-lg rounded-lg" src={location.imageUrl} alt="" />
                    </div>
                    <div className="sm:col-span-2">
                      <div className="space-y-4">
                        <div className="text-lg leading-6 font-medium space-y-1">
                          <h3>{location.name}</h3>
                          <p className="text-indigo-600">{location.role}</p>
                        </div>
                        <div className="text-lg">
                          <p className="text-gray-500">{location.bio}</p>
                        </div> 
                        <div >
                          <p className="text-black">Cattle</p>
                        </div>
                        <div >
                          <p className="text-black">Certification</p>
                        </div>
                        <div >
                          <p className="text-black">Staff</p>
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

export default GrazingProperties;