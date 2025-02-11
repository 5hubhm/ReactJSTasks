import React from "react";
import Person from "./components/Person";
import Product from "./components/Product";

function App() {
  return (
    <div>
      <Person name="Alice" age={25} />
      <Person name="Bob" age={30} />
      
      <Product name="Phone" price="$699" />
      <Product name="Laptop" price="$1200" />
    </div>
  );
}

export default App;
