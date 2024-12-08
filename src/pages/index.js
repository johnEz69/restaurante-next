import HomePortada from "@/components/homePortada";
import Navbar from "@/components/Navbar";
import ShoppingCart from "@/components/ShoppingCart";

export default function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main>
        <section>
          <HomePortada />
          <ShoppingCart />
        </section>
      </main>

      <footer></footer>
    </>
  );
}
