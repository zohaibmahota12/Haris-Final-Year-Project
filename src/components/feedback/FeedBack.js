import React from "react";

function FeedBack() {
  return (
    <>
      <div class="container">
        <h2 class="text-center">Bootstrap 4 User Rating Form / Comment Form</h2>

        <div class="card">
          <div class="card-body">
            <div class="row">
              <div class="col-md-2">
                <img
                  src="https://image.ibb.co/jw55Ex/def_face.jpg"
                  class="img img-rounded img-fluid"
                />
                <p class="text-secondary text-center">15 Minutes Ago</p>
              </div>
              <div class="col-md-10">
                <p>
                  <a
                    class="float-start"
                    href="https://maniruzzaman-akash.blogspot.com/p/contact.html"
                  >
                    <strong>Maniruzzaman Akash</strong>
                  </a>
                  <span class="float-end">
                    <i class="text-warning fa fa-star"></i>
                  </span>
                  <span class="float-end">
                    <i class="text-warning fa fa-star"></i>
                  </span>
                  <span class="float-end">
                    <i class="text-warning fa fa-star"></i>
                  </span>
                  <span class="float-end">
                    <i class="text-warning fa fa-star"></i>
                  </span>
                </p>
                <div class="clearfix"></div>
                <p>
                  Lorem Ipsum is simply dummy text of the pr make but also the
                  leap into electronic typesetting, remaining essentially
                  unchanged. It was popularised in the 1960s with the release of
                  Letraset sheets containing Lorem Ipsum passages, and more
                  recently with desktop publishing software like Aldus PageMaker
                  including versions of Lorem Ipsum.
                </p>
                <p>
                  <a class="float-end btn btn-outline-primary ms-2">
                    {" "}
                    <i class="fa fa-reply"></i> Reply
                  </a>
                  <a class="float-end btn text-white btn-danger">
                    {" "}
                    <i class="fa fa-heart"></i> Like
                  </a>
                </p>
              </div>
            </div>
            <div class="card card-inner">
              <div class="card-body">
                <div class="row">
                  <div class="col-md-2">
                    <img
                      src="https://image.ibb.co/jw55Ex/def_face.jpg"
                      class="img img-rounded img-fluid"
                    />
                    <p class="text-secondary text-center">15 Minutes Ago</p>
                  </div>
                  <div class="col-md-10">
                    <p>
                      <a href="https://maniruzzaman-akash.blogspot.com/p/contact.html">
                        <strong>Maniruzzaman Akash</strong>
                      </a>
                    </p>
                    <p>
                      Lorem Ipsum is simply dummy text of the pr make but also
                      the leap into electronic typesetting, remaining
                      essentially unchanged. It was popularised in the 1960s
                      with the release of Letraset sheets containing Lorem Ipsum
                      passages, and more recently with desktop publishing
                      software like Aldus PageMaker including versions of Lorem
                      Ipsum.
                    </p>
                    <p>
                      <a class="float-end btn btn-outline-primary ms-2">
                        {" "}
                        <i class="fa fa-reply"></i> Reply
                      </a>
                      <a class="float-right btn text-white btn-danger">
                        {" "}
                        <i class="fa fa-heart"></i> Like
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FeedBack;
