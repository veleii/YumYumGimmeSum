import "../styles/stylesComponent/DipContent.scss";

export default function DipContent({ dips }) {
  return (
    <section className="dip_container">
      <section className="fetch_city">
        <h2>DIPSÅS</h2>
        <p></p>
        <div className="menu_dotted_line"></div>

        {dips.map((dip) => (
          <section key={dip.id} className="sum">
            <h4>{dip.price}kr</h4> {/* Visa priset här */}
          </section>
        ))}
      </section>
      <section className="dip_items">
        {dips.map((dip) => (
          <div key={dip.id} className="dip_select">
            <p className="p_dip">{dip.name}</p> {/* Visa endast dipnamn här */}
          </div>
        ))}
      </section>
    </section>
  );
}
