//AccountInfo
//charInfo

type AccountInfo = {
    id: number | string;
    name: string;
    email?: string;
};

const account: AccountInfo = {
    id: 123,
    name: "Jessica"
};

type CharInfo = {
    nickname: string;
    level: number;
};

const char: CharInfo = {
    nickname: "jezzipan",
    level: 100,
};

//intersection
type PlayerInfo = AccountInfo & CharInfo;

const player: PlayerInfo = {
    name: "Jessica",
    nickname: "jezzipan",
    id: "123",
    level: 100,
};