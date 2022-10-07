export {};

type DetailedProfile = {
  name: string;
  height: number;
  weight: number;
};

//pickは型の一部を柔軟に抜き出して新しい型をつくる
type SimpleProfile = Pick<DetailedProfile, "name" | "weight">;

//pickは型の一部を柔軟に除外して新しい型をつくる
type SmallProfile = Omit<DetailedProfile, "height">;
