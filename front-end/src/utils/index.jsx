export const handleEmail = (value, comparative, setValues) => {
  if (value?.email === comparative.email) {
    alert("This account already exists");
    setValues({ ...comparative, email: "" });
  }
};

export function cleanUp(setValues, setDisabled) {
  setValues({
    email: "",
    password: "",
  });
  setDisabled(false);
  alert("Your details doesn't match");
}

export function ensureDetailsMatch(form, local, setValues, navigate) {
  if (form.email === local.email && form.password === local.password) {
    setValues({ email: "", password: "" });
    navigate("/feed");
    return true;
  }
  return false;
}

export function cleanUpSignUp(setValues, setDisabled, navigate) {
  setValues({
    email: "",
    password: "",
    confirmPassword: "",
  });
  setDisabled(false);
  if (navigate) navigate("/");
}

export function ensurePasswordsMatch(form) {
  if (form.password === form.confirmPassword) {
    return true;
  }
  return false;
}
