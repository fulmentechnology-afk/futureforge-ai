import { Search } from "lucide-react";

interface JobSearchProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
}

const JobSearch = ({ searchTerm, setSearchTerm }: JobSearchProps) => {
  return (
    <section className="py-10">
      <div className="mx-auto max-w-5xl px-6">
        <div className="relative">
          <Search
            size={20}
            className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="text"
            placeholder="Search jobs, skills or department..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full rounded-2xl border border-slate-200 py-4 pl-14 pr-5 text-lg shadow-sm focus:border-blue-500 focus:outline-none"
          />
        </div>
      </div>
    </section>
  );
};

export default JobSearch;