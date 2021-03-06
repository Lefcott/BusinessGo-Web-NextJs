import Link from 'next/link';
import { useSelector } from 'react-redux';

const Footer = () => {
  const project = useSelector(store => store.project);

  return (
    <div className="footer">
      <div className="bottom">
        {project?.configuration.footer.sections.map((section, i) => (
          <span key={i} className="column">
            <h3 className="title">
              <Link href={section.link}>
                <a>{section.title}</a>
              </Link>
            </h3>
            <p>{section.description}</p>
          </span>
        ))}

        <span className="column">
          <h3 className="title">{project?.configuration.footer.contact_info_title}</h3>
          <span className="row">
            <img src="/icon/house.png" alt="house icon" />
            <p>{project?.configuration.footer.location}</p>
            <br />
          </span>
          <span className="row">
            <img src="/icon/phone.png" alt="phone icon" />
            <p>
              {project?.configuration.footer.phone && (
                <a href={`tel:${project?.configuration.footer.phone}`} target="blank">
                  {project?.configuration.footer.phone}
                </a>
              )}
            </p>
          </span>
          <span className="row">
            <img src="/icon/contact.png" alt="contact icon" />
            <p>
              {project?.configuration.footer.email && (
                <a href={`mailto:${project?.configuration.footer.email}`} target="blank">
                  {project?.configuration.footer.email}
                </a>
              )}
            </p>
          </span>
        </span>
      </div>

      <style jsx>
        {`
          .footer {
            width: 100vw;
            display: flex;
            justify-content: center;
            align-items: center;
            background: #0f0f0f;
          }

          .bottom {
            display: flex;
            justify-content: center;
            align-items: center;
            flex: 1;
            width: 100%;
            height: 100%;
          }

          .column {
            width: 400px;
            height: 100%;
            padding: 1em;
            border-radius: 1em;
          }
          .row {
            width: 100%;
            display: flex;
            padding: 0.5em 0 0 0.5em;
          }
          h3 {
            margin-top: 1em;
            color: white;
          }
          img {
            width: 25px;
            height: 25px;
          }
          p {
            color: grey;
            margin: 0;
            padding: 0 0 0 0.5em;
          }
          a:hover {
            color: whitesmoke;
          }
          .title {
            cursor: pointer;
            color: white;
          }

          @media (max-width: 768px) {
            .bottom {
              flex-flow: column;
            }
            .column {
              width: 100%;
              padding: 1em;
              border-radius: 0;
              display: flex;
              justify-content: center;
              flex-flow: column;
            }
            .row {
              padding: 0 0 1em 1em;
            }
            .title {
              font-size: 20px;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Footer;
