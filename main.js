window.onload = function() {
    setTimeout(showPage, 3000);
};

function showPage() {
    document.querySelector(".loader").style.display = "none";
    document.querySelector(".text").textContent = "Netflix正在維修中...";
}


// 将链接元素添加到按钮元素中
btn.appendChild(link);

// 将按钮元素添加到页面中
document.body.appendChild(btn);