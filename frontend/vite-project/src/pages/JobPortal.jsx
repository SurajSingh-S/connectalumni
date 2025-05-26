import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const JobPortal = () => {
  const [jobs, setJobs] = useState([]);
  const navigate = useNavigate(); 

  useEffect(() => {
    const fetchJobs = () => {
      const mockJobs = [
        {
          id: 1,
          title: "Software Engineer",
          company: "Tata Consultancy Services",
          location: "Banglore, IN",
          url: "https://www.tcs.com/",
        },
        {
          id: 2,
          title: "Product Manager",
          company: "Infosys",
          location: "Pune, IN",
          url: "https://www.infosys.com/",
        },
        {
          id: 3,
          title: "Data Analyst",
          company: "AutDesk",
          location: "Gurugram, IN",
          url: "https://www.autodesk.com/in?cjdata=MXxOfDB8WXww&mktvar002=afc_in_deeplink&AID=13084956&PID=8206971&SID=jkp_EAIaIQobChMIxdvZm-6LjQMVcCaDAx3Cmis7EAAYASAAEgJ3L_D_BwE&cjevent=9dfc41eb298711f0818c02490a18b8fb&affname=8206971_13084956",
        },
        {
          id: 4,
          title: "UX/UI Designer",
          company: "GE Appliances",
          location: "Kolkata, IN",
          url: "https://www.geappliances.com/",
        },
        {
          id: 5,
          title: "Marketing Specialist",
          company: "Wipro",
          location: "Noida, IN",
          url: "https://www.wipro.com/",
        },
      ];
      setJobs(mockJobs);
    };

    fetchJobs();
  }, []);

 
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-black text-white py-10 px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-4 text-center text-white">
           Job Portal
        </h1>
        <p className="text-gray-300 mb-10 text-center text-lg">
          Explore exciting job opportunities from top companies.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="bg-slate-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-slate-700"
            >
              <h2 className="text-2xl font-bold mb-2 text-white">
                {job.title}
              </h2>
              <p className="text-slate-300 font-medium">{job.company}</p>
              <p className="text-slate-400 mb-4">{job.location}</p>
              <button
    onClick={() => window.open(job.url, '_blank')}
    className="mt-4 bg-white text-blue-600 font-semibold px-4 py-2 rounded hover:bg-gray-100 transition"
  >
    Apply Now
  </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobPortal;
