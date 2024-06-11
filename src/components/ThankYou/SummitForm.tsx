import { X } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { storeProps } from "../../store";
import { outSummit, setForgotFalse } from "../../layouts/User/AppSlice";

export function SummitForm() {
  const name = useSelector((store: storeProps) => store.app.name);
  const isForgot = useSelector((store: storeProps) => store.app.isForgot);
  const isEnglish = useSelector(
    (store: storeProps) => store.app.lang === "English"
  );
  const dispatch = useDispatch();
  function handleOutSummit() {
    dispatch(outSummit());
    dispatch(setForgotFalse());
  }

  if (isForgot) {
    return (
      <div
        onClick={handleOutSummit}
        className="fixed flex justify-center items-center z-[9999999] bg-black/80 w-full h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <div className=" relative bg-white px-16 py-16 rounded-lg">
          <h1 className="text-yellow-400 font-semibold">
            {isEnglish
              ? "Password has been sent to your email"
              : "Mật khẩu đã được gửi vào email của bạn"}
          </h1>
          <button
            onClick={handleOutSummit}
            className="absolute  top-0 right-0 mr-3 mt-3"
          >
            <X className="h-7 w-7" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      onClick={handleOutSummit}
      className="fixed flex justify-center items-center z-[9999999] bg-black/80 w-full h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
    >
      <div className="w-[80%] relative bg-white px-6 py-6 rounded-lg">
        <h1 className="text-yellow-400 font-semibold">
          {isEnglish ? "Hello" : "Xin chào"}
          <span className="text-xl"> {name},</span>
        </h1>
        <p className="text-gray-500 mb-2">
          {isEnglish
            ? "Thank you for successfully filling out the form! We truly appreciate you taking the time to reach out to us."
            : "Cảm ơn bạn đã điền thành công mẫu đơn! Chúng tôi thực sự đánh giá cao việc bạn dành thời gian liên hệ với chúng tôi."}
        </p>
        <p className="text-gray-500 mb-2">
          {isEnglish
            ? "We will process your request as soon as possible and will get back to you shortly. While awaiting our response, if you have any further questions or requests, please feel free to contact us directly at"
            : "Chúng tôi sẽ xử lý yêu cầu của bạn sớm nhất có thể và sẽ sớm liên hệ lại với bạn. Trong khi chờ đợi phản hồi của chúng tôi, nếu bạn có bất kỳ câu hỏi hoặc yêu cầu nào khác, vui lòng liên hệ trực tiếp với chúng tôi theo địa chỉ email"}
          <strong> yidi@gmail.com</strong>{" "}
          {isEnglish ? "or at phone number" : "hoặc số điện thoại"}
          <strong> 0123456789.</strong>
        </p>
        <button
          onClick={handleOutSummit}
          className="absolute  top-0 right-0 mr-3 mt-3"
        >
          <X className="h-7 w-7" />
        </button>
      </div>
    </div>
  );
}
