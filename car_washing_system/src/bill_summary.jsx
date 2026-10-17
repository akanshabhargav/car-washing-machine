export default function BillSummary({ bill }) {
  if (!bill) return null;

  const { ownerName, carNumber, startTime, endTime, duration, services } = bill;

 
  const serviceTotal = services.reduce((sum, s) => sum + s.price, 0);


  let durationCharge = 0;
  if (duration > 30) durationCharge += 10; 
  if (duration > 60) {
    const extraMinutes = duration - 60;
    durationCharge += Math.floor(extraMinutes / 10);  
  }

  const subtotal = serviceTotal + durationCharge;
  const gst = subtotal * 0.18;
  const totalAmount = subtotal + gst;

  return (
    <div style={{ border: "1px solid #ccc", padding: "15px", marginTop: "20px" }}>
      <h3>🧾 Bill Summary</h3>
      <p><strong>Owner:</strong> {ownerName}</p>
      <p><strong>Car Number:</strong> {carNumber}</p>
      <p><strong>Start Time:</strong> {startTime}</p>
      <p><strong>End Time:</strong> {endTime}</p>
      <p><strong>Duration:</strong> {duration} minutes</p>

      <h4>Selected Services:</h4>
      <ul>
        {services.map((s, idx) => (
          <li key={idx}>{s.name}: ${s.price}</li>
        ))}
      </ul>

      <p><strong>Duration Charge:</strong> ${durationCharge}</p>
      <p><strong>Subtotal:</strong> ${subtotal}</p>
      <p><strong>GST (18%):</strong> ${gst.toFixed(2)}</p>
      <h4>Total Amount Due: ${totalAmount.toFixed(2)}</h4>
    </div>
  );
}
