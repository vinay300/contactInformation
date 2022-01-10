import React,{useState} from 'react';

const ContactDetails = ({ handleFormData, setOpenModal }) => {

    const initialFormData = {
        firstname: "",
        lastname: "",
        email: "",
        phoneNumber: "",
        status: "",
        id:""
      };
      const [formDetails, setFormDetails] = useState(initialFormData);
      const [msg, setMsg] = useState("");

      const handleChange = (e) => {
        setFormDetails({
          ...formDetails,
          [e.target.name]: e.target.value.trim(),// Trimming any whitespace
        });
      };
    
      const handleCreateContact = (e) => {
        e.preventDefault();
        console.log("length : "+ formDetails.phoneNumber.length)
        if(formDetails.phoneNumber.length != 10){
           setMsg("phoneNumber is not Valid");    
        }else {
            formDetails.id = Date.now() // unique id 
            handleFormData(formDetails);
            console.log(formDetails);
            setMsg("")
        }
      };
return(
        <div>
            <div className="modalBackground">
                <div className="modalContainer">
                <form onSubmit={handleCreateContact}>
                    <div className="titleCloseBtn">
                    <button
                        onClick={() => {
                        setOpenModal(false);
                        }}
                    >
                        X
                    </button>
                    </div>
                    <div className="title">
                    <h3>Add Contact Details</h3>
                    </div>
                    <div className="body">
                        
                            <div>
                                <label>First Name : </label>
                                <input type="text" className="inputFields" id="fname" name="firstname" placeholder="First name.." onChange={handleChange} required/>
                            </div>
                            <div>
                                <label >Last Name : </label>
                                <input type="text" className="inputFields" id="lname" name="lastname" placeholder="Last name.." onChange={handleChange} required/>
                            </div>
                            <div>
                                <label>Email : </label>
                                <input type="text" className="inputFields" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" id="email" name="email" placeholder="Email.." onChange={handleChange} required/>
                            </div>
                            <div>
                                <label >Phone No : </label>
                                <input type="number" className="inputFields" id="phoneNumber" pattern="[6789][0-9]{9}" name="phoneNumber" placeholder="Phone number.." onChange={handleChange} required/>
                            </div>
                            <div>
                                <label >Status : </label>
                                <input type="radio" className="inputRadioFields" id="active" name="status" value="active" onChange={handleChange} required/>
                                <label>Active</label>
                                <input type="radio" className="inputRadioFields" id="inctive" name="status" value="inactive" onChange={handleChange} required/>
                                <label >Inactive</label>
                            </div>
                    </div>
                   
                    <div className="footer">
                    <button
                        onClick={() => {
                        setOpenModal(false);
                        }}
                        id="cancelBtn"
                    >
                        Cancel
                    </button>
                    <button type='submit'>Create Contact</button>
                    
                    </div>
                    </form>
                    <div className='labelError'>{msg}</div>
                </div>
            </div>
        </div>
    )

}

export default ContactDetails