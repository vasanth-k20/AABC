import "@fortawesome/fontawesome-free/css/all.min.css";
import { useState } from "react";

export default function PaperSubmission() {
    const [formData, setFormData] = useState({
        Papertitle: '',
        AuthorFullName: '',
        AuthorEmail: '',
        AuthorInstitution: '',
        AuthorCategory: '',
        AuthorAbstract: '',
        PaperFile: null,
    });

    const [errors, setErrors] = useState({});
    const [message, setMessage] = useState('');
    const [messageType, setMessageType] = useState('');

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'PaperFile') {
            setFormData({ ...formData, PaperFile: files[0] });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        let newErrors = {};
    
        if (!formData.Papertitle.trim()) newErrors.Papertitle = "Paper Title is required";
        if (!formData.AuthorFullName.trim()) newErrors.AuthorFullName = "Author Full Name is required";
        if (!formData.AuthorEmail.trim()) newErrors.AuthorEmail = "Author Email Address is required";
        if (!formData.AuthorInstitution.trim()) newErrors.AuthorInstitution = "Author Institution Name is required";
        if (!formData.AuthorCategory.trim()) newErrors.AuthorCategory = "Author Category is required";
        if (!formData.AuthorAbstract.trim()) newErrors.AuthorAbstract = "Author Abstract is required";
        if (!formData.PaperFile) newErrors.PaperFile = "Paper File is required";
    
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }
    
        setErrors({});
    
        const formDataToSend = new FormData();
        formDataToSend.append('title', formData.Papertitle);
        formDataToSend.append('fullName', formData.AuthorFullName);
        formDataToSend.append('email', formData.AuthorEmail);
        formDataToSend.append('institution', formData.AuthorInstitution);
        formDataToSend.append('category', formData.AuthorCategory);
        formDataToSend.append('abstract', formData.AuthorAbstract);
        formDataToSend.append('file', formData.PaperFile);
    
        try {
            const response = await fetch('http://localhost:5000/api/submit-paper', {
                method: 'POST',
                body: formDataToSend,
            });
    
            // Check if the response is JSON
            const contentType = response.headers.get("content-type");
            if (contentType && contentType.includes("application/json")) {
                const result = await response.json();
    
                if (response.ok) {
                    setMessage(result.message || "Paper submitted successfully!");
                    setMessageType('alert-success');
                    setFormData({
                        Papertitle: '',
                        AuthorFullName: '',
                        AuthorEmail: '',
                        AuthorInstitution: '',
                        AuthorCategory: '',
                        AuthorAbstract: '',
                        PaperFile: null,
                    });
                } else {
                    setMessage(result.error || "Paper submission failed.");
                    setMessageType('alert-danger');
                }
            } else {
                // Handle non-JSON responses
                const textResponse = await response.text();
                setMessage(textResponse || "Paper submission failed.");
                setMessageType('alert-danger');
            }
        } catch (error) {
            console.error('Error submitting paper:', error);
            setMessage('An error occurred while submitting your paper.');
            setMessageType('alert-danger');
        }
    };



    return (
        <section>
             <div className="pt-10 px-06 md:px-20 w-full xl:w-[70%] mx-auto">
                {/* Title */}
             <h2 className="text-3xl font-bold text-green-700 mb-6">Paper Submission</h2>
             </div>
            {/* Main Content Section */}
            <div className="w-full xl:w-[65%] px-4 mb-10 flex flex-col lg:flex-row gap-8 items-center justify-center mx-auto ">
                {/* Submission Form (Left Side) */}
                <div className="w-full lg:w-2/3 bg-white shadow-lg rounded-2xl p-8 border-t-4 border-b-4 border-green-500">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Submit Your Paper</h2>
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        {/* Paper Title */}
                        <div>
                            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                                Paper Title
                            </label>
                            <input
                                type="text"
                                id="Papertitle"
                                name="Papertitle"
                                value={formData.Papertitle}
                                onChange={handleChange}
                                placeholder="Enter the title of your paper"
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-1 focus:ring-green-600 focus:border-green-600 focus:outline-none"
                                required
                            />
                            {errors.Papertitle && <div className="text-red-500 text-sm mt-1">{errors.Papertitle}</div>}
                        </div>

                        {/* Author(s) */}
                        <div>
                            <label htmlFor="authors" className="block text-sm font-medium text-gray-700">
                                Author(s)
                            </label>
                            <input
                                type="text"
                                id="AuthorFullName"
                                name="AuthorFullName"
                                value={formData.AuthorFullName}
                                onChange={handleChange}
                                placeholder="Enter the name of the author's"
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-1 focus:ring-green-600 focus:border-green-600 focus:outline-none"
                                required
                            />
                            {errors.AuthorFullName && <div className="text-red-500 text-sm mt-1">{errors.AuthorFullName}</div>}
                        </div>

                        {/* Author's Email */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Author's Email
                            </label>
                            <input
                                type="email"
                                id="AuthorEmail"
                                name="AuthorEmail"
                                value={formData.AuthorEmail}
                                onChange={handleChange}
                                placeholder="Enter the author's email"
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-1 focus:ring-green-600 focus:border-green-600 focus:outline-none"
                                required
                            />
                            {errors.AuthorEmail && <div className="text-red-500 text-sm mt-1">{errors.AuthorEmail}</div>}
                        </div>

                        {/* Author's Institution */}
                        <div>
                            <label htmlFor="institution" className="block text-sm font-medium text-gray-700">
                                Author's Institution
                            </label>
                            <input
                                type="text"
                                id="AuthorInstitution"
                                name="AuthorInstitution"
                                value={formData.AuthorInstitution}
                                onChange={handleChange}
                                placeholder="Enter the author's institution"
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-1 focus:ring-green-600 focus:border-green-600 focus:outline-none"
                                required
                            />
                            {errors.AuthorInstitution && <div className="text-red-500 text-sm mt-1">{errors.AuthorInstitution}</div>}
                        </div>

                        {/* Author's Category */}
                        <div>
                            <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                                Author's Category
                            </label>
                            <select
                                id="AuthorCategory"
                                name="AuthorCategory"
                                value={formData.AuthorCategory}
                                onChange={handleChange}
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-1 focus:ring-green-600 focus:border-green-600 focus:outline-none"
                                required
                            >
                                <option value="">Select Category</option>
                                <option value="student">Student</option>
                                <option value="researcher">Researcher</option>
                                <option value="faculty">Faculty</option>
                                <option value="industry">Industry Professional</option>
                            </select>
                            {errors.AuthorCategory && <div className="text-red-500 text-sm mt-1">{errors.AuthorCategory}</div>}
                        </div>

                        {/* Abstract */}
                        <div>
                            <label htmlFor="abstract" className="block text-sm font-medium text-gray-700">
                                Abstract
                            </label>
                            <textarea
                                id="AuthorAbstract"
                                name="AuthorAbstract"
                                value={formData.AuthorAbstract}
                                onChange={handleChange}
                                rows="4"
                                placeholder="Provide a brief summary of your paper"
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-1 focus:ring-green-600 focus:border-green-600 focus:outline-none"
                                required
                            />
                            {errors.AuthorAbstract && <div className="text-red-500 text-sm mt-1">{errors.AuthorAbstract}</div>}
                        </div>

                        {/* File Upload */}
                        <div>
                            <label htmlFor="file" className="block text-sm font-medium text-gray-700">
                                Upload Paper (PDF only)
                            </label>
                            <input
                                type="file"
                                id="PaperFile"
                                name="PaperFile"
                                accept=".pdf"
                                onChange={handleChange}
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-1 focus:ring-green-600 focus:border-green-600 focus:outline-none"
                                required
                            />
                            {errors.PaperFile && <div className="text-red-500 text-sm mt-1">{errors.PaperFile}</div>}
                        </div>

                        {/* Submit Button */}
                        <div className="form-button">
                            <button
                                type="submit"
                                className="w-full px-4 py-2 bg-green-700 text-white font-semibold rounded-lg hover:bg-green-600"
                            >
                                Submit Paper
                            </button>
                        </div>
                        {/* Alert for Messages */}
                        {message && (
                            <div className="mt-4 mx-auto w-full max-w-2xl px-4">
                                <div className={`p-4 rounded-lg ${messageType === 'alert-success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                                    {message}
                                </div>
                            </div>
                        )}
                    </form>
                </div>

                {/* Submission Guidelines (Right Side) */}
                <div className="w-full lg:w-1/2 bg-gray-100 shadow-lg rounded-2xl p-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Submission Guidelines</h2>
                    <ul className="space-y-3 text-gray-700">
                        <li className="flex items-center">
                            <span className="text-green-500 mr-2"><i className="fa-solid fa-circle-check"></i></span>
                            Papers must be written in English.
                        </li>
                        <li className="flex items-center">
                            <span className="text-green-500 mr-2"><i className="fa-solid fa-circle-check"></i></span>
                            Maximum length: 8 pages including figures and references.
                        </li>
                        <li className="flex items-center">
                            <span className="text-green-500 mr-2"><i className="fa-solid fa-circle-check"></i></span>
                            Use the conference format.
                        </li>
                        <li className="flex items-center">
                            <span className="text-green-500 mr-2"><i className="fa-solid fa-circle-check"></i></span>
                            Submit in PDF, Docx, PPTX format.
                        </li>
                        <li className="flex items-center">
                            <span className="text-green-500 mr-2"><i className="fa-solid fa-circle-check"></i></span>
                            Include abstract (max 250 words).
                        </li>
                        <li className="flex items-center">
                            <span className="text-green-500 mr-2"><i className="fa-solid fa-circle-check"></i></span>
                            Blind all author information for review.
                        </li>
                    </ul>

                    <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">Important Notes</h2>
                    <ul className="space-y-3 text-gray-700">
                        <li className="flex items-center">
                            <span className="text-blue-500 mr-2"><i className="fa-solid fa-circle-info"></i></span>
                            All papers undergo a double-blind peer review process.
                        </li>
                        <li className="flex items-center">
                            <span className="text-blue-500 mr-2"><i className="fa-solid fa-circle-info"></i></span>
                            At least one author must register for the conference.
                        </li>
                        <li className="flex items-center">
                            <span className="text-blue-500 mr-2"><i className="fa-solid fa-circle-info"></i></span>
                            Plagiarism checks will be performed.
                        </li>
                        <li className="flex items-center">
                            <span className="text-blue-500 mr-2"><i className="fa-solid fa-circle-info"></i></span>
                            Multiple submissions are not allowed.
                        </li>
                        <li className="flex items-center">
                            <span className="text-blue-500 mr-2"><i className="fa-solid fa-circle-info"></i></span>
                            Authors must present accepted papers at the conference.
                        </li>
                        <li className="flex items-center">
                            <span className="text-blue-500 mr-2"><i className="fa-solid fa-circle-info"></i></span>
                            Papers will be published in the conference proceedings.
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}