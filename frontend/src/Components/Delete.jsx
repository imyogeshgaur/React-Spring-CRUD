import React, { useState } from 'react'

const Delete = () => {
  const [id, setid] = useState("")
  const deleteDataFromServer = async () => {
    try {
      await fetch(`http://localhost:8080/users/${id}`, {
        mode: 'cors',
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
      });
      alert("Details Deleted !!!")
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
              <h5 className="card-title text-center fw-bold">Delete User Details</h5>
              <div className="mb-3">
                <label htmlFor="formGroupExampleInput" className="form-label">Id To Delete</label>
                <input type="text" className="form-control" value={id} onChange={(e) => setid(e.target.value)} />
              </div>
              <button className="btn btn-primary" onClick={deleteDataFromServer}>Delete Data</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Delete