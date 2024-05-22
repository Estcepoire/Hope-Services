import Form from "@/Pages/Material/Form.jsx";


const Edit = ({ material, materialGroups, id }) => {
    console.log(material);
    console.log(materialGroups);
    const datas = {
        materialGroups: materialGroups
    };
    console.log(datas);
    return <Form onSubmit="handleUpdate" all_data={datas} initialData={material} id={id} />
}


export default Edit;
