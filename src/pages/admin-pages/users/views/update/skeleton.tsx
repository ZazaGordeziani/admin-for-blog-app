import { Form, Skeleton, Space } from "antd";
// import React from "react";

const UsersCreateUpdateFormSkeleton = () => {
  return (
    <Form>
      <Space direction="vertical" size="large">
        <Skeleton.Input active />
        <Skeleton.Input active />
        <Skeleton.Input active />
      </Space>
    </Form>
  );
};

export default UsersCreateUpdateFormSkeleton;
