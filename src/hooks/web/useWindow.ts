/*
 * @Description: win
 * @Date: 2021-07-06 14:25:17
 * @LastEditTime: 2021-07-06 21:16:52
 */

//  获取内容区域窗口大小
const getContextSize = (): {
    x: number,
    y: number
} => {
    const OContext: null | HTMLElement = document.getElementById("context");
    if (!OContext) return {
        x: 0,
        y: 0
    };

    const x = OContext.clientWidth;
    const y = OContext.clientHeight;
    return {
        x,
        y,
    }

}
export const useWindow = () => {
    return {
        getContextSize,
    }
}