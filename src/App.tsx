// App.tsx
import React from "react";
import BarcodeScanner from "./components/barcodeReader";

const App: React.FC = () => {
  const handleScanSuccess = (decodedText: string) => {
    console.log("Scanned Barcode:", decodedText);
  };

  const handleScanError = (errorMessage: string) => {
    console.error("Scan Error:", errorMessage);
  };

  return (
    <div className="App">
      <h1>React Barcode Scanner</h1>
      <BarcodeScanner onScanSuccess={handleScanSuccess} onScanError={handleScanError} />
    </div>
  );
};

export default App;
