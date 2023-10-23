module.exports = {
    // users 배열에서 특정 사용자의 인덱스 위치 찾기
    findUser(nickname, users) {
        return users.indexOf(nickname);
    }
}