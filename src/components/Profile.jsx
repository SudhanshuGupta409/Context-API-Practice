import { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);

  if (!user) return <h1 className="text-white">Please login</h1>;

  return <h1 className="text-white">Welcome {user.userName}</h1>;
}

export default Profile;
