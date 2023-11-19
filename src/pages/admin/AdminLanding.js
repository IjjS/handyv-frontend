import React, { useEffect, useState } from "react";
import SignIn from "../../components/admin/signin/SignIn";
import "./AdminLanding.scss";

const Admin = () => {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    console.log(isAdmin);
  }, [isAdmin]);

  const handleSignInSuccess = () => {
    setIsAdmin(true);
  };

  return (
    <div className="admin-container page">
      <SignIn onSuccess={handleSignInSuccess} />
    </div>
  );
};

export default Admin;