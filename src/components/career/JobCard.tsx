import {
  MapPin,
  Briefcase,
  Clock3,
  IndianRupee,
  ArrowRight,
} from "lucide-react";

import type { Job } from "../../data/jobs";

interface JobCardProps {
  job: Job;
}

export default function JobCard({ job }: JobCardProps) {
  return (
    <div
      className="glass-card glass-card--premium"
      style={{
        padding: "32px",
        borderRadius: "28px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        transition: "all .35s ease",
        minHeight: "100%",
      }}
    >
      {/* Department Badge */}

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "22px",
        }}
      >
        <span
          style={{
            background: "rgba(59,130,246,.12)",
            color: "#7dd3fc",
            border: "1px solid rgba(59,130,246,.25)",
            padding: "8px 16px",
            borderRadius: "999px",
            fontWeight: 600,
            fontSize: "14px",
          }}
        >
          {job.department}
        </span>

        <span
          style={{
            color: "#94a3b8",
            fontSize: "14px",
          }}
        >
          {job.type}
        </span>
      </div>

      {/* Title */}

      <h3
        style={{
          fontSize: "28px",
          fontWeight: 700,
          lineHeight: 1.2,
        }}
      >
        {job.title}
      </h3>

      {/* Description */}

      <p
        style={{
          marginTop: "18px",
          color: "#94a3b8",
          lineHeight: 1.8,
        }}
      >
        {job.description}
      </p>

      {/* Details */}

      <div
        style={{
          marginTop: "28px",
          display: "grid",
          gap: "14px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <MapPin size={18} color="#38bdf8" />
          {job.location}
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <Briefcase size={18} color="#38bdf8" />
          {job.type}
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <Clock3 size={18} color="#38bdf8" />
          {job.experience}
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <IndianRupee size={18} color="#38bdf8" />
          {job.salary}
        </div>
      </div>

      {/* Skills */}

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
          marginTop: "28px",
        }}
      >
        {job.skills.map((skill) => (
          <span
            key={skill}
            style={{
              padding: "8px 14px",
              borderRadius: "999px",
              background: "rgba(59,130,246,.08)",
              border: "1px solid rgba(59,130,246,.18)",
              color: "#93c5fd",
              fontSize: "13px",
            }}
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Buttons */}

      <div
        style={{
          display: "flex",
          gap: "14px",
          marginTop: "36px",
        }}
      >
        <button className="btn-glass btn-glass-secondary">
          View Details
        </button>

        <button className="btn-glass btn-glass-primary">
          Apply Now
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}