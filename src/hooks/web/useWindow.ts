/*
 * @Description: win
 * @Date: 2021-07-06 14:25:17
 * @LastEditTime: 2021-07-06 14:34:24
 */




const winSize = () => {
    console.log(window.innerWidth);

}
export const useWindow = () => {
    return {
        winSize
    }
}