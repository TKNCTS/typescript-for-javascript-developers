import axios from "axios";
export {};

let url: string =
  "https://udemy-utils.herokuapp.com/api/v1/articles?token=token123";

axios.get(url).then(function (response) {
  interface Article {
    id: number;
    title: string;
    description: string;
  }
  //object型から作成したArticle型にすることで、データ内の中身がない場合にエラーを表示してくれる
  let data: Article[] = response.data;
  // data = [
  //   {
  //     id: 1,
  //     title: "title",
  //     description: "description",
  //   },
  // ];
  console.log(data);
});

//その型が得体の知れないもしくは推論できない場合にany型になる
