import CarouselProduct from "@/components/CarouselProduct";
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
          <CarouselProduct />
          <ShoppingCart />
        </section>
      </main>

      <footer></footer>
    </>
  );
}
