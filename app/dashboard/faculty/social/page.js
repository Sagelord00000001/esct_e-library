import Link from "next/link";
import FacultyCard from "@/components/FacultyCard"; // Ensure correct path

export default function Page() {
  const departments = [
    { name: "Economics", route: "https://drive.google.com/drive/folders/1l0yJ8PgKdqdJBWZnhcnNSwGc_EmFEwbZ", description:'Explore books on microeconomics, macroeconomics, economic policies, and financial markets.' },
    { name: "International Relation", route: "https://drive.google.com/drive/folders/1jO0tieswDlsdaVAN4-AP_Jgc7vAcSE8T", description:'Find books on global diplomacy, international trade, and geopolitical strategies.' },
    { name: "Psychology", route: "https://drive.google.com/drive/folders/1dIV-CKWQ5djzQ1no1QgnWF8Ll9D3bOM2", description:'Discover books on human behavior, cognitive processes, and mental health.' },
    { name: "Criminology", route: "https://drive.google.com/drive/folders/1uMtDsAXlErJEZAb0o5k19ssnmPZSjUtG", description:'Explore books on criminal justice, forensic science, and crime prevention strategies.' },
    { name: "Public Administration", route: "https://drive.google.com/drive/folders/1RMPLIqr2fkYXVFgjVQyfGtT49fgWIaDi", description:'Access books on governance, public policy, and administrative leadership.' },    
    { name: "Political Science", route: "https://drive.google.com/drive/folders/1Cucz5IlOFq4S-i6NuJz-ailB4dUAUXgf", description:'Learn about political theories, government systems, and global politics.' },
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
