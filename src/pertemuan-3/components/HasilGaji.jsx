export default function HasilGaji({ gaji, totalGaji }) {
    return (
        <div className={`mt-4 p-3 border-l-4 ${gaji > 0 ? "bg-blue-100 border-blue-500 text-blue-700" 
        : "bg-red-100 border-red-500 text-red-700"}`}>
            <p className="font-semibold">
                {gaji > 0 
                    ? `Total Take Home Pay (THP): Rp ${totalGaji.toLocaleString()}`
                    : "Silahkan masukkan gaji yang valid (tidak boleh kosong atau negatif)."}
            </p>
        </div>
    );
}
