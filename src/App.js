import React, { useRef, useState } from "react";
import Modal from "./components/Modal";
import Tooltip from "./components/Tooltip";
import Toast from "./components/Toast";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const buttonRef = useRef();
  const toastButtonRef = useRef()

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>🧩 React Portals Real-World Demo</h1>

      {/* Modal Button */}
      <button onClick={() => setIsModalOpen(true)}>Open Modal</button>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2>Modal Popup</h2>
        <p>This modal is rendered outside the App's DOM hierarchy.</p>
      </Modal>

      <br /><br />

      {/* Tooltip Button */}
      <button
        ref={buttonRef}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        Hover Me for Tooltip
      </button>
      {showTooltip && <Tooltip targetRef={buttonRef} message="I'm a tooltip!" />}

      <br /><br />

      {/* Toast Button */}
      <button ref={toastButtonRef} onClick={() => setShowToast(true)}
          onMouseEnter={() => setShowToast(true)}
        onMouseLeave={() => setShowToast(false)}
        >Show Toast</button>
      {showToast && (
        <Toast
          targetRef={toastButtonRef}
          message="Action Successful!"
          onClose={() => setShowToast(false)}
        />
      )}
    </div>
  );
};

export default App;
