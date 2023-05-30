import dynamic from "next/dynamic";
import Cards from "./cards";
import Navbar from "./navBar";
import styled from "styled-components";

const ActiveMusic = dynamic(() => import("./activeMusic"), {
  ssr: false,
});

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
