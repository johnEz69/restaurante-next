import HomePortada from "@/components/homePortada";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main>
        <section>
          <HomePortada />
        </section>
      </main>

      <footer>
        <section>
          <Footer />
        </section>
      </footer>
    </>
  );
}
