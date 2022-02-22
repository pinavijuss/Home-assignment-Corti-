import './App.css';
import React, { useState, useEffect } from 'react';

import SideBar from './components/SideBar';
import MainBar from './components/MainBar';

export const App = function App() {
  const [data, setData] = useState([]);
  const [isFileSelected, setIsFileSelected] = useState(false);
  const [selectedFile, setSelectedFile] = useState({
    name: '',
    type: '',
  });
  const [folderData, setFolderData] = useState([]);

  const handleFileSelection = (fileName, type) => {
    setIsFileSelected(true);
    setSelectedFile({
      name: fileName,
      type: type,
    });
  };

  const handleFolderSelection = (folderData) => {
    setIsFileSelected(false);
    setFolderData(folderData.props.data);
  };

  useEffect(() => {
    fetch('/api/v1/tree')
      .then((response) => response.json())
      .then((data) => setData(data.response));
  }, []);

  // if (data.children != '') {
  //   return data.sort((a, b) => a.name.localeCompare(b.name));
  // }
  // data.sort((a, b) => a.name.localeCompare(b.name));
  // data.sort((a, b) => a.children.name.localeCompare(b.children.name));


  return (
    <div className="container">
      <div className="topBar">
        <span>Home Assignement</span>
      </div>
      <div className="centerContainer">
        <SideBar
          data={data}
          handleFileSelection={handleFileSelection}
          handleFolderSelection={handleFolderSelection}
        />
        <MainBar
          isFileSelected={isFileSelected}
          selectedFile={selectedFile}
          folderData={folderData}
        />
      </div>
    </div>
  );
};

export default App;
