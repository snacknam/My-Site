import type { ProjectDetail } from "../../types/content";

export const safetyBellProject: ProjectDetail = {
  slug: "safetybell",
  content: {
    ko: {
      name: "모두의 안심벨",
      headline: "긴급 신고 UX/UI 디자인",
      metadata: "경기도 긴급 신고 시스템 모두의 안심벨 · 2022.06–2022.09",
      introduction: [
        "모두의 안심벨은 경기도 내 1인 점포나 1인 거주자 등 범죄나 사고에 취약한 대상이 긴급한 상황에 신속하게 대응할 수 있도록 돕는 보조 신고 서비스입니다.",
        "모바일 앱과 하드웨어 기기를 통해 신고하고 PC 웹에서 접수된 신고를 관리합니다. 경기도와 함께 서비스 전체 시스템을 설계하고 각 플랫폼의 UX/UI 디자인을 진행했습니다.",
      ],
      cover: { image: "/image/safetybell/img_1.jpg", alt: "모두의 안심벨 모바일 앱과 관리자 시스템 화면" },
      sections: [
        {
          id: "reporting-system",
          title: "긴급 상황에 빠르게 대응 가능한 신고체계",
          paragraphs: ["안심벨의 신고체계는 경찰 및 경기도와 협력하여 긴급 상황에 즉각 대응할 수 있도록 설계했습니다. 기기의 신고 버튼을 누르면 등록된 휴대폰으로 신호가 전달되고, 휴대폰은 사전에 등록된 신고 정보를 경찰과 경기도 상황실에 즉시 전송합니다."],
          image: { image: "/image/safetybell/img_2.jpg", alt: "안심벨 기기에서 경찰과 경기도 상황실까지 이어지는 긴급 신고 흐름" },
        },
        {
          id: "mobile-report",
          title: "안심벨 기기와 모바일 앱을 통한 신고",
          paragraphs: ["사용자가 기기의 신고 버튼을 누르면 푸시 알림을 통해 모바일 앱에서 즉시 신고 상태를 확인할 수 있습니다. 버튼을 잘못 눌렀다면 취소 기능으로 오신고를 빠르게 취소해 각 기관의 불필요한 대응을 방지할 수 있습니다."],
          image: { image: "/image/safetybell/img_3.jpg", alt: "긴급 신고 접수와 오신고 취소를 지원하는 모바일 앱 화면" },
        },
        {
          id: "device-management",
          title: "블루투스 통신을 위한 기기 관리",
          paragraphs: ["모두의 안심벨은 블루투스 저전력 통신을 통해 하드웨어 기기와 모바일 앱이 상호작용합니다. 사용자는 앱에서 기기를 등록하고 네트워크를 연결하며, 펌웨어 업데이트로 기기를 지속적으로 관리할 수 있습니다."],
          image: { image: "/image/safetybell/img_4.jpg", alt: "안심벨 등록, 네트워크 연결과 펌웨어 업데이트 화면" },
        },
        {
          id: "monitoring",
          title: "실시간 신고 상황 모니터링",
          paragraphs: ["안심벨을 통해 전송된 긴급 신고는 경찰과 경기도 관제센터에 함께 접수됩니다. 모니터링 화면에서 신고 위치와 정보를 실시간으로 확인해 각 기관이 신속하게 대응할 수 있습니다."],
          image: { image: "/image/safetybell/img_5.jpg", alt: "신고 위치와 상태를 실시간으로 보여주는 관제센터 모니터링 화면" },
        },
        {
          id: "dashboard",
          title: "서비스 개선을 위한 대시보드",
          paragraphs: ["관리자 대시보드에서 안심벨 서비스 이용 현황을 한눈에 확인할 수 있습니다. 수집된 데이터의 특성에 맞게 각 영역을 시각화했으며, 기관 담당자는 이 정보를 서비스 개선에 활용했습니다."],
          image: { image: "/image/safetybell/img_6.jpg", alt: "안심벨 이용 현황과 신고 데이터를 시각화한 관리자 대시보드" },
        },
        {
          id: "user-management",
          title: "서비스 운영을 위한 사용자 관리",
          paragraphs: ["등록된 사용자는 관리자 화면에서 관리됩니다. 운영 담당자는 사용자 데이터를 확인하거나 수정·삭제하고, 엑셀로 내려받아 서비스 문의와 운영 업무에 대응할 수 있습니다."],
          image: { image: "/image/safetybell/img_7.jpg", alt: "등록 사용자를 검색하고 관리하는 관리자 화면" },
        },
        {
          id: "retrospective",
          title: "정부 기관과 함께한 프로젝트",
          paragraphs: ["경기도와 함께한 이번 프로젝트는 주어진 기능 요구사항 안에서 기획과 디자인을 진행하고, GS 인증과 웹 접근성 인증에도 대응해야 하는 새로운 도전이었습니다.", "서로 다른 이해관계자의 요구와 비즈니스 조건을 함께 고려해야 했습니다. 그 중심에서 의견을 조율하고 프로젝트를 관리하며 다양한 이슈에 대응하는 경험을 쌓았습니다."],
          image: { image: "/image/safetybell/img_8.jpg", alt: "모두의 안심벨 서비스가 적용된 점포와 안심벨 기기" },
        },
      ],
    },
    en: {
      name: "Safety Bell",
      headline: "Connecting residents with help in an emergency",
      metadata: "Emergency reporting system for Gyeonggi Province · Jun–Sep 2022",
      introduction: ["Safety Bell helps people who live or work alone in Gyeonggi Province, South Korea, alert authorities in an emergency. It provides an additional way to report incidents for residents and shop owners who may be vulnerable to crime or accidents.", "Working with Gyeonggi Province, I designed the service flow and interfaces across a connected device, a mobile app, and a desktop reporting console."],
      cover: { image: "/image/safetybell/img_1.jpg", alt: "Safety Bell mobile app and administration system screens" },
      sections: [
        {
          id: "reporting-system",
          title: "From a button press to an emergency alert",
          paragraphs: ["Working with the police and Gyeonggi Province, we designed a reporting flow for rapid response. Pressing the device’s button sends a signal to the registered phone, which forwards the user’s saved reporting details to the police and provincial control center."],
          image: { image: "/image/safetybell/img_2.jpg", alt: "Emergency-reporting flow from the Safety Bell device to the police and control center" },
        },
        {
          id: "mobile-report",
          title: "Confirm a report or cancel an accidental alert",
          paragraphs: ["After the button is pressed, a push notification lets the user check the report’s status in the app. If it was pressed by accident, they can quickly cancel the alert to avoid an unnecessary response."],
          image: { image: "/image/safetybell/img_3.jpg", alt: "Mobile screens for checking report status and canceling an accidental alert" },
        },
        {
          id: "device-management",
          title: "Keep the device connected and up to date",
          paragraphs: ["The device communicates with the app over Bluetooth Low Energy. Users can register their device, set up its network connection, and install firmware updates from the app."],
          image: { image: "/image/safetybell/img_4.jpg", alt: "Screens for registering, connecting, and updating the Safety Bell device" },
        },
        {
          id: "monitoring",
          title: "Give responders a live view of incoming reports",
          paragraphs: ["Both the police and the provincial control center receive emergency reports. The monitoring interface shows each report’s location and details in real time to support a prompt response."],
          image: { image: "/image/safetybell/img_5.jpg", alt: "Control-center interface showing emergency locations and report status" },
        },
        {
          id: "dashboard",
          title: "Turn service data into a useful overview",
          paragraphs: ["The admin dashboard brings service usage and reporting data into one view. I chose visualizations suited to each dataset to help operators identify patterns and opportunities to improve the service."],
          image: { image: "/image/safetybell/img_6.jpg", alt: "Administration dashboard visualizing usage and emergency-reporting data" },
        },
        {
          id: "user-management",
          title: "Support day-to-day user management",
          paragraphs: ["Operators can search, review, update, delete, and export registered user records from the admin interface, helping them handle inquiries and routine service operations."],
          image: { image: "/image/safetybell/img_7.jpg", alt: "Administration interface for searching and managing registered users" },
        },
        {
          id: "retrospective",
          title: "Designing with public-sector stakeholders",
          paragraphs: ["The project required working within defined functional requirements while addressing GS certification and web accessibility requirements.", "I coordinated stakeholders with different priorities, balancing their needs with the project’s business constraints. The experience strengthened my ability to manage the project and work through issues across organizations."],
          image: { image: "/image/safetybell/img_8.jpg", alt: "A shop using the Safety Bell service and its connected hardware device" },
        },
      ],
    },
  },
};
