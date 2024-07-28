import { getAllCars } from "../data/data.js";
import { html, render } from "../lib.js";

const temp = (cars) => html`
    <!-- Dashboard page -->
    <h3 class="heading">Our Cars</h3>
    <section id="dashboard">
        ${cars.length && cars ? cars.map(carTemp) : html`<h3 class="nothing">Nothing to see yet</h3>`}
    </section>
`;

const carTemp = (car) => html`
    <div class="car">
      <img src=${car.imageUrl} alt="example1" />
      <h3 class="model">${car.model}</h3>
      <div class="specs">
        <p class="price">Price: €${car.price}</p>
        <p class="weight">Weight: ${car.weight} kg</p>
        <p class="top-speed">Top Speed: ${car.speed} kph</p>
      </div>
      <a class="details-btn" href="/catalog/${car._id}">More Info</a>
    </div>
`;

export async function catalogView() {
    const cars = await getAllCars();
    render(temp(cars));
}