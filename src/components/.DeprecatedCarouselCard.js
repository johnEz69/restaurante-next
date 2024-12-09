import BuyButton from "./BuyButton";

const CarouselCard = ({urlImage}) => {
  return (
    <>
      <div className="carouselCard">
        <div></div>
        <div>
          <BuyButton />
        </div>
      </div>
      <style jsx>{`
        .carouselCard {
          width: 30vh;
          height: 30vh;
          background-image: url(${urlImage});
          background-position: center;
          margin: 5px;
          margin-top: 8vh;
          margin-bottom: 8vh;
        }
      `}</style>
    </>
  );
};

export default CarouselCard;
