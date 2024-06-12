
/*
 * Copyright (c) 2024.  By Canfeng
 */

ReflashHotikoto()
function info(){
    console.log('%c CanFeng %c https://canfeng.kesug.com', 'background: linear-gradient(to bottom right, #9FD5F7, #F1CAFF);color:#fff', '');
   }
function update_info(){
    let title='更新日志:'
    let message="2024-5-15: 网页框架搭建完成\n" +
        "2024-5-20: 修改框架,美化界面\n" +
        "2024-5-23: 开放源码至canfeng.kesug.com\n" +
        "2024-5-30: 基于源码二次重置,删除大量br元素\n" +
        "2024-5-31: 加入视频壁纸,并为网页添加JavaScript\n" +
        "2024-6-1:  二次重置项目完成,添加 '帮助' 页面,美化UI显示\n"+
        "2024-6-11: 加入Dialog弹窗,使用方式:showDialog(htmlpath,title,yourcss_path)"
    showNotification(title,message,9999999999)
}
function about_in_head() {
    let title1 ="About-关于"
    let message1 ="作者:CanFeng\n网站参考: CanFeng的小站\n参考代码网站: https://canfeng.kesug.com/\n版权声明: Copyright © 2024.  By Canfeng\n"
    showNotification(title1,message1,40000,'https://canfeng.kesug.com/')
}
function help_document_func() {
    showDialog('./Help.html')
}
function show_about_dialog() {
    showDialog('./about.html')
}
function show_privacy(){
    showDialog('./Privacy_Statement.html')
}
info()
showNotification('欢迎访问 CanFeng的小站','站点地址: https://canfeng.kesug.com/',4000)

const update_href_a = document.getElementById('update_href');
const about_href_a=document.getElementById('about_href')
const help_document_a=document.getElementById('help_document')
const privacy_document_a=document.getElementById('PrivacyStatement')
update_href_a.addEventListener('click',update_info)
about_href_a.addEventListener('click',show_about_dialog)
help_document_a.addEventListener('click',help_document_func)
privacy_document_a.addEventListener('click',show_privacy)