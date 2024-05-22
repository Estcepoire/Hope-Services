import Form from "@/Pages/MaterialGroup/Form.jsx";


const Edit = ({ materialGroup, materialTypes,  id}) => {
    console.log(materialGroup);
    console.log(materialTypes);
    const datas = {
        materialTypes: materialTypes
    };
    console.log(datas);
    return <Form onSubmit="handleUpdate" all_data={datas} initialData={materialGroup} id={id} />
}


export default Edit;
