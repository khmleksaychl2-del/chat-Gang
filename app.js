// ตั้งค่า Firebase (ของคุณเอง)
const firebaseConfig = {
  apiKey: "AIzaSyBPZr1aivETzDN7AJoYJgLxdW-uk2q7oNI",
  authDomain: "chat-app-70717.firebaseapp.com",
  databaseURL: "https://chat-app-70717-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "chat-app-70717",
  storageBucket: "chat-app-70717.firebasestorage.app",
  messagingSenderId: "710301365664",
  appId: "1:710301365664:web:3f6f0f8bc88e41bba7e0c5"
};

// เริ่มใช้งาน Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.database();

// อ้างอิง DOM
const messagesDiv = document.getElementById("messages");
const input = document.getElementById("message-input");
const sendBtn = document.getElementById("send-button");

// ฟังก์ชันแสดงข้อความ 1 อัน
function renderMessage(text) {
  const el = document.createElement("div");
  el.className = "msg";
  el.textContent = text;
  messagesDiv.appendChild(el);
  // เลื่อนลงล่างสุด
  window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
}

// โหลดข้อความใหม่แบบเรียลไทม์
db.ref("messages").on("child_added", snap => {
  const data = snap.val();
  if (data && data.text) renderMessage(data.text);
});

// ส่งข้อความ
function sendMessage() {
  const text = input.value.trim();
  if (!text) return;
  db.ref("messages").push({ text, ts: Date.now() });
  input.value = "";
  input.focus();
}

sendBtn.addEventListener("click", sendMessage);
input.addEventListener("keydown", e => {
  if (e.key === "Enter") sendMessage();
});