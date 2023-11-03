import "./style.css";

const Error = ({ data }) => {
  const API = (import.meta.env.VITE_PUBLIC_URL)
  console.log();
  
  return (
    <>

      <div className="error">
        <img src={`${API}/images/error.svg`} alt="Error" />
        <h1>{data.message}</h1>
      </div>
    </>
  );
};

export default Error;
