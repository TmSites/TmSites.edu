const menuToggle = document.getElemenetById('menuToggle');
const header = document.querySelector('header');
const overlay = document.getElementById('overlay');

menuToggle.onclick = () => {
    header.classList.toggle('active');
    overlay.classList.toggle('active');
};

const themeBtn = document.getElementById('themeBtn');
themeBtn.onclick = () => {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    themeBtn.innerHTML = isDark ? 
    '<i class = "fa-solid fa-sun"></i> Yagtylyk' : 
    '<i class="fa-solid fa-moon"></i> Gije';
};

const loginBtn = document.getElementById('loginBtn');
loginBtn.onclick = () => {
    const email = prompt('E-mail adresiňizi giriziň:');
    if (email) {
        alert(`Giriş üstünlikli! E-mail: ${email}`);
    } else {
        alert('E-mail adresi girizilmedi.');
    }
}

document.getElementById('fontSize').onchange = (e) => {
    if (e.target.value) {
        document.body.style.fontSize = e.target.value;
    }
};
