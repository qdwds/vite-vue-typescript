/*
 * @Description: 处理路由
 * @Date: 2021-06-17 17:37:28
 * @LastEditTime: 2021-06-30 17:51:23
 */

import type { _RouteRecordBase, RouteRecord, RouteRecordName, RouteRecordNormalized, RouteRecordRaw } from "vue-router";
import { AppRouteModule } from "@/router/types";

const routesSort = (meta: string, orderNo: string) => {
	return function (a: any, b: any) {
		let max = a[meta][orderNo];
		let min = b[meta][orderNo];
		return max - min;
	};
};


//	过滤不展示的路由
const fileterRoutes = (routes: RouteRecordRaw[]): RouteRecordRaw[] => {
	const router=  routes.filter(r =>
		r.name !== "Login" &&
		r.name !== "Root" &&
		r.name !== "Error"
	)
	 return router.sort(routesSort("meta", "orderNo"));
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


//	获取最外层的name 用于menu单选
const routesName: any[] = [];
export const getAllMenuName = (routes: RouteRecordRaw[]) => {
	routes.forEach((r: _RouteRecordBase) => {
		if (r.children && r.name) {
			routesName.push(r.name);
		}
	});
	return routesName
}


export const useHandleRoutes = () => {
	return {
		fileterRoutes,
		menuRoutes,
		getAllMenuName,
		routesSort
	}
}