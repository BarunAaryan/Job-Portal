import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function UserDashboard({ jobs }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('');
  
  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                        job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        job.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === '' || job.type === filterType;
    
    return matchesSearch && matchesType;
  });
  
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Available Jobs</h1>
      
      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <input
              type="text"
              placeholder="Search jobs..."
              className="w-full p-2 border rounded"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div>
            <select
              className="w-full p-2 border rounded"
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
            >
              <option value="">All Job Types</option>
              <option value="Full-time">Full-time</option>
              <option value="Part-time">Part-time</option>
              <option value="Contract">Contract</option>
              <option value="Internship">Internship</option>
              <option value="Freelance">Freelance</option>
            </select>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredJobs.length > 0 ? (
          filteredJobs.map(job => (
            <div key={job.id} className="bg-white rounded-lg shadow overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="p-5">
                <div className="flex justify-between items-start">
                  <h2 className="text-xl font-semibold text-gray-800">{job.title}</h2>
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    {job.type}
                  </span>
                </div>
                <h3 className="text-lg font-medium text-gray-700 mt-1">{job.company}</h3>
                <p className="text-gray-600 mt-2">{job.location}</p>
                <p className="text-gray-600 mt-2">Stipend: {job.stipend}</p>
                <p className="text-sm text-gray-500 mt-3">
                  Posted: {job.postedDate} | Deadline: {job.deadline}
                </p>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-gray-600 line-clamp-2">
                    {job.description.substring(0, 100)}...
                  </p>
                </div>
                <div className="mt-4 flex justify-between">
                  <Link 
                    to={`/jobs/${job.id}`}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    View Details
                  </Link>
                  <a 
                    href={job.applicationLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded"
                  >
                    Apply
                  </a>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-10">
            <p className="text-gray-500 text-lg">No jobs found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default UserDashboard;