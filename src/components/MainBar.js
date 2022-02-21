import React from 'react';
import styled from 'styled-components';

const MainBar = ({ isFileSelected, selectedFile, folderData }) => {
    return (
        <div className="mainBar">
            {isFileSelected ? (
                <>
                    <h3>Preview</h3>
                    <p>name: {selectedFile.name}</p>
                    <p>type: {selectedFile.type}</p>
                </>
            ) : (
                    <>
                        <div className="folderPreview">
                            {folderData.map((data) => (
                                <FileComponent key={data.name}>
                                    <div>{data.name}</div>
                                </FileComponent>
                            ))}
                        </div>
                    </>
                )}
        </div>
    );
};

export default MainBar;

const FileComponent = styled.div`
  margin: 0.5rem;
  height: 8rem;
  width: 8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 1rem;
  border: 3px solid;
  padding: 0.5rem;
  font-size: 1rem;
  background-color: #fefefe;
`;
