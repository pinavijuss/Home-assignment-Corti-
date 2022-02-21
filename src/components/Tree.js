import React from 'react';
import styled from 'styled-components';

import TreeRecursive from './TreeRecursive';

const Tree = ({
    data,
    children,
    handleFileSelection,
    handleFolderSelection,
}) => {
    const isImperative = data && !children;
    return (
        <StyledTree>
            {isImperative ? (
                <TreeRecursive
                    data={data}
                    handleFileSelection={handleFileSelection}
                    handleFolderSelection={handleFolderSelection}
                />
            ) : (
                    children
                )}
        </StyledTree>
    );
};

export default Tree;

const StyledTree = styled.div`
  line-height: 1.5;
  overflow-y: scroll;
`;
