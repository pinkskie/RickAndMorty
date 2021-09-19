const SettingsIcon = ({ selected = false }) => (
  <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M14.5342 10.0907C15.5886 11.1452 15.5886 12.8547 14.5342 13.9091C13.4798 14.9635 11.7702 14.9635 10.7158 13.9091C9.6614 12.8547 9.6614 11.1452 10.7158 10.0907C11.7702 9.03632 13.4798 9.03632 14.5342 10.0907"
      stroke={selected ? "#43D049" : "#5B6975"}
      strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path
      d="M5.87499 12C5.87499 12.297 5.90199 12.594 5.93799 12.882L4.34999 14.124C3.99799 14.4 3.90199 14.893 4.12599 15.28L5.53799 17.723C5.76099 18.11 6.23499 18.273 6.64999 18.107L8.07199 17.536C8.35299 17.423 8.66599 17.468 8.91799 17.635C9.13799 17.781 9.36599 17.915 9.60199 18.035C9.87199 18.172 10.068 18.417 10.111 18.717L10.328 20.23C10.391 20.672 10.77 21 11.216 21H14.033C14.479 21 14.858 20.672 14.921 20.23L15.138 18.718C15.181 18.418 15.379 18.171 15.65 18.035C15.885 17.917 16.112 17.784 16.331 17.639C16.585 17.471 16.899 17.423 17.181 17.537L18.6 18.107C19.014 18.273 19.488 18.11 19.712 17.723L21.124 15.28C21.348 14.893 21.252 14.399 20.9 14.124L19.312 12.882C19.348 12.594 19.375 12.297 19.375 12C19.375 11.703 19.348 11.406 19.312 11.118L20.9 9.876C21.252 9.6 21.348 9.107 21.124 8.72L19.712 6.277C19.489 5.89 19.015 5.727 18.6 5.893L17.181 6.463C16.899 6.576 16.585 6.529 16.331 6.361C16.112 6.216 15.885 6.083 15.65 5.965C15.379 5.829 15.181 5.582 15.138 5.282L14.922 3.77C14.859 3.328 14.48 3 14.034 3H11.217C10.771 3 10.392 3.328 10.329 3.77L10.111 5.284C10.068 5.583 9.87099 5.829 9.60199 5.966C9.36599 6.086 9.13799 6.221 8.91799 6.366C8.66499 6.532 8.35199 6.577 8.07099 6.464L6.64999 5.893C6.23499 5.727 5.76099 5.89 5.53799 6.277L4.12599 8.72C3.90199 9.107 3.99799 9.601 4.34999 9.876L5.93799 11.118C5.90199 11.406 5.87499 11.703 5.87499 12V12Z"
      stroke={selected ? "#43D049" : "#5B6975"}
      strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export default SettingsIcon;