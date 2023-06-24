import React from "react";
import Button from "react-bootstrap/Button";

export default function Job({ handleDell, handleEdit, handleFinish, job }) {
    return (
        <div className="job">
            <input checked={job.finish} type="checkbox" onChange={() => handleFinish({ type: "FINISH_JOB", jobId: job.jobId, })} />
            <p style={{ color: "#777777",width: "200px", overflow: "hidden", wordWrap: "break-word"}} className={`${job.finish ? "finish" : ""}`}>{job.job}</p>
            <div className="action_button">
                <Button variant="primary" onClick={() => handleEdit(job.jobId)}>EDIT</Button>
                <Button variant="danger" onClick={() => handleDell({ type: "DELL_JOB", jobId: job.jobId })}>DELL</Button>
            </div>
        </div>
    )
}

