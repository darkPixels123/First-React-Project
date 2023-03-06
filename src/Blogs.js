const Blogs = (props) => {
  return (
    <div key={props.id}>
      <h2>{props.title}</h2>
      <p>Written by {props.author}</p>
    </div>
  );
};

export default Blogs;
