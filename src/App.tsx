import './App.css';

function App() {
  // let name:string;
  type Person = {
    name: string;
    age: number;
    hasJob?: boolean;
  }

  let person1: Person = {
    name: 'afia',
    age: 52
  };

  let lotOfPeeps: Person[] = [
    {
      name: 'afia',
      age: 52,
    },
    {
      name: 'wally',
      age: 96,
      hasJob: true,
    }
  ]
  return (
    <div className="App">
      hello world
      <h1>{person1.name}</h1>
      {
        lotOfPeeps.map(lot => <div key={lot.name}>
          <p>{lot.name}</p>
          <p>{lot.age}</p>
          <p>{lot.hasJob}</p>
        </div>)
      }
    </div>
  );
}

export default App;
