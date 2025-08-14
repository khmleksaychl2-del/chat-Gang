document.getElementById("startChat").addEventListener("click", () => {
  const nameInput = document.getElementById("username").value.trim();
  if (!nameInput) return alert("กรุณาใส่ชื่อ");

  username = nameInput;

  // ลบข้อความเก่าออกก่อนเข้า
  db.ref("messages").remove()
    .then(() => {
      console.log("ลบข้อความเก่าแล้ว");
    });

  document.getElementById("login").style.display = "none";
  document.getElementById("chat").style.display = "block";
});