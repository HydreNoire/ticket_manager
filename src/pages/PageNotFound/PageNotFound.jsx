import s from "./style.module.css";

export function PageNotFound(props) {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <h2>404 - Page not found</h2>
      <img
        src={require("../../assets/images/404_error.png")}
        alt="404 illustration"
      />
    </div>
  );
}
