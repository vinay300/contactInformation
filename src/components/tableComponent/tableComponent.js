import React,{useState} from "react";
import EditContactDetails from "../contactDetails/editContact";
import { faPencilAlt, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TableComponent = ({data, handleUpdateData, handleFormData}) => {
    const [modalEditOpen, setModalEditOpen] = useState(false);
    const [editData,setEditData] = useState({});
    
    let handleDeleteContact = (index) => {
        let finalArray = data.splice(index,1);
       handleUpdateData(data);
    }

    let handleEditContact = (index) => {
      let oData = data.find((item ,i)=> {
            return (i == index)
        });
        setEditData(oData);
        setModalEditOpen(true);
    }

    return (
        <div className="tableContainer">
            {modalEditOpen && <EditContactDetails data={editData} setModalEditOpen={setModalEditOpen} handleFormData={handleFormData}/>}
            <table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Phone Number</th>
                        <th>Email</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((contact,index) => (
                        <tr key={contact.id}>
                        <td>{contact.firstname}</td>
                        <td>{contact.lastname}</td>
                        <td>{contact.email}</td>
                        <td>{contact.phoneNumber}</td>
                        <td>{contact.status}</td>
                        <td><button title="Edit" onClick={handleEditContact.bind(this,index)}><FontAwesomeIcon icon={faPencilAlt}/></button>
                            <button title="Delete" onClick={handleDeleteContact.bind(this,index)}><FontAwesomeIcon icon={faTrash}/></button>
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default TableComponent;