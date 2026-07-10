import { useState } from "react";
import JobCard from "./JobCard";
import { jobs } from "../../data/jobs";

export default function JobCards() {
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("All");

  const filteredJobs = jobs.filter((job) => {
    const term = search.toLowerCase();

    const matchesSearch =
      job.title.toLowerCase().includes(term) ||
      job.department.toLowerCase().includes(term) ||
      job.location.toLowerCase().includes(term) ||
      job.type.toLowerCase().includes(term) ||
      job.experience.toLowerCase().includes(term) ||
      job.skills.some((skill) =>
        skill.toLowerCase().includes(term)
      );

    const matchesDepartment =
      department === "All" || job.department === department;

    return matchesSearch && matchesDepartment;
  });

  return (
    <section className="py-24">
      <div className="container">

        {/* Heading */}
        <div className="text-center mb-16">

          <div className="section-label justify-center">
            CURRENT OPPORTUNITIES
          </div>

          <h2 className="section-title">
            Join the Builders of
            <span className="gradient-text"> Future Technologies</span>
          </h2>

          <p className="section-subtitle mx-auto text-center mt-6">
            Explore exciting opportunities at Fulmen Technology and help
            shape the future of AI, automation and enterprise software.
          </p>

        </div>

        {/* Search */}
        <div className="max-w-2xl mx-auto mb-10">

          <input
            type="text"
            placeholder="Search opportunities..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder-gray-400 focus:border-cyan-400 outline-none"
          />

        </div>

        {/* Filter Chips */}
        <div className="flex justify-center flex-wrap gap-3 mb-12">

          {["All", "Engineering", "Sales", "AI"].map((item) => (
            <button
              key={item}
              onClick={() => setDepartment(item)}
              className={`px-5 py-2 rounded-full transition-all duration-300 ${
                department === item
                  ? "bg-cyan-500 text-white"
                  : "glass-card hover:bg-white/10"
              }`}
            >
              {item}
            </button>
          ))}

        </div>

        {/* Job Cards */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">

          {filteredJobs.map((job) => (
            <JobCard
              key={job.id}
              job={job}
            />
          ))}

        </div>

        {/* Empty State */}
        {filteredJobs.length === 0 && (
          <div className="text-center py-20">
            <h3 className="text-2xl font-semibold text-white">
              No jobs found
            </h3>
            <p className="mt-3 text-gray-400">
              Try a different search term or department.
            </p>
          </div>
        )}

      </div>
    </section>
  );
}