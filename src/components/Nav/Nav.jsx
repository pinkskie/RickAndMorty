import { useState } from "react";
import { useHistory } from "react-router";
import { BottomNavigation, BottomNavigationAction as Tab } from "@material-ui/core";
import { CharactersIcon, LocationsIcon, EpisodesIcon, SettingsIcon } from "../../icons";

const links = [
  { value: "/", label: "Персонажи", icon: CharactersIcon },
  { value: "/locations", label: "Локации", icon: LocationsIcon },
  { value: "/episodes", label: "Эпизоды", icon: EpisodesIcon },
  { value: "/settings", label: "Настройки", icon: SettingsIcon },
];

const Nav = () => {
  const [tab, setTab] = useState("/");
  const history = useHistory();

  const handleChangeTab = (e, newTab) => {
    setTab(newTab);
    history.push(newTab);
  };

  return (
    <BottomNavigation 
      value={tab}
      onChange={handleChangeTab}
      showLabels
    >
      {links.map(({ value, label, icon: Icon }) => (
        <Tab key={value} value={value} label={label} icon={<Icon selected={tab === value}/>}/>
      ))}
    </BottomNavigation>
  );
};

export default Nav;
