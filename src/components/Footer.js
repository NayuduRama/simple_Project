import React from 'react';
import { Link } from 'react-router-dom'; 
import logo from '../logo.svg'; 


const footerNavigation = {
   
  legal: [
    { name: 'Home', href: '/' },
    { name: 'aboutus', href: '/aboutus' },
    { name: 'Grazing Properties', href: '/grazingproperties' },
    { name: 'Organic Certified Beef', href: '/organiccertifiedbeef' },
    { name: 'Work for us', href: '/workforus' },
    { name: 'Contact us', href: '/contactus' },
  ],
}


function Footer(props) {
    return (
         <footer className="bg-gray-50" aria-labelledby="footer-heading">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="max-w-full mx-auto pt-16 pb-8 px-2 sm:px-6 lg:pt-24 lg:px-8">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">

            <div className="mt-10 xl:mt-0">
                <div className="flex-shrink-0 flex items-center"> 
                  <img
                    className="hidden lg:block h-auto w-auto"
                    src={logo}
                    alt="Logo"
                  />
                </div> 
            </div>
            <div className="grid grid-cols-2 gap-8 xl:col-span-2">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Bunderra Cattle Company Pty Ltd</h3>
                  <ul role="list" className="mt-4 space-y-4">
                     <li className="text-base text-gray-500 hover:text-gray-900">ABN 12 123 123 123</li>
                     <li className="text-base text-gray-500 hover:text-gray-900">admin@bunderracattle.com.au</li>
                     <li className="text-base text-gray-500 hover:text-gray-900">Facebook</li>
                     <li className="text-base text-gray-500 hover:text-gray-900">Instagram</li>
                  </ul>
                </div>
                <div className="mt-12 md:mt-0"> 
                <h3 className=" text-sm font-semibold text-gray-400 tracking-wider uppercase">Location 1 </h3>
                    <p   className="text-base text-gray-500 hover:text-gray-900"> Address </p> 

                 <h3 className="mt-4 text-sm font-semibold text-gray-400 tracking-wider uppercase">Location 2 </h3>
                       <p   className="text-base text-gray-500 hover:text-gray-900"> Address </p>    
                   
                  <h3 className=" mt-4 text-sm font-semibold text-gray-400 tracking-wider uppercase">Location 3 </h3>
                      <p   className="text-base text-gray-500 hover:text-gray-900"> Address </p> 
                 <h3 className=" mt-4 text-sm font-semibold text-gray-400 tracking-wider uppercase">Location 4 </h3>
                      <p   className="text-base text-gray-500 hover:text-gray-900"> Address </p>  
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                   <h3 className=" text-sm font-semibold text-gray-400 tracking-wider uppercase">Location 1 </h3>
                    <p   className="text-base text-gray-500 hover:text-gray-900"> Address </p> 

                 <h3 className="mt-4 text-sm font-semibold text-gray-400 tracking-wider uppercase">Location 2 </h3>
                       <p   className="text-base text-gray-500 hover:text-gray-900"> Address </p>    
                   
                  <h3 className=" mt-4 text-sm font-semibold text-gray-400 tracking-wider uppercase">Location 3 </h3>
                      <p   className="text-base text-gray-500 hover:text-gray-900"> Address </p> 
                 <h3 className=" mt-4 text-sm font-semibold text-gray-400 tracking-wider uppercase">Location 4 </h3>
                      <p   className="text-base text-gray-500 hover:text-gray-900"> Address </p>  
                </div>
                <div className="mt-12 md:mt-0">
                  <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Legal</h3>
                  <ul role="list" className="mt-4 space-y-4">
                    {footerNavigation.legal.map((item) => (
                      <li key={item.name}>
                        <Link to={item.href} className="text-base text-gray-500 hover:text-gray-900">
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            
          </div>
          <div className="mt-12 border-t border-gray-200 pt-8 md:flex md:items-center md:justify-between lg:mt-16">
            
            <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
              &copy; 2021 Buderra, Inc. All rights reserved.
            </p> 
          </div>
        </div>
      </footer>
    );
}

export default Footer;