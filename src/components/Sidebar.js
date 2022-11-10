import React from 'react';
import {
  CDBSidebar,
  CDBSidebarHeader,
  CDBSidebarMenuItem,
  CDBSidebarContent,
  CDBSidebarMenu,
  CDBSidebarSubMenu,
  CDBSidebarFooter,
  CDBBadge,
  CDBContainer,
  CDBIcon
} from 'cdbreact';

const Sidebar = () => {
  return (
        <>
        <CDBSidebar textColor="#fff" backgroundColor="#333">
          <CDBSidebarHeader prefix={<CDBIcon icon="bars" size="lg" />}>
            With Badges
          </CDBSidebarHeader>
          <CDBSidebarContent>
            <CDBSidebarMenu>
              <CDBSidebarMenuItem
                suffix={
                  <CDBBadge color="danger" size="small" borderType="pill">
                    pro
                  </CDBBadge>
                }
                icon="th-large"
              >
                Dashboard
              </CDBSidebarMenuItem>
              <CDBSidebarMenuItem icon="sticky-note" suffix={<CDBBadge>4</CDBBadge>}>
                Components
              </CDBSidebarMenuItem>
            </CDBSidebarMenu>
          </CDBSidebarContent>
          <CDBSidebarFooter style={{ textAlign: 'center' }}>
            <div
              className="sidebar-btn-wrapper"
              style={{ padding: '20px 5px'}}
            >
              Sidebar Footer
            </div>
          </CDBSidebarFooter>
        </CDBSidebar></>
  )}
  export default Sidebar