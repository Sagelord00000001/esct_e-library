import Link from "next/link";
import FacultyCard from "@/components/FacultyCard"; // Ensure correct path

export default function Page() {
  const departments = [
    { name: "Accounting", route: "https://drive.google.com/drive/folders/1WFAvTAkk4MKurX0z44VhTUwzVgDsaRkl", description:'Explore financial management, taxation, and auditing books.' },
    { name: "Business Administration", route: "/dashboard/departments/business", description:'Find books on business strategies, management, and leadership.' },
    { name: "Human Resource Management", route: "/dashboard/departments/hrm", description:'Learn about talent management, recruitment, and workplace culture.' },
    { name: "Banking and Finance", route: "/dashboard/departments/banking",description:'Access books on financial markets, investments, and banking policies.' },
    { name: "Marketing", route: "/dashboard/departments/marketing",description:'Discover books on branding, advertising, and consumer behavior.' },
  ];

  return (
    <div className="min-h-screen bg-blue-100">
      <div className="text-center pt-12">
        <h2 className="text-2xl font-bold text-blue-700">Welcome to the Faculty of Management Sciences</h2>
      </div>
      <p className="text-slate-950 text-center">Explore a collection of books and resources available in each department </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {departments.map((dept, index) => (
          <FacultyCard key={index} title={dept.name} route={dept.route} description={dept.description} />
        ))}
      </div>

      <p className="text-center text-sm mt-8 max-w-md text-black mx-auto">
        Stay updated with the latest publications, research papers, and e-books relevant to your field.
      </p>
    </div>
  );
}
