import Tour from "./Tour";
import {data} from  '../data/tour'
// import img5 from "../images/tour-5.jpeg";
// import img6 from "../images/tour-6.jpeg";


function FeaturedTour() {
  return (
    <section className="section" id="tours">
      <div className="section-title">
        <h2>
          featured <span>tours</span>
        </h2>
      </div>
      <div className="section-center featured-center">
        {data.map((data) => {
          return <Tour {...data} />;
        })}
      </div>
    </section>
  );
}
export default FeaturedTour;
