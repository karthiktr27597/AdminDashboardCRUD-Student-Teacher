function Pagination({ currentPage, itemsPerPage, totalItems, handlePageClick }) {

    const totalPages = Math.ceil(totalItems / itemsPerPage)

    const handlePageChange = (newPage) => {
        if (newPage >= 1 && newPage <= totalPages) {
            handlePageClick(newPage)
        }
    }

    return (

        <nav ariel-label="Page Navigation">
            <ul className="pagination justify-content-center">
                <li className={`page-item ${currentPage === 1 && 'disabled'}`}>
                    <button className="page-link" onClick={() => handlePageChange(currentPage - 1)}>Previous</button>
                </li>
                {Array.from({ length: totalPages }, (_, index) => (
                    <li key={index} className={`page-item ${currentPage === index + 1 && 'active'}`}>
                        <button className="page-link" onClick={() => handlePageChange(index + 1)}>{index + 1}</button>
                    </li>
                ))}
                <li className={`page-item ${currentPage === totalPages && 'disabled'}`}>
                    <button className="page-link" onClick={() => handlePageChange(currentPage + 1)}>Next</button>
                </li>
            </ul>
        </nav>

    )
}

export default Pagination