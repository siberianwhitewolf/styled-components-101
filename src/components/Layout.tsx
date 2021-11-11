import React, { FC, ReactNode } from "react";
import GlobalStyle from "./globalStyle";

interface Props {
  children: ReactNode;
}

// functional component
const Layout: FC<Props> = ({ children }) => {
  return (
    <div>
      <GlobalStyle />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
