import { useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import axios from "axios";
import { __userapiurl } from "../../../reqUrl";

function VerifyUser() {
  const params = useParams();

  useEffect(() => {
    axios
      .get(__userapiurl + "fetch", {
        params: { email: params.vemail },
      })
      .then((response) => {
        if (response.data[0].__v == 0) {
          var updateDetails = {
            condition_obj: { email: params.vemail },
            content_obj: { status: 1, __v: 1 },
          };
          axios.patch(__userapiurl + "update", updateDetails).then(() => {
            console.log("User verified....");
          });
        }
      });
  }, []);
  return (
    <div>
      <Navigate to="/login" />
    </div>
  );
}

export default VerifyUser;
