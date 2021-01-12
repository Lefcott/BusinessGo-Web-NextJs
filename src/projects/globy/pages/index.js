import Logo from '../components/Logo';
import Frase from '../components/Frase';
import Section from '../components/Section';
import BoxCuatroImages from '../components/BoxCuatroImages';
import Slide from '../components/Slide';
import Pregunta from '../components/Pregunta';
import Copyright from '../components/Copyright';
import styles from '../styles/Home.module.scss';
import Links from '../components/Links';

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <header className={styles.header}>
          <Logo />
          <Frase />
        </header>

        {/* seccion color negro con iconos verdes */}
        <section>
          <Section />
        </section>

        <section className={styles.image}>
          <BoxCuatroImages />
        </section>

        <section className={styles.pregunta}>
          <Pregunta />
        </section>

        <section className={styles.slide}>
          <Slide />
        </section>

        <section className={styles.backgrounfinal}>
          <h3>
            <b>Damos lo Mejor de Nosotros cada dia</b>, para brindarte a ti, el mejor servicio en tu ciudad.
          </h3>
        </section>
      </main>

      <footer className={styles.footer}>
        <Logo />
        <Links />
      </footer>
      <Copyright />
    </div>
  );
}
