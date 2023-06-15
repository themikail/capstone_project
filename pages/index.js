import { useSession, signIn, getProviders } from "next-auth/react";
import { useRouter } from "next/router";
import styled from "styled-components";

export default function LandingPage({ providers }) {
  const router = useRouter();
  const { data: session } = useSession();

  if (session) {
    router.push("/home");
  }

  if (!session)
    return (
      <StyledBody>
        <img
          src="https://links.papareact.com/9xl"
          alt=""
          width={50}
          height={50}
        />

        <div>
          <LoginButton
            type="button"
            onClick={() => {
              signIn({ callbackUrl: "/startseite" });
            }}
          >
            Login with Spotify
          </LoginButton>
        </div>
      </StyledBody>
    );
}

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
