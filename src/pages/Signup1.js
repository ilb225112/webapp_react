import React, { useState } from 'react';
import '../assets/styles/signup.css';

const Signup1 = () => {
    // State variables for form fields
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        phone: '',
        email: '',
        gender: '',
        password: '',
        storeName: '',
        address: '',
        aadhaarNo: '',
        profession: '',
        isRetailer: false
    });

    // Handle input change for form fields
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    // Function to handle the toggle switch specifically
    const handleToggleRetailer = () => {
        setFormData((prevData) => ({
            ...prevData,
            isRetailer: !prevData.isRetailer // Toggle the isRetailer state
        }));
    };

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        const signupData = {
            name: formData.name,
            age: formData.age,
            phone: formData.phone,
            email: formData.email,
            gender: formData.gender,
            password: formData.password,
            isRetailer: formData.isRetailer ? 'yes' : 'no',
            retailerDetails: formData.isRetailer ? {
                storeName: formData.storeName,
                address: formData.address,
                aadhaarNo: formData.aadhaarNo,
                profession: formData.profession
            } : {}
        };

        console.log(signupData);

        // Redirect to login page (adjust route as needed)
        window.location.href = "/login";
    };

    return (
        <div className="form">
            <img src="logo_image.png" alt="logo" id="form-logo" />

            <form onSubmit={handleSubmit}>
                <div className="form-user">
                    <div className="fieldsets-container">
                        {/* User Details Fieldset */}
                        <fieldset id="fieldset-user">
                            <legend>User Details</legend>
                            <div className="fields">
                                <label htmlFor="name">Name</label>
                                <input type="text" id="name" name="name" placeholder="Enter your name" required value={formData.name} onChange={handleChange} />
                            </div>
                            <div className="fields">
                                <label htmlFor="age">Age</label>
                                <input type="number" id="age" name="age" min="0" placeholder="Enter your age" required value={formData.age} onChange={handleChange} />
                            </div>
                            <div className="fields">
                                <label htmlFor="phone">Phone</label>
                                <input type="tel" id="phone" name="phone" placeholder="Enter your phone number" required pattern="[6-9]{1}[0-9]{9}" value={formData.phone} onChange={handleChange} />
                            </div>
                            <div className="fields">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" name="email" placeholder="Enter your email address" required value={formData.email} onChange={handleChange} />
                            </div>
                            <div className="fields">
                                <label htmlFor="gender">Gender</label>
                                <select id="gender" name="gender" required value={formData.gender} onChange={handleChange}>
                                    <option value="">Select...</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                            <div className="fields">
                                <label htmlFor="password">Password</label>
                                <input type="password" id="password" name="password" placeholder="Enter your new password" required value={formData.password} onChange={handleChange} />
                            </div>
                        </fieldset>

                        {/* Retailer Information Fieldset */}
                        <fieldset id="fieldset-retailer">
                            <legend>Information</legend>
                            <div className="switch-container">
                                <label htmlFor="retailerToggle">Do you want to be a retailer?</label>
                                <label className="switch">
                                    <input
                                        type="checkbox"
                                        id="retailerToggle"
                                        name="isRetailer"
                                        checked={formData.isRetailer}
                                        onChange={handleToggleRetailer} // Toggle function here
                                    />
                                    <span className="slider"></span>
                                </label>
                            </div>

                            {!formData.isRetailer && (
                                <div id="description">
                                    <p>Welcome to our platform! Join us as a retailer and expand your business.</p>
                                    <div className="toggle-section">
                                        <a href="/login">Already have an account? Login here</a>
                                    </div>
                                </div>
                            )}

                            {formData.isRetailer && (
                                <div id="retailer-details">
                                    <div className="fields">
                                        <label htmlFor="storeName">Store Name</label>
                                        <input type="text" id="storeName" name="storeName" placeholder="Enter your store name" required value={formData.storeName} onChange={handleChange} />
                                    </div>
                                    <div className="fields">
                                        <label htmlFor="address">Address</label>
                                        <textarea id="address" name="address" rows="4" cols="36" placeholder="Enter your address" required value={formData.address} onChange={handleChange}></textarea>
                                    </div>
                                    <div className="fields">
                                        <label htmlFor="aadhaarNo">Aadhaar Number</label>
                                        <input type="text" id="aadhaarNo" name="aadhaarNo" placeholder="Enter your Aadhaar number" pattern="[0-9]{12}" maxLength="12" required value={formData.aadhaarNo} onChange={handleChange} />
                                    </div>
                                    <div className="fields">
                                        <label htmlFor="profession">Profession</label>
                                        <select id="profession" name="profession" required value={formData.profession} onChange={handleChange}>
                                            <option value="">Select your profession...</option>
                                            <option value="cook">Cook</option>
                                            <option value="photographer">Photographer</option>
                                            <option value="videographer">Videographer</option>
                                            <option value="vendor">Vendor</option>
                                            <option value="artist">Artist</option>
                                            <option value="function_hall_owner">Function Hall Owner</option>
                                        </select>
                                    </div>
                                </div>
                            )}
                        </fieldset>
                    </div>

                    {/* Agreement and Submit Button */}
                    <div className="fields">
                        <label>
                            <input type="checkbox" id="check" required />
                            <span>Agree to <a href="#">terms and conditions</a></span>
                        </label>
                    </div>

                    <button type="submit" id="signUpButton">Sign Up</button>
                </div>
            </form>
        </div>
    );
};

export default Signup1;
