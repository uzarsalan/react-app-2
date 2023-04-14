const Image = ({ imgSrc, className, text = "blalalala" }) => {
  return (
    <>
      <img src={imgSrc} className={"App-logo " + className} />
      <p>{text}</p>
    </>
  );
};

export default Image;
