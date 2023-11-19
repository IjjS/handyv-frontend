import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import SlideButton from "../../../components/common/button/slide/SlideButton";
import useUserByCarNumber from "../../../hooks/queries/user/useUserByCarNumber";
import "./Landing.scss";
import { useNavigate } from "react-router-dom";

const queryOptions = {
  enabled: false,
  retry: false,
  refetchOnWindowFocus: false,
  onError: (error) => error.response.data,
};

const Landing = () => {
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState(false);
  const [adminNumber, setAdminNumber] = useState("");

  const { data, refetch } = useUserByCarNumber(adminNumber, queryOptions);

  useEffect(() => {
    if (isAdmin) {
      navigate("/admin/main");
    }
  }, [isAdmin]);

  useEffect(() => {
    if (data?.userAuthority === "ADMIN") {
      setIsAdmin(true);
    }
  }, [data]);

  const handleAdminNumberChange = (e) => {
    setAdminNumber(e.target.value);
  };

  const signInAdmin = () => {
    refetch();
  };

  return (
    <div className="admin-container page">
      <div className="admin-signin-container">
        <span className="instruction">관리자 번호를 입력해주세요.</span>
        <TextField
          id="admin-number-text-field"
          label="관리자 번호"
          variant="outlined"
          size="small"
          required={true}
          value={adminNumber}
          onChange={handleAdminNumberChange}
        />
        <SlideButton content={"로그인"} onClick={signInAdmin} />
      </div>
    </div>
  );
};

export default Landing;
