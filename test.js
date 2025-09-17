// test.js
const parseArgs = require('./index.js'); // Kendi paketimizi import ediyoruz

console.log("----- Test Başladı -----");

// Argümanları doğrudan script'e vererek test edelim
const parsed = parseArgs();

console.log("Parse Edilmiş Argümanlar:");
console.log(JSON.stringify(parsed, null, 2));

console.log("\n----- Test Bitti -----");

// Beklenen çıktıyı kontrol etmek için basit bir assert
if (parsed.commands.includes('login') && parsed.options.user === 'testuser' && parsed.options.v === true) {
    console.log("\nTemel test başarılı!");
} else {
    console.log("\nTest başarısız!");
}