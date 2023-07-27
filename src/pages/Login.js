import { Template } from "../component/Template";
const Login = ({ setIsLoggedIn }) => {
  return (
    <div className="text-white">
      <Template
        title="Welcome Back"
        desc1={"Build skills for today, tomorrow, and beyond."}
        desc2={"Education to future-proof your career."}
        formType={"login"}
        setIsLoggedIn={setIsLoggedIn}
      />
    </div>
  );
};

export default Login;
