export {};

//Record<K,T>
type Prefectures = "Tokyo" | "Chiba" | "Kyoto" | "Shiga";

type Covid19InfectionInfo = {
  kanji_name: string;
  confirmed_cases: number;
};

const covid19Japan: Record<Prefectures, Covid19InfectionInfo> = {
  Tokyo: { kanji_name: "東京", confirmed_cases: 1960 },
  Chiba: { kanji_name: "千葉", confirmed_cases: 249 },
  Kyoto: { kanji_name: "京都", confirmed_cases: 100 },
  Shiga: { kanji_name: "滋賀", confirmed_cases: 50 },
};

console.log(covid19Japan.Kyoto);

//Recordを用いることで最低限のコストでメンテナンス性の高いコードを書くことができる
