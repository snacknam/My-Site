import type { ProjectDetail } from "../../types/content";

export const exembleProject: ProjectDetail = {
  slug: "exemble",
  content: {
    ko: {
      name: "Exemble",
      headline: "사내 문서 기반 LLM 워크플로우 환경 설계하기",
      metadata: "온프레미스 기반 LLM 서비스 Exemble · 2025.10–2026.01",
      introduction: [
        "Exemble은 기업 내부 데이터와 자체 모델로 구성된 에이전트를 워크플로우로 연결하고, 채팅을 통해 다양한 업무를 수행하는 온프레미스 AI 플랫폼입니다.",
        "사용자용 채팅·워크플로우부터 관리자용 운영·권한·모니터링까지 핵심 경험을 설계했습니다. 초기 서비스 기획부터 팀의 단독 디자이너로서 프로젝트를 주도했습니다.",
      ],
      cover: { image: "/image/exemble/img_1.jpg", alt: "Exemble의 사용자 채팅과 관리자 화면" },
      sections: [
        {
          id: "chat-workflow",
          title: "사내 데이터를 활용하는 채팅 워크플로우",
          paragraphs: ["Exemble은 일반적인 LLM 채팅과 달리 기업 내부 데이터, 외부 API, 모델과 권한 체계를 함께 다뤄야 합니다. 사용자는 사내 문서를 바탕으로 답변을 생성하거나 워크플로우를 실행해 업무 결과물을 만들고, 관리자는 이 과정을 운영하고 통제할 수 있어야 했습니다."],
          media: [{ type: "video", src: "/image/exemble/chat.mov", label: "워크플로우를 선택해 채팅을 시작하는 화면", caption: "워크플로우를 선택하며 시작하는 채팅", framed: true }],
        },
        {
          id: "user-admin",
          title: "사용자 경험과 관리자 경험의 구분",
          paragraphs: ["서비스는 채팅과 워크플로우를 실행하는 사용자 화면, 그리고 필요한 리소스를 관리하고 운영하는 관리자 화면으로 나뉩니다. 사용자 화면은 매끄러운 작업 흐름에, 관리자 화면은 복잡한 리소스 관리에 집중하도록 레이아웃과 정보 밀도를 다르게 설계했습니다."],
          media: [{ type: "image", src: "/image/exemble/img_2.jpg", alt: "Exemble 사용자와 관리자 메뉴 구조 비교", caption: "관리자·사용자 메뉴 구조의 분리" }],
        },
        {
          id: "workflow-builder",
          title: "복잡한 업무를 직접 조합할 수 있는 워크플로우",
          paragraphs: ["워크플로우는 사용자가 에이전트, API 도구, 조건 분기 등을 조합해 실제 업무를 구성하는 핵심 경험입니다. 노드와 연결선을 이용해 업무 흐름을 시각화하고, 단순한 다이어그램이 아니라 실행 가능한 구조로서 상태 확인과 테스트·디버깅이 가능하도록 설계했습니다."],
          media: [{ type: "video", src: "/image/exemble/workflow.mov", label: "노드와 연결선으로 워크플로우를 구성하는 화면", caption: "노드와 엣지를 통한 업무 흐름의 시각화" }],
        },
        {
          id: "workspace",
          title: "사용자 흐름이 끊기지 않는 작업 공간",
          paragraphs: ["업무 설계에는 노드 사이의 관계와 맥락이 중요합니다. 모든 노드를 하나의 작업 공간에서 편집해 사고 흐름을 유지하도록 했고, 단축키, 자동 정렬, 임시 저장 등의 기능으로 지속적인 수정과 검증이 자연스럽게 이어지게 했습니다."],
          media: [{ type: "image", src: "/image/exemble/img_3.jpg", alt: "워크플로우 캔버스에서 에이전트 노드를 생성하는 화면", caption: "워크플로우 편집 과정에서 생성하는 에이전트 노드" }],
        },
        {
          id: "trustworthy-chat",
          title: "질문에서 결과까지, 신뢰할 수 있는 채팅",
          paragraphs: ["사용자 채팅은 단순한 질의응답을 넘어 질문과 워크플로우에 따라 결과를 만들고 작업을 실행합니다. 사용자가 처리 과정을 순서대로 확인하며 AI의 판단을 신뢰하고, 문제가 있다면 원인을 빠르게 찾아 개선할 수 있도록 구성했습니다."],
          media: [{ type: "video", src: "/image/exemble/thinkflow.mov", label: "워크플로우가 질문을 단계적으로 처리하는 채팅 화면", caption: "워크플로우에 따라 질문을 순차적으로 처리하는 과정" }],
        },
        {
          id: "sources",
          title: "답변의 근거를 직접 확인할 수 있는 자료",
          paragraphs: ["채팅 결과에 활용된 근거 자료를 함께 제공해 사용자가 응답의 출처와 맥락을 직접 확인하도록 했습니다. 질문에 첨부한 파일과 사전에 학습된 사내 데이터가 근거로 연결되며, 결과에 대한 신뢰를 높이는 핵심 경험이 됩니다."],
          media: [{ type: "image", src: "/image/exemble/img_4.jpg", alt: "채팅 답변과 함께 표시되는 사내 데이터 근거 자료", caption: "사내 데이터를 기반으로 제공하는 근거 자료" }],
        },
        {
          id: "data-connection",
          title: "다양한 사내 데이터를 쉽게 연결하는 구조",
          paragraphs: ["에이전트가 활용하는 데이터는 데이터베이스 연결과 문서 업로드 등 여러 경로와 형태로 수집됩니다. 상황에 맞는 탐색 방식을 제공하고 데이터가 변경되면 자동으로 다시 벡터화하는 옵션을 지원해 데이터 기반을 쉽게 구축하도록 했습니다."],
          media: [
            { type: "image", src: "/image/exemble/img_5.jpg", alt: "문서를 직접 업로드하고 탐색하는 데이터 관리 화면", caption: "데이터를 직접 업로드하는 경우의 탐색 방식" },
            { type: "image", src: "/image/exemble/img_6.jpg", alt: "벡터 테이블 생성을 위한 쿼리 작성 화면", caption: "벡터 테이블을 생성하기 위한 쿼리 작성" },
          ],
        },
        {
          id: "model-management",
          title: "운영과 성능 개선이 이어지는 모델 관리",
          paragraphs: ["채팅 모델은 현재 상태, 리소스 사용량, 변경 이력 등의 지표로 관리됩니다. 모델별 파인튜닝 정보도 통합해 단순한 서비스 관리를 넘어 지속적으로 성능을 개선할 수 있는 운영 환경을 구축했습니다."],
          media: [{ type: "image", src: "/image/exemble/img_7.jpg", alt: "모델 상태, 리소스 지표와 파인튜닝 정보를 보여주는 관리 화면", caption: "다양한 지표와 파인튜닝을 통한 모델 관리" }],
        },
        {
          id: "operations-dashboard",
          title: "계층적으로 파악하는 운영 대시보드",
          paragraphs: ["전체 워크플로우에서 개별 워크플로우와 리소스 단위까지 점진적으로 탐색하도록 대시보드를 구성하고 상태별 색상을 적용했습니다. 관리자가 운영 문제를 빠르게 인지하고 세부 원인을 자연스럽게 추적할 수 있습니다."],
          media: [{ type: "image", src: "/image/exemble/img_8.jpg", alt: "워크플로우와 리소스 상태를 계층적으로 보여주는 운영 대시보드", caption: "대시보드의 계층적 구성과 상태 표현" }],
        },
        {
          id: "motion",
          title: "살아있는 듯한 AI 서비스 경험",
          paragraphs: ["워크플로우 연결, 답변 생성 중 로딩, 채팅 세션 전환 등 서비스 곳곳에 인터랙션과 애니메이션을 적용했습니다. 단순한 장식을 넘어 AI 서비스에 생동감을 주고 복잡한 엔터프라이즈 구조를 더 자연스럽게 이해하도록 돕습니다."],
          media: [{ type: "video", src: "/image/exemble/animation.mov", label: "Exemble 서비스의 로딩과 화면 전환 애니메이션", caption: "서비스 곳곳의 다양한 인터랙션과 애니메이션" }],
        },
        {
          id: "leadership",
          title: "개발 중심 조직에서 프로젝트를 리드한 경험",
          paragraphs: ["Exemble은 복잡하고 추상적인 LLM 개념을 짧은 기간 안에 실제 서비스로 구체화한 프로젝트입니다. 모든 팀원이 개발자인 환경에서 기술적 제약과 구현 구조를 함께 조율하고, 디자인 시스템을 적용해 일관성과 확장성을 확보했습니다.", "기획자이자 디자이너로서 서비스 방향과 설계 전략을 포함한 전 과정에 참여하며 프로젝트를 주도적으로 이끌었습니다."],
          media: [{ type: "video", src: "/image/exemble/particle.mov", label: "Exemble 브랜드 파티클 애니메이션" }],
        },
      ],
    },
    en: {
      name: "Exemble",
      headline: "Designing an LLM workflow environment for internal knowledge",
      metadata: "On-premise LLM platform Exemble · Oct 2025–Jan 2026",
      introduction: [
        "Exemble is an on-premise AI platform where teams connect agents powered by internal data and proprietary models into workflows, then complete a variety of tasks through chat.",
        "I designed the core experience across user chat and workflow building as well as administration, permissions, and monitoring. As the team's sole designer, I led the project from early service planning onward.",
      ],
      cover: { image: "/image/exemble/img_1.jpg", alt: "Exemble user chat and administration interfaces" },
      sections: [
        {
          id: "chat-workflow",
          title: "Chat workflows powered by internal data",
          paragraphs: ["Unlike a general-purpose LLM chat product, Exemble must manage internal data, external APIs, models, and permissions together. Users can generate answers from company documents or run workflows to produce work outputs, while administrators need to operate and govern the entire process."],
          media: [{ type: "video", src: "/image/exemble/chat.mov", label: "Starting a chat by selecting a workflow", caption: "Starting a chat by selecting a workflow", framed: true }],
        },
        {
          id: "user-admin",
          title: "Separating user and administrator experiences",
          paragraphs: ["The product is divided into a user space for chat and workflow execution and an administrator space for managing the resources behind them. I varied the layouts and information density so the user interface supports a fluid task flow while the administrator interface supports complex resource management."],
          media: [{ type: "image", src: "/image/exemble/img_2.jpg", alt: "Comparison of Exemble user and administrator navigation", caption: "Separate navigation structures for users and administrators" }],
        },
        {
          id: "workflow-builder",
          title: "Building complex work directly with workflows",
          paragraphs: ["The workflow builder lets users combine agents, API tools, and conditional branches into real business processes. Nodes and edges visualize the flow, but the result is more than a diagram: it is an executable structure with status feedback, testing, and debugging."],
          media: [{ type: "video", src: "/image/exemble/workflow.mov", label: "Building a workflow with connected nodes", caption: "Visualizing work with nodes and edges" }],
        },
        {
          id: "workspace",
          title: "A workspace that preserves the user's train of thought",
          paragraphs: ["Relationships and context between nodes are essential when designing work. Keeping every node editable in one workspace preserves that context, while shortcuts, automatic layout, and draft saving make continuous iteration and validation feel natural."],
          media: [{ type: "image", src: "/image/exemble/img_3.jpg", alt: "Creating an agent node inside the workflow canvas", caption: "Creating an agent node without leaving the workflow" }],
        },
        {
          id: "trustworthy-chat",
          title: "Trustworthy chat from question to result",
          paragraphs: ["Chat goes beyond question and answer: it produces results and executes tasks according to the selected workflow. Showing the process step by step helps users trust the system's decisions and quickly locate the cause when a result needs improvement."],
          media: [{ type: "video", src: "/image/exemble/thinkflow.mov", label: "Chat processing a question through workflow steps", caption: "Processing a question step by step through a workflow" }],
        },
        {
          id: "sources",
          title: "Evidence users can inspect directly",
          paragraphs: ["Sources used for an answer are shown alongside the result so users can inspect its origin and context. The evidence can come from attached files or previously indexed internal knowledge, creating differentiated value and increasing confidence in the response."],
          media: [{ type: "image", src: "/image/exemble/img_4.jpg", alt: "Internal knowledge sources displayed beside a chat response", caption: "Evidence retrieved from internal company data" }],
        },
        {
          id: "data-connection",
          title: "Connecting varied internal data with less effort",
          paragraphs: ["Agent knowledge is collected in different forms through database connections and document uploads. Context-specific browsing patterns and automatic re-vectorization when data changes help teams build and maintain a useful knowledge base."],
          media: [
            { type: "image", src: "/image/exemble/img_5.jpg", alt: "Uploading and browsing documents in the data management interface", caption: "Browsing data uploaded directly to the platform" },
            { type: "image", src: "/image/exemble/img_6.jpg", alt: "Writing a query to create a vector table", caption: "Writing a query for vector-table generation" },
          ],
        },
        {
          id: "model-management",
          title: "Model operations connected to performance improvement",
          paragraphs: ["Chat models are managed through status, resource usage, and change history. Integrating fine-tuning information for each model creates an operational environment that supports continuous performance improvement rather than simple service maintenance."],
          media: [{ type: "image", src: "/image/exemble/img_7.jpg", alt: "Model status, resource metrics, and fine-tuning information", caption: "Managing models through metrics and fine-tuning" }],
        },
        {
          id: "operations-dashboard",
          title: "A hierarchical operations dashboard",
          paragraphs: ["The dashboard moves progressively from all workflows to an individual workflow and its resources, with color communicating status. Administrators can notice operational issues quickly and follow a natural path toward the underlying cause."],
          media: [{ type: "image", src: "/image/exemble/img_8.jpg", alt: "Hierarchical operations dashboard for workflows and resources", caption: "Hierarchical dashboard structure and status signals" }],
        },
        {
          id: "motion",
          title: "Making an AI service feel alive",
          paragraphs: ["Motion appears throughout workflow connections, answer-generation feedback, and chat-session transitions. These interactions are not merely decorative: they bring the AI experience to life and make a complex enterprise system easier to understand."],
          media: [{ type: "video", src: "/image/exemble/animation.mov", label: "Loading and transition animations across Exemble", caption: "Interaction and animation throughout the service" }],
        },
        {
          id: "leadership",
          title: "Leading a project in an engineering-led team",
          paragraphs: ["Exemble turned complex, abstract LLM concepts into a working product in a short period. In an all-engineering team, I collaborated closely on technical constraints and implementation structure while applying a design system for consistency and future expansion.", "Working as both planner and designer, I contributed to the product direction and design strategy and gained experience leading the project end to end."],
          media: [{ type: "video", src: "/image/exemble/particle.mov", label: "Exemble brand particle animation" }],
        },
      ],
    },
  },
};
