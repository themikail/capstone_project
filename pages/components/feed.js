import Cards from "./cards";
import ActiveMusic from "./activeMusic";
import Navbar from "./navBar";
import styled from "styled-components";

export default function Feed() {
  return (
    <FeedSection>
      <ActiveMusic />
      <Cards />
      <Navbar />
    </FeedSection>
  );
}

const FeedSection = styled.div`
  background-color: #fff;
`;
