import { Template } from "../component/Template";
const Signup = ({ setIsLoggedIn }) => {
  return (
    <div className="bg-richblack-900">
      <Template
        title="Join the millions learning to code with StudyNotion for free"
        desc1={"Build skills for today, tomorrow, and beyond."}
        desc2={"Education to future-proof your career."}
        formType={"signup"}
        setIsLoggedIn={setIsLoggedIn}
      />
    </div>
  );
};

export default Signup;
