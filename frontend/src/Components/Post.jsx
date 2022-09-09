import React, { useState } from 'react'

const Post = () => {
  const [name, setname] = useState("")
  const [email, setemail] = useState("")
  const [location, setlocation] = useState("")
  const [password, setpassword] = useState("")
  const postDataToServer = async () => {
    try {
      await fetch(`http://localhost:8080/users/`, {
        mode: 'cors',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, password, location })
      })
      alert("Data Saved !!!")
      setemail(" ");
      setname(" ");
      setlocation(" ");
      setpassword(" ");
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
              <h5 className="card-title text-center fw-bold">Post User Details</h5>
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
              <button className="btn btn-primary" onClick={postDataToServer}>Submit Data</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Post