export function renderOptions(containerId, dataList, onClick) {
    const container = document.getElementById(containerId);
    container.innerHTML = "";

    dataList.forEach(item => {
        const btn = document.createElement("button");
        btn.textContent = item.name;
        btn.onclick = () => onClick(item);
        container.appendChild(btn);
    });
}
