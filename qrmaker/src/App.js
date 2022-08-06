import BasicInput from "./ui/basic-input";
import { useState } from "react";
import QRCode from "qrcode";
import LiveQrCode from "./components/live-qr-code";
import "./App.css";

function App() {
  const [qrText, setQrText] = useState("");
  const [qrCode, setQrCode] = useState("");

  const generateQrCode = () => {
    QRCode.toDataURL(
      qrText,
      {
        width: 900,
        margin: 3,
      },
      (err, url) => {
        if (err) return console.log(err);
        setQrCode(url);
      }
    );
  };

  const handleQrCode = (e) => {
    setQrText(e.target.value);
    generateQrCode();
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div id="Title" className="col-lg-6">
          <h1>QR MAKER</h1>
          <h3>Enter your url and hit download to get your QR code.</h3>
        </div>
        <div id="right-col" className="col-lg-6">
          <div className="Maker">
            <h2>QR CODE</h2>
            <figure>
              <LiveQrCode value={qrText} className="LiveQrCode" />
            </figure>
            <h3>ENTER YOUR URL</h3>
            <input type="URL" value={qrText} onChange={handleQrCode} />
            <br />
            <a
              href={qrCode}
              className="badge badge-info"
              download={"NewQR.png"}
            >
              download
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
