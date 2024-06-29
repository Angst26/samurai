import React, {useState} from 'react';
import styles from './Pagination.module.css'; // Предположим, у вас есть стили

const Pagination = ({totalPages, currentPage, onPageChange}) => {
    const [pageGroup, setPageGroup] = useState(0);
    const pagesPerGroup = 10;
    const totalGroups = Math.ceil(totalPages / pagesPerGroup);

    const handlePageClick = (page) => {
        onPageChange(page);
    };

    const handleNextGroupClick = () => {
        if (pageGroup < totalGroups - 1) {
            setPageGroup(pageGroup + 1);
        }
    };

    const handlePrevGroupClick = () => {
        if (pageGroup > 0) {
            setPageGroup(pageGroup - 1);
        }
    };

    const startPage = pageGroup * pagesPerGroup + 1;
    const endPage = Math.min(startPage + pagesPerGroup - 1, totalPages);
    const pages = Array.from({length: endPage - startPage + 1}, (_, i) => startPage + i);

    return (
        <div className={styles.paginationContainer}>
            <button
                onClick={handlePrevGroupClick}
                disabled={pageGroup === 0}
            >
                Назад
            </button>

            {pages.map((p) => (
                <span
                    key={p}
                    className={`${styles.pageNumber} ${p === currentPage ? styles.selectedPage : ''}`}
                    onClick={() => handlePageClick(p)}
                >
          {p}
        </span>
            ))}

            <button
                onClick={handleNextGroupClick}
                disabled={pageGroup >= totalGroups - 1}
            >
                Далее
            </button>
        </div>
    );
};

export default Pagination;