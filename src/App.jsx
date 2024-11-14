import { useState } from "react";
import BarcodeScanner from "react-qr-barcode-scanner";
import "./App.css";

function App() {

  const [data, setData] = useState(null);

  const handleScan = (scanResult) => {
    if (scanResult) {
      setData(scanResult.text);
    }
  };

  const handleError = (err) => {
    console.error(err);
  };

  return (
    <>
      <div>
      <h1>Barcode Scanner</h1>
      <BarcodeScanner
        onUpdate={(err, result) => {
          if (result) handleScan(result);
          else handleError(err);
        }}
      />
      {data && <p>Scanned Code: {data}</p>}
    </div>
    </>
  );
}

export default App;
