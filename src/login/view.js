import React, { useState, useRef, useEffect } from "react";
import { Checkbox, Button, Form, Icon, Input } from "antd";
import { useDispatch } from "react-redux";
import { actions as loginActions } from "./index";
import logo from "../assets/images/logo.svg";
import styles from "./login.module.css";
const FormItem = Form.Item;

const LoginPage = ({ history }) => {
  const inputRef = useRef(null);
  const dispatch = useDispatch();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    console.log(history);
    return () => {};
  }, []);

  const emitEmptyUserName = () => {
    inputRef.current.focus();
    setUserName("");
  };

  const gotoLogin = (e) => {
    e.preventDefault();
    dispatch(loginActions.login({ userName, password }, history));
  };

  const userNameSuffix = userName ? (
    <Icon type="close-circle" onClick={emitEmptyUserName} />
  ) : null;

  return (
    <>
      <div className={styles.content}>
        <Form onSubmit={gotoLogin} className={styles["login-form"]}>
          <h3>Sign In</h3>
          <FormItem>
            <Input
              placeholder="Username"
              prefix={<Icon type="user" />}
              suffix={userNameSuffix}
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              ref={inputRef}
              size="large"
            />
          </FormItem>
          <FormItem>
            <Input
              type="password"
              placeholder="Password"
              prefix={<Icon type="eye" />}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              size="large"
            />
          </FormItem>
          <FormItem>
            <Checkbox>Remember Me</Checkbox>
            <a className={styles["login-form-forgot"]} href="/">
              Forgot Password
            </a>
            <Button
              type="primary"
              htmlType="submit"
              className={styles["login-form-button"]}
            >
              Login
            </Button>
            <a href="/">Register</a>
          </FormItem>
        </Form>
      </div>
      <div className={styles["footer"]}>Copyright © Ramdhan Rizki - 2020</div>
    </>
  );
};

export default LoginPage;
