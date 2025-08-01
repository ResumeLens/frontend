"use client"

import { useState } from 'react';

import { Button } from '~/components/ui/button';
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "~/components/ui/dialog"
import { Input } from "~/components/ui/input"
import { Textarea } from "~/components/ui/textarea"

import { toast } from "sonner"
import { Plus } from 'lucide-react';

type CreateJobProps = {
    addJob: (job: {
        title: string;
        description: string;
        skills: string[];
        experience: string;
        location: string;
        salary?: string;
    }) => void;
};

export default function CreateJob({ addJob }: CreateJobProps) {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        skillsInput: "",
        skills: [] as string[],
        experience: "",
        location: "",
        salary: "",
    });

    const handleChange = (field: string, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleSkillsChange = (value: string) => {
        setFormData(prev => ({
            ...prev,
            skillsInput: value,
            skills: value
                .split(',')
                .map(s => s.trim())
                .filter(Boolean), // remove empty strings
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.title || !formData.skills || !formData.experience || !formData.location) {
            toast.error("Please fill in all mandatory fields.");
            return;
        }

        addJob(formData);
        toast.success("Job created successfully!");
        console.log("Job created:", formData);

        setFormData({
            title: "",
            description: "",
            skillsInput: "",
            skills: [],
            experience: "",
            location: "",
            salary: "",
        });
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
              <Button className="cursor-pointer bg-indigo-600 dark:bg-amber-400 text-white dark:text-zinc-900 dark:hover:bg-white hover:scale-105 transition-all">
                <Plus className="mr-2 h-4 w-4" />
                Create Job
              </Button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-[425px]">
                <form onSubmit={handleSubmit}>
                    <DialogHeader>
                        <DialogTitle>Create New Job</DialogTitle>
                        <DialogDescription>Fill in the job details below</DialogDescription>
                    </DialogHeader>

                    <div className="grid gap-4 py-4">
                        <Input
                            placeholder="Job Title"
                            value={formData.title}
                            onChange={e => handleChange("title", e.target.value)}
                        />
                        <Textarea
                            placeholder="Job Description"
                            value={formData.description}
                            onChange={e => handleChange("description", e.target.value)}
                        />
                        <Input
                            type="text"
                            placeholder="Skills (comma separated)"
                            value={formData.skillsInput}
                            onChange={e => handleSkillsChange(e.target.value)}
                        />
                        <Input
                            placeholder="Experience (e.g. 2+ years)"
                            value={formData.experience}
                            onChange={e => handleChange("experience", e.target.value)}
                        />
                        <Input
                            placeholder="Location"
                            value={formData.location}
                            onChange={e => handleChange("location", e.target.value)}
                        />
                        <Input
                            placeholder="Salary"
                            value={formData.salary}
                            onChange={e => handleChange("salary", e.target.value)}
                        />  
                    </div>

                    <DialogFooter>
                        <DialogClose asChild>
                          <Button variant="outline" className="cursor-pointer border-2 border-red-600 bg-transparent hover:bg-red-600 hover:text-white dark:border-red-600 dark:bg-transparent dark:hover:bg-red-600">
                            Cancel
                          </Button>
                        </DialogClose>

                        <Button
                          type="submit"
                          className="cursor-pointer bg-transparent border-2 border-indigo-600 dark:border-amber-400 text-black dark:text-white dark:hover:bg-amber-400 dark:hover:text-zinc-900 hover:bg-indigo-600 hover:text-white hover:scale-105 transition-all"
                        >
                          Post Job
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}     