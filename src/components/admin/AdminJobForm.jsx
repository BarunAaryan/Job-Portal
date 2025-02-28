import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import FormField from '../common/FormField';
import TextAreaField from '../common/TextAreaField';

function AdminJobForm({ onAddJob, jobToEdit, onUpdateJob }) {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEditMode = !!jobToEdit;

  const [jobData, setJobData] = useState({
    company: '',
    title: '',
    location: '',
    type: 'Full-time',
    description: '',
    requirements: '',
    stipend: '',
    applicationLink: '',
    deadline: ''
  });

  useEffect(() => {
    if (jobToEdit) {
      setJobData(jobToEdit);
    }
  }, [jobToEdit]);

  const handleChange = (e) => {
    setJobData({
      ...jobData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditMode) {
      onUpdateJob(jobData);
    } else {
      onAddJob(jobData);
    }
    navigate('/admin');
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        {isEditMode ? 'Edit Job' : 'Add New Job'}
      </h1>

      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <FormField
            label="Company Name"
            id="company"
            value={jobData.company}
            onChange={handleChange}
            required
          />
          <FormField
            label="Job Title"
            id="title"
            value={jobData.title}
            onChange={handleChange}
            required
          />
          <FormField
            label="Location"
            id="location"
            value={jobData.location}
            onChange={handleChange}
            required
          />
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="type">
              Job Type
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="type"
              name="type"
              value={jobData.type}
              onChange={handleChange}
              required
            >
              <option value="Full-time">Full-time</option>
              <option value="Part-time">Part-time</option>
              <option value="Contract">Contract</option>
              <option value="Internship">Internship</option>
              <option value="Freelance">Freelance</option>
            </select>
          </div>
          <FormField
            label="Stipend/Salary"
            id="stipend"
            value={jobData.stipend}
            onChange={handleChange}
            required
          />
          <FormField
            label="Application Deadline"
            id="deadline"
            type="date"
            value={jobData.deadline}
            onChange={handleChange}
            required
          />
          <FormField
            label="Application Link"
            id="applicationLink"
            type="url"
            value={jobData.applicationLink}
            onChange={handleChange}
            required
          />
          <TextAreaField
            label="Job Description"
            id="description"
            value={jobData.description}
            onChange={handleChange}
            required
          />
          <TextAreaField
            label="Requirements"
            id="requirements"
            value={jobData.requirements}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mt-6 flex justify-end">
          <button
            type="button"
            onClick={() => navigate('/admin')}
            className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded mr-2"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            {isEditMode ? 'Update Job' : 'Add Job'}
          </button>
        </div>
      </form>
    </div>
  );
}

export default AdminJobForm;