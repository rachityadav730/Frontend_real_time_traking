import logo from './logo.svg';
import './App.css';
import DeliveryTracker from './components/DeliveryTracker';

function App() {
  return (
    <div className="App">
      <h1>Delivery Tracker</h1>
      <DeliveryTracker orderId={1} />
    </div>
  );
}

export default App;
