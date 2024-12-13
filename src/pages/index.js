import HomePortada from "@/components/homePortada";
import Navbar from "@/components/Navbar";
import ShoppingCart from "@/components/ShoppingCart";
import { CartProvider } from "@/cartContext/CartContext";

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

      <footer></footer>
    </>
  );
}
