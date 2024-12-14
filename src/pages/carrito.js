import { CartProvider } from "@/cartContext/CartContext";
import FondoCarrito from "@/components/fondoCarrito";
import Footer from "@/components/footer";

import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main>
        <section>
          <CartProvider>
            <FondoCarrito />
          </CartProvider>
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
