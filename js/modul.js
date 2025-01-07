document.addEventListener('DOMContentLoaded', function () {
    const triggerTabList = document.querySelectorAll('a[data-bs-toggle="pill"]');
    triggerTabList.forEach(function (triggerEl) {
        triggerEl.addEventListener('shown.bs.tab', function (event) {
            const prevTabContent = document.querySelector('.tab-pane.show');
            if (prevTabContent) {
                prevTabContent.classList.remove('show', 'active'); // Menghapus kelas dari tab sebelumnya
            }
        });
    });
});