import logo from "./logo.svg";
import "./App.css";

function Carousel() {
  return (
    <div
      id="carouselExampleControls"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src="https://fastly.picsum.photos/id/197/800/400.jpg?hmac=pYbk4ToV0UEmDjllYJo54__l8gpvqTfnQLW8KYydW6o"
            class="d-block w-100"
            alt="..."
          />
        </div>
        <div class="carousel-item">
          <img
            src="https://fastly.picsum.photos/id/499/2000/1200.jpg?hmac=HRt41A39P4FqOi8qbt1Cm9uLMIDBAZSvroGfBbtvnbI"
            class="d-block w-100"
            alt="..."
          />
        </div>
        <div class="carousel-item">
          <img
            src="https://fastly.picsum.photos/id/197/800/400.jpg?hmac=pYbk4ToV0UEmDjllYJo54__l8gpvqTfnQLW8KYydW6o"
            class="d-block w-100"
            alt="..."
          />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousel;
