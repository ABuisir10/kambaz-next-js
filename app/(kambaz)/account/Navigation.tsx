"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Nav, NavLink } from "react-bootstrap";
import { useSelector } from "react-redux";
import { RootState } from "../store";

export default function AccountNavigation() {
  const { currentUser } = useSelector((state: RootState) => state.accountReducer);
  const pathname = usePathname();
  
  return (
    <Nav id="wd-account-navigation" variant="pills" className="flex-column">
      <NavLink as={Link} href="/account/signin" active={pathname.endsWith('/signin')}>
        Signin
      </NavLink>
      <NavLink as={Link} href="/account/signup" active={pathname.endsWith('/signup')}>
        Signup
      </NavLink>
      <NavLink as={Link} href="/account/profile" active={pathname.endsWith('profile')}>
        Profile
      </NavLink>
      {currentUser && currentUser.role === "ADMIN" && (
        <NavLink as={Link} href="/account/users" active={pathname.endsWith('users')}>
          Users
        </NavLink>
      )}
    </Nav>
  );
}