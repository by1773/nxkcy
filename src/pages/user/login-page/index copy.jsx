import { AlipayCircleOutlined, TaobaoCircleOutlined, WeiboCircleOutlined } from '@ant-design/icons';
import { Alert, Checkbox } from 'antd';
import React, { useState } from 'react';
import { Link, connect } from 'umi';
import LoginForm from './components/Login';
import styles from './style.less';

const { Tab, UserName, Password, Mobile, Captcha, Submit } = LoginForm;

const LoginMessage = ({ content }) => (
  <Alert
    style={{
      marginBottom: 24,
    }}
    message={content}
    type="error"
    showIcon
  />
);

const Login = props => {
  const { userLogin = {}, submitting } = props;
  const { status, type: loginType } = userLogin;
  const [autoLogin, setAutoLogin] = useState(true);
  const [type, setType] = useState('account');

  const handleSubmit = values => {
    const { dispatch } = props;
    dispatch({
      type: 'login/login',
      payload: { ...values, type },
    });
  };

  
  

  return (
    <div className={styles.page}>
        <div className={styles.box}>
          {/* <img
            className={styles.layer}
            src={'https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/8e837a30b1f011ea9c71073eab279e95.png'}
          /> */}
          <div className={styles.primary}>
            <div className={styles.color} />
            <span className={styles.title} >
              吴忠市智慧农业监测预警平台
            </span>
            <div className={styles.wrap}>
              <img
                className={styles.icon}
                src={'https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/8efe4f80b1f011ea82f97d9a281d4566.png'}
              />
            </div>
            <div className={styles.block}>
              <img
                className={styles.icon_2}
                src={'https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/8f403a80b1f011eaa96d7161cebac85b.png'}
              />
            </div>
            {/* <div className={styles.group}>
              <span className={styles.word}>
                登 录
              </span>
            </div> */}
             <Submit loading={submitting}>登录</Submit>
          </div>
        </div>
      </div>
  );
};

export default connect((props) =>{
  console.log('--------------');
  console.log(props);
  
  const { login, loading } = props
  return  ({
    userLogin: login,
    submitting: loading.effects['login/login'],
  })
})(Login);
