import React,{useState} from "react";
import EditContactDetails from "../contactDetails/editContact";
import { faPencilAlt, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { confirm } from "react-confirm-box";


const TableComponent = ({data, handleUpdateData, handleFormData}) => {
    const [modalEditOpen, setModalEditOpen] = useState(false);
    const [editData,setEditData] = useState({});
    
    let handleDeleteContact = (index) => {
        let finalArray = data.splice(index,1);
       handleUpdateData(data);
    }

    let handleEditContact = async (index) => {
      let oData = data.find((item ,i)=> {
            return (i == index)
        });
        setEditData(oData);
        setModalEditOpen(true);
    }

    const deleteConfirmation = async (index, options) => {
        const result = await confirm("Are you sure you want to delete?", options);
        if (result) {
            handleDeleteContact(index)
            return
        }
      };
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
                        <td><button className="editButton" title="Edit" onClick={handleEditContact.bind(this,index)}><FontAwesomeIcon icon={faPencilAlt}/></button>
                            &nbsp;&nbsp;&nbsp;&nbsp;<button className="deleteButton" title="Delete" onClick={deleteConfirmation.bind(this,index)}><FontAwesomeIcon icon={faTrash}/></button>
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default TableComponent;