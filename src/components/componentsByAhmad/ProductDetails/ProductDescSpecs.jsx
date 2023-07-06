import React from "react";
import { useParams } from "react-router-dom";

function ProductDescSpecs({ particular_data }) {
  const {cata} = useParams()
  return (
    cata && <div className="width-100 PDDescriptionMainCnt">
      <div className="res-1440-40 PDDescriptionSecCnt">
        <h1 className="PDDescriptionH">Description</h1>
        <div className="PDDescriptionView">
          <p
            className="PDDescriptionText"
            dangerouslySetInnerHTML={{
              __html: particular_data.description,
            }}
          />
        </div>
        <h1 className="PDSpecsH">Specifications</h1>
        <div className="PDSpecsView">
          <div className="darkView">
            <div className="view1">
              <p className="PDSpecsText">Product name</p>
            </div>
            <div className="view2">
              <p className="PDSpecsText">{particular_data.name}</p>
            </div>
          </div>
          <div className="lightView">
            <div className="view1">
              <p className="PDSpecsText">Category Name</p>
            </div>
            <div className="view2">
              <p className="PDSpecsText">{cata}</p>
            </div>
          </div>
          <div className="darkView">
            <div className="view1">
              <p className="PDSpecsText">Keywords</p>
            </div>
            <div className="view2">
              <p className="PDSpecsText">
               {particular_data.name}, {cata}, Surgical Equipment
              </p>
            </div>
          </div>
          <div className="lightView">
            <div className="view1">
              <p className="PDSpecsText">Suppliers</p>
            </div>
            <div className="view2">
              <p className="PDSpecsText">
                ZR Surgical & Medical Instruments Corporation
              </p>
            </div>
          </div>
          <div className="darkView">
            <div className="view1">
              <p className="PDSpecsText">Origin</p>
            </div>
            <div className="view2">
              <p className="PDSpecsText">Sialkot, Pakistan</p>
            </div>
          </div>
          <div className="lightView">
            <div className="view1">
              <p className="PDSpecsText">Certifications</p>
            </div>
            <div className="view2">
              <p className="PDSpecsText">PSQCA approved, ISO Certified</p>
            </div>
          </div>
          <div className="darkView">
            <div className="view1">
              <p className="PDSpecsText">Stock Status</p>
            </div>
            <div className="view2">
              <p className="PDSpecsText"><span style={{color:"#8FB347"}}>Available</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDescSpecs;
