import React from "react";
import "./styles/ConfirmDeleteModal.css";

interface Props {
  open: boolean;
  onCancel: () => void;
  onConfirm: () => void;
}

const ConfirmDeleteModal: React.FC<Props> = ({ open, onCancel, onConfirm }) => {
  if (!open) return null;

  return (
    <div className="modal-backdrop">
      <div className="modal-box">
        <h3>Delete Address?</h3>
        <p>Are you sure you want to delete this address?</p>

        <div className="modal-actions">
          <button className="cancel-btn" onClick={onCancel}>
            Cancel
          </button>
          <button className="delete-btn" onClick={onConfirm}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDeleteModal;
