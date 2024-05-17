import { useSelector } from "react-redux";
import { storeProps } from "../store";
import { IKContext, IKImage } from "imagekitio-react";

export default function About() {
  const lang = useSelector((store: storeProps) => store.app.lang);
  return (
    <div className="w-full lg:px-12 px-6 py-32 bg-gray-800 text-white">
      <div className="flex xl:h-[680px] py-10 px-5 gap-20 xl:flex-row flex-col-reverse rounded-lg border border-gray-600 shadow-xl">
        {lang === "English" ? (
          <>
            <div className="w-full aboutContent overflow-y-scroll">
              <h1>How It Started</h1>
              <h2>Introduction about YiDIElectro</h2>
              <p>
                YiDIElectro is a leading provider of electric vehicles (EVs) and
                related services, dedicated to revolutionizing the way people
                commute and interact with transportation. Since our inception in
                2024, we have been committed to delivering innovative and
                sustainable mobility solutions.
              </p>
              <h2>Our Commitment to Quality</h2>
              <p>
                At YiDIElectro, we prioritize quality and reliability in every
                aspect of our business. We meticulously select and rigorously
                test our electric vehicles to ensure they meet the highest
                standards of performance, safety, and efficiency.
              </p>
              <h2>Achievements</h2>
              <p>
                Over the years, YiDIElectro has achieved significant milestones
                in the electric vehicle industry. From launching groundbreaking
                EV models to establishing strategic partnerships, we continue to
                lead the way in driving positive change.
              </p>
              <h2>Contact Information</h2>
              <p>
                For inquiries, partnerships, or to learn more about our products
                and services, please feel free to contact us at yidi@gmail.com.
                Our dedicated team is always ready to assist you.
              </p>
              <h2>Success Stories</h2>
              <p>
                Explore some of the success stories and testimonials from
                satisfied customers who have chosen YiDIElectro for their
                electric vehicle needs. Their experiences highlight the superior
                performance, reliability, and environmental benefits of our EVs.
              </p>
            </div>
            <div className="w-full flex justify-center items-center">
              <IKContext
                publicKey="public_POLuSf/Qrn79R+Goy2t0JxWA6XM="
                urlEndpoint="https://ik.imagekit.io/yidiElectro"
                transformationPosition="path"
              >
                <IKImage
                  path="/image3.webp"
                  loading="lazy"
                  lqip={{ active: true, quality: 20, blur: 10 }}
                  className="rounded-lg mx-auto xl:w-[80%] xl:h-[80%] w-full h-full object-cover"
                />
              </IKContext>
            </div>
          </>
        ) : (
          <>
            <div className="w-full aboutContent overflow-y-scroll">
              <h1>Khởi Đầu Như Thế Nào</h1>
              <h2>Giới Thiệu về YiDIElectro</h2>
              <p>
                YiDIElectro là một nhà cung cấp hàng đầu về xe điện (EVs) và các
                dịch vụ liên quan, cam kết cách mạng hóa cách mọi người di
                chuyển và tương tác với phương tiện giao thông. Từ khi thành lập
                vào năm 2024, chúng tôi đã cam kết mang đến các giải pháp di
                chuyển đổi mới và bền vững.
              </p>
              <h2>Sự Cam Kết của Chúng Tôi với Chất Lượng</h2>
              <p>
                Tại YiDIElectro, chúng tôi ưu tiên chất lượng và độ tin cậy
                trong mọi khía cạnh của hoạt động kinh doanh của chúng tôi.
                Chúng tôi lựa chọn một cách cẩn thận và thử nghiệm nghiêm ngặt
                các xe điện của chúng tôi để đảm bảo chúng đáp ứng các tiêu
                chuẩn cao nhất về hiệu suất, an toàn và hiệu quả.
              </p>
              <h2>Thành Tựu</h2>
              <p>
                Suốt nhiều năm qua, YiDIElectro đã đạt được những cột mốc đáng
                kể trong ngành công nghiệp xe điện. Từ việc ra mắt các mẫu xe EV
                đột phá đến việc thiết lập các đối tác chiến lược, chúng tôi
                tiếp tục dẫn đầu trong việc thúc đẩy sự thay đổi tích cực.
              </p>
              <h2>Thông Tin Liên Hệ</h2>
              <p>
                Để biết thông tin chi tiết, hợp tác hoặc để tìm hiểu thêm về các
                sản phẩm và dịch vụ của chúng tôi, vui lòng liên hệ với chúng
                tôi qua yidi@gmail.com. Đội ngũ chuyên nghiệp của chúng tôi luôn
                sẵn lòng hỗ trợ bạn.
              </p>
              <h2>Câu Chuyện Thành Công</h2>
              <p>
                Khám phá một số câu chuyện thành công và các đánh giá từ khách
                hàng hài lòng đã chọn YiDIElectro cho nhu cầu xe điện của họ.
                Những trải nghiệm của họ làm nổi bật hiệu suất, độ tin cậy và
                lợi ích môi trường của các mẫu xe điện của chúng tôi.
              </p>
            </div>
            <div className="w-full flex justify-center items-center">
              <IKContext
                publicKey="public_POLuSf/Qrn79R+Goy2t0JxWA6XM="
                urlEndpoint="https://ik.imagekit.io/yidiElectro"
                transformationPosition="path"
              >
                <IKImage
                  path="/image3.webp"
                  loading="lazy"
                  lqip={{ active: true, quality: 20, blur: 10 }}
                  className="w-[80%] mx-auto my-6"
                />
              </IKContext>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
