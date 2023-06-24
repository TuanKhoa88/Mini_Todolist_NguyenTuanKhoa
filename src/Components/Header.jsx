import { Button, Container, Form, Navbar } from 'react-bootstrap';
import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';

function Header({ editingGig, handleAdd, handleUpdate }) {
    const [job, setJob] = useState("");
    useEffect(() => {
        if (editingGig) {
            setJob(editingGig.job);
        } else {
            setJob("");
        }
    }, [editingGig]);
    const uuid = uuidv4();
    const handleAddJob = () => {
        if (job !== "") {
            handleAdd({
                type: "ADD_JOB",
                newjob: {
                    jobId: uuid,
                    job,
                    finish: false,
                },
            });
            setJob("");
        } else {
            alert("Please enter your Job!");
        }
    };
    const handleUpdateJob = () => {
        handleUpdate({
            type: "UPDATE_JOB",
            jobUpdate: {
                jobId: editingGig.jobId,
                job,
                finish: editingGig.finish,
            },
        });
        setJob("");
        window.location.reload(); 
    };

    return (
        <Navbar expand="lg" className="bg-primary text-white">
            <Container fluid>
                <Navbar.Brand href="#" style={{ color: 'white' }}>
                    Mini Project
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Form className="d-flex align-items-center">
                        <div className="position-relative">
                            <Navbar.Toggle
                                className="position-absolute top-50 translate-middle-y custom-toggler-icon"
                                aria-controls="navbarScroll"
                            >
                                <span className="navbar-toggler-icon"></span>
                                <i className="fa-solid fa-bars"></i>
                            </Navbar.Toggle>
                            <Form.Control
                                type="text"
                                placeholder="New Task"
                                className="me-2 rounded-0"
                                style={{ width: '300px' }}
                                value={job}
                                onChange={(e) => setJob(e.target.value)}
                            />
                        </div>
                        {!editingGig ? (
                            <Button
                                variant="light"
                                style={{ fontSize: "22px", border: 'none', backgroundColor: 'transparent' }}
                                className="custom-button"
                                onClick={handleAddJob}
                            >
                                <i className="fa-solid fa-plus"></i>
                            </Button>
                        ) : (
                            <Button
                                variant="light"
                                style={{ fontSize: "22px", border: 'none', backgroundColor: 'transparent' }}
                                className="custom-button"
                                onClick={handleUpdateJob}
                            >
                                <i className="fa-solid fa-pen"></i>
                            </Button>
                        )}
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
