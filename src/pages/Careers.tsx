import CareerHero from "../components/career/CareerHero";
import CompanyStats from "../components/career/CompanyStats";
import WhyJoin from "../components/career/WhyJoin";
import JobCards from "../components/career/JobCards";
import HiringProcess from "../components/career/HiringProcess";
import LifeAtFulmen from "../components/career/LifeAtFulmen";
import CareerForm from "../components/career/CareerForm";
import CareerCTA from "../components/career/CareerCTA";

const Careers = () => {
  return (
    <main className="career-page">
      <CareerHero />

      <CompanyStats />

      <WhyJoin />

      <JobCards />

      <HiringProcess />

      <LifeAtFulmen />

      <CareerForm />

      <CareerCTA />
    </main>
  );
};

export default Careers;