import { Outlet } from "react-router-dom";

const User = () => {
  return (
    <>
    <div className="text-center mt-4">
      user page
    </div>
    <Outlet/>
    </>
  );
};

export default User;
