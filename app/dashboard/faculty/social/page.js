import Link from "next/link";
import FacultyCard from "@/components/FacultyCard"; // Ensure correct path

export default function Page() {
  const departments = [
    { name: "Economics", route: "/dashboard/departments/economics", description:'Explore books on microeconomics, macroeconomics, economic policies, and financial markets.' },
    { name: "International Relation", route: "/dashboard/departments/IR", description:'Find books on global diplomacy, international trade, and geopolitical strategies.' },
    { name: "Psychology", route: "/dashboard/departments/psychology", description:'Discover books on human behavior, cognitive processes, and mental health.' },
    { name: "Criminology", route: "/dashboard/departments/criminology", description:'Explore books on criminal justice, forensic science, and crime prevention strategies.' },
    { name: "Public Administration", route: "/dashboard/departments/PA", description:'Access books on governance, public policy, and administrative leadership.' },    
    { name: "Public Science", route: "/dashboard/departments/public", description:'Learn about political theories, government systems, and global politics.' },
  ];

  return (
    <div className="min-h-screen bg-blue-100">
      <div className="text-center pt-12">
        <h2 className="text-2xl font-bold text-blue-700">Welcome to the Faculty of Social Science</h2>
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
