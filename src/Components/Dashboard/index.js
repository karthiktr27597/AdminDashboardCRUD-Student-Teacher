import React from 'react'
import NavbarPage from '../Navbar'
import Footer from '../Footer'
import "./Dashboard.css"
import { useNavigate } from 'react-router-dom'

function Dashboard() {

    const navigate = useNavigate()

    return (
        <div className='Dashboard'>
            <NavbarPage />
            <main className='DashboardMain d-flex align-items-center justify-content-center flex-column m-auto'>
                <div className='mb-5 Student'>
                    <h1>Student Data</h1>
                    <button onClick={() => navigate("/students")}>Check</button>
                </div>
                <div className='Teacher'>
                    <h1>Teacher Data</h1>
                    <button onClick={() => navigate("/teachers")}>Check</button>
                </div>
            </main>

            <Footer />
        </div>
    )
}

export default Dashboard