const usersFromAPI = [
    { id: 0, name: 'Carlos', firstLastname: 'Ramírez', secondLastname: 'Hernández' },
    { id: 1, name: 'María', firstLastname: 'Gómez', secondLastname: 'Pérez' },
    { id: 2, name: 'Luis', firstLastname: 'Martínez', secondLastname: 'Rodríguez' },
    { id: 3, name: 'Ana', firstLastname: 'López', secondLastname: 'García' },
    { id: 4, name: 'Jorge', firstLastname: 'Vázquez', secondLastname: 'Torres' },
    { id: 5, name: 'Gabriela', firstLastname: 'Hernández', secondLastname: 'Morales' },
    { id: 6, name: 'Ricardo', firstLastname: 'Sánchez', secondLastname: 'Flores' },
    { id: 7, name: 'Patricia', firstLastname: 'Cruz', secondLastname: 'Ramírez' },
    { id: 8, name: 'Fernando', firstLastname: 'Núñez', secondLastname: 'Ortega' },
    { id: 9, name: 'Elena', firstLastname: 'Mendoza', secondLastname: 'Delgado' },
    { id: 10, name: 'Roberto', firstLastname: 'Ríos', secondLastname: 'Acosta' }
];

// Función para simular una llamada a la API
const fetchUserById = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const user = usersFromAPI.find((user) => user.id === id);
            if (user) {
                resolve(user);
            } else {
                reject('Usuario no encontrado');
            }
        }, 1000); // Retraso de 1 segundo para simular asincronía
    });
};

export { fetchUserById };