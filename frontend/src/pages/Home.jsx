import React from "react";
import { Carousel, ServiceHome, TestAnmi, Counter, Loading } from "../components";
import { useDataContext } from "../context/data_context";

export const Home = () => {
  const { services, loading } = useDataContext();
  console.log(services);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <Carousel />
          <h1 className="text-center mt-4">Services</h1>
          {services &&
            services.map((service) => {
              const { id, name, img, description } = service;
              return (
                <div key={id}>
                  <ServiceHome
                    id={id}
                    name={name}
                    image={img}
                    description={description}
                  />
                </div>
              );
            })}
          <Counter />
        </div>
      )}
    </>
  );
};
