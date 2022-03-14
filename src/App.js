import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomGrid from './components/CustomGrid';

function App() {
  const [myList, setMyList] =  React.useState(null);

  React.useState(
    () => {
      setMyList([{
        title: "Some Heading",
        img: "stock-img.svg",
        text:"SOME HUGE DESCSRIPTION SOME HUGE DESCRIPTION",
        linked_resource: "1"
      },
      {
        title: "Some Heading 2",
        img: "stock-img.svg",
        text:"SOME HUGE DESCSRIPTION SOME HUGE DESCRIPTION",
        linked_resource: "2"
      },
      {
        title: "Some Heading 2",
        img: "stock-img.svg",
        text:"SOME HUGE DESCSRIPTION SOME HUGE DESCRIPTION",
        linked_resource: "3"
      },
      {
        title: "Some Heading 2",
        img: "stock-img.svg",
        text:"SOME HUGE DESCSRIPTION SOME HUGE DESCRIPTION",
        linked_resource: "4"
      },
      {
        title: "Some Heading 2",
        img: "stock-img.svg",
        text:"SOME HUGE DESCSRIPTION SOME HUGE DESCRIPTION",
        linked_resource: "5"
      }]);
    }
  , [])
 
  return (
    <div className="App">
      <header className="App-header">
        <div>
           {/* Grids here */}
           {myList && <CustomGrid list={myList}/>}
        </div>
      </header>
    </div>
  );
}

export default App;
