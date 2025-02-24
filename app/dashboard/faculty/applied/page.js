import Link from "next/link";
import FacultyCard from "@/components/FacultyCard"; // Ensure correct path

export default function Page() {
  const departments = [
    { name: "Computer Science", route: "/dashboard/departments/computer", description:'Explore programming, artificial intelligence, cybersecurity, and software development books.' },
    { name: "Medical Labouratory Science", route: "/dashboard/departments/medical",description:'Find books on clinical diagnostics, laboratory techniques, and medical research.' },
    { name: "Microbiology", route: "/dashboard/departments/microbiology", description:'Discover books on microbial genetics, immunology, and infectious diseases.'},
    { name: "Biochemistry", route: "/dashboard/departments/biochemistry", description:'Explore books on molecular biology, enzymology, and biochemical pathways.' },
    { name: "Biomedical Science", route: "/dashboard/departments/biomedical", description:'Access books on property valuation, real estate investment, and urban planning.' },    
    { name: "Estate Management", route: "/dashboard/departments/estate", description:'Learn about human physiology, medical biotechnology, and disease pathology.' },
  ];

  return (
    <div className="min-h-screen bg-blue-100">
      <div className="text-center pt-12">
        <h2 className="text-2xl font-bold text-blue-700">Welcome to the Faculty of Pure and Applied Science</h2>
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
