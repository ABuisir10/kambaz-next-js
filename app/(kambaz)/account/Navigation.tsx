import Link from "next/link";

export default function AccountNavigation() {
  return (
    <div id="wd-account-navigation" className="list-group">
      <Link className="list-group-item" href="/account/signin">Signin</Link>
      <Link className="list-group-item" href="/account/signup">Signup</Link>
      <Link className="list-group-item" href="/account/profile">Profile</Link>
    </div>
  );
}