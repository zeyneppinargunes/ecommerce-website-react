import { ArrowLeftOutlined } from '@ant-design/icons';
import { Button, Layout, Typography } from 'antd';
import { useSelector } from 'react-redux';
import { Outlet, useNavigate, ScrollRestoration } from 'react-router-dom';
import styled from 'styled-components';
import ErrorBoundary from '@Errors/ErrorBoundary';
import GenericError from '@Errors/GenericError';
import { Suspense } from 'react';
import PageLoader from './PageLoader';

const { Header, Footer, Content } = Layout;
const { Title } = Typography;

function MainLayout() {
  const navigate = useNavigate();

  const { backButtonVisible } = useSelector((state) => state.layout);

  return (
    <Layout>
      <ScrollRestoration />
      <StyledHeader>
        {backButtonVisible ? (
          <StyledBackButton
            type="primary"
            icon={<StyledBackIcon />}
            onClick={() => navigate(-1)}
            role="navigation"
            aria-label="Back to previous page"
          ></StyledBackButton>
        ) : (
          <></>
        )}
        <StyledTitle level={2}>Get Market</StyledTitle>
      </StyledHeader>
      <StyledContent>
        <ErrorBoundary fallback={(error) => <GenericError error={error} />}>
          <Suspense fallback={<PageLoader />}>
            <Outlet />
          </Suspense>
        </ErrorBoundary>
      </StyledContent>
      <Footer>Getmobil @</Footer>
    </Layout>
  );
}

export default MainLayout;

const StyledHeader = styled(Header)`
  height: 64px;
  padding: 0px 48px;
  line-height: 64px;
  background-color: #4096ff;
  position: sticky;
  top: 0;
  z-index: 4;
  display: flex;
  align-items: center;
`;

const StyledTitle = styled(Title)`
  margin: 0 !important;
  color: white;
`;

const StyledBackButton = styled(Button)`
  position: absolute;
  left: 1em;
  top: 50%;
  transform: translateY(-50%);
  color: inherit;
`;

const StyledBackIcon = styled(ArrowLeftOutlined)`
  & > svg {
    width: 1.33em;
    height: 1.33em;
  }
`;

const StyledContent = styled(Content)`
  padding: 2em;
  min-height: calc(100vh - 64px);
`;
