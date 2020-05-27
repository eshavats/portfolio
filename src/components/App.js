import React from "react";

import Header from "./Header";
import Display from "./Display";
import ContactForm from "./ContactForm";
import Modal from "./Modal";
import About from "./About";
import Footer from "./Footer";


const App = () => {

    return (
        <>
        <Modal 
        header="Write to me!"
        content= {<ContactForm />}
        />
        <Header />
        <Display />
        <div className="main">
            <About />
        </div>
        <Footer />
        </>
    );
};

export default App;