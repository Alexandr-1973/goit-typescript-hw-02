import { FidgetSpinner } from "react-loader-spinner";

const Loader: React.FC = () => {
  return (
    <FidgetSpinner
      visible={true}
      height="80"
      width="80"
      ariaLabel="fidget-spinner-loading"
      wrapperStyle={{
        paddingLeft: "100px",
        marginLeft: "auto",
        marginRight: "auto",
      }}
      wrapperClass="fidget-spinner-wrapper"
    />
  );
};

export default Loader;
