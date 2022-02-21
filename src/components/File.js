import React from 'react';
import styled from 'styled-components';

import { AiOutlineFile, AiOutlineFilePdf } from 'react-icons/ai';
import { BiImage } from 'react-icons/bi';

const fileIcons = {
    pdf: <AiOutlineFilePdf />,
    jpeg: <BiImage />,
};

const File = ({ name, type, handleFileSelection }) => {
    let ext = name.split('.')[1];

    return (
        <StyledFile onClick={() => handleFileSelection(name, type)}
            style={{ cursor: 'pointer' }}>
            {fileIcons[ext] || <AiOutlineFile />}
            <span>{name}</span>
        </StyledFile>
    );
};

export default File;

const StyledFile = styled.div`
  padding-left: 20px;
  display: flex;
  align-items: center;
  span {
    margin-left: 5px;
  }
`;
