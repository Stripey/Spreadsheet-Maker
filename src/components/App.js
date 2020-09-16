import React, {useState} from "react";
import { GenerateList } from "../utils/GenerateList";

function App() {

  const [records, setRecords] = useState([]);
  console.log(records);
  return <div>
    <button onClick={ () => setRecords(GenerateList())}>
      Generate Fake data
    </button>
  </div>;
}

export default App;
