import React from "react";
import { useState } from "react";

export default function ContractInput() {
  const [techCheck, settechCheck] = useState(false);

  const onChange = () => settechCheck((wasChecked) => !wasChecked);

  return (
    <div className="container" style={{ backgroundColor: "white" }}>
      <form className="row">
        <div className="col-md-12">
          <div className="form-check col-md-4  text-start">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="techContractCheck"
              onChange={onChange}
            />

            <label className="form-check-label" for="techContractCheck">
              Technology Contract?
            </label>
          </div>
        </div>
        {techCheck && (
          <div>
            <div className="col-md-6 text-start mt-2">
              <label for="vendorManager" className="form-label mb-0">
                Vendor Manager
              </label>
              <input
                tyoe="text"
                id="vendorManager"
                name="Vendor Manager"
                className="form-control"
              />
            </div>
            <div className="col-md-6"></div>
          </div>
        )}
        <div className="col-md-6 text-start mt-2">
          <label for="contractName" className="form-label mb-0">
            Name{" "}
            <p className="text-muted small mb-0">Requestor/Contract Owner</p>
          </label>
          <input
            type="text"
            id="contractName"
            name="Contract Name"
            className="form-control"
          />
        </div>
        <div className="col-md-6 text-start mt-2">
          <label for="noticePeriod" className="form-label mb-0">
            Notice Period{" "}
            <p className="text-muted small mb-0">Days until Expiry/Renewal</p>
          </label>
          <input
            type="number"
            id="noticePeriod"
            name="Notice Period"
            className="form-control"
          />
        </div>

        <div className="text-start col-md-7 mt-2">
          <label for="description" className="form-label mb-0">
            Description
          </label>
          <textarea
            name="description"
            id="description"
            cols="30"
            rows="10"
            className="form-control"
            style={{ height: "75px" }}
          ></textarea>
        </div>
        <div className="text-start col-md-7 mt-2">
          <label for="comments" className="form-label mb-0">
            Additional Comments{" "}
            <p className="text-muted small mb-0">
              If any fields deviate from Standard, please describe here
            </p>
          </label>
          <textarea
            name="comments"
            id="comments"
            cols="30"
            rows="10"
            className="form-control"
            style={{ height: "75px" }}
          ></textarea>
        </div>
        <div className="text-start col-md-6 mt-2">
          <label for="fileUpload" className="form-label mb-0">
            Choose Contract for Upload
          </label>
          <input type="file" id="fileUpload" className="form-control" />
        </div>
        <div className="col-md-4 text-end align-self-end">
          <button type="button" className=" btn btn-primary">
            Submit
          </button>
        </div>
        <div className="col-md-12 mb-5"></div>
      </form>
    </div>
  );
}
