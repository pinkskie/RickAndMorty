import { useState } from 'react';
import { useHistory } from 'react-router'
import { BottomNavigation, BottomNavigationAction as Tab } from "@material-ui/core";
import { CharactersIcon, LocationsIcon, EpisodesIcon, SettingsIcon } from "../../icons";

const Nav = () => {
    const [tab, setTab] = useState('/')
    const history = useHistory();

    const handleChangeTab = (e, newTab) => {
        setTab(newTab);
        history.push(newTab);
    }

    return (
        <BottomNavigation 
            value={tab}
            onChange={handleChangeTab}
            shwoLabels
        >
            <Tab value='/' label='Персонажи' icon={<CharactersIcon selected={tab === '/'}/>}/>
            <Tab value='/locations' label='Локации' icon={<LocationsIcon selected={tab === '/locations'}/>}/>
            <Tab value='/episodes' label='Эпизоды' icon={<EpisodesIcon selected={tab ==='/episodes'}/>}/>
            <Tab value='/settings' label='Настройки' icon={<SettingsIcon selected={tab === '/settings'}/>}/>
        </BottomNavigation>
    );
}

export default Nav;
