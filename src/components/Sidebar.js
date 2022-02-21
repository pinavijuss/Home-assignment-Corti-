import React from 'react';

import Tree from './Tree';

const Sidebar = ({ data, children, handleFileSelection, handleFolderSelection }) => {
    return (
        <div className="sideBar">
            <Tree
                data={data}
                children={children}
                handleFileSelection={handleFileSelection}
                handleFolderSelection={handleFolderSelection}
            />
        </div>
    );
};

export default Sidebar;
