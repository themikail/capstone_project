import { useSession, signOut } from "next-auth/react";
import styled from "styled-components";
import Image from "next/image";
import Navbar from "@/components/navBar";

export default function ProfilePage() {
  return (
    <ProfileContainer>
      <Header>
        <Avatar src="/Portrait_Placeholder.png" alt="Avatar" />
        <Username>mikailgokce</Username>
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
        <h2>Your favorites</h2>
        <ImageRow>
          <RoundImage
            src={"/assets/images/musicImage/11.jpg"}
            width={60}
            height={60}
            alt="music"
          />
          <RoundImage
            src={"/assets/images/musicImage/22.jpg"}
            width={60}
            height={60}
            alt="music"
          />
          <RoundImage
            src={"/assets/images/musicImage/33.jpg"}
            width={60}
            height={60}
            alt="music"
          />
        </ImageRow>
        <ImageRow>
          <RoundImage
            src={"/assets/images/musicImage/44.jpg"}
            width={60}
            height={60}
            alt="music"
          />
          <RoundImage
            src={"/assets/images/musicImage/55.jpg"}
            width={60}
            height={60}
            alt="music"
          />
          <RoundImage
            src={"/assets/images/musicImage/66.jpg"}
            width={60}
            height={60}
            alt="music"
          />
        </ImageRow>
      </FavoritesSection>
      <Navbar />
    </ProfileContainer>
  );
}

const RoundImage = styled(Image)`
  border-radius: 50%;
  object-fit: cover;
`;

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

const ImageRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  padding: 10px;
`;
