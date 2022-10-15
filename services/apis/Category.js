const { api } = require("services");

export const  getAllCategory =()=>{
 return api({
    method:"GET",
    url:"post-category"
 })
}