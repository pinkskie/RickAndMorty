const EpisodesIcon = ({ selected = false }) => (
  <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M20.075 7.5H5.675C4.68089 7.5 3.875 8.30589 3.875 9.3V19.2C3.875 20.1941 4.68089 21 5.675 21H20.075C21.0691 21 21.875 20.1941 21.875 19.2V9.3C21.875 8.30589 21.0691 7.5 20.075 7.5Z"
      stroke={selected ? "#43D049" : "#5B6975"}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17.3755 3L12.8755 7.5L8.3755 3"
      stroke={selected ? "#43D049" : "#5B6975"}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default EpisodesIcon;