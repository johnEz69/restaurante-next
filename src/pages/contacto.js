import Navbar from "@/components/Navbar";
import FondoContacos from "@/components/FondoContactos";
import Mapa from "@/components/Mapa";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main>
        <section>
          <FondoContacos />
        </section>
      </main>

      <footer>
        <section>
          <Mapa />
        </section>

        <div>
          <Footer />
        </div>
      </footer>
    </>
  );
}
