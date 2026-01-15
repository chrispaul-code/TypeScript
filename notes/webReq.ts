import axios, {type AxiosResponse} from "axios"


type Todo={
    userId:number,
    id:number,
    title:string,
    completed:boolean
}

const fetchData=async()=>{
    try {
        const response:AxiosResponse<Todo>=await axios.get("https://jsonplaceholder.typicode.com/todos/1");
        console.log(response.data)
    } catch (error:any) {
        if(axios.isAxiosError(error)){
            console.log("Axios Error", error.message)
        }
    }
}

