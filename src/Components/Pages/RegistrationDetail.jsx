import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function RegistrationDetails() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    institution: "",
    category: "",
    paymentMethod: "",
  });
  const [errors, setErrors] = useState({});

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Validate form fields
  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName) newErrors.fullName = "Full name is required.";
    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format.";
    }
    if (!formData.institution) newErrors.institution = "Institution is required.";
    if (!formData.category) newErrors.category = "Category is required.";
    if (!formData.paymentMethod) newErrors.paymentMethod = "Payment method is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", formData);
      setIsModalOpen(false); // Close modal after submission
    }
  };

  return (
    <section className="bg-gray-100 px-6 py-10">
      <div className="max-w-6xl mx-auto">
   
        {/* Title */}
        <h2 className="text-3xl font-bold text-green-700 mb-6">Registration Details</h2>

        {/* Registration Fees Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Registration Fees</h3>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <table className="w-full text-left">
              <thead className="text-md lg:text-lg">
                <tr className="border-b">
                  <th className="py-2">Category</th>
                  <th className="py-2">Early Bird (Before Dec 1, 2025)</th>
                  <th className="py-2">Regular (After Dec 1, 2025)</th>
                </tr>
              </thead>
              <tbody className="text-lg lg:text-[19px]">
                <tr className="border-b">
                  <td className="py-2">Students</td>
                  <td className="py-2">$100</td>
                  <td className="py-2">$150</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">Faculty</td>
                  <td className="py-2">$200</td>
                  <td className="py-2">$250</td>
                </tr>
                <tr>
                  <td className="py-2">Industry Professionals</td>
                  <td className="py-2">$300</td>
                  <td className="py-2">$350</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Payment Methods Section */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Payment Methods</h3>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <ul className="list-disc pl-6 text-gray-700 text-lg lg:text-[19px]">
              <li>Credit Card (Visa, MasterCard, American Express)</li>
              <li>Bank Transfer (Details provided upon registration)</li>
              <li>PayPal (Available for international participants)</li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}