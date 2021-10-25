import featuresImage from "../assets/img/features.svg";
import featuresDetailImage from "../assets/img/FEATURESPIC.svg";

export const Features = (props) => {
    return (
        <div id="features">
            <div className="container">
                <div id="features-title" className="row">
                    <div className="col-lg-4 col-xxl-5">
                        <img src={featuresImage} className="mr-auto" alt="features" />
                    </div>
                </div>
                <div id="features-unicorn" className="row">
                    <div className="col-lg-6 col-xxl-8">
                        <img src={featuresDetailImage} alt="Features" />
                    </div>
                </div>
                <div id="features-detail">
                    <ul>
                        {props.data
                            ? props.data.detail.map((data, index) => (
                                <li key={`${data}-${index}`}>{data}</li>
                            ))
                            : "loading"}
                    </ul>
                </div>

            </div>
        </div>
    );
};
