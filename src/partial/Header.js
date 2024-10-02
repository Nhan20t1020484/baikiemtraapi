import { type } from "@testing-library/user-event/dist/type";
import { Link } from "react-router-dom";

export function Header() {
    return (
        <>
        <button ><Link to="/home/list">Trang chủ</Link> </button> | 
        <button><Link to="/home/add">Add</Link></button>
        <hr/>
        </>
    )
}