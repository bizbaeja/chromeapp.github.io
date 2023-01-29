const quotes = [
  {
    quote:
      "공포로 인해 타협하지 말 것이며, 남이 나에게 타협하는 것을 두려워하지도 말라",
    autor: "케네디",
  },
  {
    quote: "남자란, 말하며 접근할 때는 봄이지만 결혼해 버리면 겨울이다",
    author: "셰익스피어",
  },
  {
    quote: "사랑은 여자의 섬세함을 줄이고, 남자의 섬세함을 늘인다",
    author: "장 파울",
  },
  {
    quote: "왕은 배, 민중은 물이다. 물은 큰 배를 띄우기도 하고 뒤엎기도 한다.",
    author: "순자",
  },
  {
    quote: "금전은 비료와 같은 것으로 뿌리지 않으면 쓸모가 없다",
    author: "베이컨",
  },
  {
    quote: "내일에 아무런 도움이 되지 않는다면, 당신의 과거는 쫓아버라",
    author: "오슬러",
  },
  {
    quote: "사랑이란 늙는다는 것을 모른다",
    author: "스땅달",
  },
  {
    quote: "인간은 죽음을 두려워한다. 그것은 생을 사랑하기 때문이다.",
    author: "도스토예프스키",
  },
  {
    quote:
      "네가 가지고 있는 최선의 것을 세상에 주라. 그러면 최선의 것이 돌아오리라",
    author: "M.A. 베레",
  },
  {
    quote: "진리는 적이건 아군이건 모두 초월한다",
    author: "쉴러",
  },
  {
    quote: "가난은 많은 뿌리를 갖고 있습니다. 그러나 큰 뿌리는 무식입니다.",
    author: "존슨",
  },
  {
    quote: "행동에 부주의하지 말며, 말에 혼동되지 말며, 생각에 방황하지 말라",
    author: "마르크스 아우렐리우스",
  },
  {
    quote: "위대함에는 신비성이 필요하다. 너무 알면 사람들은 존경하지 않는다.",
    author: "드골",
  },
  {
    quote: "오랫동안 꿈을 그리는 사람은 마침내 그 꿈을 닮아간다",
    author: "앙드레 말로",
  },
  {
    quote: "독서가 정신에 미치는 영향은 운동이 육체에 미치는 영향과 같다.",
    author: "에디슨",
  },
  {
    quote: "성공하기를 바라는 자는 자존심까지도 포기해야 할 것이다",
    author: "C.힐티",
  },
  {
    quote: "인간은 자기가 생각하고 있는 것과 같은 인간이 된다",
    author: "힌두교 경전",
  },
  {
    quote: "인간은 생각하는 것이 적으면 그만큼 더 떠든다",
    author: "몽테스키",
  },
  {
    quote:
      "대문자만으로 인쇄된 책은 읽기 힘들다. 일요일밖에 없는 인생도 그것과 마찬가지다",
    author: "장 파울",
  },
  {
    quote: "말도 아름다운 꽃처럼 그 색깔을 지니고 있다.",
    author: "E.리스",
  },
  {
    quote: "사랑은 지배하는 것이 아니라 자유를 주는 것이다.",
    author: "에리히 프롬",
  },
  {
    quote: "오늘 죽을 것처럼 행동하고 영원히 살 것처럼 배워라",
    author: "간디",
  },
  {
    quote: "인간의 얼굴은 마음의 간판이고 생활의 기록이다",
    author: "카렐루",
  },
  {
    quote: "인간은 의욕하는 것 그리고 창조하는 것에 의해서만이 행복하다",
    author: "알랭",
  },
  {
    quote: "마음이 좁은 자는 생각이 극단에 흐른다",
    author: "라이라마",
  },
  {
    quote: "성공의 비밀은 목표의 지속성에 있다",
    author: "벤저민 디즈라엘리",
  },
  {
    quote: "사는게 지겹다면 그것은 당신이 그렇게 만ㄴ든 것이다",
    author: "레오 부스카글리아",
  },
  {
    quote: "존경이 없으면 진정한 사랑은 성립되지 않는다",
    author: "피히테",
  },
  {
    quote: "죽고 싶은 생각이 들면 일을 하라",
    author: "볼테르",
  },
  {
    quote: "둘이서 동시에 노래할 수 있으나 동시에 지껄일 수는 없다",
    author: "독일속담",
  },
  {
    quote: "아침에 당신을 벌떡 깨울 수 있는 꿈을 가져야 한다",
    author: "빌리 와일더",
  },
  {
    quote: "역경이 닥치기 전까지는 자신의 능력을 모른다",
    author: "벤 존슨",
  },
  {
    quote: "지나간 일로 미래를 설계할 수는 없다",
    author: "에드먼드 버크",
  },
  {
    quote: "기억을 증진시키는 가장 좋은 약은 감탄하는 것이다",
    author: "탈무드",
  },
  {
    quote: "진정한 영업은 '고객구매' 후 시작된다",
    author: "질 그리핀",
  },
  {
    quote: "여행은 정말 남는 장사이다",
    author: "한비야",
  },
  {
    quote:
      "내가 부자인 것은 소유한 것이 많기 때문이 아니라, 원하는 것이 없기 때문이다",
    author: "J,브라서튼",
  },
  {
    quote: "관리를 적게 할수록 경영성과가 높아진다",
    author: "잭 웰치",
  },
  {
    quote: "모든 공포는 믿음의 결핍으로부터 나온다",
    author: "간디",
  },
  {
    quote: "시작하라, 그 자체가 천재성이고 힘이며 마력이다",
    author: "니체",
  },
  {
    quote: "행복지수는 비교지수와 빈비례한다",
    author: "금오 김홍경",
  },
  {
    quote: "부귀영화는 언제든지 아낌없이 보낼 각오를 하고 있으라",
    author: "아우렐리우스",
  },
  {
    quote: "기회가 오지 않을 때에는 스스로 기회를 만들라",
    author: "스마일즈",
  },
  {
    quote:
      "사랑은 일에 굴복한다. 만일 사랑으로부터 빠져 나오기를 원한다면 바쁘게 되라. 그러면 안전할 것이다.",
    author: "오비디우스",
  },
  {
    quote: "사교의 명수는 모욕을 유머로 부정을 긍정으로 바꾼다",
    author: "그라시안",
  },
  {
    quote:
      "사랑은 분신을 만드는 일이다. 자기 자신을 대하듯이 사랑을 베풀어야 한다.",
    author: "라시안",
  },
  {
    quote:
      "네가 지금 어디에 있는지 생각하는 대신, 가장 어디에 있고 싶은지 생각하라",
    author: "빈스 롬바디",
  },
  {
    quote: "진실을 말할 때는 그것을 숨길 때만큼이나 주의를 기울여야 한다",
    author: "그라시안",
  },
  {
    quote: "제일 많이 바쁜 사람ㅇ이 제일 많은 시간을 가진다",
    author: "비네",
  },
  {
    quote: "일기예보에도 불구하고, 봄처럼 살아라",
    author: "릴리 퓰리처",
  },
  {
    quote: "",
    author: "",
  },
  {
    quote: "",
    author: "",
  },
  {
    quote:
      "사랑에는 항상 광기가 존재한다. 그러나 광기에는 항상 이유가 존재한다",
    author: "니체",
  },
  {
    quote: "사랑은 내게 질문하지 않으며, 다만 끝없는 지지를 준다",
    author: "셰익스피어",
  },
];
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQoute = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = '"' + todaysQoute.quote + '"';
author.innerText = "-" + " " + todaysQoute.author;

document.body.style.backgroundColor = "black";
quote.style.cssText = "color:whitesmoke;  font-size:30px;  text-align:center;";
author.style.cssText = "color:whitesmoke; font-size:10px;  text-align:center;";
