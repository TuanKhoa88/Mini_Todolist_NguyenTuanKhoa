import './App.css';
import React, { useReducer, useState } from 'react';
import Header from './Components/Header';
import Body from './Components/Body';

export default function App() {
  const initState = JSON.parse(localStorage.getItem("listjobs")) || [];
  const [editingGig, setEditingGig] = useState(null);
  const handleEdit = (id) => {
    const editJob = initState.find((job) => job.jobId === id);
    setEditingGig(editJob);
  };
  function reducer(state, action) {
    switch (action.type) {
      case "ADD_JOB":
        localStorage.setItem("listjobs", JSON.stringify([...state, action.newjob]));
        return [...state, action.newjob];
      case "UPDATE_JOB":
        const updatejob = state.map((job) => {
          if (job.jobId === action.jobUpdate.jobId) {
            return action.jobUpdate;
          }
          return job;
        })
        localStorage.setItem("listjobs", JSON.stringify(updatejob));
        return updatejob;

      case "FINISH_JOB":
        const finishjob = state.map((job) => {
          if (job.jobId === action.jobId) {
            return { ...job, finish: !job.finish }
          } else {
            return job;
          }
        })
        localStorage.setItem("listjobs", JSON.stringify(finishjob));
        return finishjob;
      case "DELL_JOB":
        const delljob = state.filter(
          (job) => job.jobId !== action.jobId
        );
        localStorage.setItem("listjobs", JSON.stringify(delljob));
        return delljob;
      default:
        return state
    }
  }
  const [state, dispatch] = useReducer(reducer, initState);
  return (
    <div>
      <Header editingGig={editingGig} handleAdd={dispatch} listJobs={state} handleUpdate={dispatch}></Header>
      <Body listJobs={state} handleDell={dispatch} handleFinish={dispatch} handleEdit={handleEdit}></Body>
    </div>
  )
}
