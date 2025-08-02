import React, { useState } from "react";

const FileUploadAndPreview = () => {
  const [currentFile, setCurrentFile] = useState(null);
  const [pastFile, setPastFile] = useState(null);
  const [error, setError] = useState(false);
  const [assignments, setAssignments] = useState([]);

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (name === "current") {
      setCurrentFile(files[0]);
    } else if (name === "past") {
      setPastFile(files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    if (currentFile) formData.append("current", currentFile);
    if (pastFile) formData.append("past", pastFile);

    const response = await fetch("http://localhost:3000/api/upload", {
      method: "POST",
      body: formData,
    });

    const result = await response.json();

    if (result.error) {
      setError(result.error);
      setAssignments([]);
    } else {
      setAssignments(result);
      setError(null);
    }
    console.log(result);
  };

  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <label>
          Upload Current File:
          <input type="file" name="current" onChange={handleFileChange} />
        </label>
        <br />
        <br />
        <label>
          Upload Past File:
          <input type="file" name="past" onChange={handleFileChange} />
        </label>
        <br />
        <br />
        <button className="btn btn-primary" type="submit">
          Upload Both
        </button>
      </form>

      <div style={{ marginTop: "20px" }}>
        <h3 className="mb-4">Assignments to Submit</h3>
        <div className="mt-4">
          <ul className="list-group">
            {currentFile && (
              <li className="list-group-item">
                <strong>Current:</strong> {currentFile.name}
              </li>
            )}
            {pastFile && (
              <li className="list-group-item">
                <strong>Past:</strong> {pastFile.name}
              </li>
            )}
            {!currentFile && !pastFile && (
              <li className="list-group-item text-danger">
                No files selected yet.
              </li>
            )}
            {error && <li className="list-group-item text-danger">{error}</li>}
          </ul>
        </div>
        {assignments.length > 0 && (
          <table className="table table-bordered mt-5">
            <thead>
              <tr>
                <th>Santa</th>
                <th>Email</th>
                <th>Child</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {assignments.map((a, i) => (
                <tr key={i}>
                  <td>{a.Santa_Name}</td>
                  <td>{a.Santa_Email}</td>
                  <td>{a.Child_Name}</td>
                  <td>{a.Child_Email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default FileUploadAndPreview;
