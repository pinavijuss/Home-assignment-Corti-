import React, { useState } from 'react';
import styled from 'styled-components';

import { AiOutlineFolder } from 'react-icons/ai';

const Folder = ({ name, children, handleFolderSelection }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = (e) => {
        e.preventDefault();
        setIsOpen(!isOpen);
        handleFolderSelection(children);
    };

    return (
        <StyledFolder>
            <div className="folder--label" onClick={handleToggle} style={{ cursor: 'pointer' }}>
                <AiOutlineFolder />
                <span>{name}</span>
            </div>
            <Collapsible isOpen={isOpen}>{children}</Collapsible>
        </StyledFolder>
    );
};

export default Folder;

const StyledFolder = styled.div`
  padding-left: 20px;

  .folder--label {
    display: flex;
    align-items: center;
    span {
      margin-left: 5px;
    }
  }
`;

const Collapsible = styled.div`
  height: ${(p) => (p.isOpen ? 'auto' : '0')};
  overflow: hidden;
`;
