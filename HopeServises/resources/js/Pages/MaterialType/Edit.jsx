import Form from "@/Pages/MaterialType/Form.jsx";

const Edit = ({ name, id }) => {
    console.log(name);
    console.log(id);
    return <Form onSubmit="handleUpdate" initialName={name} id={id} />
}


export default Edit;
