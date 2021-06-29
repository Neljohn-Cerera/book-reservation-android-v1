import Axios from "axios";

//INSERT USER
export const signup = async ({ state }) => {
  const res = await Axios.post("http://192.168.43.27:3005/api/login/signup", {
    jobstate: state.jobstate,
    role: state.role,
    isAlreadyHasAccount: state.isAlreadyHasAccount,
    employeeid: state.employeeid,
    teacherid: state.teacherid,
    studentid: state.studentid,
    fullname: state.fullname,
    gender: state.gender,
    age: state.age,
    address: state.address,
    course: state.course,
    courseyear: state.courseyear,
    department: state.department,
    description: state.description,
    number: state.number,
    email: state.email,
    password: state.password,
  });
  return res;
};
