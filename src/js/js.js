function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const xButton = document.getElementById('xButton');

    xButton.addEventListener('click', () => {
        if (sidebar.classList.contains('d-none')) {
            sidebar.classList.remove('d-none');
            xButton.innerText = 'X'

        } else {
            sidebar.classList.add('d-none');
            xButton.innerText = 'MENU'
        }
        
    });
} 