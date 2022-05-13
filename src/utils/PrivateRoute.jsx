import { Route, Redirect } from "react-router-dom";
import { userData } from "./config";

const PrivateRoute = ({ component: Component, restricted, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        !userData && restricted ? <Redirect to="/" /> : <Component {...props} />
      }
    />
  );
};

// function PrivateRoute({ children, isAuthenticated, component, ...rest }) {
//   return (
//     <Route
//       {...rest}
//       render={
//         ({ location }) => (
//           isAuthenticated
//             ? (
//               children
//             ) : (
//               <Redirect
//                 to={{
//                   pathname: '/login',
//                   state: { from: location }
//                 }}
//               />
//             ))
//       }
//     />
//   );
// }

export default PrivateRoute;
