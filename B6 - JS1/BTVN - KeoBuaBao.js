// Kéo - Búa - Bao
// //Lần 1: //lặp
// Người:
// Máy: 
// Kết quả: Người thắng/thua/hòa Máy //rẽ nhánh
// Điểm: Người 1, máy 0 (thắng +1, thua +0.5)
// Lần 2: //lặp
// Người:
// Máy: 
// Kết quả: Người thắng/thua/hòa Máy
// Điểm: Người 1, máy 0 (thắng +1, thua +0.5)
// --
// Kết thúc khi lệch nhau 5 Điểm.
// In ra: Kết thúc: Người thắng chung cuộc. Lịch sử chơi. 
function game(){
  const choices = ['Kéo','Búa','Bao'];
  let user = 0, cpu = 0;
  let round = 1;
  let history = [];

  while (Math.abs(user - cpu) < 5) {
    console.log(`\n--- Lần ${round} ---`);

    const input = (prompt('Nhập: Kéo, Búa, Bao: ') || '').trim().toLowerCase();
    const map = {keo:'Kéo', bua:'Búa', bao:'Bao'};
    
    if (!map[input]) { 
      console.log('Nhập sai, thử lại.'); 
      continue; 
    }

    const nguoi = map[input];
    const may = choices[Math.floor(Math.random()*3)];
    let ketQua;

    if (
      (nguoi==='Búa'&&may==='Kéo')||
      (nguoi==='Kéo'&&may==='Bao')||
      (nguoi==='Bao'&&may==='Búa')
    ) {
      user += 1;
      ketQua = 'Người thắng Máy';
    } 
    else if (
      (nguoi==='Búa'&&may==='Bao')||
      (nguoi==='Kéo'&&may==='Búa')||
      (nguoi==='Bao'&&may==='Kéo')
    ) {
      cpu += 1;
      ketQua = 'Người thua Máy';
    } 
    else {
      user += 0.5;
      cpu += 0.5;
      ketQua = 'Người Hòa Máy';
    }

    const resultText = `Người: ${nguoi}, Máy: ${may} => ${ketQua}. Điểm: ${user}-${cpu}`;
    console.log(resultText);

    history.push(`Lần ${round}: ${resultText}`);
    round++;
  }

  console.log('\n=== KẾT THÚC ===');
  console.log(user > cpu ? 'Người thắng chung cuộc' : 'Máy thắng chung cuộc');

  console.log('\nLịch sử chơi:');
  history.forEach(h => console.log(h));
}

game();