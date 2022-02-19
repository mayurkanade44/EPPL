import React, { useEffect, useState } from "react";
import { useDataContext } from "../context/data_context";
import { useParams } from "react-router-dom";
import { Loading, VerticalCarousel, CaseStudyCard } from ".";

const SingleBusiness = () => {
  const [caseStudies, setCaseStudies] = useState([]);
  const { loading, singleBusiness, fetchSingleBusiness, caseStudy } =
    useDataContext();
  const { id } = useParams();
  const { name, descriptions, carousel_img, cs_name, cs_description } =
    singleBusiness;

  const fetchCases = async (id) => {
    const temp = await caseStudy.filter((m) => m.business[0] === id);
    setCaseStudies(temp);
  };

  useEffect(() => {
    fetchSingleBusiness(id);
    fetchCases(id);
    // eslint-disable-next-line
  }, [id]);
  console.log(caseStudies);

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
            <div className="col-md-12">
              <CaseStudyCard data={caseStudies}/>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SingleBusiness;
