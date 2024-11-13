import { Outlet } from "react-router-dom";
import BottomBar from "./bottom-bar";

export const RootLayout = () => {
  return (
    <>
      {/* <Header /> */}
      <main>
        <Outlet />
      </main>
      <BottomBar />
    </>
  );
};
