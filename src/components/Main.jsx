import "./main.css"
const Main = () => {
  return (
    <main>
      <section>
        <h2>Specials</h2>
        <div className="container-recipes">
          <div className="container-recipe">
            <img className="img-size" src="/images/food.jpg" alt="" />
            <div className="title-price">
              <h3>Greek salad</h3>
              <p>12.99 €</p>
            </div>
            <p className="info-recipe">
              Lorem ipsum dolor sit amet consectetur adipiscing elit, magna est
              urna libero
            </p>
            <p className="order">
              Order a delivery{" "}
              <img className="icon-delivery" src="/images/bicicleta-de-reparto.png" alt="" />
            </p>
          </div>
          <div className="container-recipe">
            <img className="img-size" src="/images/food1.jpg" alt="" />
            <div className="title-price">
              <h3>Bruscetta</h3>
              <p>16.99 €</p>
            </div>
            <p className="info-recipe">
              Lorem ipsum dolor sit amet consectetur adipiscing elit, magna est
              urna libero
            </p>
            <p className="order">
              Order a delivery{" "}
              <img className="icon-delivery" src="/images/bicicleta-de-reparto.png" alt="" />
            </p>
          </div>
          <div className="container-recipe">
            <img className="img-size" src="/images/food4.jpg" alt="" />
            <div className="title-price">
              <h3>Lemon Dessert</h3>
              <p>9.99 €</p>
            </div>
            <p className="info-recipe">
              Lorem ipsum dolor sit amet consectetur adipiscing elit, magna est
              urna libero
            </p>
            <p className="order">
              Order a delivery{" "}
              <img className="icon-delivery" src="/images/bicicleta-de-reparto.png" alt="" />
            </p>
          </div>
        </div>
      </section>
      <section>
        <h2>Testimonials</h2>
      </section>
      <section className="flex-about">
        <h2>Little Lemon</h2>
        <p>
          Facilisis conubia eget justo mus luctus aenean tempus blandit curae,
          arcu quis viverra venenatis natoque nunc nisl eleifend in augue, diam
          hendrerit feugiat molestie montes sem parturient at.
        </p>
        <img className="food-section food2" src="./images/food2.jpg" alt="" />
        <img className="food-section" src="./images/food3.jpg" alt="" />
      </section>
    </main>
  );
};

export default Main;
