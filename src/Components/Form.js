import React, { useState } from 'react';

const SampleForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        phone: '',
        gender: '',
        terms: false,
    });

    const [phoneNumbers, setPhoneNumbers] = useState([''])

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handlePhoneChange = (index, value) => {
        const newPhoneNumber = [...phoneNumbers];
        newPhoneNumber[index] = value;
        setPhoneNumbers(newPhoneNumber);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ ...formData, phoneNumbers });
    };

    const addPhoneField = (e) => {
        e.preventDefault();
        // Logic for adding a new phone field can go here
        setPhoneNumbers([...phoneNumbers, '']);
    };

    const removePhoneField = (indexToRemove) => {
        setPhoneNumbers(phoneNumbers.filter((_, index) => index !== indexToRemove));
    };


    return (
        <div className="my-5 px-4">
            <h2>Sample Form</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Address</label>
                    <input
                        type="text"
                        className="form-control"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">City</label>
                    <input
                        type="text"
                        className="form-control"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">State</label>
                    <select
                        className="form-select"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                    >
                        <option value="">Choose...</option>
                        <option value="CA">California</option>
                        <option value="TX">Texas</option>
                        <option value="NY">New York</option>
                        <option value="FL">Florida</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label className="form-label">ZIP Code</label>
                    <input
                        type="text"
                        className="form-control"
                        name="zip"
                        value={formData.zip}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Phone</label>
                    {phoneNumbers.map((phone, index) => (
                        <div key={index} className=" mb-2">
                            <input
                                key={index}
                                type="tel"
                                className='form-control mb-2'
                                name={`phones${index}`}
                                value={phone}
                                onChange={(e) => handlePhoneChange(index, e.target.value)}
                            />
                            {phoneNumbers.length > 1 && (
                            <button
                                type="button"
                                className="btn btn-danger m-1 d-flex align-items-center"
                                onClick={() => removePhoneField(index)}
                            >
                                Remove
                            </button>
                            )}
                        </div>
                    ))}

                    <button type="button" className="btn btn-primary m-2" onClick={addPhoneField}>
                        Add +
                    </button>
                </div>
                <div className="mb-3">
                    <label className="form-label">Gender</label>
                    <div>
                        <input
                            type="radio"
                            name="gender"
                            value="male"
                            checked={formData.gender === 'male'}
                            onChange={handleChange}
                        /> Male
                        <input
                            type="radio"
                            name="gender"
                            value="female"
                            checked={formData.gender === 'female'}
                            onChange={handleChange}
                            className="ms-3"
                        /> Female
                    </div>
                </div>
                <div className="mb-3 form-check">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        name="terms"
                        checked={formData.terms}
                        onChange={handleChange}
                    />
                    <label className="form-check-label">
                        Agree to terms and conditions
                    </label>
                </div>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default SampleForm;
