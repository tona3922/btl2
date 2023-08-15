import { Button, Checkbox, Form, Input, notification } from "antd";
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
      <div className="min-h-screen w-full flex justify-center items-center">
        <div className="max-w-7xl">
          <Form
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name="remember"
              valuePropName="checked"
              wrapperCol={{ offset: 8, span: 16 }}
            >
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button htmlType="submit">Submit</Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
