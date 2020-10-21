import React, { useState } from "react";
import { GenerateList } from "../utils/GenerateList";
import { createSpreadsheet } from "../utils/CreateSpreadsheet";
import { createSpreadsheetLight } from "../utils/CreateSpreadsheetLight";
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

      <button onClick={() => createSpreadsheetLight(records)}>
        Create Light Spreadsheet
      </button>
    </div>
  );
}

export default App;
