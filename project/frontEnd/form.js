import React, { useState } from 'react';
import './App.css';

const ContactForm = () => {
    // const handleClick=(e)=>{
    //     e.preventDefault();
    //     alert("Saved!");
    //  }
  const [FirstName, setUserfName] = useState('');
  const [LastName,setuserlname] = useState('');
  const [Phonenumber, setpnumber] = useState('');
  const [Emailid, setEid] = useState('');
  const [RollNo, setRno] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      FirstName,
      LastName,
      Phonenumber,
      Emailid,
      RollNo,
    });
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">FirstName</label>
          <input
            type="text"
            name="username"
            onChange={(e) => setUserfName(e.target.value)}
            value={FirstName}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="username">LastName</label>
          <input
            type="text"
            name="username"
            onChange={(e) => setuserlname(e.target.value)}
            value={LastName}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="phonenumber">phonenumber</label>
          <input
            type="number"
            name="phonenumber"
            size="10"
            onChange={(e) => setpnumber(e.target.value)}
            value={Phonenumber}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="Emailid">Email_id</label>
          <input
            type="email"
            name="Emailid"
            onChange={(e) => setEid(e.target.value)}
            value={Emailid}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="ROllNo">RollNo</label>
          <input
            type="number"
            name="RollNo"

            onChange={(e) => setRno(e.target.value)}
            value={RollNo}
            className="form-control"
          />
        
        </div>
        <button type="submit">submit</button>
      </form>
      <div className="text-center">
        <p>{FirstName}</p>
        <p>{LastName}</p>
        <p>{Phonenumber}</p>
        <p>{Emailid}</p>
        <p>{RollNo}</p>
      </div>
    </>
  );
};

export default ContactForm;