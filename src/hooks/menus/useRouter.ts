/*
 * @Description: 处理路由
 * @Date: 2021-06-17 17:37:28
 * @LastEditTime: 2021-06-17 21:43:31
 */

import { RouteRecordNormalized, RouteRecordRaw } from "vue-router";

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

export const useHandleRoutes = () => {
	return {
		fileterRoutes,
		menuRoutes,
	}
}