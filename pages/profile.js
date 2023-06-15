import { useSession, signOut } from "next-auth/react";
import styled from "styled-components";
import Navbar from "@/components/navBar";

export default function ProfilePage() {
  const { data: session } = useSession();

  {
    return (
      <ProfileContainer>
        <Header>
          <Avatar src="/Portrait_Placeholder.png" alt="Avatar" />
          {/* <Username>{session.user.name}</Username> */}
          <LogoutButton
            type="button"
            onClick={() => {
              signOut({ callbackUrl: "/" });
            }}
          >
            Logout
          </LogoutButton>
        </Header>
        <FavoritesSection>
          <h2>Meine Favoriten</h2>
        </FavoritesSection>
        <Player></Player>
        <Navbar />
      </ProfileContainer>
    );
  }
}

const Player = styled.div``;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
`;

const Username = styled.span`
  font-weight: bold;
  margin-right: 10px;
`;

const LogoutButton = styled.button`
  border-radius: 16px;
  background-color: #008080;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin-left: 90px;
  cursor: pointer;
`;

const FavoritesSection = styled.div`
  width: 100%;
  border-radius: 16px;
  text-align: center;
  color: #fff;
  background-color: #30d5c8;
`;
