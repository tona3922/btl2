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
    if (values.username === "sManager" && values.password === "sManager") {
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
        <div className="bg-white px-8 pt-8 rounded-lg backdrop-blur border border-white">
          <div className="text-teal-500 text-2xl text-center font-bold">
            Travel
          </div>
          <div className="max-w-full pt-2">
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
                <Input
                  placeholder="Username"
                  size="large"
                  bordered={false}
                  style={{
                    borderRadius: "0px",
                    borderBottom: "0.5px solid grey",
                    width: "350px",
                    height: "40px",
                  }}
                />
              </Form.Item>

              <Form.Item
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <Input.Password
                  placeholder="Password"
                  size="large"
                  bordered={false}
                  style={{
                    borderRadius: "0px",
                    borderBottom: "0.5px solid grey",
                    width: "350px",
                    height: "40px",
                  }}
                />
              </Form.Item>

              <Form.Item>
                <Button
                  htmlType="submit"
                  className="bg-teal-500 text-white font-semibold border-none w-full"
                  size="large"
                  style={{ fontSize: "20px", padding: "4px" }}
                >
                  Đăng nhập
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
