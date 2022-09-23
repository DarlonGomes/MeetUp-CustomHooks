import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import diving from "../../assets/diving.png";
import { useDebounce, useLocalStorage } from "../../utils/hooks";
import { handleEmail, cleanUpSignUp, ensurePasswordsMatch } from "../../utils";
import {
  Ambient,
  Menu,
  Banner,
  SignInButton,
  FormWrapper,
  Options,
  StyledInput,
} from "./style";

export default function SignUp() {
  const [isDisabled, setDisabled] = useState(false);
  const [values, setValues] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [account, setAccount] = useLocalStorage("diver_account", "");
  useDebounce(() => handleEmail(account, values, setValues), 1000, [
    values.email,
  ]);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setDisabled(true);
    const response = ensurePasswordsMatch(values);
    if (response) {
      console.log("oi");
      setAccount(values);
      setTimeout(() => {
        cleanUpSignUp(setValues, setDisabled, navigate);
      }, 2000);
    } else {
      alert("Your password doesn't mach");
      cleanUpSignUp(setValues, setDisabled);
    }
  };

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  return (
    <Ambient>
      <Menu>
        <Banner>
          <img className="image" src={diving} alt="diving" />

          <h3>Welcome to CodeDivers</h3>
          <p>Enter your details to sign up</p>
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
          <StyledInput
            placeholder="Confirm password"
            type="password"
            value={values.confirmPassword}
            onChange={handleChange("confirmPassword")}
            autoComplete="off"
          />
          <Options>
            <Link to="/">Already have an account? Sign in</Link>
            <SignInButton type="submit" status={isDisabled}>
              Sign Up
            </SignInButton>
          </Options>
        </FormWrapper>
      </Menu>
    </Ambient>
  );
}
