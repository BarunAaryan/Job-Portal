import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function JobDetails({ jobs }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const job = jobs.find(job => job.id === parseInt(id));
  
  if (!job) {
    return (
      <div className="text-center py-10">
        <h2 className="text-2xl font-bold text-gray-800">Job not found</h2>
        <button 
          onClick={() => navigate('/jobs')}
          className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
        >
          Back to Jobs
        </button>
      </div>
    );
  }
  
  return (
    <div>
      <button 
        onClick={() => navigate('/jobs')}
        className="mb-4 text-blue-600 hover:text-blue-800 flex items-center"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
        </svg>
        Back to Jobs
      </button>
      
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-6">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">{job.title}</h1>
              <h2 className="text-xl font-medium text-gray-700 mt-1">{job.company}</h2>
            </div>
            <div className="mt-4 md:mt-0 flex flex-col items-start md:items-end">
              <span className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded">
                {job.type}
              </span>
              <p className="text-gray-600 mt-2">{job.location}</p>
            </div>
          </div>
          
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Stipend/Salary</h3>
              <p className="text-gray-700">{job.stipend}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Application Deadline</h3>
              <p className="text-gray-700">{job.deadline}</p>
            </div>
          </div>
          
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-800">Job Description</h3>
            <p className="text-gray-700 mt-2 whitespace-pre-line">{job.description}</p>
          </div>
          
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-800">Requirements</h3>
            <p className="text-gray-700 mt-2 whitespace-pre-line">{job.requirements}</p>
          </div>
          
          <div className="mt-6 pt-6 border-t border-gray-200">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-500">Posted on: {job.postedDate}</p>
              </div>
              <a 
                href={job.applicationLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded"
              >
                Apply Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobDetails;