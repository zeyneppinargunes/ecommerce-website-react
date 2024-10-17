import { Spin } from 'antd';
import React from 'react';

function PageLoader() {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      Loading
      <Spin size="100px" />
    </div>
  );
}

export default PageLoader;
