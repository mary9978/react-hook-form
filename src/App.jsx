import LoginImage from "./assets/images/login-page.png";
import LoginImage2 from "./assets/images/login-page2.png";
import { Link } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import LoginForm from "./components/LoginForm";
function App() {
  return (
    <div className="container-fluid container-style ">
      <div className="max-w-screen-xl rounded-lg">
        <Toaster position="bottom-left" />
        <div className="form-grid">
          {/* image container */}
          <div className="hidden lg:block bg-lightBlue rounded-lg">
            <img className="w-full object-none" src={LoginImage2} alt="login image" />
          </div>
          {/* form container */}
          <div className="flex flex-col">
            <div className="link">
              <span>Not a member ? </span>
              <Link to={"#"} className="ms-2 text-blue-700 font-bold">
                Register now
              </Link>
            </div>
            <div className="flex p-12 flex-col  text-center">
              <p className="font-nunito font-bold text-lg">Hello Again!</p>
              <p className="font-nunito font-light text-xs my-3">
                Welcome back you've been missed!
              </p>
              <LoginForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
