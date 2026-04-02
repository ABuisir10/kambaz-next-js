"use client";
import { FormControl } from "react-bootstrap";
import * as client from "../client";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { RootState } from "../../store";
import { setCurrentUser } from "../reducer";

export default function Profile() {
  const [profile, setProfile] = useState<any>({});
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state: RootState) => state.accountReducer);
  const router = useRouter();
  const updateProfile = async () => {
    const updatedProfile = await client.updateUser(profile);
    dispatch(setCurrentUser(updatedProfile));
  };
  const signout = async () => {
    await client.signout();
    dispatch(setCurrentUser(null));
    router.push("/account/signin");
  };

  useEffect(() => {
    if (currentUser) setProfile(currentUser);
  }, [currentUser]);

  return (
    <div id="wd-profile-screen">
      <h3>Profile</h3>
      {profile && (
        <>
          <FormControl id="wd-username"
                 value={profile.username || ""}
                 placeholder="alice"
                 onChange={(e) => setProfile({ ...profile, username: e.target.value })}
                 className="mb-2" />
          <FormControl id="wd-password"
                 value={profile.password || ""}
                 placeholder="123" type="password"
                 onChange={(e) => setProfile({ ...profile, password: e.target.value })}
                 className="mb-2" />
          <FormControl id="wd-firstname"
                 value={profile.firstName || ""}
                 placeholder="Alice"
                 onChange={(e) => setProfile({ ...profile, firstName: e.target.value })}
                 className="mb-2" />
          <FormControl id="wd-lastname"
                 value={profile.lastName || ""}
                 placeholder="Wonderland"
                 onChange={(e) => setProfile({ ...profile, lastName: e.target.value })}
                 className="mb-2" />
          <FormControl id="wd-dob"
                 value={profile.dob || ""}
                 placeholder="mm/dd/yyyy" type="date"
                 onChange={(e) => setProfile({ ...profile, dob: e.target.value })}
                 className="mb-2" />
          <FormControl id="wd-email"
                 value={profile.email || ""}
                 placeholder="alice@wonderland.com" type="email"
                 onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                 className="mb-2" />
          <FormControl id="wd-role"
                 value={profile.role || ""}
                 placeholder="USER"
                 onChange={(e) => setProfile({ ...profile, role: e.target.value })}
                 className="mb-2" />
          <div>
            <button onClick={updateProfile} className="btn btn-primary w-100 mb-2">
              Update
            </button>
            <button onClick={signout} className="wd-signout-btn btn btn-danger w-100">
              Sign out
            </button>
          </div>
        </>
      )}
    </div>
  );
}
