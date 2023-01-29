import React from "react";
import BookList from "../../BookList";

const ImageBox = () => {
  return (
    <div>
      <img
        src={BookList.img}
        alt=""
        data-bs-toggle="modal"
        data-bs-target="#imageExample"
      />

      {/*MODAL */}
      <div
        className="modal fade"
        id="imageExample"
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-content">
              <div className="modal-body">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>

                <img src={BookList.img} className="d-block w-100" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ImageBox;
