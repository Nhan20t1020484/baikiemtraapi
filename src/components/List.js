import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

export function List() {
    const [list, setList] = useState([]);

    const getData = () => {
        axios.get("http://localhost:3000/products").then((res) => {
            let { data } = res;
            console.log(data);
            setList(data);
        })
    }

    useEffect(() => {
        getData()
    }, [])

    const remove = (id) => {

        axios.delete("http://localhost:3000/products/" + id).then(() => {
            alert("Xóa thành công");
            getData();
        })
    }

    return (
        <>
            <h1>Trang Chủ</h1>
            <table border={1}>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Img</th>
                    <th>Price</th>
                    <th>Stock</th>
                    <th colSpan={5}>Action</th>
                </tr>
                {list.map((item) => (
                    <tr>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.description}</td>
                        <td>{item.img}</td>
                        <td>{item.price}</td>
                        <td>{item.stock}</td>
                        <td><button onClick={() => { remove(item.id) }}>Remove</button></td>
                        <td><Link to={"/home/edit/" + item.id}><button>Edit</button></Link></td>
                        <td><Link to={"/home/detail/" + item.id}><button>Detail</button></Link></td>
                    </tr>
                ))}
            </table>
        </>
    )
}
