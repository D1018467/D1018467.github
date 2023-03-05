window.onload = function() {
    setTimeout(showPage, 3000);
};

function showPage() {
    document.querySelector(".loader").style.display = "none";
    document.querySelector(".text").textContent = "Netflix正在維修中...";
}
// 创建一个按钮元素
var btn = document.createElement("button");


// 创建一个链接元素
var link = document.createElement("a");
link.href = "https://d1018467.github.io/";
link.innerHTML = "重新載入";

// 将链接元素添加到按钮元素中
btn.appendChild(link);

// 将按钮元素添加到页面中
document.body.appendChild(btn);