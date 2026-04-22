/**
 * Midnight Navy Wedding Invitation Configuration
 *
 * 이 파일에서 청첩장의 모든 정보를 수정할 수 있습니다.
 * 이미지는 설정이 필요 없습니다. 아래 폴더에 순번 파일명으로 넣으면 자동 감지됩니다.
 *
 * 이미지 폴더 구조 (파일명 규칙):
 *   images/hero/1.jpg      - 메인 사진 (1장, 필수)
 *   images/story/1.jpg, 2.jpg, ...  - 스토리 사진들 (순번, 자동 감지)
 *   images/gallery/1.jpg, 2.jpg, ... - 갤러리 사진들 (순번, 자동 감지)
 *   images/location/1.jpg  - 약도/지도 이미지 (1장)
 *   images/og/1.jpg        - 카카오톡 공유 썸네일 (1장)
 */

const CONFIG = {
  // ── 초대장 열기 ──
  useCurtain: true,  // 초대장 열기 화면 사용 여부 (true: 사용, false: 바로 본문 표시)

  // ── 메인 (히어로) ──
  groom: {
    name: "임성빈",
    nameEn: "Im Sungbeen",
    father: "임경순",
    mother: "안미현",
    fatherDeceased: false,
    motherDeceased: false
  },

  bride: {
    name: "김민진",
    nameEn: "Kim Minjin",
    father: "故김재학",
    mother: "이은수",
    fatherDeceased: false,
    motherDeceased: false
  },

  wedding: {
    date: "2026-06-27",
    time: "18:00",
    venue: "팔레드오페라",
    hall: "가르니에홀 4층",
    address: "대전 서구 둔산남로 50 팔레드오페라",
    tel: "042-300-5000"
  },

  // ── 인사말 ──
  greeting: {
    title: "소중한 분들을 초대합니다",
    content: "사랑하지 않고 스쳐 갈 수도 있었는데\n사랑일지도 모른다고 걸음을 멈춰준\n그 사람이 정녕 고맙다고\n-양귀자, \"모순\"中\n\n사랑하는 마음 하나로,\n오늘부터 저희의 모든 순간을\n아름답게 물들여 나가겠습니다.\n함께 자리하시어 축복해주세요."
  },

  // ── 우리의 이야기 ──
  story: {
    title: "우리의 이야기",
    content: "서로 다른 길을 걷던 두 사람이\n하나의 길을 함께 걷게 되었습니다.\n\n여러분을 소중한 자리에 초대합니다."
  },

  // ── 오시는 길 ──
  mapLinks: {
    kakao: "https://kko.to/Ia8fmyNjl0",
    naver: "https://map.naver.com/p/entry/place/1599246173?c=15.00,0,0,0,dh&placePath=/photo&fromPanelNum=1&additionalHeight=76&timestamp=202603190950&locale=ko&svcName=map_pcv5"
  },

  // ── 마음 전하실 곳 ──
  accounts: {
    groom: [
      { role: "신랑", name: "임성빈", bank: "카카오뱅크", number: "3333138804011" },
    ],
    bride: [
      { role: "신부", name: "김민진", bank: "카카오뱅크", number: "3333098512967" },
      { role: "어머니", name: "이은수", bank: "농협은행", number: "42912190154" },
    ]
  },

  // ── 링크 공유 시 나타나는 문구 ──
  meta: {
    title: "임성빈 ♥ 김민진 결혼합니다",
    description: "2026년 6월 27일, 소중한 분들을 초대합니다."
  }
};
