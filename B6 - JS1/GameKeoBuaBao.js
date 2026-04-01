game = function () {
    let diemNguoi = diemMay = 0;
    let lichSu = [];
    let luaChon = ['Kéo', 'Búa', 'Bao'];
    let ketQua;
    let luot = 1;


    while (Math.abs(diemNguoi - diemMay) < 5) {
        console.log(`\n--- Lượt chơi ${luot} ---`);
        let input = (prompt('Nhập lựa chọn (Kéo, Búa, Bao): ') || '')
            .trim()
            .toLowerCase();

        const map = {
            keo: 'Kéo',
            kéo: 'Kéo',
            bua: 'Búa',
            búa: 'Búa',
            bao: 'Bao'
        };

        const nguoiChon = map[input];

        if (!nguoiChon) {
            console.log('Lựa chọn không hợp lệ. Vui lòng nhập lại.');
            continue;
        }
        let mayChon = luaChon[Math.floor(Math.random() * 3)];

        if (nguoiChon === 'Kéo' && mayChon === 'Bao' ||
            nguoiChon === 'Búa' && mayChon === 'Kéo' ||
            nguoiChon === 'Bao' && mayChon === 'Búa') {
            diemNguoi++;
            ketQua = 'Người thắng Máy';
            luot++;
        }
        else if (nguoiChon === 'Kéo' && mayChon === 'Búa' ||
            nguoiChon === 'Búa' && mayChon === 'Bao' ||
            nguoiChon === 'Bao' && mayChon === 'Kéo') {
            diemMay++;
            ketQua = 'Người thua Máy';
            luot++;
        }
        else {
            diemNguoi += 0.5;
            diemMay += 0.5;
            ketQua = 'Người Hòa Máy';
            luot++;
        }
        const ketQuaLuot = `Kết quả lượt chơi ${luot}: ${nguoiChon}, May: ${mayChon} => ${ketQua}. \nTỷ số: Người: ${diemNguoi} - Máy: ${diemMay}`;
        console.log(ketQuaLuot);
        lichSu.push(`Lan ${lichSu.length + 1}: ${ketQuaLuot}`);
    }
    let ketThuc = diemNguoi > diemMay ? 'Người thắng chung cuộc' : 'Máy thắng chung cuộc';
    console.log(`Kết thúc: ${ketThuc}. Lịch sử chơi:`);
    lichSu.forEach(s => console.log(s));

}
game()