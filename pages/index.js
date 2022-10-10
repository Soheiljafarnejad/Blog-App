import Link from "next/link";

export default function Home() {

  return (
    <div className="centering gap-8 min-h-screen">
      <Link href="/blogs">
        <a className="centering w-80 h-44 text-2xl font-bold border-2 transition-all duration-200 hover:border-blue-500 rounded-xl">بلاگ</a>
      </Link>

      <Link href="/panel_admin">
        <a className="centering w-80 h-44 text-2xl font-bold border-2 transition-all duration-200 hover:border-blue-500 rounded-xl">پنل ادمین</a>
      </Link>
    </div>
  );
}
