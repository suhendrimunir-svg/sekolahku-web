// Import koneksi database dari file konfigurasi
import { db } from "./firebase-config.js";
// Import fungsi Firestore yang dibutuhkan
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// Menangkap elemen form HTML
const formSekolah = document.getElementById("form-sekolah");

// Menambahkan event listener saat form di-submit
formSekolah.addEventListener("submit", async (e) => {
    e.preventDefault(); // Mencegah halaman me-refresh

    // Mengambil nilai dari input form HTML
    const namaSekolah = document.getElementById("nama-sekolah").value;
    const alamatSekolah = document.getElementById("alamat-sekolah").value;

    try {
        // Menyimpan data ke koleksi "data_sekolah" di Firestore
        const docRef = await addDoc(collection(db, "data_sekolah"), {
            nama: namaSekolah,
            alamat: alamatSekolah,
            timestamp: new Date()
        });

        alert("Data berhasil ditambahkan dengan ID: " + docRef.id);
        formSekolah.reset(); // Mengosongkan form setelah berhasil
        
    } catch (error) {
        console.error("Error menambahkan dokumen: ", error);
        alert("Gagal menambahkan data. Periksa console untuk detail.");
    }
});
