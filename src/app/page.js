import FlagShipCourse from "./components/flagShipCourse";
import Footer from "./components/footer";
import Hero from "./components/hero";
import TopCourses from "./components/topCourses";
import TrustedPartner from "./components/trustedPartner";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Hero />
        <TrustedPartner />
        <TopCourses />
        <FlagShipCourse />
      </main>
      <footer className={styles.footer}>
        <Footer />
      </footer>
    </div>
  );
}
