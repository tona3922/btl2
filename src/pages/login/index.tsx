import { Button, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";

const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  const onFinish = (values: unknown) => {
    localStorage.setItem("user", JSON.stringify(values));

    // setTimeout(() => {
    //   navigate("/");
    // }, 1000);
    navigate("/");
  };

  const onFinishFailed = (errorInfo: unknown) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="flex justify-center items-center login-page">
      <div className="max-w-7xl">
        <Form
          wrapperCol={{ span: 36 }}
          name="basic"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          layout="vertical"
          size="large"
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input placeholder="Username" size="large" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password placeholder="Password" size="large" />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 0, span: 36 }}>
            <Button
              htmlType="submit"
              onClick={() => {
                setTimeout(() => {
                  navigate("/");
                }, 1000);
              }}
              className="bg-teal-500 text-white font-semibold text-base border-none w-full"
              size="large"
            >
              Đăng nhập
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default LoginPage;
