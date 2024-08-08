import ContactsDataModule from "./ContactsDataCss.module.css";

const ConctactsData = () => {
  return (
    <section className={ContactsDataModule.text}>
      <span>
        Phone: +1-111-111-11-11 <br />
        Email: DavidAmanovIs@gmail.com <br />
        Address: Somewhere in Tokyo <br />
        Email for your suggestions: Piece@gmail.com
      </span>
    </section>
  );
};

export default ConctactsData;
