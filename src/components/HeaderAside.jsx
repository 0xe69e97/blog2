/** @jsxImportSource theme-ui */
import Logo from "../assets/avatar1.jpg";
import { Avatar } from "theme-ui";

function HeaderAside() {
  return (
    <div sx={{ mb: [4, 0], mt: [0, -20] }}>
      <Avatar
        src={Logo}
        alt="Ding Lin"
      />
      {/* </AspectRatio> */}
    </div>
  );
}

export default HeaderAside;
