import axios from "axios";
import { Field, Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export function Edit() {
    const { id } = useParams();
    const [oldStudent, setOldStudent] = useState({});
    const navigate = useNavigate();

    let getOneData = () => {
        axios.get("http://localhost:3000/products/" + id).then((res) => {
            const { data } = res;
            setOldStudent(data);
        })
    }

    useEffect(() => {
        getOneData();
    }, []);


    let edit = (data) => {
        axios.put("http://localhost:3000/products/" + id, data).then(() => {
            navigate("/home/list");
        })
    }

    return (
        <>
            <h1>Sửa Thông Tin</h1>
            <Formik
                initialValues={
                    oldStudent 
                }
                onSubmit={
                    (values) => {
                        edit(values);
                    }
                }
                enableReinitialize={true} 
            >
                <Form>
                    <Field name="name" type={"text"} placeholder="Name"></Field>
                    <Field name="description" type="text" placeholder="Description"></Field>
                    <Field name="img" type="text" placeholder="Img"></Field>
                    <Field name="price" type="number" placeholder="Price"></Field>
                    <Field name="stock" type="number" placeholder="Stock"></Field>
                    <button>Submit</button>
                </Form>
            </Formik>
        </>
    )
}
