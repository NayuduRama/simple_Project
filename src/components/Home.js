import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Body from './Body';

function Home() {
    return (
         <div className="flex flex-col min-h-screen overflow-hidden">
             <div>
                <Header />
             </div>
            <main className="flex-grow">
 
                <Body />

            </main> 
            <Footer />

         </div>
    );
}

export default Home;