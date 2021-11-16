import React, { useState } from 'react';
import { Button, Row, Col, Form, Input, Divider, Card, Alert } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../contexts/auth';

const Login: React.FC = () => {
  const context = useAuth();

  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState([]);

  async function handleLogin(values: any){
    setIsLoading(true)
    try{
      await context.doLogin(values)
      setIsLoading(false)
    }catch(error: any){
      // setErrors(JSON.parse(error.message))
      setIsLoading(false)
    }
  }

  return(
    <Row>
      <Col span={12}>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh'}}>
          <img src="images/bg-login.png" alt="Background Login" style={{width: '70%'}} />
        </div>
      </Col>
      <Col span={12}>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh'}}>
          <Card>
            <Row>
              <Col span={12}>
                <img src="images/logo.png" style={{width: 200}} alt=""/>

                <Form
                  name="normal_login"
                  layout="vertical"
                  className="login-form"
                  onFinish={handleLogin}
                  style={{ width: 340 }}
                  initialValues={{
                    email: 'neyrobson.eng@gmail.com',
                    password: '123456'
                  }}
                >
                  <Form.Item
                    label="E-mail"
                    name="email"
                    rules={[
                      {
                        required: true,
                        message: "Informe seu e-mail"
                      }
                    ]}
                  >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="E-mail" />
                  </Form.Item>
                  <Form.Item
                    label="Senha"
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: "Informe sua senha"
                      }
                    ]}
                  >
                    <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Senha" />
                  </Form.Item>
                  <Divider />
                  <Form.Item name="signin">
                    <Button type="primary" block htmlType="submit" className="login-form-button" loading={isLoading}>
                      Entrar
                    </Button>
                  </Form.Item>
                  <Form.Item name="remember" valuePropName="checked" noStyle>
                    <NavLink to="/" className="login-form-forgot">Esqueceu a senha?</NavLink>
                  </Form.Item>
                </Form>
              </Col>
            </Row>
          </Card>
        </div>
      </Col>
    </Row>
  );
}

export default Login;
