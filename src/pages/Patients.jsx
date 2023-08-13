/* eslint-disable react/prop-types */
import PatientsList from "../components/PatientsList";

export default function Patients({ patients, removePatient, addPatient }) {
  return (
    <div className="patients-list position-relative p-2">
      <div className="row mb-3">
        <div className="col-md-9  mx-auto">
          {!patients.length && (
            <div className="display-1">Add Patients to Show Here.</div>
          )}
          <PatientsList patients={patients} removePatient={removePatient} />
        </div>
      </div>
      <div className="row">
        <div className="col text-center">
          <button className="btn btn-primary" onClick={() => addPatient()}>
            + Add Patient
          </button>
        </div>
      </div>
    </div>
  );
}
