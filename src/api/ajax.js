// 封装一个请求数据的方法，对axios的二次封装
import axios from "axios";
export default function ajax(url = "", params = {}, type = "get") {
    // 1.定义promise对象
    let promise;
    return new Promise((resolve, reject) => {
        // 2.判断请求方式
        if (type === "get") {
            let paramsStr = "";
            Object.keys(params).forEach((item) => {
                paramsStr = item + "=" + params[item] + "&"
            })
            if (paramsStr !== "") {
                paramsStr = paramsStr.slice(0, paramsStr.length - 1)
            }
            // 拼接url的完整路径
            url = url + "?" + paramsStr;
            promise = axios.get(url);
        }
        if (type === "post") {
            promise = axios.post(url, params)
        }
        // 返回请求结果
        promise.then((res) => {
            resolve(res)
        }).catch((err) => {
            reject(err)
        })
    })
}