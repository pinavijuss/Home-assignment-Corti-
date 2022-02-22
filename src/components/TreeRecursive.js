import React from 'react';

import File from './File';
import Folder from './Folder';

const TreeRecursive = ({
    data,
    handleFileSelection,
    handleFolderSelection,
}) => {

    const sortedData = data.sort(function (a, b) {
        if (a.name.toLowerCase() < b.name.toLowerCase()) { return -1; }
        if (a.name.toLowerCase() > b.name.toLowerCase()) { return 1; }
        return 0;
    })

    return sortedData.map((item) => {
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
