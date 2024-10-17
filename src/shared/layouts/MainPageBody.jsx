import React from 'react';
import { Breadcrumb } from 'antd';
import styled from 'styled-components';

function MainPageBody({ children, breadcrumbItems = [] }) {
  return (
    <>
      {breadcrumbItems?.length > 0 ? (
        <StyledBreadcrumb items={breadcrumbItems} aria-label="breadcrumb" />
      ) : (
        <></>
      )}
      <main>{children}</main>
    </>
  );
}

export default MainPageBody;

const StyledBreadcrumb = styled(Breadcrumb)`
  margin: 0 0 15px 0;
  padding-left: 8px;
  .ant-breadcrumb-link {
    color: #1677ff;
  }
`;
