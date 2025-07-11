import Slide from "../components/main/slide/Slide";
import Statistics from "../components/main/statistics/Statistics";
import Visual from "../components/main/visual/Visual";
import MainLayout from "../layouts/main/MainLayout";

const MainPage = () => {
  return (
    <MainLayout>
      <Visual />
      <Statistics />
      <Slide />
    </MainLayout>
  );
}

export default MainPage;