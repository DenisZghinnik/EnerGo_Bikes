import axios from "axios";

export enum ResultsCodes {
    Success = 0,
    Error = 1,
    CaptchaIsRequired = 10
}

export type ApiResponse<T={}> = {
    data: T,
    resultCode: number,
    messages: string[]
};

const apiBase = axios.create({
    baseURL: 'http://localhost:3001/',
    //withCredentials: true,
    //headers: {}
});

export const authApi = {
    getAuth () {
        return apiBase.get(`security/get-captcha-url`).then(resp=>resp.data)
    },
    login (email:string, password:string) {
       return axios.post(`auth/login`, {email,password}).then(resp=>resp.data)
    },
    logout () {
       return apiBase.delete(`auth/login`).then(resp=>resp.data)
    }

}