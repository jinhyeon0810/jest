# jest

테스트코드란? with 강의

테스트코드

- 한번 작성된 테스트 코드는 영원히 유지보수
- 내부 구현 사항을 (너무 깊히) 테스트 X
- 재사용성 높이기 (테스트유틸리티)
- 배포용 코드와 철저히 분리
- 테스트코드를 통한 문서화

좋은 테스트 구조

- 테스트 코드 전후로 beforeEach,beofreAll , afterEach, afterAll 이 있음

- 테스트 안에서는 준비 -> 실행 -> 검증 단계가 있음
- 트리플 A 라고 불림 (Arrange, Act, Assert)
- GWT (Given, When, Then)

좋은 테스트 원칙 ( F I R S T)

- Fast : 느린것에 대한 의존성 낮추기 (파일읽거나, 데이터베이스 접근, 네트워크) -> mock, stub 사용
- Isolated : 최소한의 유닛으로 검증하기 (독립적, 집중적 유지)
