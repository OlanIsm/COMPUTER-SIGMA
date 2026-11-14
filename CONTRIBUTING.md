# 🛡️ PANDUAN KONTRIBUSI COMPUTER SIGMA

Selamat datang di repository resmi **COMPUTER SIGMA**!
Panduan ini dirancang khusus agar **12 anggota** bisa ngoding bareng secara paralel dengan **ZERO MERGE CONFLICT**.

---

## 🌳 Struktur Branch Git

* **`main`**: Branch Production (Terkoneksi langsung ke Vercel). Hanya diupdate melalui merge dari branch `dev`.
* **`dev`**: Branch Staging & Integrasi. Semua Pull Request (PR) dari member ditujukan ke branch ini.
* **`feat/member-[nama]`**: Branch kerja masing-masing member.

---

## 🚀 Quick Start untuk Setiap Member

### 1. Clone & Setup Repository
```bash
git clone https://github.com/<your-org-or-user>/COMPUTER-SIGMA.git
cd COMPUTER-SIGMA
npm install
npm run dev
```
Buka browser di `http://localhost:3000`.

### 2. Buat Branch Baru Milik Lu
Pastikan nama branch sesuai nickname lu:
```bash
# Contoh untuk Olan:
git checkout dev
git pull origin dev
git checkout -b feat/member-olan
```
*(Ganti `olan` dengan nickname lu: `jad`, `faiz`, `isaac`, `ahmad`, `frans`, `rego`, `osland`, `zaki`, `nauval`, `adin`)*

---

## 📁 Wilayah Kerja Lu (MODULAR ISOLATED ZONE)

> **⚠️ ATURAN EMAS: HANYA UBAH FILE DI DALAM FOLDER NICKNAME LU SENDIRI!**

Lu memiliki folder khusus di:
```
src/member-zones/[nickname]/
├── config.ts         <- Data karakter lu (Bio, Stats, Role, Warna tema, Sosmed)
├── MemberView.tsx    <- Tampilan halaman profil lu (100% bebas lu kreasikan)
└── README.md
```

### Apa Saja yang Boleh Lu Ubah?
1. **`config.ts`**:
   - Ganti role, quote, persentase stats (Coding, Gaming, Touring, Sigma).
   - Tentukan warna tema (`primary`, `accent`, `bgGlow`).
   - Masukkan link sosmed (GitHub, Instagram, LinkedIn).
2. **`MemberView.tsx`**:
   - Lu bebas mau pakai layout cyberpunk, retro, minimalis, grid, atau apapun!
   - Mau embed Spotify playlist? Boleh.
   - Mau pasang galeri foto touring / tournament gaming? Boleh.
   - Mau bikin mini-game atau animasi Framer Motion gila-gilaan? Boleh banget!
   - Boleh tambahkan sub-komponen atau assets gambar di dalam folder lu sendiri.

---

## 📤 Cara Submit Pull Request (PR)

Setelah lu puas dengan tampilan halaman lu:
```bash
# Cek file yang berubah (pastikan hanya di folder src/member-zones/[nickname]/)
git status

# Commit perubahan
git add src/member-zones/[nickname]/
git commit -m "feat([nickname]): customize profile and character config"

# Push ke GitHub
git push -u origin feat/member-[nickname]
```

Lalu buka GitHub:
1. Klik **New Pull Request**.
2. Set **Base**: `dev` ⬅️ **Compare**: `feat/member-[nickname]`.
3. Kasih screenshot halaman lu dan tag lead repo untuk di-review & merge!

---

## 🕹️ Navigasi Halaman
* Main Page: `/`
* Character Selector Screen: `/members` (Rolls otomatis tiap 2 detik, klik kartu untuk buka profil member)
* Dedicated Profile Member: `/members/[nickname]`
