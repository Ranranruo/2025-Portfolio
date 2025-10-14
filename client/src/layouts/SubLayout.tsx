 import Header from "./header/Header";


interface SubLayoutProps {
  children: React.ReactNode;
}

const SubLayout: React.FC<SubLayoutProps> = ({ children }) => {
  return (
    <>
    <Header 
      position="sticky"
      color="gradient"
    />
      {children}
    </>
  );
};

export default SubLayout;