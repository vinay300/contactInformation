import React,{ useState} from 'react';

const EditContactDetails = ({ data, setModalEditOpen , handleFormData}) => {
    const initialFormData = {
        firstname: "",
        lastname: "",
        email: "",
        phoneNumber: "",
        status: "",
        id:""
      };
      const [formDetails, setFormDetails] = useState(data);
      const [msg, setMsg] = useState("");

      var errorMsg = ""
      const handleChange = (e) => {
        setFormDetails({
          ...formDetails,
          [e.target.name]: e.target.value.trim(),// Trimming any whitespace
        });
      };
    
      // function to edit contact
      const handleEditContact = (e) => {
        e.preventDefault();
        if((formDetails.phoneNumber.length < 10) && (formDetails.phoneNumber.length > 10)){
           errorMsg = "phoneNumber is not Valid";    
        }
        handleFormData(formDetails);
        setMsg("Updated Successfully...")
        setModalEditOpen(false);
      };
     var activeflag = (formDetails.status == "active") ? true : false;
     var inactiveflag = (formDetails.status == "inactive") ? true : false;

return(
        <div>
            <div className="modalBackground">
                <div className="modalContainer">
                <form onSubmit={handleEditContact}>
                    <div className="titleCloseBtn">
                    <button
                        onClick={() => {
                        setModalEditOpen(false);
                        }}
                    >
                        X
                    </button>
                    </div>
                    <div className="title">
                    <h3>Edit Contact Details</h3>
                    </div>
                    <div className="body">
                        
                            <div>
                                <label>First Name : </label>
                                {/* pattern="/^[a-zA-Z]+ [a-zA-Z]+$/" */}
                                <input type="text" className="inputFields"  id="fname" value={formDetails.firstname} name="firstname" placeholder="First name.." onChange={handleChange} required/>
                            </div>
                            <div>
                                <label >Last Name : </label>
                                <input type="text" className="inputFields" id="lname" value={formDetails.lastname} name="lastname" placeholder="Last name.." onChange={handleChange} required/>
                            </div>
                            <div>
                                <label>Email : </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <input type="text" className="inputFields" pattern="/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/" value={formDetails.email} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" id="email" name="email" placeholder="Email.." onChange={handleChange} required/>
                            </div>
                            <div>
                                <label >Phone No : </label>
                                <input type="number" className="inputFields" value={formDetails.phoneNumber} id="phoneNumber" pattern="[6789][0-9]{9}" name="phoneNumber" placeholder="Phone number.." onChange={handleChange} required/>
                            </div>
                            <div>
                                <label >Status : </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <input type="radio" className="inputRadioFields" id="active"  name="status" checked={activeflag} value="active" onChange={handleChange} required/>
                                <label>Active</label>&nbsp;&nbsp;&nbsp;&nbsp;
                                <input type="radio" className="inputRadioFields" id="inactive" name="status" checked={inactiveflag} value="inactive" onChange={handleChange} required/>
                                <label >Inactive</label>
                            </div>
                    </div>
                    <div className="footer">
                    <button
                        onClick={() => {
                            setModalEditOpen(false);
                        }}
                        id="cancelBtn"
                    >
                        Cancel
                    </button>
                    <button type='submit'>Edit Contact</button>
                    </div>
                    </form>
                    <div className='labelSuccess'>{msg}</div>
                </div>
            </div>
        </div>
    )

}

export default EditContactDetails