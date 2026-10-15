
export function DetailsBook({ label, value }) {
  return (
    <div>
      <p className="text-[10px] tracking-[0.14em] text-[#ae8069]">{label}</p>

      <p className="mt-2 text-sm font-medium text-[#995d43]/80">{value == undefined ? <span className="font-serif text-[12px] text-[#995d43]/80">Não temos informações</span> : value}</p>
    </div>
  );
}
