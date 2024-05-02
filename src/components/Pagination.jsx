const Pagination = ({ onPageChange, currentPage, totalPages }) => {
    const handlePageChange = (page) => {
        onPageChange(page);
    };

    return (
        <div>
            {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
                <button key={page} onClick={() => handlePageChange(page)}>
                    {page}
                </button>
            ))}
            <span>
                Page {currentPage} of {totalPages}
            </span>
        </div>
    );
};

export default Pagination;
