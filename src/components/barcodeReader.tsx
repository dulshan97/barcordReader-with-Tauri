// BarcodeScanner.tsx
import React, { useEffect } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";

interface BarcodeScannerProps {
  onScanSuccess: (decodedText: string) => void;
  onScanError?: (errorMessage: string) => void;
}

const BarcodeScanner: React.FC<BarcodeScannerProps> = ({
  onScanSuccess,
  onScanError,
}) => {
  useEffect(() => {
    const scanner = new Html5QrcodeScanner(
      "reader", 
      { fps: 10, qrbox: { width: 250, height: 250 } }, 
      false
    );

    scanner.render(
      (decodedText) => {
        onScanSuccess(decodedText);
      },
      (error) => {
        if (onScanError) {
          onScanError(error);
        }
      }
    );

    return () => {
      scanner.clear();
    };
  }, [onScanSuccess, onScanError]);

  return <div id="reader" style={{ width: "100%" }} />;
};

export default BarcodeScanner;
