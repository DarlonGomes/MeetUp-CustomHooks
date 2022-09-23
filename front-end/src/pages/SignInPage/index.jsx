/* eslint-disable react/no-unescaped-entities */
import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import diving from "../../assets/diving.png";
import { useLocalStorage } from "../../utils/hooks";
import { cleanUp, ensureDetailsMatch } from "../../utils";
import {
  Ambient,
  Menu,
  Banner,
  SignInButton,
  FormWrapper,
  Options,
  StyledInput,
} from "./style";

export default function SignIn() {
  const [isDisabled, setDisabled] = useState(false);
  const [account] = useLocalStorage("diver_account", "");
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setDisabled(true);
    const response = ensureDetailsMatch(values, account, setValues, navigate);
    if (!response) cleanUp(setValues, setDisabled);
  };

  return (
    <Ambient>
      <Menu>
        <Banner>
          <img className="image" src={diving} alt="diving" />

          <h3>Welcome to CodeDivers</h3>
          <p>Enter your details to sign in</p>
        </Banner>

        <FormWrapper onSubmit={(e) => handleSubmit(e)}>
          <StyledInput
            placeholder="E-mail"
            type="email"
            required
            value={values.email}
            onChange={handleChange("email")}
            autoComplete="off"
          />
          <StyledInput
            placeholder="Password"
            type="password"
            value={values.password}
            onChange={handleChange("password")}
            autoComplete="off"
          />
          <Options>
            <Link to="/sign-up">Doesn't have an account? Sign up</Link>
            <SignInButton type="submit" status={isDisabled}>
              Sign In
            </SignInButton>
          </Options>
        </FormWrapper>
      </Menu>
    </Ambient>
  );
}
