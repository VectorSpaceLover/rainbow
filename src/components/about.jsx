import aboutImage from "../assets/img/about.svg";
import womanCorn from "../assets/img/Womancorn.svg";
import yellowCorn from "../assets/img/Yellowcorn.svg";
import prideCorn from "../assets/img/Pridecorn.svg";

export const About = (props) => {
    return (
        <div id="about">
            <div className="container">
                <div id="about-title" className="row">
                    <div className="col-lg-4">
                        <img src={aboutImage} className="mr-auto" alt="About" />
                    </div>
                </div>
                <div id="about-detail">
                    <ul>
                        {props.data
                            ? props.data.detail.map((data, index) => (
                                <li key={`${data}-${index}`}>{data}</li>
                            ))
                            : "loading"}
                    </ul>
                </div>
                <div id="about-unicorn" className="row">
                    <div className="col-lg-4 text-center">
                        <img src={yellowCorn} alt="Unicorn1" />
                    </div>
                    <div className="col-lg-4 text-center">
                        <img src={prideCorn} alt="Unicorn2" />
                    </div>
                    <div className="col-lg-4 text-center">
                        <img src={womanCorn} alt="Unicorn3" />
                    </div>
                </div>
            </div>
        </div>
    );
};
