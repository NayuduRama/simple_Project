import React from 'react';
import Header from './Header';
import Footer from './Footer';

function Workforus(props) {
    return (
        <div className="flex flex-col min-h-screen overflow-hidden">
             <div>
                <Header />
             </div>
            <main className="flex-grow">
                <div>
                    <h1>Work for us</h1>
                </div>
            </main> 
             <Footer />
         </div>
    );
}

export default Workforus;