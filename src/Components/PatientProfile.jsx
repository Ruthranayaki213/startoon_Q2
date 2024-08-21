import React from "react";
import {
  FaUserCircle,
  FaPhoneAlt,
  FaEnvelope,
  FaLungs,
  FaStethoscope,
  FaNotesMedical,
  FaChartBar,
} from "react-icons/fa";
import { MdTrendingUp } from "react-icons/md";
import "./PatientProfile.css";

const PatientProfile = () => {
  const patientData = {
    name: "S. Meena",
    gender: "F",
    age: 23,
    patientId: "87 20200727153457",
    phone: "8022334455",
    email: "meenarabinsachin2@gmail.com",
    affectedSide: "Bilateral",
    condition: "Ortho",
    speciality: "Osteoarthritis",
    medicalHistory: ["Hypertension", "DM", "Hypothyroidism"],
    goalReached: 40,
  };

  return (
    <div className="profile-container">
      <div className="header">
        <button className="back-button">&larr;</button>
        <h2>View patient</h2>
      </div>

      <div className="patient-info">
        <div className="profile-details">
          <h3>
            {patientData.name}, {patientData.gender}/{patientData.age}
          </h3>
          <p className="patient-id">Patient ID: {patientData.patientId}</p>
        </div>
        <div className="profile-icon">
          <FaUserCircle size={50} />
        </div>
      </div>

      <div className="goal-section">
        <p className="goal-title">Goal reached</p>
        <div className="goal-circle-container">
          <div className="goal-circle">
            <div className="goal-percentage">
              <p>{patientData.goalReached}%</p>
            </div>
          </div>
          <div className="goal-labels">
            <div className="goal-label">
              <p>EMG</p>
              <FaChartBar size={20} />
            </div>
            <div className="goal-label">
              <p>ROM</p>
              <MdTrendingUp size={20} />
            </div>
          </div>
        </div>
      </div>

      <div className="contact-history-container">
        <div className="contact-details">
          <div className="contact-item">
            <strong>Phone no.</strong>
            <div className="contact-content">
              <FaPhoneAlt /> {patientData.phone}
            </div>
          </div>
          <div className="contact-item">
            <strong>Mail ID</strong>
            <div className="contact-content">
              <FaEnvelope /> {patientData.email}
            </div>
          </div>
          <div className="contact-item">
            <strong>Affected side</strong>
            <div className="contact-content">
              <FaLungs /> {patientData.affectedSide}
            </div>
          </div>
          <div className="contact-item">
            <strong>Condition</strong>
            <div className="contact-content">
              <FaStethoscope /> {patientData.condition}
            </div>
          </div>
          <div className="contact-item">
            <strong>Speciality</strong>
            <div className="contact-content">
              <FaNotesMedical /> {patientData.speciality}
            </div>
          </div>
        </div>

        <div className="medical-history">
          <hr className="section-divider" />
          <div className="medical-history-title">
            <FaNotesMedical /> <strong>Medical history</strong>
          </div>
          <p>{patientData.medicalHistory.join(", ")}</p>
          <hr className="section-divider" />
        </div>
      </div>
    </div>
  );
};

export default PatientProfile;
