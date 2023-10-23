// users 배열에서 특정 사용자의 인덱스 위치 찾기
export function findUser(nickname, users) {
    return users.indexOf(nickname);
};

export function findUserReturnBoolean(nickname, users) {
    return users.includes(nickname);
};

export function calculateDivide(a, b) {
    if (b == 0) {
        throw new Error('[ERROR] 나누는 수는 0이 될 수 없습니다.');
    }

    return a / b;
};