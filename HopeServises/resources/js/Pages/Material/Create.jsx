import Form from "@/Pages/Material/Form.jsx";


const Create = ( materialGroups ) => {
    console.log(materialGroups);
    return <Form onSubmit="handleCreate" all_data={materialGroups} />
}


export default Create;
