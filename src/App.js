import logo from './logo.svg';
import './App.css';

function App() {

  const name = "Bảo";
  const age = 21;
  const isMale = true;
  const student = {
    name: "Easy Frontend"
  };
  const colorList = ["red", "green", "blue"];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hoai Bao
        </p>

        <p>Xin chào {name} - {age} - {isMale ? "Male" : "Female"}</p>

        {isMale ? <p>Male</p> : <p>Female</p>}

        {isMale && <p>Male</p>}
        {!isMale && <p>Female</p>}

        {isMale && (
          <>
            <p>Male 1</p>
            <p>Male 2</p>
            <p>Male 3</p>
          </>
        )}

        <p>{student.name}</p>

        <ul>
          {colorList.map((color) => {
            <li key={color} style={{ color }}>{color}</li>
          })}
        </ul>

      </header>
    </div>
  );
}

export default App;
