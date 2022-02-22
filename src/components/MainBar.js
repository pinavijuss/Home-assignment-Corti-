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
                            {folderData.length > 0 ? folderData.map((data) => (
                                <FileComponent key={data.id} className={`${data.type === 'folder' ? 'folder' : ""}`}>
                                    <div>{data.name}</div>
                                </FileComponent>
                            ))
                                :
                                "Folder is empty"}
                        </div>
                    </>
                )}
        </div>
    );
};

export default MainBar;

const FileComponent = styled.div`
  margin: 0.5rem;
  height: 7rem;
  width: 7rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 1rem;
  border: 3px solid;
  padding: 0.5rem;
  font-size: 0.8rem;
  background-color: #68b6d9;

&.folder {
    background-color: orange;
}
`;
