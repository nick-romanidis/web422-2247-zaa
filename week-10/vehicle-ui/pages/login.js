import { Card, Form, Button, Alert } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { authenticateUser } from "@/lib/authenticate";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Login(props) {
    const { register, handleSubmit } = useForm();
    const router = useRouter();
    const [warning, setWarning] = useState('');

    async function submitForm(data) {
        //alert(JSON.stringify(data));
        try {
            await authenticateUser(data.userName, data.password);
            router.push("/vehicles");
        }
        catch (err) {
            setWarning(err.message);
        }
    }

    return (
        <>
            {warning && (<><br /><Alert variant="danger">{warning}</Alert></>)}
            <Card bg="light">
                <Card.Body><h2>Login</h2>Enter your login information below:</Card.Body>
            </Card>
            <br />
            <Form onSubmit={handleSubmit(submitForm)}>
                <Form.Group>
                    <Form.Label>User:</Form.Label>
                    <Form.Control type="text" {...register("userName", { required: true })} />
                </Form.Group>
                <br />
                <Form.Group>
                    <Form.Label>Password:</Form.Label>
                    <Form.Control type="password" {...register("password", { required: true })} />
                </Form.Group>
                <br />
                <Button variant="primary" className="pull-right" type="submit">Login</Button>
            </Form>
        </>
    );
}