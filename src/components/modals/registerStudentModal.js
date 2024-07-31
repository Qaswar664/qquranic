import React, { useState } from 'react';
import { Form, Button, Col, Row } from 'react-bootstrap';
import axios from 'axios';

const RegisterStudentModal = ({ id }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        gender: '',
        country: '',
        timeZone: '',
        city: '',
        tutorGender: '',
        hourlyRate: '',
        subjects: {
            english: false,
            urdu: false,
            math: false,
            physics: false,
        },
    });

    const [validated, setValidated] = useState(false);
    const [step, setStep] = useState(1);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === 'checkbox') {
            setFormData({
                ...formData,
                subjects: { ...formData.subjects, [name]: checked },
            });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleNextStep = async () => {
        if (step === 1) {
            try {
                const response = await axios.post('http://localhost:8000/api/v1/register', {
                    name: formData.name,
                    email: formData.email,
                    password: formData.password,
                    gender: formData.gender,
                    role:"Student",
                    city: formData.city,
                });
                if (response.status === 200) {
                    setStep(step + 1);
                }
            } catch (error) {
                console.error('There was an error!', error);
            }
        } else {
            setStep(step + 1);
        }
    };

    const handlePrevStep = () => {
        setStep(step - 1);
    };

    const handleSubmit = (e) => {
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        } else {
            e.preventDefault();
            console.log(formData);
        }

        setValidated(true);
    };

    return (
        <div className="modal fade" id="studentModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header border-0">
                        <button type="button" className="btn-close px-3 pt-3" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body px-5">
                        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                            {step === 1 && (
                                <>
                                    <Form.Group controlId="formName">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter name"
                                            name="name"
                                            className='my-2'
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Please enter a name.
                                        </Form.Control.Feedback>
                                    </Form.Group>

                                    <Form.Group controlId="formEmail">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control
                                            type="email"
                                            placeholder="Enter email"
                                            name="email"
                                            className='my-2'
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Please enter a valid email.
                                        </Form.Control.Feedback>
                                    </Form.Group>

                                    <Form.Group controlId="formPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control
                                            type="password"
                                            placeholder="Enter password"
                                            name="password"
                                            className='my-2'
                                            value={formData.password}
                                            onChange={handleChange}
                                            required
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Please enter a password.
                                        </Form.Control.Feedback>
                                    </Form.Group>

                                    <Form.Group controlId="formGender">
                                        <Form.Label>Gender</Form.Label>
                                        <Form.Select
                                            aria-label="Select gender"
                                            name="gender"
                                            className='my-2'
                                            value={formData.gender}
                                            onChange={handleChange}
                                            required
                                        >
                                            <option value="" disabled hidden>Select gender</option>
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                            <option value="other">Other</option>
                                        </Form.Select>
                                        <Form.Control.Feedback type="invalid">
                                            Please select a gender.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group controlId="formCity">
                                        <Form.Label>City</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter city"
                                            name="city"
                                            className='my-2'
                                            value={formData.city}
                                            onChange={handleChange}
                                            required
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Please enter a city.
                                        </Form.Control.Feedback>
                                    </Form.Group>

                                    <Button className='my-4 p-3 w-25 tutor-btn' onClick={handleNextStep}>
                                        Next
                                    </Button>
                                </>
                            )}

                            {step === 2 && (
                                <>
                                    <Form.Group controlId="formCountry">
                                        <Form.Label>Country</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter country"
                                            name="country"
                                            className='my-2'
                                            value={formData.country}
                                            onChange={handleChange}
                                            required
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Please enter a country.
                                        </Form.Control.Feedback>
                                    </Form.Group>

                                    <Form.Group controlId="formTimeZone">
                                        <Form.Label>Time Zone</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter time zone"
                                            name="timeZone"
                                            className='my-2'
                                            value={formData.timeZone}
                                            onChange={handleChange}
                                            required
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Please enter a time zone.
                                        </Form.Control.Feedback>
                                    </Form.Group>

                                    <Form.Group controlId="formTutorGender">
                                        <Form.Label>Tutor Gender</Form.Label>
                                        <Form.Select
                                            aria-label="Select tutor gender"
                                            name="tutorGender"
                                            className='my-2'
                                            value={formData.tutorGender}
                                            onChange={handleChange}
                                            required
                                        >
                                            <option value="" disabled hidden>
                                                Select tutor gender
                                            </option>
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                            <option value="either">Either</option>
                                        </Form.Select>
                                        <Form.Control.Feedback type="invalid">
                                            Please select a tutor gender.
                                        </Form.Control.Feedback>
                                    </Form.Group>

                                    <Form.Group controlId="formHourlyRate">
                                        <Form.Label>Hourly Rate</Form.Label>
                                        <Form.Select
                                            aria-label="Select hourly rate"
                                            name="hourlyRate"
                                            className='my-2'
                                            value={formData.hourlyRate}
                                            onChange={handleChange}
                                            required
                                        >
                                            <option value="" disabled hidden>Select hourly rate</option>
                                            <option value="3-5">$3-5</option>
                                            <option value="5-10">$5-10</option>
                                            <option value="10+">$10+</option>
                                        </Form.Select>
                                        <Form.Control.Feedback type="invalid">
                                            Please select an hourly rate.
                                        </Form.Control.Feedback>
                                    </Form.Group>

                                    <Form.Group className='mb-3'>
                                        <Form.Label className='mb-2'>Subjects</Form.Label>
                                        <div className='d-flex align-items-center gap-3'>
                                            <Form.Check
                                                type="checkbox"
                                                label="English"
                                                name="english"
                                                className='mx-2 d-flex align-items-center gap-3'
                                                checked={formData.subjects.english}
                                                onChange={handleChange}
                                            />
                                            <Form.Check
                                                type="checkbox"
                                                label="Urdu"
                                                name="urdu"
                                                className='mx-2 d-flex align-items-center gap-3'
                                                checked={formData.subjects.urdu}
                                                onChange={handleChange}
                                            />
                                            <Form.Check
                                                type="checkbox"
                                                label="Math"
                                                name="math"
                                                className='mx-2 d-flex align-items-center gap-3'
                                                checked={formData.subjects.math}
                                                onChange={handleChange}
                                            />
                                            <Form.Check
                                                type="checkbox"
                                                label="Physics"
                                                name="physics"
                                                className='mx-2 d-flex align-items-center gap-3'
                                                checked={formData.subjects.physics}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </Form.Group>

                                    <Button variant="secondary" className='my-2 p-3 w-25' onClick={handlePrevStep}>
                                        Previous
                                    </Button>
                                    <Button type="submit" className="tutor-btn ms-2 my-2 p-3 w-25">
                                        Submit
                                    </Button>
                                </>
                            )}
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterStudentModal;
