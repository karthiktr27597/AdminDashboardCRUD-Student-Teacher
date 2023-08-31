import React, { useContext, useState } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from "react-bootstrap/Button";
import NavbarPage from '../Navbar';
import Footer from '../Footer';
import { MyContext } from '../Data/ContextProvider';

function AddTeacher() {

    const { setTeacher } = useContext(MyContext);
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)
    const [addTeacher, setAddTeacher] = useState(
        {
            id: "",
            name: "",
            subject: "",
            rating: ""
        }
    )


    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setSuccess(false)

        setAddTeacher((prev) => {
            switch (name) {
                case "id":
                    return {
                        ...prev,
                        [name]: Number(value) <= 10000 ? Number(value) : 0
                    }
                default:
                    return {
                        ...prev,
                        [name]: value,
                        rating: 4
                    }
            }

        })
    }

    const handleSaveButton = (e) => {
        e.preventDefault();

        if (addTeacher.id && addTeacher.name && addTeacher.subject) {
            setTeacher((prev) => [...prev, addTeacher])
            setError(false)
            setSuccess(true)
            setAddTeacher(
                {
                    id: "",
                    name: "",
                    subject: "",
                    rating: ""
                }
            )
        } else {
            setSuccess(false)
            setError(true)
        }
    }

    return (
        <div className='AddTeacherPage'>
            < NavbarPage />
            <div className='container d-flex justify-content-center my-auto'>
                <div className='row col-lg-8 col-sm-12 col-md-10'>
                    <form className='form-example'>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="inputGroup-sizing-default">
                                id
                            </InputGroup.Text>
                            <Form.Control
                                aria-label="Default"
                                aria-describedby="inputGroup-sizing-default"
                                value={addTeacher.id}
                                name="id"
                                onChange={(e) => handleOnChange(e)}
                            />
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="inputGroup-sizing-default">
                                Name
                            </InputGroup.Text>
                            <Form.Control
                                aria-label="Default"
                                aria-describedby="inputGroup-sizing-default"
                                name="name"
                                value={addTeacher.name}
                                onChange={(e) => handleOnChange(e)}
                            />
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="inputGroup-sizing-default">
                                Subject
                            </InputGroup.Text>
                            <Form.Control
                                aria-label="Default"
                                aria-describedby="inputGroup-sizing-default"
                                name="subject"
                                value={addTeacher.subject}
                                onChange={(e) => handleOnChange(e)}
                            />
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="inputGroup-sizing-default">
                                Rating
                            </InputGroup.Text>
                            <Form.Control
                                aria-label="Default"
                                aria-describedby="inputGroup-sizing-default"
                                name="rating"
                                value={4}
                                disabled />
                        </InputGroup>
                        <Button onClick={handleSaveButton}>Save</Button>
                    </form>
                    {
                        success && <p style={{ color: "green", fontSize: 18, marginBottom: 0, marginTop: "10px" }}>Data added successfully</p>
                    }
                    {
                        error && <p style={{ color: "red", fontSize: 18, marginBottom: 0, marginTop: "10px" }}>Please fill all the details</p>
                    }
                </div>
            </div>
            <Footer />
        </div >
    )
}

export default AddTeacher
