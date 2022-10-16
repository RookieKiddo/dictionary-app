import React from "react";
import "../../assets/css/styles.css";

const Result = ({ data }) => {

  return (
    <div>
      {Object.keys(data).length > 0 && (
        <div className="result_container">
          <div className="result_heading_contaier">
            <h4>
              {data?.word}{" "}
              <span>
                -{" "}
                {data.phonetics &&
                  data?.phonetics.length &&
                  data?.phonetics[1] && data?.phonetics[1].text}{" "}
              </span>
            </h4>
          </div>

          <div className="definition_container">
            <h5>
              <i>Definitions</i>
              {data.meanings &&
                data.meanings.length &&
                data?.meanings.map((x) =>
                  x?.definitions?.map((def, i) => {
                    return <div key={i}> - {def.definition}</div>;
                  })
                )}
            </h5>
          </div>
        </div>
      ) }
    </div>
  );
};

export default Result;
