import { List, notification } from 'antd';
import { useEffect, useLayoutEffect, useState } from 'react';

import { LIST_SIZE, useLazyGetAllProductsQuery } from '@Api/getmobil';
import ProductListItem from './ProductListItem';

function ProductList() {
  const [antDesignNotificationApi, antDesignNotificationContextHolder] =
    notification.useNotification();

  const [getAllProducts, { currentData, isLoading, isError, error }] =
    useLazyGetAllProductsQuery();

  const [pagination, setPagination] = useState({
    limit: LIST_SIZE,
    skip: undefined,
  });

  const onPaginationSizeChange = (page, pageSize) => {
    setPagination((prevPagination) => ({
      ...prevPagination,
      limit: pageSize,
      skip: undefined, // reset page when page size changes
    }));
  };

  const onPageChange = (page, pageSize) => {
    setPagination((prevPagination) => ({
      ...prevPagination,
      limit: pageSize,
      skip: (page - 1) * pageSize,
    }));
  };

  useEffect(() => {
    getAllProducts({ limit: pagination?.limit, skip: pagination?.skip });
  }, [pagination]);

  useLayoutEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);

  useLayoutEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [pagination]);

  // error handling for api request
  //    to make the api throw error, change limit to a string above
  //    like getAllProducts({ limit: 'asd', skip: pagination?.skip });
  useEffect(() => {
    if (isError && error) {
      console.log(error);
      antDesignNotificationApi.error({
        message: 'Status Code:' + error.status,
        description: error.data.message,
      });
    }
  }, [isError, error]);

  return (
    <>
      {antDesignNotificationContextHolder}
      <List
        aria-label="product list"
        grid={{
          gutter: 16,
          xs: 1,
          sm: 2,
          md: 4,
          lg: 4,
          xl: 4,
          xxl: 4,
        }}
        dataSource={
          currentData?.products ??
          new Array(LIST_SIZE)
            .fill(null)
            .map((v, index) => ({ id: index, loading: true }))
        }
        renderItem={(product, index) => (
          <ProductListItem
            key={product?.id ?? index}
            tabindex={index}
            product={product}
          />
        )}
        pagination={{
          position: 'bottom',
          align: 'center',
          pageSize: currentData?.limit,
          total: currentData?.total,
          current: currentData?.skip / currentData?.limit + 1,
          pageSizeOptions: [12, 24, 48],
          onShowSizeChange: onPaginationSizeChange,
          onChange: onPageChange,
          showLessItems: true,
          hideOnSinglePage: true,
        }}
        style={{ padding: '0px 8px' }}
      />
    </>
  );
}

export default ProductList;
