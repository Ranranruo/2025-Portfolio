 import Header from "./header/Header";


interface SubLayoutProps {
  children: React.ReactNode;
}

const SubLayout: React.FC<SubLayoutProps> = ({ children }) => {
  return (
    <>
    <Header type="sub"/>
      {children}
    </>
  );
};

export default SubLayout;