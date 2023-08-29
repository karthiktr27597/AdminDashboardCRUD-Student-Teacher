import React from 'react'
import Footer from '../Footer';
import NavbarPage from '../Navbar';
import "./Home.css"

function Home() {
    return (
        <div className='HomePage'>
            <div className='Header'>
                <NavbarPage />
            </div>
            <div className='Homemain'>
                <h1>Welcome Admins</h1>
                <div className='d-flex gap-5 justify-content-center align-items-center datadisplay fs-4'>
                    <p style={{ color: "red" }}>10k+ Students</p>
                    <p style={{ color: "green" }}>450+ Teachers</p>
                    <p style={{ color: "pink" }}>100+ Courses</p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home;