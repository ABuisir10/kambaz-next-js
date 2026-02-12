import Link from "next/link";
import { FormControl } from "react-bootstrap";
export default function Signin() {
  return (
    <div id="wd-signin-screen">
      <h1>Profile</h1>
      <FormControl id="wd-username"
             placeholder="alice"
             className="mb-2"/><br />
      <FormControl id="wd-password"
             placeholder="123" type="password"
             className="mb-2"/><br />
      <FormControl id="wd-firstname"
             placeholder="Alice" type="firstname"
             className="mb-2"/><br />
      <FormControl id="wd-lastname"
             placeholder="Wonderland" type="lastname"
             className="mb-2"/><br />
      <FormControl id="wd-date"
             placeholder="mm/dd/yyyy" type="date"
             className="mb-2"/><br />
      <FormControl id="wd-email"
             placeholder="alice@wonderland.com" type="email"
             className="mb-2"/><br />
      <FormControl id="wd-User"
             placeholder="User" type="User"
             className="mb-2"/><br />                                   
      <Link id="wd-signup-btn"
            href="/account/signin"
            className="btn btn-danger w-100 mb-2">
            Sign out </Link><br />
    </div> );}