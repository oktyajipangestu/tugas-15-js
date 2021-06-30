let ab = 8;
let bc = 6;

function ac(ab,bc) {
    let pangkat = Math.pow(ab,2) + Math.pow(bc,2);
    let akar = Math.sqrt(pangkat)
    console.log("Nilai AB : " + ab);
    console.log("Nilai BC : " + bc);
    console.log("Panjang sisi AC pada segitiga siku-siku tersebut adalah : " + akar + " cm")
}

ac(ab,bc);
