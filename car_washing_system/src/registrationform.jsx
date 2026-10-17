import { useState } from "react";
import './App.css';

const servicesList = [
  { name: "Mat Cleaning", price: 10 },
  { name: "Vacuum", price: 15 },
  { name: "Exterior Wash", price: 20 },
  { name: "Interior Cleaning", price: 25 },
];

export default function RegistrationForm({ onSubmit }) {
  const [carNumber, setCarNumber] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [startTime, setStartTime] = useState("");
  const [selectedServices, setSelectedServices] = useState([]);

  const handleServiceChange = (serviceName) => {
    setSelectedServices((prev) =>
      prev.includes(serviceName)
        ? prev.filter((s) => s !== serviceName)
        : [...prev, serviceName]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!carNumber || !ownerName || !startTime) {
      alert("All fields are required!");
      return;
    }
    onSubmit({ carNumber, ownerName, startTime, selectedServices });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Car Number"
        value={carNumber}
        onChange={(e) => setCarNumber(e.target.value)}
      />
      <input
        type="text"
        placeholder="Owner Name"
        value={ownerName}
        onChange={(e) => setOwnerName(e.target.value)}
      />
      <input
        type="time"
        value={startTime}
        onChange={(e) => setStartTime(e.target.value)}
      />

      <h4>Select Services:</h4>
      {servicesList.map((service) => (
        <label key={service.name}>
          <input
            type="checkbox"
            checked={selectedServices.includes(service.name)}
            onChange={() => handleServiceChange(service.name)}
          />
          {service.name} (${service.price})
        </label>
      ))}

      <button id="sub" type="submit">Generate Bill</button>
    </form>
  );
}
