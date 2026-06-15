// Import database dari file konfigurasi Firebase Anda
import { db } from "./firebase-config.js";
import { collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// Mengambil referensi dari form di HTML
const formPPDB = document.getElementById('form-ppdb');

// Membuat referensi ke koleksi "pendaftaran_siswa" di database Firestore
const ppdbCollection = collection(db, "pendaftaran_siswa");

// Fungsi untuk menyimpan data saat tombol submit ditekan
formPPDB.addEventListener('submit', async (e) => {
    e.preventDefault(); // Mencegah halaman refresh otomatis

    // Menangkap nilai yang diisi oleh pengguna di dalam form
    const nama = document.getElementById('nama-siswa').value;
    const nisn = document.getElementById('nisn-siswa').value;
    const gender = document.getElementById('gender-siswa').value;
    const tempatLahir = document.getElementById('tempat-lahir').value;
    const tanggalLahir = document.getElementById('tanggal-lahir').value;
    const alamat = document.getElementById('alamat-siswa').value;
    const wa = document.getElementById('wa-siswa').value;

    // Mengubah teks tombol saat proses loading menyimpan data
    const btnSubmit = document.querySelector('button[type="submit"]');
    const originalText = btnSubmit.innerHTML;
    btnSubmit.innerHTML = "Menyimpan Data...";
    btnSubmit.disabled = true;

    try {
        // Mengirim (CREATE) data ke Firebase Firestore
        await addDoc(ppdbCollection, {
            nama_lengkap: nama,
            nisn: nisn,
            jenis_kelamin: gender,
            tempat_lahir: tempatLahir,
            tanggal_lahir: tanggalLahir,
            alamat_lengkap: alamat,
            nomor_wa: wa,
            status_pendaftaran: "Menunggu Verifikasi", // Status otomatis
            waktu_daftar: serverTimestamp() // Mencatat waktu akurat dari server Firebase
        });

        // Jika berhasil
        alert("Pendaftaran Berhasil! Data Anda telah masuk ke sistem kami.");
        formPPDB.reset(); // Kosongkan form

    } catch (error) {
        // Jika gagal (biasanya karena masalah koneksi atau aturan Firebase)
        console.error("Error menyimpan data: ", error);
        alert("Terjadi kesalahan saat menyimpan data. Pastikan koneksi internet stabil.");
    } finally {
        // Kembalikan tombol ke kondisi semula
        btnSubmit.innerHTML = originalText;
        btnSubmit.disabled = false;
    }
});
