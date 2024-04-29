import Form from "@/Pages/MaterialGroup/Form.jsx";

const Create = ( materialTypes ) => {
    console.log(materialTypes);
    return <Form onSubmit="handleCreate" all_data={materialTypes} />
}


export default Create;
