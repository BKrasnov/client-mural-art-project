import { memo, FC, useState, ChangeEvent } from "react";

import { Login } from "@core/models";

import { useAppDispatch } from "@core/store";
import { authLogin, authLogout } from "@core/store/auth/dispatchers";

// import { initValues, loginFormSchema, LoginFormValue } from './formSettings';

const INITIAL_USER: Login = {
  email: "",
  password: "",
};

const LoginFormComponent: FC = () => {
  const [userData, setUserData] = useState(INITIAL_USER);

  /**
   * Handle input change.
   * @todo Fix code style.
   * @param event
   */
  const handleInputs = (event: ChangeEvent<HTMLInputElement>) => {
    const inputs = { [event.target.name]: event.target.value };

    setUserData({ ...userData, ...inputs });
  };
  const dispatch = useAppDispatch();

  // const isLoading = useAppSelector(selectUserLoading);
  // const loginError = useAppSelector(selectUserError);

  const handleUserLogin = (loginData: Login) => {
    dispatch(authLogin(loginData));
  };

  const handleUserLogout = () => {
    dispatch(authLogout());
  };

  return (
    <>
      LoginForm
      <input placeholder="Email" name="email" type="email" onChange={event => handleInputs(event)} />
      <input placeholder="Password" name="password" type="password" onChange={event => handleInputs(event)} />
      <button
        onClick={() => {
          handleUserLogin({
            email: userData.email,
            password: userData.password,
          });
        }}
      >
        login
      </button>
      <button
        onClick={() => {
          handleUserLogout();
        }}
      >
        logout
      </button>
    </>
  );
};

export const LoginForm = memo(LoginFormComponent);
