import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderComponent from './components/headerComponent/headerComponent';
import TableComponent from './components/tableComponent/tableComponent';
import FooterComponent from './components/footerComponent/footerComponent';
import ContactDetails from './components/contactDetails/contactDetails';
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

var aContactinfo = [];
function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [finalData, setFinalData] = useState({});
  const [updateData, setUpdatedData] = useState([]);
  let handleFormDataFunc = (prevData) => {
    setFinalData(prevData);
    aContactinfo.push(prevData);
  };

  let handleUpdateData = (prevData) => {
    setUpdatedData(prevData);
    aContactinfo = [...prevData];
  };

  let handleEditedData = (prevData) => {
    let id = prevData.id
    let oData = aContactinfo.find((item)=>{
      return (item.id == id);
    })
    Object.assign(oData,prevData);
    setUpdatedData(oData);
    console.log("Found Data : "+ prevData.firstname);
  };


  return (
    <div className="App">
      <HeaderComponent />
      <button className='openModalBtn'  onClick={() => {setModalOpen(true);}}><FontAwesomeIcon icon={faPlusCircle}/> Create Contact</button>
            {modalOpen && <ContactDetails handleFormData={handleFormDataFunc} setOpenModal={setModalOpen} />}
      <TableComponent data={aContactinfo} handleUpdateData={handleUpdateData} modalOpen= {modalOpen} setOpenModal={setModalOpen} handleFormData={handleEditedData}/>
      <FooterComponent />
    </div>
  );
}

export default App;
