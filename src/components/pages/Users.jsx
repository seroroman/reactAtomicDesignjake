import styled from "styled-components";
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/user/UserCard";

const users = [...Array(50).keys()].map((val) => {
  return {
    id: val,
    name: `テストユーザー${val}`,
    image: "https://source.unsplash.com/JIPHt9TnoRE",
    email: "test.gmail.com",
    phone: "000-000",
    company: {
      name: `テスト会社-${val}`
    },
    website: "https://google.com"
  };
});

export const Users = () => {
  return (
    <SContainer>
      <h2>ユーザー一覧</h2>
      <SearchInput />
      <SUserArea>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
        ;
      </SUserArea>
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
`;

const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
