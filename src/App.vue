<script>
import Header from "./components/Header";
import Service from "./components/Service";
import PaperCars from "./components/PaperCars";
import LicenseCars from "./components/LicenseCars";
import InfoBanner from "./components/InfoBanner";
import PackagesList from "./components/PackagesList";
import CarDocuments from "./components/CarDocuments";
import SchemaCar from "./components/SchemaCar";
import Location from "./components/Location";
import Footer from "./components/Footer";
import Modal from "./components/BaseModal";
export default {
  name: "app",
  components: {
    Header,
    Service,
    PaperCars,
    LicenseCars,
    InfoBanner,
    PackagesList,
    CarDocuments,
    SchemaCar,
    Location,
    Footer,
    Modal
  },

}
</script>
<template>
  <div id="app">
    <Header />
    <Service />
    <PaperCars />
    <LicenseCars />
    <InfoBanner />
    <PackagesList />
    <CarDocuments />
    <SchemaCar />
    <Location />
    <Footer />
    <Modal/>
  </div>
</template>

<style>
</style>
