import unicornsImage from '../assets/img/Unicorn-Gif.gif'

export const Home = (props) => {
  return (
    <div id="home">
      <div className="container">
        <div id="home-body" className="row my-auto">
          <div className="col-lg-8 my-auto">
            <div id="home-title" className="row">
              <h1>{props.data ? props.data.title : 'Loading'}</h1>
            </div>
            <div id="home-content" className="row">
              {props.data
                ? props.data.content.map((data, index) => (
                  <p key={`${data}-${index}`}>{data}</p>
                ))
                : "loading"}
            </div>
            <div id="home-detail">
              <ul>
                {props.data
                  ? props.data.detail.map((data, index) => (
                    <li key={`${data}-${index}`}>{data}</li>
                  ))
                  : "loading"}
              </ul>
            </div>
            <div id="home-button" className="d-grid">
              <button className="btn btn-custom" type="button">
                {props.data ? props.data.button : "loading"}
              </button>
            </div>
          </div>
          <div id="home-image" className="col-lg-4 my-auto text-center">
            <img src={unicornsImage} alt="Unicorns" />
          </div>
        </div>
      </div>
    </div>
  );
};
