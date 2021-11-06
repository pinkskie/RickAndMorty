const PaletteIcon = ({ isLight }) => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path 
      d="M17.9984 9.5625C17.7704 9.5625 17.5859 9.747 17.5889 9.975C17.5889 10.203 17.7734 10.3875 18.0014 10.3875C18.2294 10.3875 18.4139 10.203 18.4139 9.975C18.4109 9.747 18.2279 9.5625 17.9984 9.5625" 
      stroke={isLight ? "black": "white"}
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <path 
      d="M10.386 17.9985C10.386 17.7705 10.2015 17.586 9.975 17.589C9.747 17.589 9.5625 17.7735 9.5625 18.0015C9.5625 18.2295 9.747 18.414 9.975 18.414C10.203 18.414 10.386 18.228 10.386 17.9985" 
      stroke={isLight ? "black": "white"}
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <path 
      d="M23.9655 12.033C23.805 11.8725 23.544 11.8725 23.385 12.0345C23.2245 12.195 23.2245 12.456 23.385 12.6165C23.5455 12.777 23.8065 12.777 23.967 12.6165C24.1275 12.4545 24.1275 12.195 23.9655 12.033Z" 
      stroke={isLight ? "black": "white"}
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <path 
      d="M12.6149 23.3835C12.4544 23.223 12.1934 23.223 12.0344 23.385C11.8739 23.5455 11.8739 23.8065 12.0344 23.967C12.1949 24.1275 12.4559 24.1275 12.6164 23.967C12.7769 23.8065 12.7769 23.5455 12.6149 23.3835Z" 
      stroke={isLight ? "black": "white"}
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <path 
      d="M12.6165 12.6151C12.777 12.4546 12.777 12.1936 12.615 12.0346C12.4545 11.8741 12.1935 11.8741 12.033 12.0346C11.8725 12.1951 11.8725 12.4561 12.033 12.6166C12.1935 12.7771 12.4545 12.7771 12.6165 12.6151Z" 
      stroke={isLight ? "black": "white"}
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <path 
      d="M17.9998 31.5001C10.4173 31.5001 4.29431 25.2481 4.50581 17.6176C4.70081 10.5736 10.5733 4.70105 17.6173 4.50605C25.2478 4.29455 31.4998 10.4176 31.4998 18.0001V19.5001C31.4998 21.1576 30.1573 22.5001 28.4998 22.5001H25.4053C23.4118 22.5001 21.9733 24.4081 22.5208 26.3236L22.9063 27.6751C23.4553 29.5921 22.0153 31.5001 20.0233 31.5001H17.9998Z" 
      stroke={isLight ? "black": "white"}
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

export default PaletteIcon;