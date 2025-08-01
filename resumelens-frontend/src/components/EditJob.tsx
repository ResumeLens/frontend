"use client";

import { useState, useEffect } from "react";

import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
    DialogClose,
} from "~/components/ui/dialog";
import { Input } from "~/components/ui/input";
import { Textarea } from "~/components/ui/textarea";
import { Button } from "~/components/ui/button";
import { toast } from "sonner";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select"

import { Edit2 } from 'lucide-react';

type Job = {
    id: string;
    title: string;
    description: string;
    skills: string[];
    experience: string;
    location: string;
    salary?: string;
    date: string;
    applicants: number;
    status: string;
    avgScore: number;
};

type EditJobProps = {
    job: Job;
    updateJob: (job: Job) => void;
};

export default function EditJobDialog({ job, updateJob }: EditJobProps) {
    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        skillsInput: "",
        skills: [] as string[],
        experience: "",
        location: "",
        salary: "",
        status: "Active",
    });

    useEffect(() => {
        if (open) {
            setFormData({
                title: job.title,
                description: job.description,
                skillsInput: job.skills.join(", "),
                skills: job.skills,
                experience: job.experience,
                location: job.location,
                salary: job.salary || "",
                status: job.status,
            });
        }
    }, [open]);

    const handleChange = (field: string, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    const handleSkillsChange = (value: string) => {
        setFormData((prev) => ({
            ...prev,
            skillsInput: value,
            skills: value
                .split(",")
                .map((s) => s.trim())
                .filter(Boolean),
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const updatedJob: Job = {
            ...job,
            ...formData,
            skills: formData.skills,
            status: formData.status,
        };

        updateJob(updatedJob);
        console.log("Updated Job:", formData);
        toast.success("Job updated!");
        setOpen(false);
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button variant="outline" size="icon" className="cursor-pointer hover:dark:bg-zinc-700 hover:bg-indigo-50">
                    <Edit2 className="w-4 h-4" />
                </Button>
            </DialogTrigger>
            <DialogContent>
                <form onSubmit={handleSubmit}>
                    <DialogHeader>
                        <DialogTitle>Edit Job</DialogTitle>
                        <DialogDescription>Update job details</DialogDescription>
                    </DialogHeader>

                    <div className="grid gap-4 py-4">
                        <Input
                            placeholder="Job Title"
                            value={formData.title}
                            onChange={(e) => handleChange("title", e.target.value)}
                            required
                        />
                        <Textarea
                            placeholder="Description"
                            value={formData.description}
                            onChange={(e) => handleChange("description", e.target.value)}
                        />
                        <Input
                            placeholder="Skills (comma separated)"
                            value={formData.skillsInput}
                            onChange={(e) => handleSkillsChange(e.target.value)}
                            required
                        />
                        <Input
                            placeholder="Experience"
                            value={formData.experience}
                            onChange={(e) => handleChange("experience", e.target.value)}
                            required
                        />
                        <Input
                            placeholder="Location"
                            value={formData.location}
                            onChange={(e) => handleChange("location", e.target.value)}
                            required
                        />
                        <Input
                            placeholder="Salary"
                            value={formData.salary}
                            onChange={(e) => handleChange("salary", e.target.value)}
                        />
                        <Select
                          value={formData.status}
                          onValueChange={(value) => handleChange("status", value)}
                        >
                            <SelectTrigger className="w-full cursor-pointer">
                                <SelectValue placeholder="Select status" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="Active">Active</SelectItem>
                                <SelectItem value="Cancelled">Cancelled</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <DialogFooter>
                        <DialogClose asChild>
                            <Button variant="outline" className="cursor-pointer hover:scale-105 transition-all">Cancel</Button>
                        </DialogClose>

                        <Button type="submit" className="cursor-pointer hover:scale-105 transition-all">Save</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
