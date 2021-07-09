/*
 * @Description: websocket
 * @Date: 2021-07-09 11:47:53
 * @LastEditTime: 2021-07-09 12:00:15
 */


export const useWebSocket = () =>{
    let ws:WebSocket;
    const WSConnect = (url:string)=>{
        ws = new WebSocket(url)
    }

    const WSOpen = (openCollback:any) =>{
        ws.onopen = openCollback(event);
    }
    return{
        ws,
        WSConnect,
        WSOpen
    }
}