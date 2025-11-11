import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [submittedData, setSubmittedData] = useState<any>(null);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setSubmittedData({ name, email, date });
  };

  return (
    <div className="container">
      <h1>TDC Dashboard</h1>

      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Enter Email ID"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />

        <button type="submit">Submit</button>
      </form>

      {submittedData && (
        <div className="result">
          <h2>Attendance Submitted ✅</h2>
          <p><strong>Name:</strong> {submittedData.name}</p>
          <p><strong>Email:</strong> {submittedData.email}</p>
          <p><strong>Date:</strong> {submittedData.date}</p>
        </div>
      )}
    </div>
  );
}

export default App;