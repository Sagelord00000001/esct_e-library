// 'use client'
// import FacultyCard from "@/components/FacultyCard";
// import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";

// export default function Dashboard() {
//       const { user } = useKindeBrowserClient();
  
//   return (
//     <div className="min-h-screen bg-blue-100">
//       <h3 className="text-black text-center pt-2 text-xs sm:text-sm md:text-lg lg:text-xl font-semibold">
//         Welcome {user?.given_name} to ESCT e-Library - Your Gateway to Limtless Learning!</h3>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
//         <FacultyCard title="Faculty of Management Sciences" route="/dashboard/faculty/management"/>
//         <FacultyCard title="Faculty of Social Sciences" route="/dashboard/faculty/social" />
//         <FacultyCard title="Faculty of Pure and Applied Sciences" route="/dashboard/faculty/applied" />
//         <FacultyCard title="Faculty of Communication and Media Studies" route="/dashboard/faculty/media" />
//       </div>

//       <div className="flex flex-col">
//   <h3 className="text-center mt-8 text-slate-700 font-semibold">Quick Links</h3>
//   <div className="flex flex-col sm:flex-row justify-center gap-4 mt-2 md:flex-row">
//     <button className="border-2 border-blue-700 text-blue-700 px-4 py-2 rounded-lg hover:bg-blue-700 hover:text-white transition">
//       Search Library
//     </button>
//     <button className="border-2 border-blue-700 text-blue-700 px-4 py-2 rounded-lg hover:bg-blue-700 hover:text-white transition">
//       Recent Additions
//     </button>
//     <button className="border-2 border-blue-700 text-blue-700 px-4 py-2 rounded-lg hover:bg-blue-700 hover:text-white transition">
//       Recommended Reads
//     </button>
//   </div>
// </div>
// </div>

//   );
// }

"use client";
import FacultyCard from "@/components/FacultyCard";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";

export default function Dashboard() {
  const { user, isLoading } = useKindeBrowserClient();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-500">
        <p className="text-lg font-semibold text-white">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-blue-100">
      <h3 className="text-black text-center pt-2 text-xs sm:text-sm md:text-lg lg:text-xl font-semibold">
        Welcome {user?.given_name || "Guest"} to ESCT e-Library - Your Gateway to Limitless Learning!
      </h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
        <FacultyCard title="Faculty of Management Sciences" route="/dashboard/faculty/management"/>
        <FacultyCard title="Faculty of Social Sciences" route="/dashboard/faculty/social" />
        <FacultyCard title="Faculty of Pure and Applied Sciences" route="/dashboard/faculty/applied" />
        <FacultyCard title="Faculty of Communication and Media Studies" route="/dashboard/faculty/media" />
        <FacultyCard title="Other Related Books" route="/dashboard/faculty/others" />
      </div>

      <div className="flex flex-col">
        <h3 className="text-center mt-8 text-slate-700 font-semibold">Quick Links</h3>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-2 md:flex-row">
          <button className="border-2 border-blue-700 text-blue-700 px-4 py-2 rounded-lg hover:bg-blue-700 hover:text-white transition">
            Search Library
          </button>
          <button className="border-2 border-blue-700 text-blue-700 px-4 py-2 rounded-lg hover:bg-blue-700 hover:text-white transition">
            Recent Additions
          </button>
          <button className="border-2 border-blue-700 text-blue-700 px-4 py-2 rounded-lg hover:bg-blue-700 hover:text-white transition">
            Recommended Reads
          </button>
        </div>
      </div>
    </div>
  );
}
