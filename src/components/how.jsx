import howImage from "../assets/img/howitworks.svg";
import mintGif from "../assets/img/UNICORN-TEXT-GIF-blue.gif";
import howDetailImage from "../assets/img/mintnfttechtext.svg";

export const How = (props) => {
    return (
        <div id="how">
            <div className="container">
                <div id="how-title" className="row">
                    <div className="col-lg-5 col-xxl-6">
                        <img src={howImage} alt="How" />
                    </div>
                </div>
                <div className="row">
                    <div id="how-body" className="col-lg-4 text-center">
                        <img src={mintGif} alt="Unicorn1" />
                        <div id="how-detail">
                            <p>{props.data ? props.data.content : 'Loading'}</p>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div id="how-unicorn" className="text-center">
                            <img src={howDetailImage} alt="Detail Unicorn" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
