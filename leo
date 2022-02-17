import { Children, useEffect, useState } from 'react';
import './App.css';

export const App = function App() {
  const [list, setList] = useState([]);

  // gauti duomenis is api
  // rasti itemus kurie turi 'children' property
  // itemaisu childrenais turi buti isrenderinami po teviniu itemu

  // const items = [];
  // items.map((item) => {
  //   if (item.children) {
  //     item.children.map((child) => child.children);
  //   }
  // });

  // react life cycle methods:
  // componentDidMount
  // componentWillUpdate ir ...
  // useEffect(() => {
  //iife - imediatly invoked function
  // (async () => {
  // try {
  // const list = await fetch('/api/v1/tree');
  // console.log(list);
  // if (list.length > 0) {
  //   console.log(list);
  // } else {
  //   console.log('list is empty');
  // }
  // } catch (error) {
  // console.log(error);
  // }
  // })();
  // }, []);

  useEffect(() => {
    fetch('/api/v1/tree')
      .then((response) => response.json())
      .then((data) => setList(data.response));
  }, []);

  return (
    <>
      <div className="container">
        <div className="topBar">
          <span>Home Assignement</span>
        </div>
        <div className="sideBar">
          {list.map((item) => (
            <span></span>
          ))}
        </div>
        <div className="mainBar"></div>
      </div>
    </>
  );
};
