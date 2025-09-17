// index.js

/**
 * Komut satırı argümanlarını (process.argv) parse eden fonksiyon.
 * @param {string[]} argv - Opsiyonel olarak process.argv yerine kullanılacak dizi.
 * @returns {{commands: string[], options: Record<string, any>}}
 */
function parseArgs(argv) {
    // Eğer argüman verilmemişse, process.argv'den al ve ilk ikisini atla.
    // Eğer argüman verilmişse, onu doğrudan kullan (testler için).
    const args = argv === undefined ? process.argv.slice(2) : argv;

    const result = {
        commands: [], // Komutlar ve pozisyonel argümanlar için (örn: git push origin main)
        options: {},  // Seçenekler için (örn: --name="Ahmet", -v)
    };

    let i = 0;
    while (i < args.length) {
        const arg = args[i];

        // 1. Durum: "--key=value" formatı
        if (arg.startsWith('--') && arg.includes('=')) {
            const [key, value] = arg.slice(2).split('=', 2);
            result.options[key] = value;
        }
        // 2. Durum: "--key value" veya "-k value" formatı
        else if (arg.startsWith('-')) {
            const key = arg.startsWith('--') ? arg.slice(2) : arg.slice(1);
            const nextArg = args[i + 1];

            // Eğer bir sonraki argüman varsa VE bu bir seçenek değilse, onu değer olarak al.
            if (nextArg && !nextArg.startsWith('-')) {
                result.options[key] = nextArg;
                i++; // Bir sonraki argümanı da işlediğimiz için sayacı bir artırıyoruz.
            } else {
                // Değer yoksa, bunu bir boolean flag olarak kabul et (örn: --verbose, -v)
                result.options[key] = true;
            }
        }
        // 3. Durum: Komut veya pozisyonel argüman
        else {
            result.commands.push(arg);
        }

        i++;
    }

    return result;
}

// Fonksiyonumuzu dışa aktarıyoruz ki başka projelerde kullanılabilsin.
module.exports = parseArgs;