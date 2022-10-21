import { useAuth, useAuthDispatch } from "Context/AuthProvider";
import Link from "next/link";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
  const router = useRouter();

  const { user, loading, error } = useAuth();
  const dispatch = useAuthDispatch();

  return (
    <div className="min-h-screen bg-gray-50">
      <header>
        <nav className="flex-between px-8 h-14 shadow-md">
          <ul className="flex-start gap-8">
            <li>
              <Link href="/">
                <a className={`${router.pathname === "/" ? "text-blue-500" : ""}`}>خانه</a>
              </Link>
            </li>
            <li>
              <Link href="/blogs">
                <a className={`${router.pathname === "/blogs" ? "text-blue-500" : ""}`}>بلاگ</a>
              </Link>
            </li>
            <li>
              <Link href="/admin">
                <a className={`${router.pathname === "/admin" ? "text-blue-500" : ""}`}>پنل ادمین</a>
              </Link>
            </li>
          </ul>
          <ul className="flex-end gap-8">
            {user ? (
              <>
                <li>
                  <button onClick={() => dispatch({ type: "SIGNOUT" })}>خروج</button>
                </li>
                <li>{user.email}</li>
              </>
            ) : (
              <>
                <li>
                  <Link href="/signin">
                    <a className={`${router.pathname === "/signin" ? "text-blue-500" : ""}`}>ورود</a>
                  </Link>
                </li>
                <li>
                  <Link href="/signup">
                    <a className={`${router.pathname === "/signup" ? "text-blue-500" : ""}`}>ثبت نام</a>
                  </Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </header>

      {children}

      <footer></footer>
    </div>
  );
};

export default Layout;
