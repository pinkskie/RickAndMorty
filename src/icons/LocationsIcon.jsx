const LocationsIcon = ({ selected = false }) => (
    <svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20.1708 13.0302C22.9916 15.2938 24.5604 17.2948 24.0189 18.2315C23.1636 19.7097 17.3691 17.9689 11.0768 14.3431C4.78447 10.7173 0.376191 6.57978 1.23101 5.10205C1.76576 4.17823 4.2296 4.51173 7.53868 5.77719"
        stroke={selected ? "#43D049" : "#5B6975"}
        strokeWidth="2"
        strokeMiterlimit="10"
      />
      <path
        d="M12.6252 19.3331C16.8593 19.3331 20.2918 15.9007 20.2918 11.6666C20.2918 7.43244 16.8593 4 12.6252 4C8.39107 4 4.95863 7.43244 4.95863 11.6666C4.95863 15.9007 8.39107 19.3331 12.6252 19.3331Z"
        stroke={selected ? "#43D049" : "#5B6975"}
        strokeWidth="2"
        strokeMiterlimit="10"
      />
    </svg>
  )
  
  export default LocationsIcon;