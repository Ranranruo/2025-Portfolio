import MainHeader from "./MainHeader";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <MainHeader />
      {children}
    </>
  );
};

export default MainLayout;