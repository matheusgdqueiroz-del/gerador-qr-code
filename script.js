const qrText = document.getElementById("qrText");
const qrCode = document.getElementById("qrCode");
const generateBtn = document.getElementById("generateBtn");
const downloadBtn = document.getElementById("downloadBtn");

function gerarQRCode() {
  const text = qrText.value.trim();

  if (!text) {
    alert("Digite um texto ou URL");
    qrText.focus();
    return;
  }

  qrCode.innerHTML = "";

  new QRCode(qrCode, {
    text,
    width: 230,
    height: 230,
  });
}

function obterQRCodeURL() {
  const canvas = qrCode.querySelector("canvas");

  if (canvas && typeof canvas.toDataURL === "function") {
    return canvas.toDataURL("image/png");
  }

  return qrCode.querySelector("img")?.src;
}

function baixarQRCode() {
  const qrCodeURL = obterQRCodeURL();

  if (!qrCodeURL) {
    alert("Gere um QR Code primeiro");
    return;
  }

  const link = document.createElement("a");
  link.href = qrCodeURL;
  link.download = "qrcode.png";

  document.body.appendChild(link);
  link.click();
  link.remove();
}

generateBtn.addEventListener("click", gerarQRCode);
downloadBtn.addEventListener("click", baixarQRCode);
