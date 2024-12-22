// import { useEffect } from "react";
// import { supabase } from "../../supabase";
// import { useEffect } from "react";
// import { fetchBlogs } from "../../supabase/blogs/utils";
// import { supabase } from "../../supabase";

import { useEffect, useState } from "react";
import { getBlogsListInAdmin } from "../../pages/admin-pages/blogs";
import { Button, Table } from "antd";
import Column from "antd/es/table/Column";
import { mappedBlogsListForAdmin } from "../../pages/admin-pages/blogs/utils";
import { EditOutlined, PlusOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  // fetchBlogs();
  const [blogs, setBlogs] = useState<
    {
      created_at: string;
      title_ka: string;
      title_en: string;
      description_ka: string;
      image_url: string;
      description_en: string;
    }[]
  >([]);

  useEffect(() => {
    getBlogsListInAdmin().then((blogs) => {
      const mappedBlogs = mappedBlogsListForAdmin(blogs);
      setBlogs(mappedBlogs);
    });
  }, []);

  const handleNavigateBlogUpdate = (id: string | number) => {
    navigate(`/admin/blogsUpdate/${id}`);
  };

  const handleAddBlog = () => {
    navigate("/admin/blogsCreate");
  };

  return (
    <Table
      title={() => (
        <Button type="primary" icon={<PlusOutlined />} onClick={handleAddBlog}>
          Add Blog
        </Button>
      )}
      bordered
      dataSource={blogs}
    >
      <Column title="სათაური ქართულად" dataIndex="title_ka" />
      <Column title="Title in English" dataIndex="title_en" />
      <Column title="აღწერა ქართულად" dataIndex="description_ka" />
      <Column title="Description in English" dataIndex="description_en" />
      <Column title="Image" dataIndex="image_url" />
      <Column title="Created At" dataIndex="created_at" />
      <Column
        title="Actions"
        render={(_, row) => {
          return (
            <EditOutlined
              className=" flex justify-center text-xl text-amber-400 cursor-pointer"
              onClick={() => {
                // console.log(row?.id);
                // console.log(row);
                handleNavigateBlogUpdate(row?.id);
              }}
            />
          );
        }}
      />
    </Table>
  );
};

export default Dashboard;
