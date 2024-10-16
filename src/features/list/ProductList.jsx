import React, { useEffect, useState } from "react";
import { List } from "antd";

import ProductListItem from "./ProductListItem";
import {
  LIST_SIZE,
  useLazyGetAllProductsQuery,
} from "../../config/api/getmobil";

function ProductList() {
  const [pagination, setPagination] = useState({
    limit: LIST_SIZE,
    skip: undefined,
  });

  const [getAllProducts, { currentData, isLoading, isError, error }] =
    useLazyGetAllProductsQuery();

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

  return (
    <List
      grid={{
        gutter: 16,
        xs: 1,
        sm: 2,
        md: 4,
        lg: 4,
        xl: 4,
        xxl: 4,
      }}
      loading={isLoading}
      dataSource={currentData?.products ?? []}
      renderItem={(product) => (
        <ProductListItem key={product.id} product={product} />
      )}
      pagination={{
        position: "bottom",
        align: "center",
        pageSize: currentData?.limit,
        total: currentData?.total,
        current: currentData?.skip / currentData?.limit + 1,
        pageSizeOptions: [10, 20, 50],
        onShowSizeChange: onPaginationSizeChange,
        onChange: onPageChange,
        showLessItems: true,
        hideOnSinglePage: true,
      }}
      style={{ padding: "0px 8px" }}
    />
  );
}

export default ProductList;
