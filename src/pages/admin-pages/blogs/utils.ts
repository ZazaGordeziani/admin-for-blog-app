import dayjs from "dayjs";
import { blog } from "../blogs/index";
// import { Form, Button, Input } from "antd";
export const mappedBlogsListForAdmin = (blogs: blog[]) => {
  return blogs?.map((blog) => {
    return {
      id: blog?.id,
      title_ka: blog?.title_ka,
      title_en: blog?.title_en,
      description_ka: blog?.description_ka,
      description_en: blog?.description_en,
      image_url: blog?.image_url,
      created_at: dayjs(blog?.created_at).format("YYYY-MM-DD HH:mm"),
      key: blog.id,
    };
  });
};

// interface BlogsFormProps {
//   initialValues?: {
//     title_ka?: string;
//     title_en?: string;
//     description_ka?: string;
//     description_en?: string;
//     image_url?: string;
//     created_at?: string;
//   };
//   onSubmit: (values: {
//     title_ka: string;
//     title_en: string;
//     description_ka: string;
//     description_en: string;
//     image_url: string;
//     created_at: string;
//   }) => void;
// }

// const BlogsForm: React.FC<BlogsFormProps> = ({ initialValues, onSubmit }) => {
//   return (
//     <Form
//       name="blogForm"
//       labelCol={{ flex: "110px" }}
//       labelAlign="left"
//       labelWrap
//       wrapperCol={{ flex: 1 }}
//       colon={false}
//       style={{ maxWidth: 600 }}
//       initialValues={initialValues}
//       onFinish={onSubmit}
//     >
//       {/* Title (ka) field */}
//       <Form.Item
//         label="Title (ka)"
//         name="title_ka"
//         rules={[
//           { required: true, message: "Please input the title in Georgian!" },
//         ]}
//       >
//         <Input placeholder="Title in Georgian" />
//       </Form.Item>

//       {/* Title (en) field */}
//       <Form.Item
//         label="Title (en)"
//         name="title_en"
//         rules={[
//           { required: true, message: "Please input the title in English!" },
//         ]}
//       >
//         <Input placeholder="Title in English" />
//       </Form.Item>

//       {/* Description (ka) field */}
//       <Form.Item
//         label="Description (ka)"
//         name="description_ka"
//         rules={[
//           {
//             required: true,
//             message: "Please input the description in Georgian!",
//           },
//         ]}
//       >
//         <Input.TextArea placeholder="Description in Georgian" />
//       </Form.Item>

//       {/* Description (en) field */}
//       <Form.Item
//         label="Description (en)"
//         name="description_en"
//         rules={[
//           {
//             required: true,
//             message: "Please input the description in English!",
//           },
//         ]}
//       >
//         <Input.TextArea placeholder="Description in English" />
//       </Form.Item>

//       {/* Image URL field */}
//       <Form.Item
//         label="Image URL"
//         name="image_url"
//         rules={[{ required: true, message: "Please input the image URL!" }]}
//       >
//         <Input placeholder="Image URL" />
//       </Form.Item>

//       {/* Created At field */}
//       <Form.Item
//         label="Created At"
//         name="created_at"
//         rules={[{ required: true, message: "Please input the creation date!" }]}
//       >
//         <Input placeholder="Created Date" />
//       </Form.Item>

//       {/* Submit button */}
//       <Form.Item>
//         <Button type="primary" htmlType="submit">
//           Submit
//         </Button>
//       </Form.Item>
//     </Form>
//   );
// };

// export default BlogsForm;
