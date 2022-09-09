import React, { useState } from 'react'

const Put = () => {
  const [id, setid] = useState("")
  const [name, setname] = useState("")
  const [email, setemail] = useState("")
  const [location, setlocation] = useState("")
  const [password, setpassword] = useState("")

  const updateDataToServer = async () => {
    try {
      await fetch(`http://localhost:8080/users/${id}`, {
        mode: 'cors',
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, password, location })
      });
      alert("Details Updated !!!")
    } catch (error) {
      console.log(error);

    }
  }
  return (
    <>
      <div className="row">
        <div className="col col-md-6 mx-auto mt-5">
          <div className="card" style={{ width: "100%" }}>
            <div className="card-body text-center">
              <h5 className="card-title text-center fw-bold">Update User Details</h5>
              <div className="mb-3">
                <label htmlFor="formGroupExampleInput" className="form-label">Id</label>
                <input type="text" className="form-control" value={id} onChange={(e) => { setid(e.target.value) }} />
              </div>
              <div className="mb-3">
                <label htmlFor="formGroupExampleInput" className="form-label">Name</label>
                <input type="text" className="form-control" value={name} onChange={(e) => { setname(e.target.value) }} />
              </div>
              <div className="mb-3">
                <label htmlFor="formGroupExampleInput" className="form-label">Email</label>
                <input type="text" className="form-control" value={email} onChange={(e) => { setemail(e.target.value) }} />
              </div>
              <div className="mb-3">
                <label htmlFor="formGroupExampleInput" className="form-label">Location</label>
                <input type="text" className="form-control" value={location} onChange={(e) => { setlocation(e.target.value) }} />
              </div>
              <div className="mb-3">
                <label htmlFor="formGroupExampleInput" className="form-label">Password</label>
                <input type="password" className="form-control" value={password} onChange={(e) => { setpassword(e.target.value) }} />
              </div>
              <button className="btn btn-primary" onClick={updateDataToServer}>Submit Data</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Put