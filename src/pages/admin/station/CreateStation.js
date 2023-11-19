import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import SlideButton from "../../../components/common/button/slide/SlideButton";
import "./CreateStation.scss";

const CreateStation = () => {
  const [stationName, setStationName] = useState("");

  const handleStationNameChange = (e) => {
    setStationName(e.target.value);
  };

  return (
    <div className="page station-creation-container">
      <div className="station-creation-wrapper">
        <span className="instruction">충전소 이름을 입력해주세요</span>
        <TextField
          id="station-name-text-field"
          label="충전소 이름"
          variant="outlined"
          size="small"
          required={true}
          value={stationName}
          onChange={handleStationNameChange}
        />
        <SlideButton content="충전소 등록하기" />
      </div>
    </div>
  );
};

export default CreateStation;
