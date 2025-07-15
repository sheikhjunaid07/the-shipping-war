import "./Card.css";

const Card = (props) => {
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body border border-gray">
          <h5 className="card-title ">
            {props.icon}
            {props.title}
          </h5>
          <h1
            className="card-subtitle mb-2 text-body-primary"
            style={{ color: "#17a2b8", fontSize: "42px" }}
          >
            {props.data}
          </h1>
        </div>
      </div>
    </>
  );
};

export default Card;
