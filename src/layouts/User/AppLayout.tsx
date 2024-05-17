import Loading from "../../components/Loading/Loading";
import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "./Footer/Footer";
import { useEffect, useRef, useState } from "react";
import { ButtonArr } from "../../components/Button/ButtonArr";
import { useDispatch, useSelector } from "react-redux";
import { storeProps } from "../../store";
import { SummitForm } from "../../components/ThankYou/SummitForm";
import { setIsLoggedTrue } from "./AppSlice";

export default function AppLayout() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const isLoading = navigation.state === "loading";
  const [isMenu, setIsMenu] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const buttonArrRef = useRef<HTMLButtonElement>(null);
  const isSummit = useSelector((store: storeProps) => store.app.isSummit);

  useEffect(() => {
    const isLogged = sessionStorage.getItem("isLogged");
    if (isLogged === "true") {
      dispatch(setIsLoggedTrue());
    }
  }, [dispatch]);

  useEffect(() => {
    const handleScroll = () => {
      if (navRef.current && buttonArrRef) {
        if (window.scrollY > navRef.current?.clientHeight) {
          navRef.current.style.backgroundColor = "white";
          navRef.current.style.color = "black";
          buttonArrRef.current?.classList.remove("hidden");
        } else {
          navRef.current.style.color = "white";
          navRef.current.style.backgroundColor = "transparent";
          buttonArrRef.current?.classList.add("hidden");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Navbar navRef={navRef} isMenu={isMenu} setIsMenu={setIsMenu} />
          {!isMenu && (
            <>
              <Outlet />
              <Footer />
            </>
          )}
          {isSummit && <SummitForm />}
          <ButtonArr buttonArrRef={buttonArrRef} />
        </>
      )}
    </>
  );
}
