"use client";
import { motion } from "framer-motion";
import { useState } from "react";

import {
  ShieldCheck,
  Brain,
  Globe,
  BarChart3,
  Chrome,
  Users,
  FileSearch,
  Lightbulb,
  Filter,
  TrendingUp,
} from "lucide-react";

import { Button } from "~/components/ui/button";
import { Card, CardContent } from "~/components/ui/card";
import { Separator } from "~/components/ui/separator"

import MouseFollow from "~/components/MouseFollow";
import Navbar from "~/components/Navbar";

export default function HomePage() {
  const [darkMode] = useState();

  return (
    <div className={`${darkMode ? "dark" : ""} transition-all duration-500`}>
      <MouseFollow />

      <div>
        <Navbar />

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-5"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">
            The Recruiter's{" "}
            <span className="text-indigo-600 dark:text-amber-400">
              AI Assistant
            </span>
          </h1>
          <p className="text-center text-lg max-w-3xl mx-auto mb-6">
            Create job boards, get applications, let AI find your best candidates. The complete recruitment platform built exclusively for hiring professionals.
          </p>
          <div className="text-center space-x-4">
            <Button
              size="lg" 
              className="cursor-pointer text-lg px-8 bg-indigo-600 dark:bg-amber-400 text-white dark:text-zinc-900 dark:hover:bg-white hover:scale-105 transition-all"
            >
              Start Recruiting Smarter
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="cursor-pointer text-lg px-8 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white dark:border-amber-400 dark:text-amber-400 dark:hover:bg-amber-400 dark:hover:text-black hover:scale-105 transition-all"
            >
              See How It Works
            </Button>
          </div>
        </motion.div>

        {/* AI Demo */}
        <motion.div whileHover={{ scale: 1.02 }} className="mt-16">
          <Card className="max-w-4xl mx-auto shadow-xl bg-gradient-to-r from-indigo-50 to-white dark:from-zinc-800 dark:to-zinc-900">
            <CardContent className="p-8 flex flex-col items-center">
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <Brain size={24} className="text-indigo-600 dark:text-amber-400" /> 
                Your AI Recruitment Assistant
              </h2>
              <img
                src="/demo.gif"
                alt="AI automatically ranking and scoring candidates for recruiter"
                className="rounded-xl w-full max-w-2xl mb-6 shadow-lg"
              />
              <div className="text-center space-y-2">
                <p className="text-lg font-medium text-zinc-800 dark:text-zinc-200">
                  "Show me the best candidates for Senior Frontend Developer..."
                </p>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 max-w-2xl">
                  Stop manually screening resumes. Our AI instantly parses, scores, and ranks every candidate so you can focus on interviewing the best talent.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <Separator className="my-20" />

        {/* Recruiter Pain Points & Solutions */}
        <section className="mt-24">
          <h2 className="text-3xl font-bold text-center mb-4">
            Stop Wasting Time on <span className="text-indigo-600 dark:text-amber-400">Manual Screening</span>
          </h2>
          <p className="text-center text-zinc-600 dark:text-zinc-400 mb-12 max-w-2xl mx-auto">
            Let AI handle the heavy lifting while you focus on what matters—finding and hiring great people.
          </p>
          <div className="grid lg:grid-cols-3 gap-8">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-2xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800"
            >
              <h3 className="text-xl font-bold text-red-600 dark:text-red-400 mb-4">The Old Way</h3>
              <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                <li>• Manually review hundreds of resumes</li>
                <li>• Guess which candidates might be good fits</li>
                <li>• Spend hours on initial screening calls</li>
                <li>• Miss great candidates buried in the pile</li>
                <li>• Juggle multiple tools and spreadsheets</li>
              </ul>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-2xl bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800"
            >
              <h3 className="text-xl font-bold text-green-600 dark:text-green-400 mb-4">The ResumeLens Way</h3>
              <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                <li>• AI automatically scores every candidate</li>
                <li>• See skills and experience parsed instantly</li>
                <li>• Focus only on top-ranked matches</li>
                <li>• Never miss qualified candidates again</li>
                <li>• Everything in one powerful platform</li>
              </ul>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-2xl bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800"
            >
              <h3 className="text-xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">Your Results</h3>
              <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                <li>• 80% less time on resume screening</li>
                <li>• Higher quality candidate interviews</li>
                <li>• Faster time-to-hire for all roles</li>
                <li>• Better candidate experience = more applies</li>
                <li>• Data-driven hiring decisions</li>
              </ul>
            </motion.div>
          </div>
        </section>

        <Separator className="my-20" />

        {/* Your Complete Recruiting Toolkit */}
        <section className="mt-24">
          <h2 className="text-3xl font-bold text-center mb-4">
            Your Complete Recruiting Toolkit
          </h2>
          <p className="text-center text-zinc-600 dark:text-zinc-400 mb-12 max-w-2xl mx-auto">
            Everything you need to post jobs, source candidates, and make great hires—all powered by AI.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "1",
                icon: <Globe />,
                title: "Create Job Boards",
                desc: "Build beautiful, branded job pages in minutes. Share the URL anywhere—LinkedIn, your website, job boards.",
              },
              {
                step: "2", 
                icon: <Chrome />,
                title: "Source on LinkedIn",
                desc: "Use our Chrome extension to analyze LinkedIn profiles and add prospects directly to your pipeline.",
              },
              {
                step: "3",
                icon: <Brain />,
                title: "AI Scores Candidates",
                desc: "Every application gets automatically parsed and scored based on skills, experience, and job fit.",
              },
              {
                step: "4",
                icon: <Users />,
                title: "Manage Your Pipeline",
                desc: "Filter, shortlist, and track candidates through your hiring process with powerful pipeline tools.",
              },
            ].map(({ step, icon, title, desc }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="relative p-6 rounded-2xl shadow-md bg-white dark:bg-zinc-800 border-t-4 border-indigo-600 dark:border-amber-400"
              >
                <div className="absolute -top-3 left-6 bg-indigo-600 dark:bg-amber-400 text-white dark:text-zinc-900 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                  {step}
                </div>
                <div className="mb-4 text-indigo-600 dark:text-amber-400">
                  {icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{title}</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-300">
                  {desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        <Separator className="my-20" />

        {/* Features Built for Recruiters */}
        <section className="mt-24">
          <h2 className="text-3xl font-bold text-center mb-12">
            Built for Professional Recruiters
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <FileSearch />,
                title: "Smart Resume Parsing",
                desc: "Automatic extraction of skills, experience, education from any PDF or Word document.",
              },
              {
                icon: <Filter />,
                title: "Advanced Filtering",
                desc: "Filter candidates by AI score, specific skills, years of experience, or any custom criteria.",
              },
              {
                icon: <BarChart3 />,
                title: "Recruiting Analytics",
                desc: "Track your pipeline health, conversion rates, time-to-hire, and recruiting performance metrics.",
              },
              {
                icon: <ShieldCheck />,
                title: "Team Collaboration",
                desc: "Multi-user access with role permissions. Share feedback and make hiring decisions as a team.",
              },
              {
                icon: <TrendingUp />,
                title: "Pipeline Management", 
                desc: "Move candidates through stages, send automated emails, and track every interaction.",
              },
              {
                icon: <Lightbulb />,
                title: "AI Hiring Insights",
                desc: "Get intelligent recommendations on which candidates to prioritize and interview first.",
              },
            ].map(({ icon, title, desc }, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="p-6 rounded-xl shadow-md bg-white dark:bg-zinc-800 hover:shadow-lg transition-shadow"
              >
                <div className="mb-4 text-indigo-600 dark:text-amber-400">
                  {icon}
                </div>
                <h3 className="font-semibold mb-2">{title}</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  {desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        <Separator className="my-20" />

        {/* Testimonials from Recruiters */}
        <section className="mt-24">
          <h2 className="text-2xl font-bold text-center mb-12">Trusted by Top Recruiters</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                quote: "ResumeLens cut my screening time by 75%. I can now focus on actually talking to great candidates instead of drowning in resumes.",
                name: "Sarah Chen",
                role: "Senior Technical Recruiter"
              },
              {
                quote: "The AI scoring is incredibly accurate. It's like having a junior recruiter that never sleeps, pre-screening every single application.",
                name: "Marcus Rodriguez", 
                role: "Head of Talent Acquisition"
              }
            ].map(({ quote, name, role }, i) => (
              <motion.div
                key={i}
                whileHover={{ rotate: 1, scale: 1.02 }}
                className="p-6 rounded-2xl bg-indigo-50 dark:bg-zinc-800 shadow-md"
              >
                <p className="italic text-zinc-800 dark:text-zinc-200 mb-4">
                  "{quote}"
                </p>
                <div>
                  <p className="font-semibold">{name}</p>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">{role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="mt-24">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-amber-400 dark:to-orange-500 rounded-3xl p-12 text-center text-white dark:text-zinc-900"
          >
            <h2 className="text-3xl font-bold mb-4">Ready to Recruit Like a Pro?</h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Join thousands of recruiters using AI to find better candidates faster. Start your free trial—no setup fees, no long-term contracts.
            </p>
            <div className="flex justify-center gap-4">
              <Button 
                size="lg"
                className="cursor-pointer bg-white text-indigo-600 hover:text-white dark:bg-zinc-900 dark:text-amber-400 dark:hover:text-black dark:hover:bg-white px-8 text-lg"
              >
                Start Free Trial
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="cursor-pointer border-white bg-transparent hover:bg-white hover:text-indigo-600 dark:border-zinc-900 dark:text-zinc-900 dark:hover:bg-zinc-900 dark:hover:text-amber-400 px-8 text-lg"
              >
                Book a Demo
              </Button>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
}