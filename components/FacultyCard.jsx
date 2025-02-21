// import Link from "next/link";

// export default function FacultyCard({ title, route,text }) {
//   return (
//     <Link href={route}>
//       <div className="w-50 h-40 gap-4 bg-slate-100  p-6 m-4 flex  items-center justify-center text-center font-bold rounded-lg cursor-pointer  hover:bg-blue-700 ">
//        <h3 className="text-blue-700 hover:text-white transition"> {title}</h3>
//         <p className="text-xs text-slate-600 ">{text}</p>
//       </div>
//     </Link>
//   );
// }
// // 
import Link from "next/link";

export default function FacultyCard({ title, description, route }) {
  return (
    <Link href={route}>
      <div className="bg-white border border-gray-200 shadow-md rounded-xl p-6 h-40 flex flex-col justify-between hover:shadow-lg transition">
        <h3 className="text-lg font-semibold text-blue-700">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </Link>
  );
}