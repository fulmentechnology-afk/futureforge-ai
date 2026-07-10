import { useState } from "react";
import { Upload, Send, CheckCircle2, ArrowRight } from "lucide-react";

export default function CareerForm() {
  const [resumeName, setResumeName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Backend integration after Hilite Builders meeting
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="py-24">
        <div className="container max-w-3xl">

          <div className="glass-card glass-card--premium rounded-3xl p-12 text-center">

            <CheckCircle2
              size={72}
              className="mx-auto text-cyan-400"
            />

            <h2 className="section-title mt-8">
              Application Submitted Successfully
            </h2>

            <p className="section-subtitle mt-6 mx-auto">
              Thank you for your interest in
              <strong> Fulmen Technology.</strong>

              <br /><br />

              Our recruitment team will carefully review your application.
              If your profile matches our requirements, we will contact you
              within the next few business days.
            </p>

            <button
              onClick={() => setSubmitted(false)}
              className="btn-glass btn-glass-primary mt-10"
            >
              Apply for Another Position
              <ArrowRight size={18} />
            </button>

          </div>

        </div>
      </section>
    );
  }

  return (
    <section className="py-24">

      <div className="container max-w-5xl">

        <div className="text-center mb-16">

          <div className="section-label justify-center">
            APPLY NOW
          </div>

          <h2 className="section-title">
            Join
            <span className="gradient-text">
              {" "}Fulmen Technology
            </span>
          </h2>

          <p className="section-subtitle mx-auto mt-6">
            Build AI products, enterprise software,
            automation platforms and the future with us.
          </p>

        </div>

        <form
          onSubmit={handleSubmit}
          className="glass-card glass-card--premium rounded-3xl p-10 mb-24"
        >

          <div className="grid md:grid-cols-2 gap-6">

            <input
              required
              className="input"
              placeholder="Full Name"
            />

            <input
              required
              type="email"
              className="input"
              placeholder="Email Address"
            />

            <input
              required
              className="input"
              placeholder="Phone Number"
            />

            <select
              required
              className="input"
            >
              <option value="">Select Position</option>
              <option>AI Automation Engineer</option>
              <option>React Frontend Developer</option>
              <option>Business Development Executive</option>
              <option>UI / UX Designer</option>
              <option>AI Research Intern</option>
            </select>

          </div>

          <textarea
            className="input mt-6"
            placeholder="Tell us about yourself..."
          />

          <label
             className="upload-box w-full mt-8 mb-6 flex cursor-pointer flex-col items-center justify-center gap-3"
          >
          
          <Upload
  size={46}
  className="text-cyan-400"
/>

<span className="text-xl font-semibold">
  {resumeName || "Upload Your Resume"}
</span>

<span className="text-sm text-slate-400">
  Drag & Drop or Click to Browse
</span>

<span className="text-xs text-slate-500">
  PDF • DOC • DOCX • Maximum 10 MB
</span>

            <input
              hidden
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={(e) =>
                setResumeName(
                  e.target.files?.[0]?.name || ""
                )
              }
            />

          </label>

          <button
            type="submit"
            className="btn-glass btn-glass-primary mt-8 flex w-full items-center justify-center gap-3 py-4 text-lg"
          >
            <Send size={18} />
            Submit Application
          </button>

        </form>

      </div>

    </section>
  );
}