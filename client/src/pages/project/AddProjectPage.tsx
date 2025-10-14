
import AddProject from "../../components/project/addProject/AddProject";
import useBackground from "../../hooks/useBackground";
import SubLayout from "../../layouts/SubLayout";

const AddProjectPage = () => {
    useBackground("#fff");
    return (
        <SubLayout>
            <AddProject />
        </SubLayout>
    );
}
export default AddProjectPage;