import { useAuth0 } from "@auth0/auth0-react";

const SignupButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <button onClick={() => loginWithRedirect({ screen_hint: "signup" })}>
      Log In
    </button>
  );
};

export default SignupButton;
