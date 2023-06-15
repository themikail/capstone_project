import { getProviders, signIn } from "next-auth/react";
import styled from "styled-components";

function Login({ providers }) {
  return (
    <StyledBody>
      <img
        src="https://links.papareact.com/9xl"
        alt=""
        width={50}
        height={50}
      />

      {Object.values(providers).map((provider) => (
        <div>
          <LoginButton
            onClick={() => signIn(provider.id, { callbackUrl: "/" })}
          >
            Login with {provider.name}
          </LoginButton>
        </div>
      ))}
    </StyledBody>
  );
}

export default Login;

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}

const StyledBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-image: url("/assets/images/login/background/sefo-bg.jpeg");
  background-size: cover;
  background-position: right;
`;

const LoginButton = styled.button`
  background-color: #18d860;
  color: #fff;
  border-radius: 16px;
  border-width: 0;
`;
