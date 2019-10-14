import React from 'react';
import './settings.css';
import Header from '../Header/Header'
import Form from './Form';
import Footer from '../Footer/Footer'


// FIRST PAGE OF APP WHERE USER ENTERS PLAYER NAMES //

const Settings = () => {
    return (
        <div className="text-center">
            <Header />
            <Form />
            <Footer />  
        </div>
    )
}

export default Settings;