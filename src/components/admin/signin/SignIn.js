import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import "./SignIn.scss";
import SlideButton from "../../common/button/slide/SlideButton";
import useUserByCarNumber from "../../../hooks/queries/user/useUserByCarNumber";

const SignIn = ({ onSuccess }) => {
  const queryOptions = {
    enabled: false,
    retry: false,
    refetchOnWindowFocus: false,
    onError: (error) => error.response.data,
  };

  const [adminNumber, setAdminNumber] = useState("");
  const { data, refetch } = useUserByCarNumber(adminNumber, queryOptions);

  useEffect(() => {
    if (data?.userAuthority === "ADMIN") {
      onSuccess();
    }
  }, [data]);

  const handleAdminNumberChange = (e) => {
    setAdminNumber(e.target.value);
  };

  const signInAdmin = () => {
    refetch();
  };

  return (
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
  );
};

export default SignIn;
