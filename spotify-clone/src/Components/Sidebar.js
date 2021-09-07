import React from 'react'
import './Sidebar.css';
import SidebarOption from './SidebarOption';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import { useDataLayerValue } from './DataLayer';


function Sidebar() {
    const [{ playlists }] = useDataLayerValue();
    
    return (
        <div className="sidebar">
            <img
                className="sidebar__logo"
                src="https://d1dlh1v05qf6d3.cloudfront.net/information/uploads/2017/07/Spotifys-Black-Australia-playlist-1260x840.png"
                alt="spotify logo with text"
            />
            <SidebarOption icon={HomeIcon} title="Home"/>
            <SidebarOption icon={SearchIcon} title="Search"/>
            <SidebarOption icon={LibraryMusicIcon} title="Your Library" />
            
            <br />
            <strong className="sidebar__title">PLAYLISTS</strong>
            <hr />

            {playlists?.items?.map(playlist => (
                <SidebarOption id={ playlist.id } title={ playlist.name }/>
            ))}
        </div>
    )
}

export default Sidebar;
