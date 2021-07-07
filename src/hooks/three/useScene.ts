/*
 * @Description: three 场景
 * @Date: 2021-07-06 21:00:51
 * @LastEditTime: 2021-07-06 21:28:41
 */
import { Scene, Camera, PerspectiveCamera, WebGLRenderer } from "three";
import { useWindow } from "@/hooks/web/useWindow";
import { onMounted } from "vue";
const { getContextSize } = useWindow();
interface IClient {
    x: number,
    y: number
}




export const useThreeScene =   () => {
    const contextDom: IClient = {
        x: 0,
        y: 0
    }
    let scene: Scene;
    let camera: PerspectiveCamera;
onMounted(()=>{
               const { x, y } = getContextSize();
            contextDom.x = x;
            contextDom.y = y;
    console.log(contextDom);

    //  创建舞台
    scene = new Scene();

    //  照相机
    camera = new PerspectiveCamera(
        45,
        contextDom.x / contextDom.y,
        0.1,
        1000
    )
    const renderer: WebGLRenderer = new WebGLRenderer({ antialias: true });

    return {
        scene,
        camera,
        renderer,
    }
})
    //  渲染器
   
}
        

   