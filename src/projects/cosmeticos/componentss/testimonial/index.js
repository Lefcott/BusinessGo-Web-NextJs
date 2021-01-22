import { useEffect, useState } from 'react';
import {
  MDBCarousel,
  MDBCarouselCaption,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBContainer
} from 'mdbreact';

import 'bootstrap-css-only/css/bootstrap.min.css';
import { getClientDocuments } from '../../../../services/api/clientDocument';
import Spinner from '../../../../components/Spinner';

const Testimonial = () => {
  const [comments, setComments] = useState(null);

  useEffect(() => {
    getClientDocuments('cosmeticos-images').then(({ data: givenComments }) => {
      console.log('givenComments', givenComments);
      setComments(givenComments);
    });
  }, []);

  return (
    <div className="testimonial">
      <MDBContainer>
        <MDBCarousel
          activeItem={1}
          length={comments?.length || 0}
          showControls
          showIndicators

          slide
        >
          <MDBCarouselInner>
            {!comments && <Spinner />}
            {comments &&
              comments.map((comment, key) => (
                <MDBCarouselItem itemId={`${key + 1}`} key={key}>
                  <MDBView>
                    <img
                      src={comment.photo}
                      alt="First slide"
                      className="d-block w-100"
                    />
                  </MDBView>
                  <MDBCarouselCaption>
                    <div className="text">
                      <h3 className="h3-responsive">"{comment.comment}"</h3>
                      <h6 className="h5-responsive">-{comment.user_name}</h6>
                    </div>
                  </MDBCarouselCaption>
                </MDBCarouselItem>
              ))}
          </MDBCarouselInner>
        </MDBCarousel>

        <style jsx>
          {`
            .testimonial {
              width: 100vw;
              height: 50vh;
              display: flex;
              justify-content:center;
              align-items:center;
              text-shadow: 0 0 1px 1px black;
              margin: 5em 0;

            }

            .text {
              width: 100%;
              color: white;
              background:hsla(0, 0%, 0%, 0.897);
              border-radius:1em;
            }

          `}
        </style>
      </MDBContainer>
    </div>
  );
};

export default Testimonial;
