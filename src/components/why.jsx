import whyImage from '../assets/img/why.svg'
import purpleUnicorn from '../assets/img/unicorn-purple.svg'

export const Why = (props) => {
    return (
        <div id="why" className="position-relative">
            <div className="container position-relative">
                <div id="why-purple-unicorn" className="position-absolute top-0 end-0">
                    <img src={purpleUnicorn} className="purple-unicorn" alt="Purple Unicorn" />
                </div>
                <div id="why-whole" className="container position-absolute">
                    <div id="why-title" className="row">
                        <div className="col-lg-4">
                            <img src={whyImage} className="mr-auto" alt="Why" />
                        </div>
                    </div>
                    <div id="why-content" className="row">
                        <p>{props.data ? props.data.content : 'Loading'}</p>
                    </div>
                    <div id="why-detail1">
                        <ul>
                            {props.data
                                ? props.data.detail1.map((data, index) => (
                                    <li key={`${data}-${index}`}>{data}</li>
                                ))
                                : "loading"}
                        </ul>
                    </div>
                    <div id="why-detail2">
                        <p>{props.data ? props.data.detail21 : 'Loading'}<br /><br />
                            <strong className="bold-text">{props.data ? props.data.detail22 : 'Loading'}</strong></p>
                        <ul>
                            {props.data
                                ? props.data.detail23.map((data, index) => (
                                    <li key={`${data}-${index}`}>{data}</li>
                                ))
                                : "loading"}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};
