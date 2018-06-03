# boostrap4-admin-responsive-layout-demo
后台管理响应式布局demo（bootstrap4）

1. 大致结构
-顶部(navbar)
-主体
|-左半部(侧边导航)
|-右半部
|--上半部(内容展示)
|--底部(footer)

2. 响应式
2.1 侧边导航响应式
  要准备两份导航。一个定义在顶部，另一个定义在左半部。手机页面显示顶部导航，隐藏侧边导航。反之，相反。
2.2 左半部和右半部响应式
  利用bootstrap的media query。
  左半部class：d-none d-md-block col-md-3 col-lg-2
  右半部class：col-sm-12 col-md-9 col-lg-10

3. 主题切换
3.1 自定义主题
  bootswatch：https://bootswatch.com
3.2 主题切换
3.2.1 js切换
  用js修改link的href来达到切换效果
