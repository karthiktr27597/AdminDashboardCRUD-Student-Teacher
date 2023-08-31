import React, { useContext, useEffect, useState } from 'react'
import NavbarPage from '../Navbar'
import Footer from '../Footer'
import { Table } from 'react-bootstrap';
import "./StudentPage.css";
import { useNavigate } from 'react-router-dom';
import DeleteConfirmation from '../DeleteConfirmation';
import { MyContext } from '../Data/ContextProvider';
import Pagination from './Pagination';

function StudentPage() {

    const navigate = useNavigate("/edit")
    const [showDeleteModel, setShowDeleteModel] = useState(false)
    const [searchTerm, setSearchTerm] = useState('')
    const { student, setStudent } = useContext(MyContext)
    const [deleteId, setDeleteId] = useState('')


    const handleDeleteClick = (id) => {
        setShowDeleteModel(true)
        setDeleteId(id)
    }

    const handleDeleteConfirm = () => {
        setShowDeleteModel(false)
        const updatedData = student.filter((val) => val.id !== deleteId)
        setStudent(updatedData)
    }

    const handleDeleteCancel = () => {
        setShowDeleteModel(false)
    }

    const handleSearchChange = (e) => {
        setCurrentPage(1)
        setSearchTerm(e.target.value)
    }

    const filteredData = student.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.course.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.class.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.id.toString().includes(searchTerm)
    )

    const message = sessionStorage.getItem("success")

    useEffect(() => {
        const handleDocumentClick = () => {
            sessionStorage.clear();
        };

        document.addEventListener('click', handleDocumentClick);

        return () => {
            document.removeEventListener('click', handleDocumentClick);
        };
    }, []);

    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 20

    const indexOfLastItem = currentPage * itemsPerPage
    const indexOfFirstItem = indexOfLastItem - itemsPerPage
    const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

    const handlePageClick = (newPage) => {
        setCurrentPage(newPage)
    }

    return (
        <div className='StudentPage'>
            <NavbarPage searchValue={searchTerm} onSearchChange={handleSearchChange} show={"show"} addStudent={'Add Student'}/>
            {
                message && <p style={{ color: "green", fontSize: 20, marginBottom: 0 }}>{message}</p>
            }
            <main className='StudentPageMain m-3'>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>S.No</th>
                            <th>Stu.Id</th>
                            <th>Name</th>
                            <th>Class</th>
                            <th>Course</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    {
                        currentItems.map((val, index) => (
                            <tbody>
                                <tr key={index + indexOfFirstItem}>
                                    <td>{index + 1 + indexOfFirstItem}</td>
                                    <td>{val.id}</td>
                                    <td>{val.name}</td>
                                    <td>{val.class}</td>
                                    <td>{val.course}</td>
                                    <td className='d-flex justify-content-center gap-3'>
                                        <i className="bi bi-pencil-fill" onClick={() => navigate(`/edit/${val.id}`)}></i>
                                        <i className="bi bi-person-x" onClick={(e) => handleDeleteClick(val.id)}></i>
                                    </td>
                                </tr>
                            </tbody>
                        ))
                    }
                </Table>
                <Pagination currentPage={currentPage} itemsPerPage={itemsPerPage} totalItems={filteredData.length} handlePageClick={handlePageClick} />

            </main>
            <Footer />
            <DeleteConfirmation show={showDeleteModel} onClose={handleDeleteCancel} onConfirm={handleDeleteConfirm} />
        </div>
    )
}

export default StudentPage