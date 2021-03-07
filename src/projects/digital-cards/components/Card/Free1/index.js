import PropTypes from 'prop-types';

const Free1 = props => {
  const { card } = props;

  return (
    <div className={`card${props.showAsTemplate ? ' templateCard' : ''}`}>
      <center className="logoContainer">
        <img className="logo" src={card.form_data.photo} />
      </center>
      <div className="bottom">
        <div className="box">
          <div className="icon" />
          <div className="icon" />
          <div className="icon" />
          <div className="icon" />
        </div>
      </div>
      {props.showAsTemplate && (
        <div className="select">
          <img src="/icon/hand.svg" alt="" />
          <h5>Presione un icono para elegir.</h5>
        </div>
      )}
      <style jsx>
        {`
          .card {
            width: 100%;
            height: 50em;
            border: 0.2em solid #ebebeb;
            border-radius: 1em;
            background-image: url(/images/burger.jpg);
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
          }
          .card:hover {
            box-shadow: 0.3em 0.3em 0.5em silver;
          }
          .templateCard {
            width: 18.5em;
            height: 32em;
            padding: 0.5em;
            margin: 0.5em;
          }
          .logoContainer {
            width: 100%;
            height: 100px;
          }
          .logo {
            max-width: 100%;
            max-height: 100%;
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            border-radius: 1em;
          }
          h4 {
            font-weight: bold;
            line-height: 0.9em;
            letter-spacing: 1px;
          }
          p {
            font-weight: 500;
          }

          //   =========================================================================

          .bottom {
            flex: 7;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: flex-end;
          }
          .box {
            width: 100%;
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            background: hsla(0, 0%, 0%, 0.657);
            flex-wrap: wrap;
            border-radius: 0.5em;
            padding: 0.4em 0;
            margin: 0 0 0.5em 0;
          }

          .icon {
            width: 35px;
            height: 35px;
            border-radius: 0.5em;
            margin: 0 1em;
          }

          .icon:nth-child(1) {
            -webkit-mask: url(/icon/facebook.svg) no-repeat 100% 100%;
            background-image: linear-gradient(to top, rgb(144, 101, 22), orange);
          }
          .icon:nth-child(2) {
            -webkit-mask: url(/icon/instagram.svg) no-repeat 100% 100%;
            background-image: linear-gradient(to top, rgb(144, 101, 22), orange);
          }
          .icon:nth-child(3) {
            -webkit-mask: url(/icon/whatsapp.svg) no-repeat 100% 100%;
            background-image: linear-gradient(to top, rgb(144, 101, 22), orange);
          }
          .icon:nth-child(4) {
            -webkit-mask: url(/icon/ubication.svg) no-repeat 100% 100%;
            background-image: linear-gradient(to top, rgb(144, 101, 22), orange);
          }

          // ===========================================================================

          .select {
            flex: 1;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            background-image: linear-gradient(to right, #2e2e2e 0%, black 100%);
            color: white;
            border-radius: 0.5em;
          }
          h5 {
            font-size: 0.9em;
          }
          .select img {
            width: 25px;
            height: 25px;
            margin-right: 10px;
            background: white;
            border-radius: 0.5em;
          }
          @media only screen and (max-width: 768px) {
            .card {
              height: 100%;
            }
          }
        `}
      </style>
    </div>
  );
};

Free1.propTypes = {
  showAsTemplate: PropTypes.bool.isRequired,
  card: PropTypes.object.isRequired
};

export default Free1;
