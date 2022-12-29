import './App.css';



function App() {

  const Exhibit = ({ heading, children }) => (
    <div className="exhibit">
      <h2 className="exhibit__heading">{heading}</h2>
      <div className="exhibit__content">
        {children}
      </div>
    </div>
  );
  
  const ip_address = 'This is the users IP address: '

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-border">Sextant App</h1>
      </header>
      <Exhibit heading="User IP Address" children={ip_address}>
      </Exhibit>
      <Exhibit heading="New Test" children="will this work?"> 
      </Exhibit>
    </div>
    
  );
}



export default App;
