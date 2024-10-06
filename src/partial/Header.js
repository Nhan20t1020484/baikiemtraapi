import { type } from "@testing-library/user-event/dist/type";
import { Link } from "react-router-dom";
import "../css/Header.css";

export function Header() {
    return (
        <>
        <div className="header">
                <Link className="button-header-home" to="/home/list">Trang chủ</Link> |
                <Link className="button-header-add" to="/home/add">Add</Link>
            </div>
        </>
    )
}