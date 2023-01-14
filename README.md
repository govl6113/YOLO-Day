# YOLO-Day
MZ세대의 모토 'YOLO(You Only Live Once)'에 맞게 개개인의 취향과 성향에 맞는 취미를 추천해드리는 사이트입니다!

취미추천테스트를 완료하거나 커뮤니티 버튼을 누르면, 각 취미의 커뮤니티로 이동할 수 있습니다 :)

커뮤니티에서 취미와 연관된 사이트로 이동하거나, 자체 게시판을 통해 다양한 사람들과 교류하세요!!
<br>


### 개발진
이름|학교|이메일
---|---|---|
김소연|국민대|nmsgust@gmail.com
배정현|홍익대|bae1004kin@gmail.com
배지현|단국대|govl6113@gamil.com
정지원|중앙대|jjwzzy4643@gmail.com
<br>

### 화면 흐름도
<img src="https://user-images.githubusercontent.com/81179951/211209306-7766622e-f505-4c9b-bcbf-62fee9b9e30f.png" width="75%" height="50%"></img>
<br>
<br>

### 시연 화면
> #### 취미 추천 테스트
>  - 취미 추천 테스트 진행
>  - 결과 페이지에서 추천 받은 취미를 눌러, 해당 취미의 커뮤니티로 이동
>
> ![취미 테스트](https://user-images.githubusercontent.com/81179951/212459168-c85ecb38-2cbc-48f1-9c3d-4eab216fa6cb.gif)

> #### 취미 커뮤니티
> - 로그인
> - 댓글 작성 및 삭제
> - 해당 취미와 연관된 사이트로 이동
>   
> ![취미 댓글](https://user-images.githubusercontent.com/81179951/212459173-ecdd3c5b-a811-4961-b710-0ea70da97a1a.gif)

> #### 취미 커뮤니티
> - 게시글 작성 및 삭제
> - 로그아웃
>   
> ![취미 게시글 로그아웃 (1)](https://user-images.githubusercontent.com/81179951/212459171-c636462f-859c-4e66-bf9c-e619e41c6719.gif)

<br>

### 실행 방법

1. 가상 환경 생성
   ```
   python -m venv {가상 환경 이름}
   ```
2. 가상 환경 실행
    
    ```
    Windows: source {가상 환경 이름}/Scripts/activate
    
    Mac: source {가상 환경 이름}/bin/activate
    ```

3. 패키지 설치

    ```
    pip install -r requirements.txt
    ```
  
4. 서버 실행

    ```
    python myproject/manage.py runserver
    ```
