// src/components/StudentEmailVerificationModal.js
import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import axios from "axios";
import VerificationInput from "react-verification-input";


const StudentEmailVerificationModal = ({ show, onHide }) => {
  const [code, setCode] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCodeChange = (value) => {
    setCode(value);
  };

  const handleVerifyCode = async () => {
    setIsSubmitting(true);
    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/verify-email",
        { code }
      );
      if (response.status === 200) {
        toast.success("Email verified successfully!");
        onHide(); 
      } else {
        toast.error("Invalid verification code.");
      }
    } catch (error) {
      toast.error("Error verifying code.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton className="border-0"></Modal.Header>
      <Modal.Body className="d-flex justify-content-center border-0">
        <VerificationInput
          length={6}
          onChange={handleCodeChange}
          placeholder="_"
          autoFocus
        />
      </Modal.Body>
      <Modal.Footer className="border-0 d-flex justify-content-center">
        <Button
          variant="primary"
          className="my-4 ms-2 p-3 w-50 tutor-btn"
          onClick={handleVerifyCode}
          disabled={isSubmitting}
        >
          Verify email
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default StudentEmailVerificationModal;
