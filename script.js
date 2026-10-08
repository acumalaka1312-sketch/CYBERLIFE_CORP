const terminalText = "> INISIALISASI PROTOKOL KEAMANAN...\n> ENKRIPSI TINGKAT KUANTUM: AKTIF.\n> MEMINDAI ANCAMAN SIBER GLOBAL... 0 ANCAMAN DITEMUKAN.\n> SELAMAT DATANG DI PUSAT KOMANDO CYBERLIFE.\n> MENUNGGU INPUT OTORISASI TINGKAT TINGGI...";
let textIndex = 0;

function typeWriter() {
    if (textIndex < terminalText.length) {
        document.getElementById("terminal-output").innerHTML += terminalText.charAt(textIndex);
        textIndex++;
        // Kecepatan bervariasi agar terlihat seperti orang mengetik/sistem memproses
        let speed = Math.random() * 50 + 20; 
        setTimeout(typeWriter, speed);
    }
}

window.onload = () => {
    setTimeout(typeWriter, 1000); // Delay sedikit sebelum mulai mengetik
};

const canvas = document.getElementById('cyberCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const chars = '01CYBERLIFE89$#@%&*ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const fontSize = 18;
const columns = canvas.width / fontSize;
const drops = [];

for (let x = 0; x < columns; x++) {
    drops[x] = Math.random() * canvas.height; // Membuat posisi awal acak
}

function drawMatrix() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.08)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#ff0000'; 
    ctx.font = fontSize + 'px BONDIE, monospace'; 
    ctx.textAlign = 'center';

    for (let i = 0; i < drops.length; i++) {
        const text = chars.charAt(Math.floor(Math.random() * chars.length));
        
        // Menambahkan sedikit efek glow pada huruf matrix
        ctx.shadowBlur = 5;
        ctx.shadowColor = '#ff0000';
        
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        
        ctx.shadowBlur = 0; // Reset shadow

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}

setInterval(drawMatrix, 50);

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
