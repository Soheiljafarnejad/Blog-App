import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkCookies, SignOut } from "Redux/Reducers/AuthReducer";

const Layout = ({ children }) => {
  const router = useRouter();

  const { user, loading } = useSelector((store) => store.userReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkCookies());
  }, [dispatch]);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="shadow-md">
        <nav className={`flex-between px-8 h-14 ${loading ? "opacity-0" : "opacity-100"}`}>
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
                  <button onClick={() => dispatch(SignOut())}>خروج</button>
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
