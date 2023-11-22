import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import SlideButton from "../../../../components/common/button/slide/SlideButton";
import { useNavigate } from "react-router-dom";
import useCreateCharger from "../../../../hooks/queries/charger/useCreateCharger";
import { chargerTypes } from "../../../../constants/chargerTypes";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import "./CreateCharger.scss";

const CreateCharger = () => {
  const navigate = useNavigate();
  const [stationId, setStationId] = useState("");
  const [chargerType, setChargerType] = useState("");

  const mutateOption = {
    enabled: false,
    retry: false,
    refetchOnWindowFocus: false,
    onSuccess: (data) => {
      alert(
        `충전소(${data.stationName})에 충전기 ${data.hashName}의 등록을 완료했습니다.`,
      );
      navigate("/admin/main");
    },
    onError: (error) => {
      alert(error.response.data.message);
    },
  };

  const { mutate: registerCharger } = useCreateCharger(
    stationId,
    chargerType,
    mutateOption,
  );

  const handleStationIdChange = (e) => {
    setStationId(e.target.value);
  };

  const handleChargerTypeChange = (e) => {
    setChargerType(e.target.value);
  };

  return (
    <div className="page charger-creation-container">
      <div className="charger-creation-wrapper">
        <div className="field">
          <span className="instruction">
            충전기를 등록하실 충전소 ID를 입력해주세요
          </span>
          <TextField
            id="station-id-text-field"
            label="충전소 ID"
            variant="outlined"
            size="small"
            required={true}
            value={stationId}
            onChange={handleStationIdChange}
          />
        </div>
        <div className="field">
          <span className="instruction">충전기 종류를 선택해주세요</span>
          <div className="charger-type-selector-wrapper">
            <FormControl sx={{ minWidth: "8rem" }}>
              <InputLabel id="type-selector-label">충전기 종류</InputLabel>
              <Select
                labelId="type-selector-label"
                id="type-selector"
                value={chargerType}
                label="Charger Type"
                onChange={handleChargerTypeChange}
              >
                {chargerTypes?.map((type, index) => {
                  return (
                    <MenuItem value={type} key={index}>
                      {type}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </div>
        </div>
        <SlideButton content="충전기 등록하기" onClick={registerCharger} />
      </div>
    </div>
  );
};

export default CreateCharger;
