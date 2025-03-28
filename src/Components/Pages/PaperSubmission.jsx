import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PaperSubmission() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    paperTitle: "",
    authorName: "",
    authorEmail: "",
    authorInstitution: "",
    authorCategory: "",
    paperFile: null,
  });
  const [errors, setErrors] = useState({});

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  // Validate form fields
  const validateForm = () => {
    const newErrors = {};
    if (!formData.paperTitle) newErrors.paperTitle = "Paper title is required.";
    if (!formData.authorName) newErrors.authorName = "Author name is required.";
    if (!formData.authorEmail) {
      newErrors.authorEmail = "Author email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.authorEmail)) {
      newErrors.authorEmail = "Invalid email format.";
    }
    if (!formData.authorInstitution) newErrors.authorInstitution = "Institution is required.";
    if (!formData.authorCategory) newErrors.authorCategory = "Category is required.";
    if (!formData.paperFile) newErrors.paperFile = "Paper file is required.";
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
        <h2 className="text-3xl font-bold text-green-700 mb-6">Paper Submission</h2>

        <div>
          {/* Submission Guidelines */}
          <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
            Submission Guidelines
          </h3>
          <ul className="text-gray-700 text-lg lg:text-[19px] leading-relaxed mb-6 list-disc pl-6 text-justify">
            <li>Authors are invited to submit <span className="font-semibold">original, unpublished research papers</span> that demonstrate innovation and contribute to the advancement of knowledge in <span className="font-semibold">AI, Business Analytics, and Cloud Systems</span>. All submissions must strictly adhere to the <span className="font-semibold">conference formatting requirements</span>.</li>
            <li>Papers should be formatted in <span className="font-semibold">double-column style</span>, using <strong>Times New Roman, 10pt font</strong>. The maximum length allowed is <span className="font-semibold">8 pages</span>, including all references and appendices.</li>
            <li>Submissions should be in <span className="font-semibold">PDF or DOCX format</span> and should not contain any author-identifying information to maintain <span className="font-semibold">double-blind peer review</span> integrity. The review process will evaluate papers based on their <span className="font-semibold">originality, technical quality, relevance, and clarity of presentation</span>.</li>
            <li>Accepted papers will be presented at the conference and published in <span className="font-semibold">recognized digital libraries</span>. Authors must register for the conference to present their work. Failure to present the paper may result in removal from the conference proceedings.</li>
          </ul>
        </div>

        <div>
          {/* Important Notes */}
          <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
            Important Notes
          </h3>
          <ul className="text-gray-700 text-lg lg:text-[19px] leading-relaxed mb-6 list-disc pl-6 text-justify">
            <li><strong>Submission Deadline:</strong> All papers must be submitted by <span className="font-semibold">December 1, 2025</span>. Late submissions will <span className="font-semibold">not</span> be accepted under any circumstances.</li>
            <li><strong>Plagiarism Policy:</strong> All submissions will be <span className="font-semibold">checked for plagiarism</span> using approved tools. Papers containing more than <span className="font-semibold">20% similarity</span> with existing work will be <span className="font-semibold">automatically rejected</span>.</li>
            <li><strong>Author Registration:</strong> At least one author must register for the conference by <span className="font-semibold">December 15, 2025</span>, to be included in the final program and proceedings.</li>
            <li><strong>Presentation Mode:</strong> Accepted papers must be presented in <span className="font-semibold">person or virtually</span>. Authors unable to attend must notify the organizers in advance to arrange an alternative presentation.</li>
          </ul>
        </div>

        {/* Submit Paper Button */}
        <div className="text-center">
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-4 py-2 bg-green-700 text-white rounded-sm hover:bg-green-600 text-lg transition-transform transform hover:scale-105"
          >
            Submit Your Paper
          </button>
        </div>
      </div>

      {/* Modal Form */}
      {isModalOpen && (
  <div className="fixed inset-0 backdrop-blur-sm flex justify-center items-start p-4 pt-16">
    <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-lg relative overflow-y-auto max-h-[80vh] mt-16">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
        Submit Your Paper
      </h2>
      <form className="space-y-5" onSubmit={handleSubmit}>
        <div>
          <label className="block text-gray-700 font-semibold">
            Paper Title *
          </label>
          <input
            type="text"
            name="paperTitle"
            value={formData.paperTitle}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3"
            required
          />
          {errors.paperTitle && (
            <p className="text-red-600 text-sm mt-1">{errors.paperTitle}</p>
          )}
        </div>

        <div>
          <label className="block text-gray-700 font-semibold">
            Author Full Name *
          </label>
          <input
            type="text"
            name="authorName"
            value={formData.authorName}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3"
            required
          />
          {errors.authorName && (
            <p className="text-red-600 text-sm mt-1">{errors.authorName}</p>
          )}
        </div>

        <div>
          <label className="block text-gray-700 font-semibold">
            Author Email *
          </label>
          <input
            type="email"
            name="authorEmail"
            value={formData.authorEmail}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3"
            required
          />
          {errors.authorEmail && (
            <p className="text-red-600 text-sm mt-1">{errors.authorEmail}</p>
          )}
        </div>

        <div>
          <label className="block text-gray-700 font-semibold">
            Author Institution *
          </label>
          <input
            type="text"
            name="authorInstitution"
            value={formData.authorInstitution}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3"
            required
          />
          {errors.authorInstitution && (
            <p className="text-red-600 text-sm mt-1">{errors.authorInstitution}</p>
          )}
        </div>

        <div>
          <label className="block text-gray-700 font-semibold">
            Author Category *
          </label>
          <select
            name="authorCategory"
            value={formData.authorCategory}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3"
            required
          >
            <option value="">-- Select Category --</option>
            <option value="Student">Student</option>
            <option value="Faculty">Faculty</option>
            <option value="Industry">Industry</option>
          </select>
          {errors.authorCategory && (
            <p className="text-red-600 text-sm mt-1">{errors.authorCategory}</p>
          )}
        </div>

        <div>
          <label className="block text-gray-700 font-semibold">
            Upload Paper (PDF/DOC) *
          </label>
          <input
            type="file"
            name="paperFile"
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3"
            required
          />
          {errors.paperFile && (
            <p className="text-red-600 text-sm mt-1">{errors.paperFile}</p>
          )}
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-3 mt-6">
          <button
            type="submit"
            className="w-full md:w-auto bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition"
          >
            Submit Paper
          </button>
          <button
            type="button"
            onClick={() => setIsModalOpen(false)}
            className="w-full md:w-auto text-red-600 font-semibold px-8 py-3 border border-red-600 rounded-lg hover:bg-red-600 hover:text-white transition"
          >
            Close
          </button>
        </div>
      </form>
    </div>
  </div>
)}
    </section>
  );
}