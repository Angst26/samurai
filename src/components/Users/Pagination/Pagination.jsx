import React, {useState} from 'react';
import {Box, Pagination as MUIPagination} from "@mui/material"; // Предположим, у вас есть стили

const Pagination = ({totalPages, currentPage, onPageChange}) => {


    const handlePageClick = (page) => {
        onPageChange(page);
    };

    return (
        <Box dixplay={"flex"} alignItems={'center'} justifyContent={"center"} mt={2}>
            <MUIPagination
                count={totalPages}
                page={currentPage}
                onChange={(e, page) => handlePageClick(page)}
                siblingCount={1}
                boundaryCount={1}
                showFirstButton
                showLastButton
                color="primary"
            />
        </Box>
    );
};

export default Pagination;