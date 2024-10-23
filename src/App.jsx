import './App.css';
import CountDates from './components/CountDates.jsx';

function App() {
  return (
    <>
    <div className="items-center justify-center w-full">
      <div className="border block p-6 bg-white rounded-lg shadow-lg text-center text-blue-600 max-w-lg mx-auto">
        <h1 className="text-2xl font-bold mb-4">
          นับเวลาถอยหลังเดินทาง
          <h2 className='text-2xl font-bold max-w-lg mx-auto'>
            Thailand - Indonesia
          </h2>
        </h1>
        <CountDates />
      </div>
    </div>
    </>
    
  );
}

export default App;
