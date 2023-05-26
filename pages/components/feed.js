import Cards from "./cards";
import ActiveMusic from "./activeMusic";
import Navbar from "./navBar";
export default function Feed() {
  return (
    <div>
      <ActiveMusic />
      <Cards />
      <Navbar />
    </div>
  );
}
