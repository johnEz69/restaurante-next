import FondoMenu from "@/components/FondoMenu";
import Navbar from "@/components/Navbar";
import Servicios from "@/components/Servicios"; 
import Footer from "@/components/footer";


export default function menu() {
  return (
    <>

      <header>
      <Navbar />
      </header>
     

      <main>
        
        <section><FondoMenu/></section>
        <div>
          <Servicios/>
        </div>
         





      </main>

     <footer>
      
        <div><Footer/></div>
      
      
      </footer> 


    </>
  );
}