import { useRouteError } from "react-router-dom";
function Error() {
  const error: any = useRouteError();
  console.error(error);
  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <a href="/">Go Back</a>
    </div>
  );
}

export default Error;
