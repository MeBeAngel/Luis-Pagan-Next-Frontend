import { Fragment } from "react";
import Nav from '../components/Nav';
import NationalGuardBanner from '../components/NationalGuardBanner';
import Footer from '../components/Footer';

export default function Layout(props) {
  return (
    <Fragment>
      <Nav />
      <main>{props.children}</main>
      <NationalGuardBanner />
      <Footer />
    </Fragment>
  );
}
