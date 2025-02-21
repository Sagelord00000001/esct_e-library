// import Link from "next/link";

// export default function FacultyCard({ title, description, route }) {
//   return (
//     <Link href={route}>
//       <div className="bg-white border border-gray-200 shadow-md rounded-xl p-6 h-40 flex flex-col justify-between hover:shadow-lg transition">
//         <h3 className="text-lg font-semibold text-blue-700">{title}</h3>
//         <p className="text-gray-600 text-sm">{description}</p>
//       </div>
//     </Link>
//   );
// }
import Link from "next/link";

export default function FacultyCard({ title, description, route }) {
  return (
    <Link href={route}>
      <div className="bg-white border border-gray-200 shadow-md rounded-xl p-6 h-auto flex flex-col justify-between hover:shadow-lg transition lg:m-8 lg:p-12 lg:py-20">
        <h3 className="text-lg font-semibold text-blue-700 sm:text-base xs:text-sm">{title}</h3>
        <p className="text-gray-600 text-sm sm:text-xs xs:text-xxs">{description}</p>
      </div>
    </Link>
  );
}
