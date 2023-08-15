import { Button, Form, Input, notification } from "antd";
import { useNavigate } from "react-router-dom";

type Account = {
  username: string;
  password: string;
};
type NotificationType = "success" | "error";

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [api, contextHolder] = notification.useNotification();

  const openNotificationWithIcon = (type: NotificationType) => {
    if (type === "error") {
      api[type]({
        message: "Error",
        description: "Username or password is not correct",
      });
    } else {
      api[type]({
        message: "Success",
        description: "Log in successfully",
      });
    }
  };
  const onFinish = (values: Account) => {
    localStorage.setItem("user", JSON.stringify(values));
    console.log("values", values);
    if (values.username === "tona" && values.password === "tona") {
      openNotificationWithIcon("success");
      setTimeout(() => (navigate("/"), 1000));
    } else {
      openNotificationWithIcon("error");
    }
  };

  const onFinishFailed = (errorInfo: unknown) => {
    console.log("Failed:", errorInfo);
    openNotificationWithIcon("error");
  };

  return (
    <>
      {contextHolder}
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
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input placeholder="Username" size="large" />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password placeholder="Password" size="large" />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 0, span: 36 }}>
              <Button
                htmlType="submit"
                className="bg-teal-500 text-white font-semibold text-base border-none w-full"
                size="large"
              >
                Đăng nhập
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
