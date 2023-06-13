import React from "react";
import Button from "../components/Button";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const StyledText = styled.Text`
  font-size: 30px;
  margin: 20px;
`;

const Home = ({ navigation }) => {
  return (
    <Container>
      <StyledText>홍길동님 오늘을 기억해요!</StyledText>
      <Button
        title="오늘의 질문"
        onPress={() => navigation.navigate("Question")}
      />
      <Button title="치매 진단" onPress={() => navigation.navigate("Test")} />
      <Button title="MyPage" onPress={() => navigation.navigate("MyPage")} />
      <Button title="Landing" onPress={() => navigation.navigate("Landing")} />
      <Button title="Login" onPress={() => navigation.navigate("Login")} />
      <Button
        title="SelectType"
        onPress={() => navigation.navigate("SelectType")}
      />
      <Button title="SignUp" onPress={() => navigation.navigate("SignUp")} />
      <Button title="Splash" onPress={() => navigation.navigate("Splash")} />
    </Container>
  );
};

export default Home;
