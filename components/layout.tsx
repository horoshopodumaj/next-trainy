import React, { FC, ReactNode } from "react";
import Footer from "./footer";
import Header from "./header";

interface ILayoutProps {
    children: ReactNode;
}
const Layout: FC<ILayoutProps> = ({ children }) => {
    return (
        <div className="content">
            <Header />
            {children}
            <Footer />
        </div>
    );
};

export default Layout;
