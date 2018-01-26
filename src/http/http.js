/**
 * Created by admin1 on 2018/1/26.
 */
import axios from 'axios';

/*请求公共地址*/
axios.defaults.baseURL = "";

/*请求拦截器*/
axios.interceptors.request.use(requestConfig=>{

},err=>{

});
/*响应拦截器*/
axios.interceptors.response.use(responseConfig=>{

},err=>{

});



/*将axios导出*/
export default axios;
