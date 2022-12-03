import{_ as d}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as r,c as s,a as e,b as n,d as o,e as a,r as t}from"./app.af5a14f1.js";const c={},h=e("p",null,"DPC_WATCHDOG_VIOLATION 蓝屏原因，多为硬件驱动问题。可是，只有驱动出现大规模报错，厂家才会更新并推送解决方法。",-1),p=e("p",null,"因此，你在网上搜到的解决方案，大多是过时的，不能解决你的问题。蓝屏原因千奇百怪，分析 dmp 蓝屏日志才是解决蓝屏的办法。",-1),u=e("h2",{id:"分析-dmg-日志",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#分析-dmg-日志","aria-hidden":"true"},"#"),n(" 分析 dmg 日志")],-1),_={href:"https://www.microsoft.com/zh-cn/p/windbg/9pgjgd53tn86?rtc=1&activetab=pivot:overviewtab",target:"_blank",rel:"noopener noreferrer"},m=e("li",null,[e("p",null,[n("启动 WinDbg Preview，软件会自动检测到最新 dmp 日志，点击 Yes 即可载入。如果想分析其他文件，打开文件夹 "),e("code",null,"C:\\Windows\\Minidump"),n("，导出日志 "),e("code",null,"*.dmp"),n("。")])],-1),g=e("li",null,[e("p",null,[n("载入日志过程中，WinDbg Preview 会自动下载所需文件，不需要管。载入完成后，点击 "),e("code",null,"!analyze -v"),n("，分析具体日志。")]),e("p",null,[e("img",{src:"http://tc.seoipo.com/20201025223307.png",alt:"",loading:"lazy"})])],-1),f=e("p",null,"分析日志：日志前半部分都是套话（可忽略），蓝屏原因多在日志最下方几行，分析尾部日志来找出引发蓝屏的进程。注意不要强删未知文件。",-1),w=e("li",null,[n("冲突进程是后缀为 "),e("code",null,"*.sys"),n(" 的驱动，进入设备管理器找到对应硬件，"),e("strong",null,"备份当前驱动然后将驱动还原为旧版驱动或系统自带驱动"),n("。")],-1),b={href:"https://www.voidtools.com/zh-cn/downloads/",target:"_blank",rel:"noopener noreferrer"},v=e("strong",null,"备份后尝试删除",-1),x=e("p",null,[e("img",{src:"http://tc.seoipo.com/20201025224308.png",alt:"",loading:"lazy"})],-1),y=e("p",null,"有些蓝屏较复杂，由多方原因造成，新手很难直接分析。建议将蓝屏日志完整上传到微软社区分析，下方的小白方案中有详细步骤说明。",-1),D=e("h2",{id:"小白修复蓝屏",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#小白修复蓝屏","aria-hidden":"true"},"#"),n(" 小白修复蓝屏")],-1),k=e("p",null,"不想分析日志，也简单。",-1),B=e("li",null,[n("打开文件夹 "),e("code",null,"C:\\Windows\\Minidump"),n("，导出日志 "),e("code",null,"*.dmp"),n("。")],-1),W={href:"https://answers.microsoft.com/zh-hans/newthread?threadtype=Questions&cancelurl=/zh-hans/windows/forum&forum=windows&filter=",target:"_blank",rel:"noopener noreferrer"},z=e("h2",{id:"常见问题",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#常见问题","aria-hidden":"true"},"#"),n(" 常见问题")],-1),C=e("h3",{id:"装不了-windbg",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#装不了-windbg","aria-hidden":"true"},"#"),n(" 装不了 WinDbg")],-1),S={href:"https://answers.microsoft.com/zh-hans/newthread?threadtype=Questions&cancelurl=/zh-hans/windows/forum&forum=windows&filter=",target:"_blank",rel:"noopener noreferrer"},I=a('<h3 id="分析日志时报错" tabindex="-1"><a class="header-anchor" href="#分析日志时报错" aria-hidden="true">#</a> 分析日志时报错</h3><p>分析蓝屏时报错，或 WinDbg 对 minidump 蓝屏日志的访问被拒绝，这都是由于系统盘读取权限未开放所导致的。</p><p>解决办法有 3 种：</p><ul><li>将 minidump 文件复制到 D 盘，然后手动导入到 WinDbg 进行分析。</li><li>@天气控制仪：以管理员权限运行 WinDbg。</li><li>@紫石英与灯心草：右键单击 minidump 蓝屏日志，点击「属性」&gt;「权限」&gt;「点击用户」&gt;「点击继承」&gt;「同意」。</li></ul><h3 id="找不到-minidump-文件" tabindex="-1"><a class="header-anchor" href="#找不到-minidump-文件" aria-hidden="true">#</a> 找不到 minidump 文件</h3><p>蓝屏日志默认保存在 <code>C:\\Windows\\Minidump</code>。</p><p>如果该文件夹为空，说明蓝屏日志未生成，等下次蓝屏再查看。如果多次蓝屏，该文件夹下还是没有日志，则尝试在资源管理器中打开 <code>%SystemRoot%\\Minidump</code>，失败后按下列步骤设置：</p><ol><li>打开控制面板&gt;&gt;系统&gt;&gt;高级系统设置&gt;&gt;高级&gt;&gt;启动和故障恢复&gt;&gt;设置；</li><li>写入调试信息&gt;&gt;选择「小内存转储（256KB）」，路径选择 <code>%SystemRoot%\\Minidump</code>，确定并重启您的计算机；</li><li>再次异常关机后，前往 <code>%SystemRoot%\\Minidump</code> 提取即可。</li></ol><h3 id="蓝屏原因分析汇总" tabindex="-1"><a class="header-anchor" href="#蓝屏原因分析汇总" aria-hidden="true">#</a> 蓝屏原因分析汇总</h3><p>评论区大部分很多重复问蓝屏原因的，这里汇总了常见的蓝屏原因分析。</p><ul><li>系统性模块报错：<strong>ntkrnlmp.exe</strong>、*.symbols.exe。日志尾部仅有系统模块报错，实际是由应用进程与系统冲突引起的蓝屏，需深入分析日志。</li><li>驱动冲突：nvlddmkm、amdkmdag。N 卡、A 卡或硬件进程报错，建议先回退到旧驱动。这样不会对电脑产生很大影响。如果驱动不对，可重新安装。驱动无法回退，则去官网下载旧驱动，或尝试最新驱动，或卸载为系统默认驱动。驱动若不行，则尝试更新主板 BIOS，关闭超频。</li><li>未知报错：蓝屏报错的 <code>*.sys</code> 多为硬件驱动，但有时无法确定与哪个硬件相关。尝试多种方法，依然无法修复，则可用最后一步<strong>强行删除</strong>。但删除前，必须备份好文件和位置。如果删除后进入不了系统，需使用 PE 系统还原备份文件。如果相关文件多余 5 个，或不清楚如何使用 PE，不要强删任何 <code>*.sys</code> 文件。</li></ul><h2 id="蓝屏解决集锦" tabindex="-1"><a class="header-anchor" href="#蓝屏解决集锦" aria-hidden="true">#</a> 蓝屏解决集锦</h2><p>如果不想分析日志，甚至找不到找不到蓝屏日志，可以尝试下列方法，测试解决了 80% 的蓝屏。</p><ul><li>驱动类：更新显卡驱动；更新网卡驱动；重置声卡驱动；重置 SATA AHCI 驱动；</li><li>主板类：擦拭内存条；重置 BIOS；增加 CPU 电压；关闭超线程；</li><li>系统修复：管理员权限打开命令行（cmd），运行 <code>sfc/Scannow</code>，系统会自动检查损坏文件并修复；</li><li>终极方法：重装系统，测试期间<strong>尽量使用默认系统驱动</strong>。重装又蓝屏的话，说明你新装的驱动有问题，卸掉有问题的驱动。</li></ul><p>视频说明：</p>',15);function P(A,E){const i=t("ExternalLinkIcon"),l=t("BiliBili");return r(),s("div",null,[h,p,u,e("ol",null,[e("li",null,[e("p",null,[n("安装 "),e("a",_,[n("WinDbg Preview"),o(i)]),n("，这是微软官方推出的系统 Debug 工具。")])]),m,g,e("li",null,[f,e("ul",null,[w,e("li",null,[n("进程是 exe 后缀的程序，则使用 "),e("a",b,[n("Everything"),o(i)]),n(" 搜索该进程位置，"),v,n("该程序。")])]),x])]),y,D,k,e("ol",null,[B,e("li",null,[n("将 dmp 日志上传至 "),e("a",W,[n("微软社区"),o(i)]),n("，会有技术人员帮你分析蓝屏原因。微软社区无法上传附件，需先将 dmp 日志上传至百度云或微云，再将分享链接放在问题里。")])]),z,C,e("p",null,[n("少数情况安装应用报错，本地无法分析日志。此时，我们可以导出蓝屏日志，上传到 "),e("a",S,[n("微软社区"),o(i)]),n("，会有人帮助分析原因。")]),I,o(l,{bvid:"BV1jt4y1i7C8"})])}const V=d(c,[["render",P],["__file","2020-10-25-dpc_watchdog_violation.html.vue"]]);export{V as default};
