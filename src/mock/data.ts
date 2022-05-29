import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.png',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'zizivoice.jpg',
    title: 'Happy Voice & ZiZi Voice',
    info: 'MI Interactive\n2014.11 ~ 2015.9 (Unity4)',
    info2: '- NGUI\n- SNS 동영상 파일 공유(Kakao, Facebook, Wechat, Instargram, Line, QQ)\n- Kamcord 동영상 녹화 플러그인\n- 3D캐릭터 모델 및 애니메이션 매니저',
    url: 'https://www.youtube.com/watch?v=Ea-0GqrWqzA',
    //repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'uzuzombie.png',
    title: '우주좀비',
    info: '우주마켓\n2015.12 ~ 2016.5 (Unity5)',
    info2: '- spine연동 캐릭터 추가\n- 인벤토리/복불복 시스템 기획 및 개발\n- 웹서버통신 및 DB수정\n- 보안업체 관리\n- 메모리/용량 최적화\n\nAndroid 플러그인\n- 인스톨리시버, 클립보드 복사\n- Tapjoy, UnityAds, Vungle, Nas 광고연동',
    url: 'https://www.youtube.com/watch?v=AcSPuOGmaTc',
    //repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'dora.jpg',
    title: 'Learn with Dora',
    info: '블루아크 글로벌\n2016.8 ~ 2018.3 (Unity4,5)',
    info2: '총 5가지 교육앱 개발\n- NGUI\n- IOS/WebGL 개발셋팅/빌드/배포 관리\n- 컨텐츠만 다른 3가지 앱, 해상도 대응\n- Assetbundle 버전체크 및 관리\n- 녹음 시스템\n- EBS웹과 상호작용, WebGL HTML\n\nAndroid/iOS/WebGL 플러그인\n- 서로다른 앱 이동, 사진첩 실행, 설정앱 이동\n- Tapjoy, GoogleAnalytics, Firebase Push\n- WebGL 녹음, iOS WebView\n- Android 6.0 권한',
    url: 'https://www.youtube.com/watch?v=maE2GW-tXcE',
    //repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'finalblade.jpg',
    title: 'Final Blade(턴제RPG)',
    info: '스카이피플\n2018.8 ~ 2020.9 (Unity5.6.5)',
    info2: '- 국내/대만/글로벌 빌드관리, 글로벌 빌드 셋팅(Android/iOS)\n- 로그인 시스템, 계정연동\n- 결제 시스템\n- 각종 컨텐츠\n- 스탯 커스터마이징 시스템(스탯 강화)\n- 비급 시스템(계정 버프)\n\nAndroid/iOS 플러그인\n- Unity IAP, Naver Plug\n- Firebase Analytics/Push/Auth\n- Firebase Fabric Crashlytics\n- Adjust, Facebook Analytics\n- Google+ 로그인, Facebook 로그인 SDK\n- Google Play Game Service, XignCode',
    url: 'https://www.youtube.com/watch?v=qFXdiKKeRug&list=PLoB9krJFZxWMlbxoxYN4WRYxedXIR-fJl&index=7',
    //repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'fivestars.jpg',
    title: '파이브스타즈(턴제RPG)',
    info: '스카이피플\n2018.8 ~ 2020.9 (Unity2019.4.8)',
    info2: '- Android/iOS/WebGL 빌드 셋팅 및 관리\n- 소환(가차) 시스템, 각종 컨텐츠\n- 아이템, 인벤토리, 도감, 이벤트\n- 상점 및 인앱결제\n- 전투 통계(미터기)\n- 전투 시뮬레이션 툴\n- 보물던전(누적데미지 전리품)\n- 인트로 영상 스트리밍 재생/자막\n\nAndroid/iOS/WebGL 플러그인\n- Firebase Analytics/Push/Auth\n- Google+ 로그인, Facebook 로그인 SDK 연동\n- Unity IAP, AVPro SDK',
    url: 'https://www.youtube.com/watch?v=v1aF864cxH0',
    //repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'raidmasters.png',
    title: '레이드 마스터즈(MORPG)',
    info: '슈퍼캣\n2020.9 ~ 2021.9 (Unity2018.4.12f)',
    info2: '- 빌드/업데이트/점검 관리\n- 구글/애플 출시 관리\n- 젠킨스 iOS, nProtect(잉카) iOS\n- DB튜닝, 인덱싱\n- 운영툴\n- UA(게임로그, 인앱광고), 일본 스베테 협업\n\n게임 컨텐츠(서버 & 클라)\n- 가방/아이템, 강화/내구도 복구, 랭킹\n- 공지/이벤트, 도감, 제작, 매칭 시스템\n- 아이템/이벤트 버프, 오픈필드(UI), 파티, 스킬\n- 전투 추가기능 등\n\nAndroid/iOS 플러그인\n- Firebase Analytics/Push/Auth\n- Facebook Analy, Appsflyer\n- Tapjoy, Google Ads 광고\n- GPGS, Facebook 로그인',
    url: 'https://www.youtube.com/watch?v=DNBV1lQhR9Y',
    //repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'hwanse.jpg',
    title: '환세취호전(MMORPG)',
    info: '슈퍼캣 RPG\n2021.9 ~ (Unity2021)',
    info2: '- Assetbundle -> Addressable 마이그레이션\n- Android/Window 빌드 셋팅\n- 플레이어/몬스터 AI\n- 맵툴, Astar Viewer',
    url: '',
    //repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: 'kangin3778@gmail.com',
  email: 'kangin3778@gamil.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    // {
    //   id: nanoid(),
    //   name: 'twitter',
    //   url: '',
    // },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
    // {
    //   id: nanoid(),
    //   name: 'linkedin',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/init302',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
