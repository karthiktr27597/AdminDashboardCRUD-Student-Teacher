import React, { useContext, useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from "react-bootstrap/Button";
import NavbarPage from '../Navbar';
import Footer from '../Footer';
import { useNavigate, useParams } from 'react-router-dom';
import { MyContext } from '../Data/ContextProvider';

function EditData() {

    const { student, teacher, setStudent, setTeacher } = useContext(MyContext)
    const [editStudent, setEditStudent] = useState({})
    const [editTeacher, setEditTeacher] = useState({})
    const { id } = useParams()
    const navigate = useNavigate()

    const getData = async (id) => {
        if (id > 10000) {
            const editingData = await student.filter((data) => data.id === Number(id))
            setEditStudent(...editingData)
        }
        if (id <= 10000) {
            const editingData = await teacher.filter((data) => data.id === Number(id))
            setEditTeacher(...editingData)
        }
    }

    const handleOnChange = async (e) => {
        const { name, value } = e.target
        if (id > 10000) {
            setEditStudent((prev) => {
                switch (name) {
                    case "id":
                        return {
                            ...prev,
                            [name]: Number(value)
                        }
                    default:
                        return {
                            ...prev,
                            [name]: value
                        }
                }
            })
        } else {
            setEditTeacher((prev) => {
                switch (name) {
                    default:
                        return {
                            ...prev,
                            [name]: value
                        }
                    case "id":
                        return {
                            ...prev,
                            [name]: Number(value) <= 10000 ? Number(value) : 10000
                        }

                }
            })
        }
    }

    useEffect(() => {
        getData(id)
    }, [id])

    const handleSaveButton = () => {
        if (id > 10000) {
            const updatedData = student.map((item) => (
                item.id == id ? { ...item, ...editStudent } : item
            ))
            setStudent(updatedData)
            sessionStorage.setItem("success", "Data Updated Successfully")
            navigate("/students")
        } else {
            const updatedData = teacher.map((item) => {
                return item.id == id ? { ...item, ...editTeacher } : item
            })
            setTeacher(updatedData);
            sessionStorage.setItem("success", "Data Updated Successfully")
            navigate("/teachers")
        }
    }

    return (
        <div className='EditDataPage'>
            <NavbarPage />
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
                                value={editStudent.id || editTeacher.id}
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
                                value={editStudent.name || editTeacher.name}
                                onChange={(e) => handleOnChange(e)}
                            />
                        </InputGroup>
                        {
                            id > 10000 ?
                                <>
                                    <InputGroup className="mb-3">
                                        <InputGroup.Text id="inputGroup-sizing-default">
                                            Class
                                        </InputGroup.Text>
                                        <Form.Control
                                            aria-label="Default"
                                            aria-describedby="inputGroup-sizing-default"
                                            name="class"
                                            value={editStudent.class}
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
                                            value={editStudent.course}
                                            onChange={(e) => handleOnChange(e)}
                                        />
                                    </InputGroup>
                                </>
                                :
                                <>
                                    <InputGroup className="mb-3">
                                        <InputGroup.Text id="inputGroup-sizing-default">
                                            Subject
                                        </InputGroup.Text>
                                        <Form.Control
                                            aria-label="Default"
                                            aria-describedby="inputGroup-sizing-default"
                                            name="subject"
                                            value={editTeacher.subject}
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
                                            value={editTeacher.rating}
                                            disabled readOnly />
                                    </InputGroup>
                                </>
                        }
                        <Button onClick={handleSaveButton}>Save</Button>
                    </form>
                </div>
            </div>
            <Footer />
        </div >
    )
}

export default EditData