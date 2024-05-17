import Background from "../components/Background/Background";
import Hero from "../components/Hero/Hero";
import { AnimationHero } from "../components/Animations/AnimationHero";
import { ReviewsList } from "../components/Review/ReviewsList";
import { PopularProducts } from "../components/PopularProduct/PopularProducts";
import { HomeAbout } from "../components/HomeAbout/HomeAbout";
import { FeatureLuxuryCar } from "../components/FeatureLuxuryCar/FeatureLuxuryCar";
import { ClientReviews } from "../components/ClientReview/ClientReviews";
import { ContactUs } from "../components/HomeContact/ContactUs";
import { ListLogoCar } from "../components/ListLogo/ListLogoCar";
export default function Home() {
  return (
    <>
      <div id="home" className="container-width h-screen">
        <Hero />
        <Background />
        <AnimationHero />
      </div>
      <ReviewsList />
      <PopularProducts />
      <HomeAbout />
      <FeatureLuxuryCar />
      <ClientReviews />
      <ContactUs />
      <ListLogoCar />
    </>
  );
}
