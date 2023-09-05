import Advantage from "../components/advantages/advantages";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import Intro from "../components/intro/intro";
import Step from "../components/step/step";
import Type from "../components/type/Type";
import Why from "../components/why/Why";

export default function HomePage() {
  return (
    <main>
      <Header />
      <Intro />
      <Type />
      <Step />
      <Why />
      <Advantage />
      <Footer />
    </main>
  );
}
