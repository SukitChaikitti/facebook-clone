import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import { StorefrontOutlined, SubscriptionsOutlined, SupervisedUserCircle } from '@material-ui/icons';
import { Avatar , IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useStateValue } from './StateProvider';


const Header = () => {

    const [{user} , dispatch ] = useStateValue();

    return (
        <div className = 'header'>
            <div className = 'header__left'>
                <img src = 'https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png'/>
                <div className = 'header__input'>
                    <SearchIcon/>
                    <input type = 'text' placeholder = 'Search Facebook'></input>
                </div>
            </div>
            <div className = 'header__middle'>
                <div className = 'header__option'>
                    <HomeIcon/>
                </div>
                <div className = 'header__option'>
                    <FlagIcon/>
                </div>
                <div className = 'header__option'>
                    <SubscriptionsOutlined/>
                </div>
                <div className = 'header__option'>
                    <StorefrontOutlined/>
                </div>
                <div className = 'header__option'>
                    <SupervisedUserCircle/>
                </div>
            </div>
            <div className = 'header__right'>
                <div className = 'header__info'>
                    <Avatar src = {user.photoUrl}/>
                    <h4>{user.displayName}</h4>
                </div>
                <IconButton>
                    <AddIcon/>
                </IconButton>
                <IconButton>
                    <ForumIcon/>
                </IconButton>
                <IconButton>
                    <NotificationsActiveIcon/>
                </IconButton>
                <IconButton>
                    <ExpandMoreIcon/>
                </IconButton>
            </div>
        </div>
    )
};

export default Header;