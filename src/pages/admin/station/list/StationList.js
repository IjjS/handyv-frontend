import React, { useState } from "react";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableCell from "@mui/material/TableCell";
import useStations from "../../../../hooks/queries/station/useStations";
import SearchBar from "../../../../components/common/searchbar/SearchBar";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import "./StationList.scss";

const StationList = () => {
  const [partialName, setPartialName] = useState("");

  const queryOption = {
    retry: false,
    refetchOnWindowFocus: false,
  };

  const { data } = useStations(partialName, queryOption);

  return (
    <div className="station-list-container">
      <div className="station-list-wrapper">
        <SearchBar
          value={partialName}
          setValue={setPartialName}
          target="충전소 이름"
        />
        <TableContainer>
          <Table>
            <TableHead>
              <TableCell>충전소 ID</TableCell>
              <TableCell>충전소 생성 일자</TableCell>
              <TableCell>충전소 이름</TableCell>
            </TableHead>
            <TableBody>
              {data?.map((station) => (
                <TableRow key={station.stationId}>
                  <TableCell>{station.stationId}</TableCell>
                  <TableCell>
                    {new Date(station.createdAt).toLocaleString()}
                  </TableCell>
                  <TableCell>{station.name}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default StationList;
