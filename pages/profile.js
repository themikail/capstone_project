import React from "react";
import { signOut, useSession } from "next-auth/react";

function Profile() {
  const { data: session, status } = useSession();

  console.log(session);
  return (
    <div>
      <h1>Profile</h1>

      <button onClick={() => signOut()}>LogOut</button>
    </div>
  );
}

export default Profile;
