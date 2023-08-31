import React, { useContext, useState } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from "react-bootstrap/Button";
import NavbarPage from '../Navbar';
import Footer from '../Footer';
import { MyContext } from '../Data/ContextProvider';

function AddStudent() {

    const { setStudent } = useContext(MyContext)
    const [addStudent, addEditStudent] = useState(
        {
            id: "",
            name: "",
            class: "",
            course: ""
        }
    )

    const [success, setSuccess] = useState(false)
    const [error, setError] = useState(false)
    const [info, setInfo] = useState(false)

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setSuccess(false)
        setError(false)
        addEditStudent((prev) => {
            if (name == "id") {
                return {
                    ...prev,
                    [name]: Number(value) ? Number(value) : 0
                }
            } else {
                return {
                    ...prev,
                    [name]: value
                }
            }
        })
    }

    const handleSaveButton = (e) => {

        if (addStudent.id > 10000) {
            if (addStudent.name && addStudent.id && addStudent.course && addStudent.class) {
                setStudent((prevStudent) => [
                    ...prevStudent,
                    addStudent
                ])
                setError(false)
                setInfo(false)
                setSuccess(true)
                addEditStudent({
                    id: "",
                    name: "",
                    class: "",
                    course: ""
                })
            } else {
                setInfo(false)
                setSuccess(false)
                setError(true)
            }
        } else {
            setInfo(true)
        }
    }

    return (
        <div className='AddStudentPage'>
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
                                value={addStudent.id}
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
                                value={addStudent.name}
                                onChange={(e) => handleOnChange(e)}
                            />
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="inputGroup-sizing-default">
                                Class
                            </InputGroup.Text>
                            <Form.Control
                                aria-label="Default"
                                aria-describedby="inputGroup-sizing-default"
                                name="class"
                                value={addStudent.class}
                                onChange={(e) => handleOnChange(e)}
                            />
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="inputGroup-sizing-default">
                                Course
                            </InputGroup.Text>
                            <Form.Control
                                aria-label="Default"
                                aria-describedby="inputGroup-sizing-default"
                                name="course"
                                value={addStudent.course}
                                onChange={(e) => handleOnChange(e)}
                            />
                        </InputGroup>
                        <Button onClick={handleSaveButton}>Save</Button>
                    </form>
                    {
                        success && <p style={{ color: "green", fontSize: 18, marginBottom: 0, marginTop: "10px" }}>Data added successfully</p>
                    }
                    {
                        error && <p style={{ color: "red", fontSize: 18, marginBottom: 0, marginTop: "10px" }}>Please fill add the details</p>
                    }
                    {
                        info && <p style={{ color: "red", fontSize: 18, marginBottom: 0, marginTop: "10px" }}>Student Id should be grater than 10000</p>
                    }
                </div>
            </div>
            <Footer />
        </div >
    )
}

export default AddStudent
