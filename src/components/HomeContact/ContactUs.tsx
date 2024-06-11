import { useDispatch, useSelector } from "react-redux";
import {
  setIsSubmit,
  setLoadingSummitFalse,
  setLoadingSummitTrue,
  setName,
} from "../../layouts/User/AppSlice";
import { useState } from "react";
import { storeProps } from "../../store";
import { URL_SERVER } from "../../base/base";

export function ContactUs() {
  const dispatch = useDispatch();
  const [newName, setNewName] = useState("");
  const regex = /[a-zA-Z]/;
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [mess, setMess] = useState("");
  const lang = useSelector((store: storeProps) => store.app.lang);
  return (
    <div
      style={{
        backgroundImage: `url(https://ik.imagekit.io/yidiElectro/image4.webp)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="container-width"
    >
      <div className="flex gap-4 md:flex-row flex-col h-full md:h-[500px]">
        <div className="p-4 shadow-lg rounded-lg bg-yellow-500">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1959.5336477553276!2d106.628656!3d10.806157900000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752be27d8b4f4d%3A0x92dcba2950430867!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBDw7RuZyBUaMawxqFuZyBUUC4gSOG7kyBDaMOtIE1pbmggKEhVSVQp!5e0!3m2!1svi!2s!4v1713238766051!5m2!1svi!2s"
            className="md:h-full md:w-[40vw] h-[300px] w-full"
          ></iframe>
        </div>
        <div className="p-4 shadow-lg rounded-lg w-full h-full bg-white ">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              dispatch(setLoadingSummitTrue());
              dispatch(setIsSubmit());
              dispatch(setName(newName));
              // Send Email
              fetch(
                `${URL_SERVER}/send-email/${email}?name=${
                  regex.test(newName) ? newName : "..."
                }`,
                {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                }
              )
                .then((response) => response.json())
                .then(() => {
                  console.log("Email sent successfully");
                })
                .catch((error) => {
                  console.error("Error:", error);
                })
                .finally(() => {
                  dispatch(setLoadingSummitFalse());
                });
              // clear form
              setEmail("");
              setMess("");
              setName("");
              setNewName("");
              setPhone("");
            }}
          >
            <h1 className="text-2xl font-semibold text-center mb-4">
              {lang === "English" ? "Get In Touch" : "Liên hệ"}
            </h1>
            <div className="flex flex-col gap-4">
              <div className="divLabel">
                <label className="w-[120px]" htmlFor="name">
                  {lang === "English" ? "Your Name" : "Tên của bạn"}
                </label>
                <input
                  className="divInput"
                  id="name"
                  type="text"
                  placeholder="Chi Thanh"
                  value={newName}
                  onChange={(e) => {
                    setNewName(e.target.value);
                  }}
                  required
                />
              </div>
              <div className="divLabel">
                <label className="w-[120px]" htmlFor="email">
                  {lang === "English" ? "Your Email" : "Email của bạn"}
                </label>
                <input
                  className="divInput"
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="example@gmail.com"
                  required
                />
              </div>
              <div className="divLabel">
                <label className="w-[120px]" htmlFor="phone">
                  {lang === "English" ? "Phone" : "Số điện thoại"}
                </label>
                <input
                  className="divInput"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="xxx-xxxx-xxxx"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label className="w-[120px] mb-2" htmlFor="mess">
                  {lang === "English" ? "Message" : "Lời nhắn"}
                </label>
                <textarea
                  value={mess}
                  onChange={(e) => setMess(e.target.value)}
                  className="border outline-none h-[80px] border-gray-400 rounded-lg px-4 py-1"
                  placeholder="Message..."
                />
              </div>
              <button className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:bg-yellow-600 hover:-translate-y-1">
                {lang === "English" ? "Send Message" : "Gửi"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
