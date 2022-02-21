import React from 'react';

import File from './File';
import Folder from './Folder';

const TreeRecursive = ({
    data,
    handleFileSelection,
    handleFolderSelection,
}) => {
    return data.map((item) => {
        if (item.type === 'image') {
            return (
                <File
                    key={item.name}
                    name={item.name}
                    type={item.type}
                    handleFileSelection={handleFileSelection}
                />
            );
        }

        if (item.type === 'doc') {
            return (
                <File
                    key={item.name}
                    name={item.name}
                    type={item.type}
                    handleFileSelection={handleFileSelection}
                />
            );
        }
        if (item.type === 'folder') {
            return (
                <Folder
                    key={item.name}
                    name={item.name}
                    handleFolderSelection={handleFolderSelection}
                >
                    <TreeRecursive
                        data={item.children}
                        handleFileSelection={handleFileSelection}
                        handleFolderSelection={handleFolderSelection}
                    />
                </Folder>
            );
        }
    });
};

export default TreeRecursive;
