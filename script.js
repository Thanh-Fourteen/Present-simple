// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Bài 1
    document.getElementById('kiem-tra-bai1').addEventListener('click', function() {
        let dapAnBai1 = ['goes', 'play', 'rises', "doesn't like", 'know'];
        let ketQuaBai1 = document.getElementById('ket-qua-bai1');
        let soCauDung = 0;
        for (let i = 1; i <= 5; i++) {
            let dapAn = document.getElementById('bai1_' + i).value.trim().toLowerCase();
            if (dapAn === dapAnBai1[i - 1]) {
                soCauDung++;
            }
        }
        if (soCauDung === 5) {
            ketQuaBai1.innerHTML = '<p style="color: green;">Bạn đã làm đúng tất cả!</p>';
        } else {
            ketQuaBai1.innerHTML = '<p style="color: red;">Bạn đã sai! Hãy kiểm tra lại đáp án.</p>';
        }
    });

    document.getElementById('show-dap-an-bai1').addEventListener('click', function() {
        document.getElementById('dap-an-bai1').style.display = 'block';
    });

    // Bài 2
    document.getElementById('kiem-tra-bai2').addEventListener('click', function() {
        let dapAnBai2 = ["doesn't eat", "don't go", "doesn't like", "doesn't leave", "don't play"];
        let ketQuaBai2 = document.getElementById('ket-qua-bai2');
        let soCauDung = 0;
        for (let i = 1; i <= 5; i++) {
            let dapAn = document.getElementById('bai2_' + i).value.trim().toLowerCase();
            if (dapAn === dapAnBai2[i - 1]) {
                soCauDung++;
            }
        }
        if (soCauDung === 5) {
            ketQuaBai2.innerHTML = '<p style="color: green;">Bạn đã làm đúng tất cả!</p>';
        } else {
            ketQuaBai2.innerHTML = '<p style="color: red;">Bạn đã sai! Hãy kiểm tra lại đáp án.</p>';
        }
    });

    document.getElementById('show-dap-an-bai2').addEventListener('click', function() {
        document.getElementById('dap-an-bai2').style.display = 'block';
    });

    // Bài 3
    document.getElementById('kiem-tra-bai3').addEventListener('click', function() {
        let dapAnBai3 = ["Does she study", "Do they visit", "Does he watch", "Does the store open", "Do you read"];
        let ketQuaBai3 = document.getElementById('ket-qua-bai3');
        let soCauDung = 0;
        for (let i = 1; i <= 5; i++) {
            let dapAn = document.getElementById('bai3_' + i).value.trim().toLowerCase();
            if (dapAn === dapAnBai3[i - 1]) {
                soCauDung++;
            }
        }
        if (soCauDung === 5) {
            ketQuaBai3.innerHTML = '<p style="color: green;">Bạn đã làm đúng tất cả!</p>';
        } else {
            ketQuaBai3.innerHTML = '<p style="color: red;">Bạn đã sai! Hãy kiểm tra lại đáp án.</p>';
        }
    });

    document.getElementById('show-dap-an-bai3').addEventListener('click', function() {
        document.getElementById('dap-an-bai3').style.display = 'block';
    });

    // Thêm ngày tháng năm vào footer
    let ngayThangNam = document.getElementById('ngay-thang-nam');
    let ngayHienTai = new Date();
    let ngay = ngayHienTai.getDate();
    let thang = ngayHienTai.getMonth() + 1; // Tháng bắt đầu từ 0
    let nam = ngayHienTai.getFullYear();
    ngayThangNam.textContent = ngay + "/" + thang + "/" + nam;
});