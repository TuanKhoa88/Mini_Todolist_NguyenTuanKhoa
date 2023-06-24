import React from "react";
import Job from "./Job";

export default function Body({ handleEdit, handleDell, listJobs, handleFinish }) {
    return (
        <div className="body">
            <p style={{textAlign : "center"}}>You have <b style={{color :"red"}}>{listJobs.length}</b> jobs to finish</p>
            {listJobs.map((job, index) => (
                <Job job={job} key={index} handleEdit={handleEdit} handleFinish={handleFinish} handleDell={handleDell} />
            ))}
        </div>
    )
}
