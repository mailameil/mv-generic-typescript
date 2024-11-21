interface Employee {
    firstName: string;
    lastName: string;
    phone: string;
    address: string;
    age: number;
    email: string;
    verified?: boolean;
}
export const employees: Employee[] = [
    {
        firstName: "Nur Iffah",
        lastName: "Maila",
        age: 18,
        phone: "1234567892",
        address: "Taman Hedona Regency",
        email: "melaw@gmail.com",
        verified: true,
    },
    {
        firstName: "Ayu",
        lastName: "Bogel",
        phone: "0000221166",
        age: 17,
        address: "Amerisya Usyara",
        email: "ayuwir@gmail.com",
    },
    {
        firstName: "Fara",
        lastName: "Duar",
        age: 17,
        phone: "2211668452",
        address: "Kebun Binatang SBY",
        email: "Faraw@gmail.com",
    },
];
