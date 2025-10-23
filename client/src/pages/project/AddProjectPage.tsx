
import AddProject from "../../components/project/addProject/AddProject";
import useBackground from "../../hooks/useBackground";
import SubLayout from "../../layouts/SubLayout";
import { COLOR } from "../../styles/Variable";

const AddProjectPage = () => {
    useBackground(COLOR.back02);
    return (
        <SubLayout>
            <AddProject />
        </SubLayout>
    );
}
export default AddProjectPage;