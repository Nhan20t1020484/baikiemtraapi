import { Outlet } from "react-router-dom";
import { Footer } from "../partial/Footer";
import { Header } from "../partial/Header";
import "../css/Home.css";

export function Home() {
    return (
        <>
            <div className="container">
                <Header />
                <div className="main">
                    <Outlet />
                </div>
                <Footer />
            </div>
        </>
    )
}