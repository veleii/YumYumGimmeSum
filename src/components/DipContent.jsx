import "../styles/stylesComponent/DipContent.scss";

export default function DipContent({ dips }) {
  return (
    <section className="dip_container">
      <section className="fetch_city">
        <h2>DIPSÅS</h2>
        <div className="menu_dotted_line"></div>
        <section className="sum">
          <h4>{dips.length > 0 ? dips[0].price + "kr" : ""}</h4>
        </section>
      </section>

      <section className="dip_items">
        {dips.map((dip) => (
          <div key={dip.id} className="dip_select">
            <p className="p_dip">{dip.name}</p>
          </div>
        ))}
      </section>
    </section>
  );
}
