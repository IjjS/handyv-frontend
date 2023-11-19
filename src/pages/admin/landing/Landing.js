import React, { useEffect, useState } from "react";
import SignIn from "../../../components/admin/signin/SignIn";
import "./Landing.scss";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    if (isAdmin) {
      navigate("/admin/main");
    }
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

export default Landing;
