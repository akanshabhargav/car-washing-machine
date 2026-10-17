import RegistrationForm from "./registrationform";
//import BillSummary from "./bill_summary";
function App() {
  const handleSubmit = (data) => {
    console.log("Form submitted:", data);
  };

  return (
    <div>
      {/* <h2>Car Washing Centre</h2> */}
      <RegistrationForm onSubmit={handleSubmit} />
    </div>
  );
}

export default App;
