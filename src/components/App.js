import React, { useState } from "react";
import { GenerateList } from "../utils/GenerateList";
import { createSpreadsheet } from "../utils/CreateSpreadsheet";
function App() {
  const [records, setRecords] = useState([]);

  return (
    <div>
      <button onClick={() => setRecords(GenerateList())}>
        Generate Fake data
      </button>

      <button onClick={() => createSpreadsheet(records)}>
        Create Spreadsheet
      </button>
    </div>
  );
}

export default App;
