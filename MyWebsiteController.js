document.addEventListener('DOMContentLoaded', () => {
    const now = new Date();
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Thêm số 0 nếu nhỏ hơn 10
    const year = now.getFullYear();
    document.getElementById('current-date').textContent = `${month}/${year}`;
});
