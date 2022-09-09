import React, { useState } from 'react'
const Home = () => {
  const [id, setid] = useState("")
  const [uname, setname] = useState("")
  const [uemail, setemail] = useState("")
  const [ulocation, setlocation] = useState("")
  const getDataFromServer = async () => {
    try {
      const res = await fetch(`http://localhost:8080/users/${id}`, {
        mode: 'cors',
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      })
      const data = await res.json();
      setemail(data.email);
      setname(data.name);
      setlocation(data.location);
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
              <h5 className="card-title text-center fw-bold">Get User Details</h5>
              <div className="mb-3">
                <label htmlFor="formGroupExampleInput" className="form-label">Id To Search</label>
                <input type="text" className="form-control" value={id} onChange={(e) => setid(e.target.value)} />
              </div>
              <button className="btn btn-primary" onClick={getDataFromServer}>Get Data</button>
            </div>
            <div className="card-body text-center">
              <h5 className="card-title text-center fw-bold">Get User Details</h5>
              <div className="mb-3">
                <label htmlFor="formGroupExampleInput" className="form-label">Name</label>
                <input type="text" className="form-control" value={uname} onChange={(e) => { }} />
              </div>
              <div className="mb-3">
                <label htmlFor="formGroupExampleInput" className="form-label">Email</label>
                <input type="text" className="form-control" value={uemail} onChange={(e) => { }} />
              </div>
              <div className="mb-3">
                <label htmlFor="formGroupExampleInput" className="form-label">Location</label>
                <input type="text" className="form-control" value={ulocation} onChange={(e) => { }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home