import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';

function NoPage() {

    const navigate = useNavigate();

    return (
        <div className='NoPage'>
            <h1>404 Page Error</h1>
            <Button onClick={() => navigate("/")} className="mt-3">Home</Button>
        </div >
    )
}

export default NoPage