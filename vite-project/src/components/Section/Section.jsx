import css from "./Section.module.css";
const Section = ({ title, children }) => {
  return (
    <section className={css.section}>
      {title && (
        <h2 style={{ color: "blue", marginBottom: "10px" }}>{title}</h2>
      )}
      <div className={css.content}>{children}</div>
    </section>
  );
};
export default Section;
