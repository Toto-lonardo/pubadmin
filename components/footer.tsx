import Link from "next/link";
const footer = () => {
  return (
    <div className="bg-red-900 text-white flex flex-col justify-center items-center">
      <div>Logo Footer</div>
      <div className="self-end m-2">
        <Link href="/admin">Admin</Link>
      </div>
      <div>Copyright</div>
    </div>
  );
};

export default footer;
