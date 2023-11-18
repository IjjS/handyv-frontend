import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import "./SignIn.scss";
import SlideButton from "../../common/button/slide/SlideButton";

const SignIn = () => {
    const [adminNumber, setAdminNumber] = useState("");
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        console.log(isAdmin);
    }, [isAdmin])

    const handleAdminNumberChange = (e) => {
        setAdminNumber(e.target.value);
    }

    const signInAdmin = (e) => {
        e.preventDefault();
        setIsAdmin(true);
    }

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
            <SlideButton
                content={"로그인"}
                onClick={signInAdmin}
            />
        </div>
    )
}

export default SignIn;