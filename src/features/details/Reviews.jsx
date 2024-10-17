import React from 'react';
import { Avatar, List } from 'antd';
import { StarOutlined, StarFilled } from '@ant-design/icons';

function Reviews({ reviews }) {
  return (
    <List
      itemLayout="horizontal"
      dataSource={reviews}
      renderItem={(item, index) => (
        <List.Item>
          <List.Item.Meta
            avatar={
              <Avatar
                src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`}
              />
            }
            title={[
              ...new Array(item.rating).fill(1).map(() => <StarFilled />),
              ...new Array(5 - item.rating).fill(1).map(() => <StarOutlined />),
            ]}
            description={`${item.reviewerName} - ${item.date}`}
          />
          <p>{item.comment}</p>
        </List.Item>
      )}
    />
  );
}

export default Reviews;
