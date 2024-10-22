import React, { memo, useEffect, useState, MouseEvent, Fragment } from 'react';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { menuPaper } from '../../utils/header-menu-settings';
import './style.scss'


interface Props {
    isSidebarMini: boolean;
    onSidebarToggle: () => void;
}

const Header: React.FC<Props> = ({ onSidebarToggle, isSidebarMini }) => {
    const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
    const [isFullScreen, setIsFullScreen] = useState<boolean>(false);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    useEffect(() => {
        const handleWindowResize = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleWindowResize);
        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    const toggleFullScreen = () => {
        const elem = document.documentElement;

        if (!document.fullscreenElement) {
            if (elem.requestFullscreen) {
                elem.requestFullscreen();
            }
            setIsFullScreen(true);
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            }
            setIsFullScreen(false);
        }
    };


    return (
        <Fragment>
            <header className={isSidebarMini ? 'mini_header' : ''}>
                {
                    windowWidth < 992 && (
                        <div className="mobile_menu">
                            <MenuIcon onClick={onSidebarToggle} className='toggle' />
                        </div>
                    )
                }
                <div className='header_last'>
                    <div className="full_screen_icon" onClick={toggleFullScreen}>
                        <button className='text-sm'> {isFullScreen ? <CloseFullscreenIcon className='text-sm' /> : <OpenInNewIcon className='text-sm' />} </button>
                    </div>
                </div>
                <Tooltip title="Account settings">
                    <IconButton
                        onClick={handleClick}
                        size="small"
                        sx={{ ml: 2 }}
                        aria-controls={open ? 'account-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                    >
                        <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
                    </IconButton>
                </Tooltip>
                <Menu
                    anchorEl={anchorEl}
                    id="account-menu"
                    open={open}
                    onClose={handleClose}
                    onClick={handleClose}
                    slotProps={{
                        paper: menuPaper
                    }}
                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                >
                    <MenuItem onClick={handleClose}><Avatar /> Profile</MenuItem>
                    <MenuItem onClick={handleClose}><Avatar /> My account</MenuItem>
                    <Divider />
                    <MenuItem onClick={handleClose}>
                        <ListItemIcon>
                            <PersonAdd fontSize="small" />
                        </ListItemIcon>
                        Add another account
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <ListItemIcon>
                            <Settings fontSize="small" />
                        </ListItemIcon>
                        Settings
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <ListItemIcon>
                            <Logout fontSize="small" />
                        </ListItemIcon>
                        Logout
                    </MenuItem>
                </Menu>
            </header>
        </Fragment>
    )
}

export default memo(Header)