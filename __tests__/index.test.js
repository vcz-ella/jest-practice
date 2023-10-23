const { findUser } = require('../index');

const users = ['Neo', 'Dorothy', 'Potato', 'Frontend', 'Backend'];

// Jest 기본 문법
describe('3 더하기 5의 결과는 무엇일까?', () => {	
	test('3 더하기 5는 8입니다.', () => {
		expect(3 + 5).toEqual(8);
	})
});

// users 배열에서 'Neo'라는 닉네임을 가진 유저의 인덱스 위치 반환 테스트 작성
test('Neo라는 사람은 존재합니다.', () => {
    expect(findUser('Neo', users)).toEqual(0);
})