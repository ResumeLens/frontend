import { useState } from "react";

interface Job {
    id: string;
    title: string;
    description: string;
    skills: string[];
    experience: string;
    location: string;
    salary?: string;
    date: string;
    status: string;
    applicants: number;
    avgScore: number;
}


export function useJobs() {
    const [jobs, setJobs] = useState<Job[]>([]);

    function addJob(newJob: Omit<Job, "id" | "date" | "applicants" | "status" | "avgScore">) {
        const jobToAdd: Job = {
            ...newJob,
            id: Date.now().toString(),
            date: new Date().toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            }),
            applicants: 0,
            status: "Active",
            avgScore: 0,
        };
        setJobs((prevJobs) => [jobToAdd, ...prevJobs]);
    }

    function updateJob(updatedJob: Job) {
        setJobs(prev => prev.map(job => job.id === updatedJob.id ? updatedJob : job));
    }

  return { jobs, addJob, updateJob };
}
