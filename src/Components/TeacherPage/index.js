import React, { useContext, useEffect, useState } from 'react'
import NavbarPage from '../Navbar'
import Footer from '../Footer'
import { Table } from 'react-bootstrap'
import "./TeacherPage.css"
import { useNavigate } from 'react-router-dom'
import DeleteConfirmation from '../DeleteConfirmation'
import { MyContext } from '../Data/ContextProvider'

function TeacherPage() {

    const navigate = useNavigate("/edit")
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [searchTerm, setSearchTerm] = useState('')
    const { teacher, setTeacher } = useContext(MyContext)
    const [deletedId, setDeletedId] = useState(null)

    const handleDeleteClick = (id) => {
        setShowDeleteModal(true);
        setDeletedId(id)
    };

    const handleDeleteConfirm = () => {
        setShowDeleteModal(false);
        const updatedData = teacher.filter((item) => item.id !== deletedId)
        setTeacher(updatedData)
    };

    const handleDeleteCancel = () => {
        setShowDeleteModal(false);
    };

    const handleSearchValue = (e) => {
        setSearchTerm(e.target.value)
    }

    const filteredData = teacher.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.id.toString().includes(searchTerm) ||
        item.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.rating.toString().includes(searchTerm)
    )

    const message = sessionStorage.getItem("success")

    useEffect(() => {
        const handleOutsideClick = () => {
            sessionStorage.clear()
        }
        document.addEventListener('click', handleOutsideClick)
        return () => {
            document.removeEventListener('click', handleOutsideClick)
        }
    }, [])

    return (
        <div className='TeacherPage'>
            <NavbarPage searchValue={searchTerm} onSearchChange={handleSearchValue} show={"show"} addTeacher={"Add Teacher"} />
            {
                message && <p style={{ color: "green", fontSize: 20, marginBottom: 0 }} >{message}</p>
            }
            <main className='TeacherPageMain m-3'>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>S.No</th>
                            <th>Tr.Id</th>
                            <th>Name</th>
                            <th>Subject</th>
                            <th>Rating</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    {
                        filteredData.map((val, index) => (

                            <tbody>
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{val.id}</td>
                                    <td>{val.name}</td>
                                    <td>{val.subject}</td>
                                    <td>{val.rating}</td>
                                    <td className='d-flex justify-content-center gap-3'>
                                        <i className="bi bi-pencil-fill" onClick={() => navigate(`/edit/${val.id}`)}></i>
                                        <i className="bi bi-person-x" onClick={() => handleDeleteClick(val.id)}></i>
                                    </td>
                                </tr>
                            </tbody>
                        ))
                    }
                </Table>
            </main>
            <Footer />
            <DeleteConfirmation
                show={showDeleteModal}
                onClose={handleDeleteCancel}
                onConfirm={handleDeleteConfirm}
            />
        </div>
    )
}

export default TeacherPage