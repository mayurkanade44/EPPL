import React, { useEffect } from "react";
import { useDataContext } from "../context/data_context";
import { useParams } from "react-router-dom";
import { Loading, VerticalCarousel } from ".";


const SingleBusiness = () => {
  const { loading, singleBusiness, fetchSingleBusiness } = useDataContext();
  const { id } = useParams();
  const { name, descriptions, carousel_img } = singleBusiness;
  console.log(singleBusiness);

  useEffect(() => {
    fetchSingleBusiness(id);
    // eslint-disable-next-line
  }, [id]);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <>
          <h1 className="text-center mt-2">{name}</h1>
          <div className="heading-underline" />
          <div className="row">
            <div className="col-md-4">
              <VerticalCarousel images={carousel_img} />
            </div>
            <div className="col-md-8">{descriptions}</div>
          </div>
        </>
      )}
    </div>
  );
};

export default SingleBusiness;
