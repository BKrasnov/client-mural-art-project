import { ChangeEvent, FC, memo, useState } from "react";

import { useAppDispatch } from "@core/store";
import { authRegister } from "@core/store/auth/dispatchers";

import { Registration } from "@core/models";

const INITIAL_USER: Registration = {
  email: '',
  password: '',
};

const RegistrarionFormComponent: FC = () => {
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
  // const registrationError = useAppSelector(selectUserError);

  const handleUserRegister = (registerData: Registration) => {
    dispatch(authRegister(registerData));
  };

  return (
    <>
      Registrarion
      <input placeholder="Email" name="email" type="email" onChange={event => handleInputs(event)} />
      <input placeholder="Password" name="password" type="password" onChange={event => handleInputs(event)} />
      <button
        onClick={() => {
          handleUserRegister({
            email: userData.email,
            password: userData.password,
          });
        }}
      >
        register
      </button>
    </>
  );
};

export const RegistrarionForm = memo(RegistrarionFormComponent);
