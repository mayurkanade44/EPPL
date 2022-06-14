import { useState } from "react";

const Treatment = ({ id }) => {
  const [read, setRead] = useState(false);

  if (id === "recrxTqzKUdMTXtP7") {
    return <h1>Test</h1>;
  } else if (id === "recV1wm4QA5uQqv1r") {
    return (
      <div>
        <p>
          <b>1. LARVICIDING</b> <br />
          <b>Tab or Granular Application</b>:- The most ECO Friendly &amp;
          Environmentally responsible means of modern day mosquito management is
          use of TABLETS &amp; GRANUALS which are odorless and has good
          tolerance on account to mammalian toxicity...
          {!read ? (
            <button
              className="btn"
              style={{ color: "blue", paddingLeft: 1 }}
              onClick={() => setRead(!read)}
            >
              <b>Read More</b>
            </button>
          ) : (
            <>
              <br />
              <b>Liquid Based Spray</b>:- This process has been in active use by
              almost all municipal and health bodies globally, using EC based
              liquid sprays in stagnant waters to target the larval stage where
              its most susceptible. <br /> <b> Oil Spill</b>:- “MLO” Malarial
              Larval Oil is used in a direct spill over stagnant water in a bid
              to disrupt the life cycle of mosquitoes, the oil forms a film over
              the water not allowing the larvae to breath, suffocating the
              larvae from breathing as it emerges from the bottom of the water
              at regular intervals.
              <br /> <br />
              <b>2. RESIDUAL SPRAY</b>:- Residual Spray has over the recent
              years extended from just not being internal, extending to external
              areas too, as its understandable that mosquitoes are largely
              contributed from external settings, and if we have an ideal
              external and internal location such areas need to be under
              RESIDUAL SPRAY management. Residual Sprays comprises of layered
              spraying of HUMAN &amp; PET SAFE being odorless &amp; colourless
              on the walls surface targeting resting mosquitoes. Efficacy of
              such sprays is sustainable also largely depending on environmental
              conditions.
              <br /> <br />
              <b>3. KNOCKDOWN SPRAY</b>:- Knockdown spray have become safer and
              have the needed approvals from competent authorities in INDIA for
              internal use where humans inhabit. Its application immediately
              brings down adult mosquito infestation in the given areas, these
              sprays are sustainable when applied at the specified label claims,
              mild odor, but high efficacy makes this a choice for all external
              &amp; lawn / garden area applications.
              <br /> <br />
              <b>4. MICRONING</b>:- Use of aqua based formulations dispensed in
              microns to open air using a power tool, resulting in floating
              airborne particles targeting flying mosquitoes while creating a
              film of sorts when the formulation settles on surfaces. This
              approach has a more efficient and larger reach providing a
              knockdown and residual dual effect. Our affiliation with BAYER
              gives our services a technically backed advantage. In microning
              applications, AQUAKOTHRINE is our preferred formulation.
              <br /> <br />
              <b>5. FOGGING</b>
              <br /> <b>Thermal-Fogging</b>:- Most preferred mode of mosquito
              management, it provides a quick solution and a equally satisfying
              visual proof, but over the recent years it is loosing it’s
              preference over environmental concerns as diesel is the main
              carrier of chemicals in this application process. Adult mosquitoes
              are direly affected, as they would be exposed to the pesticide in
              the thermal-fog-cloud. <br />
              <b>Landscape Fogging</b>:- India’s 1st vehicle mounted fogging
              machine in the private sector having dual capacity for cold &amp;
              thermal fogging. Having a dual capacity tank with more than 3
              hours of continuous fogging under all weather conditions,
              versatile and highly maneuverable in city and remote locations
              making the application ideal for entire city and gated community
              applications. Our landscape fogger has been successfully
              operational from 2000 and has been used as a common platform for
              city disinfecting services during covid-19. <br />{" "}
              <b>SIMPLY GREEN</b>:- Is a concept of using natural-extract oils
              or ready to use products in spray, vapour or diffusers forms,
              bringing about additions to given space by adding natural
              repellant for a given pest.
            </>
          )}
        </p>
      </div>
    );
  }
  return <div>Treatment</div>;
};
export default Treatment;
