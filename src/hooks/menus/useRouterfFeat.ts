/*
 * @Description: 处理路由
 * @Date: 2021-06-17 17:37:28
 * @LastEditTime: 2021-06-21 15:07:17
 */

import type { _RouteRecordBase, RouteRecord, RouteRecordName, RouteRecordNormalized, RouteRecordRaw } from "vue-router";
import { AppRouteModule } from "@/router/types";

//	过滤不展示的路由
const fileterRoutes = (routes: RouteRecordRaw[]): RouteRecordRaw[] => {
	return routes.filter(r =>
		r.name !== "Login" &&
		r.name !== "Root" &&
		r.name !== "Error"
	)
}

//	转成menu可以用的路由
const menuRoutes = (routes: RouteRecordRaw[]) => {
	const router: RouteRecordNormalized[] = [];
	routes.forEach((r: any) => {
		if (r.children && r.children?.length > 1) {
			router.push({
				...r
			})
		} else {
			router.push({
				...r.children[0]
			})
		}
	})
	return router
}


//	获取所有路由 存在层级的  name
const routesName: any[] = [];
export const getAllMenuName = (routes: RouteRecordRaw[]) => {
	routes.forEach((r: _RouteRecordBase) => {
		if (r.meta?.children && r.children && r.name) {
			routesName.push(r.name);
			getAllMenuName(r.children)
		}
	});
	return routesName
}
export const useHandleRoutes = () => {
	return {
		fileterRoutes,
		menuRoutes,
		getAllMenuName,
	}
}