import instance from "../Interceptor/Interceptor";

const access = localStorage.getItem("accessToken");
export const token = access;

const ApiServices ={
    // getIdData:(id)=>{
    //     const url = id ? `/users/${id}` :"/users";
    //     return instance.get(url)
    // },
    // createData:(customerData)=>{
    //     return instance.post("/users",customerData);
    // },
    // putData:(id,customerData)=>{
    //     return instance.put(`/users/${id}`,customerData);
    // },
    getOpportunity:()=>{
        return instance.get("/api/opportunity")
    },
    postLead:(values)=>{
        return instance.post("/api/opportunity",values)
    },
    getEstimate:()=>{
        return instance.get("/api/estimates")
    },
    loginData:(values)=>{
        return instance.post("/api/users/login",values);
    },
    RegisterData:(values)=>{
        return instance.post("/api/users",values);
    },
    getCalendar:()=>{
        return instance.get("/api/calender");  
    },
    getAllUser:()=>{
        return instance.get("/api/users");
    }
}

export default ApiServices;