# movieql

Movie API with GraphQL

## GraphQL의 등장 배경

-   REST API와는 다르게 한 쿼리 안에 원하는 정보만을 Front-end에서 요청하여 Over-fetching과 Under-fetching 없이 깔끔하게 정보를 받아 구성할 수 있다.
-   URL 체계가 없음
-   하나의 종점만이 존재

### 1. Over-fetching

```
GET /user/1 (Profile Info)
```

-   필요한 건 오로지 `사용자 이름`인데 위의 API를 요청할 때 사용자의 이름뿐 아니라 모든 정보를 가져온다
-   필요한 정보보다 더 많은 것을 서버에서 가져오는 상황을 Over-fetching이라고 한다.
-   모든 Object를 받아서 디버깅하여 필요한 부분만 가져다 쓰는 것은 비효율적이다.

### 2. Under-fetching

```
/feed
/notifications
/user/1
```

-   앱을 처음 시작할 때 보여줘야 할 부분들을 위해 위의 3가지 API를 요청해야 한다고 생각하자.
    -   3가지 요청이 3번 왕래해야 앱이 시작될 수 있다
    -   REST에서 하나의 화면을 구성하려고 많은 소스를 요청하는 현상을 Under-fetching이라고 한다.

## 예시

-   클라이언트에서 요청한 GraphQL 요청 쿼리
    ```grqphql
    query {
        feed {
            comments
            likENumber
        }
        notifications {
            isRead
        }
        user {
            username
            profilePic
        }
    }
    ```
-   GraphQL에서 보낸 JAVASCRIPT 코드
    ```js
    {
        feed: [
            {
                comments: 1,
                likeNumbeR: 20,
            }
        ],
        notifications: [
            {
                isRead: true
            },
            {
                isRead: false
            }
        ],
        user: {
            username: "nico",
            profile: "http://...",
        }
    }
    ```
