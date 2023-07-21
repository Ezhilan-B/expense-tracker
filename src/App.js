import Expenses from "./components/Expenses/Expenses";

function App() {

  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2023, 6, 14),
    },
    { 
      id: 'e2', 
      title: 'New TV', 
      amount: 799.49, 
      date: new Date(2023, 2, 12) 
    },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2023, 3, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2023, 5, 12),
    },
  ];

  return (
    <div>
      <h1>Let's get started!</h1>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
