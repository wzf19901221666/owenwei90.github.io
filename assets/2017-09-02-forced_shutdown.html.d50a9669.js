import{_ as o}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as p,c as e,e as t}from"./app.af5a14f1.js";const c={},i=t('<p>电脑晚上明明按下关机键，第二天早上却发现电脑开了一晚上？</p><p>这是因为后台应用程序和 GUI 应用程序在阻止或取消关机，系统未能按正常关机。按下列方法授予系统自动关机权限，就能让系统正常关机。</p><p><strong>方法如下：</strong></p><ol><li><p>点击「开始菜单」，搜索「Regedit」，进入注册表编辑器。</p></li><li><p>打开窗口后，在注册表上方菜单中输入 <code>计算机\\HKEY_CURRENT_USER\\Control Panel\\Desktop</code>。</p></li><li><p>在右侧窗格中找到 <code>AutoEndTasks</code> 键值，如果没有，则新建一个名为 <code>AutoEndTasks</code> 的「字符串值」，并将键值的数值设为 <code>1</code>。AutoEndTasks 表示自动结束失去响应的程序任务，0 为 false，是默认值，表示不自动结束失去响应的程序；1 为 true，则表示电脑会自动结束失去响应的程序。</p><p><img src="https://pic3.zhimg.com/v2-c643b9737b35f9dd9a8382c5653e3d3e_r.jpg" alt="" loading="lazy"></p></li><li><p>查找或创建字符串值 <code>WaitToKillAppTimeout</code>，将数值设为 <code>2000</code>。2000 是毫秒，就是当有没有响应的程序时，等待 2 秒后会自动结束相应程序。</p></li></ol><p>操作下，让电脑默认强制关机吧！</p><p>——————————</p><p>网上流行一种修改「gpedit.msc」来达到快速关机的方法，但试验无效，<strong>不能强制关机</strong>。</p><ol><li><p>点击桌面左下角“windows”图标，选择“运行”选项；</p></li><li><p>进入运行窗口，输入“gpedit.msc”命令，按下回车键确定；</p></li><li><p>打开本地组策略编辑器界面，依次展开“计算机配置——管理模板——系统——关机选项”文件夹；鼠标右击右侧“关闭会阻止或取消关机的应用程序的自动终止功能”选项，接着选择“编辑”功能；将弹出窗口选项更改成“已启用”，然后点击“应用——确定”按钮。</p><p><img src="https://pic4.zhimg.com/v2-4b736585b25509b036935a2f9c37d843_r.jpg" alt="" loading="lazy"></p><p>但开启后，提示程序没有响应，无法关机。</p><p><img src="https://pic4.zhimg.com/v2-46fafee0cb6e212e793fc80268ab0917_r.jpg" alt="" loading="lazy"></p></li></ol><p>修改“gpedit.msc”可以关闭程序的关机权限，但没授予关机对程序的关闭权限，<strong>不能使用</strong>！</p>',9),l=[i];function s(d,a){return p(),e("div",null,l)}const _=o(c,[["render",s],["__file","2017-09-02-forced_shutdown.html.vue"]]);export{_ as default};
