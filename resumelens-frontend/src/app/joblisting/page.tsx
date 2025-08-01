"use client";

import { useState } from 'react';

import Navbar from '~/components/Navbar';
import MouseFollow from '~/components/MouseFollow';
import CreateJob from '~/components/CreateJob';
import JobCard from '~/components/JobCard';
import { useJobs } from '~/hooks/useJobs';

export default function JobBoard() {
    const [darkMode] = useState(false);
    const { jobs, addJob, updateJob } = useJobs();

    return (
        <div className={`${darkMode ? "dark" : ""} transition-all duration-500`}>
            <MouseFollow />

            <div className="mx-auto mt-15 mb-20 max-w-7xl px-4">
                <Navbar />

                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-3xl font-bold">Your Job Listings</h1>

                    <CreateJob addJob={addJob} />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {jobs.map((job) => (
                      <JobCard key={job.id} job={job} updateJob={updateJob} />
                    ))}
                </div>
            </div>
      </div>
    );
}
