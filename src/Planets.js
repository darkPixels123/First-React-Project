const Planets = (props) => {
  console.log(props);
    return props.isGas ? (
        <h1 style={{ color: "blue" }}>{props.name}</h1>
      ) : null;
};


export default Planets;