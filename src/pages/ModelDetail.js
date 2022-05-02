import { Fragment } from "react";
import {useParams} from "react-router-dom";

const ModelDetail = () => {
  const params = useParams();




  return (
    <Fragment>
      <h1>The Model Detail page</h1>
      <p>{params.modelId}</p>
    </Fragment>
  );
};

export default ModelDetail;
