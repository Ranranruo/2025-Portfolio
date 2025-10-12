 import SubHeader from "./SubHeader";


interface SubLayoutProps {
  children: React.ReactNode;
}

const SubLayout: React.FC<SubLayoutProps> = ({ children }) => {
  return (
    <>
    <SubHeader />
      {children}
    </>
  );
};

export default SubLayout;