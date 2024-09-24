import React, { useState } from "react";
import BarcodeScanner from "./components/barcodeReader";



const App = () => {
  const [decodedText, setDecodedText] = useState<string>("");
  const handleScanSuccess = (decodedText: string) => {
    console.log("Scanned text:", decodedText);
    setDecodedText(decodedText)
  };

  const handleScanError = (errorMessage: string) => {
    console.error("Error while scanning:", errorMessage);
  };

  return (
    <div>
      <h1>Barcode Scanner</h1>
      <BarcodeScanner onScanSuccess={handleScanSuccess} onScanError={handleScanError} />

    <div>
      <label htmlFor=""> {decodedText}</label>
    </div>
    </div>
  );
};

export default App;
