function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const content = document.querySelector('.content2');
    const closeButton = document.getElementById('closeButton');

    sidebar.classList.toggle('sidebar-closed');
    content.classList.toggle('content-closed');

    if (sidebar.classList.contains('sidebar-closed')) {
        content.style.marginLeft = '0';
        closeButton.innerText = 'MENU';
    } else {
        content.style.marginLeft = `${sidebar.offsetWidth}px`;
        closeButton.innerText = 'X';
    }
}

document.addEventListener('DOMContentLoaded' , () => 
    document.getElementById('closeButton').style.textDecoration = 'none'

)

