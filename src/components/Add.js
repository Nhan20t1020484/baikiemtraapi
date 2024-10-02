import axios from "axios";
import { Formik, Form, Field } from "formik";
import { useState } from "react"
import { useNavigate } from "react-router-dom";

export function Add() {
    const navigate = useNavigate();

    const add = (data) => {
        axios.post("http://localhost:3000/products", data).then(() => {
            navigate("/home/list");
        })
    }

    return (
        <>
            <h1>Thêm Sản Phẩm</h1>
            <Formik
                initialValues={
                    {
                        name: '',
                        description: '',
                        img : '',
                        price: '',
                        stock: '',

                    }
                }
                onSubmit={ 
                    (values) => {
                        add(values);
                    }
                }
            >
                <Form>
                    <Field name="name" type="text" placeholder="Name"></Field>
                    <Field name="description" type="text" placeholder="Descriptionn"></Field>
                    <Field name="img" type="name" placeholder="Img"></Field>
                    <Field name="price" type="number" placeholder="Price"></Field>
                    <Field name="stock" type="number" placeholder="Stock"></Field>
                    <button>Submit</button>
                </Form>
            </Formik>
        </>
    )
}
