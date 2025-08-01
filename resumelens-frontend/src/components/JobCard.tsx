import { Button } from '~/components/ui/button';
import { Card, CardContent } from '~/components/ui/card';
import { Badge } from '~/components/ui/badge';
import { Trash } from 'lucide-react';

import EditJobDialog from './EditJob';

type Job = {
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

type JobCardProps = {
    job: Job;
    updateJob: (updatedJob: Job) => void;
};

export default function JobCard({ job, updateJob }: JobCardProps) {
    return (
        <Card className="relative bg-gradient-to-b from-indigo-50 to-white dark:from-zinc-800 dark:to-zinc-900">
            <CardContent className="p-4 space-y-2">
                <div className="flex justify-between">
                    <h2 className="text-lg font-semibold">{job.title}</h2>
                    <Badge variant={job.status === 'Active' ? 'default' : 'destructive'}>
                        {job.status}
                    </Badge>
                </div>

                <p className="text-sm text-muted-foreground">{job.location}</p>
                <p className="text-sm">Posted on: {job.date}</p>
                <p className="text-sm">Applicants: {job.applicants}</p>
                <p className="text-sm">Avg Fit Score: {job.avgScore}</p>

                <div className="flex gap-3 mt-2">
                    <EditJobDialog job={job} updateJob={updateJob} />
                    <Button size="icon" className="cursor-pointer bg-transparent border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white">
                        <Trash className="w-4 h-4" />
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}