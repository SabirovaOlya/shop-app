import { BrowserRouter } from 'react-router-dom';
import { memo, useState } from 'react';
import Sidebar from './components/sidebar/sidebar';
import Header from './components/header/header';
import Router from './routing/router';

import './style.scss'


function App() {
  const [sidebarActive, setSidebarActive] = useState<boolean>(false)
  const [isSidebarMini, setIsSidebarMini] = useState<boolean>(false)
  const [currentPath, setCurrentPath] = useState<string>(window.location.pathname.replace(/^\/|\/$/g, ''))


  const handleChangeSidebarSize = () => {
    setIsSidebarMini(!isSidebarMini)
  };

  const closeSidebar = () => {
    setSidebarActive(false)
  }

  const openSidebar = () => {
    setSidebarActive(true)
  }

  return (
    <div className='layout'>
      <BrowserRouter>
        <Sidebar
          currentPath={currentPath}
          sidebarActive={sidebarActive}
          isSidebarMini={isSidebarMini}
          setSidebarActive={setSidebarActive}
          setIsSidebarMini={setIsSidebarMini}
          closeSidebar={closeSidebar}
          handleChangeSidebarSize={handleChangeSidebarSize}
        />

        <main className={isSidebarMini ? "max_size" : ""} >
          <Header
            isSidebarMini={isSidebarMini}
            onSidebarToggle={openSidebar}
          />
          <Router isSidebarMini={isSidebarMini} />
        </main>
      </BrowserRouter>
    </div>
  )
}

export default memo(App)