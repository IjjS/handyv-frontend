export const adminFeatures = [
  {
    className: "station",
    content: "충전소 관리",
    contentList: [
      { title: "충전소 등록", path: "/admin/station/create" },
      { title: "충전소 조회", path: "/admin/station/list" },
    ],
  },
  {
    className: "charger",
    content: "충전기 관리",
    contentList: [{ title: "충전기 등록", path: "/admin/charger/create" }],
  },
];
