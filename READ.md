# 🔥 Firebase Authentication Tabanlı Web Uygulaması

Bu proje, Firebase Authentication ve Firestore kullanılarak geliştirilen basit bir kullanıcı giriş/kayıt sistemine sahip web uygulamasıdır.  
Kullanıcılar kayıt olabilir, giriş yapabilir ve giriş yaptıktan sonra kendi bilgilerini görüntüleyebilir.  
Projede iki geliştirici görev almıştır ve görev dağılımı aşağıdaki gibidir.

---

## 👥 Görev Dağılımı

### 👤 Geliştirici 1 – Nursena (Login & Sign Up İşlemleri)

- `index.html`: Giriş ve kayıt arayüzü
- `app.js`: Firebase Authentication ile kullanıcı kaydı ve giriş işlemleri
- `style.css`: Ortak sayfa tasarımı

✅ **Yapılanlar:**
- Kullanıcı e-mail ve şifre ile kayıt olabiliyor.
- Giriş yaptıktan sonra `home.html` sayfasına yönlendiriliyor.
- Kullanıcı kayıt bilgileri Firestore'da saklanıyor.

---

### 👤 Geliştirici 2 – Buse (Home Page & Oturum Yönetimi)

- `home.html`: Giriş sonrası karşılama sayfası
- `home.js`: Oturum kontrolü, kullanıcı email'inin gösterimi, çıkış işlemi
- `style.css`: Ortak sayfa tasarımı

✅ **Yapılanlar:**
- Kullanıcı giriş yaptıysa `home.html` görüntüleniyor.
- Kullanıcı email bilgisi ekranda gösteriliyor.
- "Logout" butonu ile çıkış yapılabiliyor, ardından `index.html`'e yönlendiriliyor.

---

## ⚙️ Kullanılan Teknolojiler

- ✅ HTML5
- ✅ CSS3
- ✅ JavaScript (Vanilla)
- ✅ Firebase Authentication
- ✅ Firebase Firestore

---

## 🚀 Projeyi Çalıştırmak İçin

1. Proje klasörünü bilgisayarına indir.
2. Firebase projesi oluştur ve kendi `firebaseConfig` bilgilerini `app.js` ve `home.js` içine ekle.
3. `index.html` üzerinden kayıt veya giriş yap.
4. Giriş yaptıktan sonra otomatik olarak `home.html` sayfasına yönlendirilirsin.

---

## 📧 Geliştiriciler

- 👩‍💻 Nursena – Login & Sign Up
- 👩‍💻 Buse – Home Page & Logout
