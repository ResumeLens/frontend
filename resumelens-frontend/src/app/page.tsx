"use client";
import { motion } from "framer-motion";
import { useState } from "react";

import {
  Sparkles,
  UserCheck,
  FileText,
  ShieldCheck,
} from "lucide-react";

import { Button } from "~/components/ui/button";
import { Card, CardContent } from "~/components/ui/card";
import { Input } from "~/components/ui/input";

import MouseFollow from "~/components/MouseFollow";

export default function HomePage() {
  const [darkMode] = useState();

  return (
    <div className={`${darkMode ? "dark" : ""} transition-all duration-500`}>
      <MouseFollow />

      <div>
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-5"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">
            Launch Your{" "}
            <span className="text-indigo-600 dark:text-amber-400">
              Smart Job Board
            </span>
          </h1>
          <p className="text-center text-lg max-w-xl mx-auto mb-6">
            ResumeLens helps recruiters post jobs and receive AI-curated candidate applications—just share a public link anywhere.
          </p>
          <div className="text-center">
            <Button
              size="lg"
              className="cursor-pointer text-lg px-6 bg-indigo-600 dark:bg-amber-400 text-white dark:text-zinc-900 dark:hover:bg-white hover:scale-105 transition-all"
            >
              Post a Job
            </Button>
          </div>
        </motion.div>

        {/* Demo Box — Replaced Upload UI with GIF and Promo Text */}
        <motion.div whileHover={{ scale: 1.02 }} className="mt-16">
          <Card className="max-w-3xl mx-auto shadow-xl bg-gradient-to-r from-indigo-50 to-white dark:from-zinc-800 dark:to-zinc-900">
            <CardContent className="p-6 flex flex-col items-center">
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Sparkles size={20} /> See AI in Action
              </h2>
              <img
                src="/demo.gif"
                alt="AI showing best candidate"
                className="rounded-xl w-full max-w-md mb-4"
              />
              <p className="text-center text-sm text-zinc-600 dark:text-zinc-300">
                “Show me the best candidate for Frontend Developer...”<br />
                Our AI finds and ranks top talent from your applications—automatically.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Features */}
        <section className="mt-24 grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <UserCheck />,
              title: "AI-Powered Shortlisting",
              desc: "Effortlessly match applicants to your job listings using ResumeLens’s smart ranking system.",
            },
            {
              icon: <FileText />,
              title: "Branded Public Job Pages",
              desc: "Each job gets a unique, shareable URL that you can post on LinkedIn, careers pages, and more.",
            },
            {
              icon: <ShieldCheck />,
              title: "Built for Modern Teams",
              desc: "Manage roles, track applicant data, and collaborate securely with your hiring team.",
            },
          ].map(({ icon, title, desc }, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-2xl shadow-md bg-white dark:bg-zinc-800"
            >
              <div className="mb-4 text-indigo-600 dark:text-amber-400">
                {icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-300">
                {desc}
              </p>
            </motion.div>
          ))}
        </section>

        {/* Testimonials */}
        <section className="mt-24 grid md:grid-cols-2 gap-8">
          {[1, 2].map((_, i) => (
            <motion.div
              key={i}
              whileHover={{ rotate: 1.5, scale: 1.03 }}
              className="p-6 rounded-2xl bg-indigo-100 dark:bg-zinc-700 shadow-inner"
            >
              <p className="italic text-zinc-800 dark:text-white">
                "ResumeLens gave us a simple way to list jobs and get quality applicants—without the hassle of resumes piling in."
              </p>
              <p className="mt-4 font-semibold">
                — Hiring Manager #{i + 1}
              </p>
            </motion.div>
          ))}
        </section>

        {/* Pricing */}
        <section className="mt-24 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Simple Pricing, Smarter Hiring
          </h2>
          <p className="text-zinc-600 dark:text-zinc-300 mb-10">
            Launch job listings for free. Upgrade only when your team grows.
          </p>
          <div className="flex justify-center gap-8">
            {["Free", "Pro"].map((tier, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-white dark:bg-zinc-800 p-6 rounded-2xl shadow-lg w-64"
              >
                <h3 className="text-xl font-semibold mb-2">{tier}</h3>
                <p className="text-3xl font-bold mb-4">
                  {tier === "Free" ? "$0" : "$49/mo"}
                </p>
                <Button className="cursor-pointer w-full bg-indigo-600 dark:bg-amber-400 text-white dark:text-zinc-900 dark:hover:bg-white">
                  {tier === "Free" ? "Start Free" : "Get Pro Access"}
                </Button>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
