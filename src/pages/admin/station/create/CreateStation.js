import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import SlideButton from "../../../../components/common/button/slide/SlideButton";
import { useNavigate } from "react-router-dom";
import useCreateStation from "../../../../hooks/queries/station/useCreateStation";
import "./CreateStation.scss";

const CreateStation = () => {
  const navigate = useNavigate();
  const [stationName, setStationName] = useState("");

  const mutateOption = {
    enabled: false,
    retry: false,
    refetchOnWindowFocus: false,
    onSuccess: (data) => {
      alert(`충전소 ${data.name}의 등록을 완료했습니다.`);
      navigate("/admin/main");
    },
    onError: (error) => {
      alert(error.response.data.message);
    },
  };

  const { mutate: registerStation } = useCreateStation(
    stationName,
    mutateOption,
  );

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
        <SlideButton content="충전소 등록하기" onClick={registerStation} />
      </div>
    </div>
  );
};

export default CreateStation;
