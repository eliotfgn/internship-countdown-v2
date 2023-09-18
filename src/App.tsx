import "./App.css";
import doctor from "./assets/doctor.png";

function App() {
  const countToDate = Date.parse("18 Dec 2023 00:00:00 GMT+1");

  let previous: number;

  setInterval(() => {
    const currentDate = new Date();
    // @ts-ignore
    const timeBetweenDates = Math.floor((countToDate - currentDate) / 1000);
    if (timeBetweenDates !== previous) {
      flipAllCards(timeBetweenDates);
    }
    previous = timeBetweenDates;
  }, 250);

  // @ts-ignore
  function flipAllCards(time) {
    const days = Math.floor(time / (24 * 3600));
    const hours = Math.floor((time / 3600) % 24);
    const minutes = Math.floor((time / 60) % 60);
    const seconds = Math.floor(time % 60);
    const daysCard = document.querySelector(".days > .flip-card");
    const hoursCard = document.querySelector(".hours > .flip-card");
    const minutesCard = document.querySelector(".minutes > .flip-card");
    const secondsCard = document.querySelector(".seconds > .flip-card");
    flipCard(daysCard, days);
    flipCard(hoursCard, hours);
    flipCard(minutesCard, minutes);
    flipCard(secondsCard, seconds);
  }
  function flipCard(flipCard, time) {
    time = String(time).padStart(2, "0");
    const currentValue = flipCard.querySelector(".top").innerText;
    if (time == currentValue) return;
    const topFlip = document.createElement("div");
    topFlip.classList.add("top-flip");
    topFlip.innerText = currentValue;

    const topHalf = flipCard.querySelector(".top");
    // @ts-ignore
    const bottomHalf = flipCard.querySelector(".bottom");
    topFlip.addEventListener("animationstart", () => {
      topHalf.innerText = time;
    });
    topFlip.addEventListener("animationend", () => {
      topFlip.remove();
    });

    flipCard.appendChild(topFlip);
    //flipCard.appendChild(bottomFlip);
  }

  return (
    <>
      <main>
        <h2>Bravo pour le chemin parcouru, vous y êtes presque !</h2>

        <div className="main">
          <div className="countdown">
            <div className="days">
              <div className="flip-card">
                <div className="top">00</div>
                {/* <div className="bottom">00</div> */}
              </div>
              <p className="title">Days</p>
            </div>
            <div className="hours">
              <div className="flip-card">
                <div className="top">00</div>
                {/* <div className="bottom">00</div> */}
              </div>
              <p className="title">Hours</p>
            </div>
            <div className="minutes">
              <div className="flip-card">
                <div className="top">00</div>
                {/* <div className="bottom">00</div> */}
              </div>
              <p className="title">Minutes</p>
            </div>
            <div className="seconds">
              <div className="flip-card">
                <div className="top">00</div>
                {/* <div className="bottom">00</div> */}
              </div>
              <p className="title">Seconds</p>
            </div>
          </div>
        </div>
        <div className="doctor">
          <img
            className="doctor-img"
            height={400}
            width={250}
            src={doctor}
            alt=""
          />
        </div>
      </main>
    </>
  );
}

export default App;
