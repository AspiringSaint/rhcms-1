import React from "react";
import "../../styles/components/common/Pagination.css";

/**
 * Reusable Pagination Component
 * 
 * Props:
 * - currentPage (number): current active page
 * - totalPages (number): total number of pages
 * - onPageChange (function): function to call when page changes
 */
const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    if (totalPages <= 1) return null;

    const goToPage = (page) => {
        if (page >= 1 && page <= totalPages) onPageChange(page);
    };

    // Compute page numbers (with ellipsis)
    const getPageNumbers = () => {
        let pages = [];
        if (totalPages <= 7) {
            pages = [...Array(totalPages).keys()].map((n) => n + 1);
        } else {
            if (currentPage <= 3) {
                pages = [1, 2, 3, 4, "...", totalPages];
            } else if (currentPage >= totalPages - 2) {
                pages = [1, "...", totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
            } else {
                pages = [1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages];
            }
        }
        return pages;
    };

    return (
        <div className="pagination-container">
            <button
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
                className="pagination-btn"
            >
                Prev
            </button>

            {getPageNumbers().map((page, idx) =>
                page === "..." ? (
                    <span key={`ellipsis-${idx}`} className="pagination-ellipsis">
                        ...
                    </span>
                ) : (
                    <button
                        key={`page-${page}-${idx}`}
                        onClick={() => goToPage(page)}
                        className={`pagination-btn ${currentPage === page ? "active" : ""}`}
                    >
                        {page}
                    </button>
                )
            )}

            <button
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="pagination-btn"
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;
