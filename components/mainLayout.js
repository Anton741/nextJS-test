import Header from "./header.jsx";


const MainLayput = ({children}) => {
  return ( 
    <>
    <Header/>
    <main>
      {children}
    </main>
    </>
   );
}
 
export default MainLayput;