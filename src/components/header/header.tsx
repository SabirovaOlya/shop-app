import React, { memo, useEffect, useState } from 'react';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';
// import { DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar } from "@nextui-org/react";
import './style.scss'


interface Props {
    isSidebarMini: boolean;
    onSidebarToggle: () => void;
}

const Header: React.FC<Props> = ({ onSidebarToggle, isSidebarMini }) => {
    const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
    const [isFullScreen, setIsFullScreen] = useState<boolean>(false);

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
        <React.Fragment>
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
                {/* <Dropdown placement="bottom-end">
                    <DropdownTrigger>
                        <Avatar
                            isBordered
                            as="button"
                            className="transition-transform"
                            color="primary"
                            name="Jason Hughes"
                            size="sm"
                            fallback={
                                <PersonIcon />
                            }
                        />
                    </DropdownTrigger>
                    <DropdownMenu aria-label="Profile Actions">
                        <DropdownItem key="settings">My Settings</DropdownItem>
                        <DropdownItem key="system">System</DropdownItem>
                        <DropdownItem key="logout" color="danger" onClick={
                            () => {
                                window.localStorage.removeItem('token')
                                window.location.reload(false);
                                window.location.pathname = '/';
                            }
                        }>
                            Log Out
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown> */}
            </header>
        </React.Fragment>
    )
}

export default memo(Header)