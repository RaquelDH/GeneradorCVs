// script.js
document.getElementById('cv-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const nombre = document.getElementById('nombre').value;
    // Agrega más campos según sea necesario y crea el currículum vitae
    const cvHTML = `
        <h2>Curriculum Vitae</h2>
        <h3>Nombre: ${nombre}</h3>
        <!-- Agrega más campos según sea necesario -->
    `;
    document.getElementById('cv-preview').innerHTML = cvHTML;
    document.getElementById('cv-preview').classList.remove('hidden');
});
