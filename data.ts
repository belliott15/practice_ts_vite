const data = [
  {
    id: 1,
    title: "How to file",
    fileSize: 12453,
    fileType: "file",
    contents: [],
  },
  {
    id: 2,
    title: "How not to file",
    fileSize: 125235,
    fileType: "folder",
    contents: [
      {
        id: 10,
        title: "Bad filing",
        fileSize: 12453,
        fileType: "file",
        contents: [],
      },
      {
        id: 11,
        title: "worse filing",
        fileSize: 12453,
        fileType: "file",
        contents: [],
      },
    ],
  },
  {
    id: 3,
    title: "Dogs",
    fileSize: 1235632,
    fileType: "folder",
    contents: [
      {
        id: 12,
        title: "Aussie",
        fileSize: 12453,
        fileType: "file",
        contents: [],
      },
      {
        id: 13,
        title: "Great Dane",
        fileSize: 12453,
        fileType: "file",
        contents: [],
      },
    ],
  },
];

export default data;
