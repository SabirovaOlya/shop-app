import { useState, memo } from 'react'
import EqualizerIcon from '@mui/icons-material/Equalizer';
import { useNavigate } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ChatIcon from '@mui/icons-material/Chat';
import { Dispatcher } from '../../types';
import './style.scss'

interface Props {
    currentPath: string;
    sidebarActive: boolean;
    isSidebarMini: boolean;
    setSidebarActive: Dispatcher<boolean>;
    setIsSidebarMini: Dispatcher<boolean>;
    closeSidebar: () => void;
    handleChangeSidebarSize: () => void;
}


const Sidebar: React.FC<Props> = ({ currentPath, sidebarActive, isSidebarMini, setSidebarActive, setIsSidebarMini, closeSidebar, handleChangeSidebarSize }) => {
    const sidebarLink = [
        { to: '/', icon: <EqualizerIcon />, title: 'Statistics', key: 1, visible: "visible" },
        { to: '/products', icon: <ShoppingCartIcon />, title: 'Products', key: 4, visible: "visible" },
        { to: '/feedbacks', icon: <ChatIcon />, title: 'Feedbacks', key: 2, visible: "visible" },
    ]
    const navigate = useNavigate()

    const keys = sidebarLink.filter(item => {
        let linkUrl = item.to.replace(/^\/|\/$/g, '').substring(0, 4);
        return currentPath.includes(linkUrl)
    })

    const key = keys.length > 1 ? keys[1].key.toString() : keys[0].key.toString()
    const [activeKey, setActiveKey] = useState<string>(key);

    const handleTabClick = (key: number, url: string) => {
        navigate(url, { replace: true })
        setActiveKey(key.toString());
        setSidebarActive(false)
    }

    return (
        <nav className={isSidebarMini && sidebarActive ? 'sidebar min_size active' : sidebarActive ? 'sidebar active' : isSidebarMini ? 'min_size sidebar' : 'sidebar'}>
            <div className="">
                <div className="sidebar_header">
                    <div className="sidebar_close">
                        <ArrowBackIosIcon onClick={closeSidebar} />
                    </div>
                </div>
                <button className="sidebar_resize" onClick={handleChangeSidebarSize}>
                    {!isSidebarMini ? <ArrowBackIosIcon /> : <ArrowForwardIosIcon />}
                </button>
                <div className='mt-12'>
                    <ul className='nav-list'>
                        {
                            sidebarLink?.map(item => {
                                return (
                                    <li key={item?.key} className={`${activeKey === item?.key?.toString() ? 'tabs-tab-active' : 'tab'} nav-item tabs-tab`}
                                        onClick={() => {
                                            handleTabClick(item?.key, item?.to)
                                        }}
                                    >
                                        <span onClick={() => { navigate(item?.to, { replace: true }) }} className="link nav_item_icon">
                                            {item?.icon}
                                        </span>
                                        <span className="block link" onClick={() => { navigate(item?.to, { replace: true }) }}>{item?.title}</span>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </nav >
    )
}


export default memo(Sidebar)