import { ArrowLeftOutlined } from '@ant-design/icons';
import { Button, Layout, Typography } from 'antd';
import { useSelector } from 'react-redux';
import { Outlet, useNavigate, ScrollRestoration } from 'react-router-dom';
import styled from 'styled-components';
import ErrorBoundary from '@Errors/ErrorBoundary';
import GenericError from '@Errors/GenericError';
import { Suspense } from 'react';
import PageLoader from './PageLoader';
import MainFooter from './MainFooter';

const { Header, Footer, Content } = Layout;
const { Title } = Typography;

function MainLayout() {
  const navigate = useNavigate();

  const { backButtonVisible } = useSelector((state) => state.layout);

  return (
    <Layout style={{ backgroundColor: 'transparent' }}>
      <ScrollRestoration />
      <StyledHeader>
        <StyledTitle level={2}>
          <a href="/" prefetch="false">
            <img
              alt="Getmobil Desktop Logo"
              fetchpriority="high"
              width="130"
              height="24"
              decoding="async"
              src="https://getmobil.com/_next/static/media/logo.7bbfef47.svg"
            />
          </a>
        </StyledTitle>
        {backButtonVisible ? (
          <StyledBackButton
            type="primary"
            icon={<StyledBackIcon />}
            onClick={() => navigate(-1)}
            role="navigation"
            aria-label="Back to previous page"
          >
            Back
          </StyledBackButton>
        ) : (
          <></>
        )}
      </StyledHeader>
      <StyledContent>
        <ErrorBoundary fallback={(error) => <GenericError error={error} />}>
          <Suspense fallback={<PageLoader />}>
            <Outlet />
          </Suspense>
        </ErrorBoundary>
      </StyledContent>
      <Footer
        style={{
          backgroundColor: 'white',
          borderTop: '0.0625rem solid #e5e7eb',
        }}
      >
        <MainFooter />
      </Footer>
    </Layout>
  );
}

export default MainLayout;

const StyledHeader = styled(Header)`
  height: 64px;
  padding: 0px 2em;
  line-height: 64px;
  background-color: white;
  border-bottom: 0.0625rem solid #e5e7eb;
  position: sticky;
  top: 0;
  z-index: 4;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledTitle = styled(Title)`
  margin: 0 !important;
  color: white !important;
  a {
    text-decoration: none;
    cursor: pointer;
  }
  img {
    margin-left: 8px;
  }
`;

const StyledBackButton = styled(Button)`
  color: white !important;
  padding: 6px;
`;

const StyledBackIcon = styled(ArrowLeftOutlined)`
  & > svg {
    width: 1.5em;
    height: 1.5em;
  }
`;

const StyledContent = styled(Content)`
  padding: 2em;
  min-height: calc(100vh - 64px);
`;
