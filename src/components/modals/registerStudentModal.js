// import React, { useState } from 'react';
// import "./registerStudentModal.css";

// const RegisterStudentModal = ({ id }) => {
//     const [currentStep, setCurrentStep] = useState(0);
//     const [formData, setFormData] = useState({});
//     const [errors, setErrors] = useState({});

//     const steps = [
//         {
//             title: "Sign up as a Student",
//             fields: [
//                 { name: "name", placeholder: "Name", type: "text" },
//                 { name: "email", placeholder: "Email", type: "email" },
//                 { name: "password", placeholder: "Password", type: "password" },
//                 { name: "termsAgreed", placeholder: "I have read and agree to the terms of use", type: "checkbox" }
//             ]
//         },
//         {
//             title: "Help us customize your experience",
//             subtitle: "Add Timezone",
//             fields: [
//                 { name: "studentGender", placeholder: "Gender", type: "text" },
//                 { name: "country", placeholder: "Country", type: "text" },
//                 { name: "timeZone", placeholder: "Time Zone", type: "text" },
//                 { name: "city", placeholder: "City", type: "text" }
//             ]
//         },
//         {
//             title: "Help us customize your experience",
//             subtitle: "Add Preferences",
//             fields: [
//                 { name: "tutorGender", placeholder: "Tutor Gender Preference", type: "text" },
//                 { name: "hourlyRate", placeholder: "Hourly Rate", type: "number" },
//                 { name: "subjects", placeholder: "Subjects", type: "text" }
//             ]
//         }
//     ];

//     const handleChange = (e) => {
//         const { name, value, type, checked } = e.target;
//         setFormData({
//             ...formData,
//             [name]: type === "checkbox" ? checked : value,
//         });
//         if (errors[name]) {
//             setErrors({
//                 ...errors,
//                 [name]: "",
//             });
//         }
//     };

//     const handleNext = () => {
//         const currentFields = steps[currentStep].fields;
//         const newErrors = {};

//         currentFields.forEach((field) => {
//             if (!formData[field.name] || (field.type === 'checkbox' && !formData[field.name])) {
//                 newErrors[field.name] = `${field.placeholder} is required`;
//             }
//         });

//         if (Object.keys(newErrors).length > 0) {
//             setErrors(newErrors);
//         } else {
//             setCurrentStep(currentStep + 1);
//         }
//     };

//     const handlePrevious = () => {
//         if (currentStep > 0) {
//             setCurrentStep(currentStep - 1);
//         }
//     };

//     return (
//         <div className="modal fade" id="studentModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//             <div className="modal-dialog modal-dialog-centered">
//                 <div className="modal-content">
//                     <div className="modal-header border-0">
//                         <button type="button" className="btn-close p-3" data-bs-dismiss="modal" aria-label="Close"></button>
//                     </div>
//                     <div className="modal-body">
//                         <h2 className="fs-title">{steps[currentStep].title}</h2>
//                         <h3 className="fs-subtitle">{steps[currentStep].subtitle}</h3>
//                         <form id="msform">
//                             <fieldset>
//                                 {steps[currentStep].fields.map((field, index) => (
//                                     <div key={index} className="mb-4">
//                                         {field.type === 'checkbox' ? (
//                                             <div className="form-check d-flex flex-column ">
//                                                 <div className='d-flex justify-content-start '>
//                                                     <input
//                                                         type="checkbox"
//                                                         name={field.name}
//                                                         className="form-check-input"
//                                                         id={field.name}
//                                                         checked={formData[field.name] || false}
//                                                         onChange={handleChange}
//                                                     />
//                                                     <label className="form-check-label px-4 pt-2" htmlFor={field.name}>
//                                                         {field.placeholder}
//                                                     </label>
//                                                 </div>
//                                                 <div>
//                                                     {errors[field.name] && <div className="text-danger text-start">{errors[field.name]}</div>}
//                                                 </div>
//                                             </div>
//                                         ) : (
//                                             <div>
//                                                 <input
//                                                     type={field.type}
//                                                     name={field.name}
//                                                     placeholder={field.placeholder}
//                                                     className="form-control"
//                                                     value={formData[field.name] || ''}
//                                                     onChange={handleChange}
//                                                 />
//                                                 {errors[field.name] && <div className="text-danger text-start">{errors[field.name]}</div>}
//                                             </div>
//                                         )}
//                                     </div>
//                                 ))}
//                                 <div className="button-group d-flex">
//                                     {currentStep > 0 && (
//                                         <button type="button" className="btn btn-secondary w-25" onClick={handlePrevious}>Previous</button>
//                                     )}
//                                     {currentStep < steps.length - 1 ? (
//                                         <button type="button" className="btn btn-success w-25 mx-4" onClick={handleNext}>Next</button>
//                                     ) : (
//                                         <button type="submit" className="btn btn-success w-25 mx-4">Submit</button>
//                                     )}
//                                 </div>
//                             </fieldset>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default RegisterStudentModal;








import React, { useState } from 'react';
import Joi from 'joi';
import "./registerStudentModal.css";

const RegisterStudentModal = ({ id }) => {
    const [currentStep, setCurrentStep] = useState(0);
    const [formData, setFormData] = useState({});
    const [errors, setErrors] = useState({});

    const steps = [
        {
            title: "Sign up as a Student",
            fields: [
                { name: "name", placeholder: "Name", type: "text" },
                { name: "email", placeholder: "Email", type: "email" },
                { name: "password", placeholder: "Password", type: "password" },
                { name: "termsAgreed", placeholder: "I have read and agree to the terms of use", type: "checkbox" }
            ]
        },
        {
            title: "Help us customize your experience",
            subtitle: "Add Timezone",
            fields: [
                { name: "studentGender", placeholder: "Gender", type: "text" },
                { name: "country", placeholder: "Country", type: "text" },
                { name: "timeZone", placeholder: "Time Zone", type: "text" },
                { name: "city", placeholder: "City", type: "text" }
            ]
        },
        {
            title: "Help us customize your experience",
            subtitle: "Add Preferences",
            fields: [
                { name: "tutorGender", placeholder: "Tutor Gender Preference", type: "text" },
                { name: "hourlyRate", placeholder: "Hourly Rate", type: "number" },
                { name: "subjects", placeholder: "Subjects", type: "text" }
            ]
        }
    ];

    const signUpEmailValidation = Joi.object({
        name: Joi.string().min(3).max(50).required(),
        email: Joi.string().email({ tlds: { allow: false } }).required(),
        password: Joi.string().min(6).max(20).required(),
        termsAgreed: Joi.boolean().required()
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
        if (errors[name]) {
            setErrors({
                ...errors,
                [name]: "",
            });
        }
    };

    const validateCurrentStep = () => {
        const currentFields = steps[currentStep].fields.map(field => field.name);
        const schema = signUpEmailValidation.fork(currentFields, (schema) => schema);
        const { error } = schema.validate(formData, { abortEarly: false });
        if (error) {
            const newErrors = {};
            error.details.forEach(detail => {
                newErrors[detail.path[0]] = detail.message;
            });
            setErrors(newErrors);
            return false;
        }
        return true;
    };

    const handleNext = () => {
        if (validateCurrentStep()) {
            setCurrentStep(currentStep + 1);
        }
    };

    const handlePrevious = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateCurrentStep()) {
            // Perform the final submission logic here
            console.log('Form submitted', formData);
        }
    };

    return (
        <div className="modal fade" id="studentModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header border-0">
                        <button type="button" className="btn-close p-3" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <h2 className="fs-title">{steps[currentStep].title}</h2>
                        <h3 className="fs-subtitle">{steps[currentStep].subtitle}</h3>
                        <form id="msform" onSubmit={handleSubmit}>
                            <fieldset>
                                {steps[currentStep].fields.map((field, index) => (
                                    <div key={index} className="mb-4">
                                        {field.type === 'checkbox' ? (
                                            <div className="form-check d-flex flex-column">
                                                <div className='d-flex justify-content-start'>
                                                    <input
                                                        type="checkbox"
                                                        name={field.name}
                                                        className="form-check-input"
                                                        id={field.name}
                                                        checked={formData[field.name] || false}
                                                        onChange={handleChange}
                                                    />
                                                    <label className="form-check-label px-4 pt-2" htmlFor={field.name}>
                                                        {field.placeholder}
                                                    </label>
                                                </div>
                                                <div>
                                                    {errors[field.name] && <div className="text-danger text-start">{errors[field.name]}</div>}
                                                </div>
                                            </div>
                                        ) : (
                                            <div>
                                                <input
                                                    type={field.type}
                                                    name={field.name}
                                                    placeholder={field.placeholder}
                                                    className="form-control"
                                                    value={formData[field.name] || ''}
                                                    onChange={handleChange}
                                                />
                                                {errors[field.name] && <div className="text-danger text-start">{errors[field.name]}</div>}
                                            </div>
                                        )}
                                    </div>
                                ))}
                                <div className="button-group d-flex">
                                    {currentStep > 0 && (
                                        <button type="button" className="btn btn-secondary w-25" onClick={handlePrevious}>Previous</button>
                                    )}
                                    {currentStep < steps.length - 1 ? (
                                        <button type="button" className="btn btn-success w-25 mx-4" onClick={handleNext}>Next</button>
                                    ) : (
                                        <button type="submit" className="btn btn-success w-25 mx-4">Submit</button>
                                    )}
                                </div>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterStudentModal;
