import { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase";
import { FirebaseError } from "firebase/app";
import { Link, useNavigate } from "react-router-dom";
import {
  Form,
  Error,
  Input,
  Switcher,
  Title,
  Wrapper,
  Hr,
  Logo,
} from "../components/auth-components";
import GithubButton from "../components/github-btn";

export default function CreateAccount() {
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = e;
    if (name === "name") {
      setName(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    try {
      setLoading(true);
      const credentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      ); // 계정 생성, 생성 후 자동로그인, 유저정보 반환
      await updateProfile(credentials.user, {
        displayName: name,
      }); // 유저정보에 이름 저장
      navigate("/"); // 홈화면으로 이동
    } catch (e) {
      if (e instanceof FirebaseError) {
        setError(e.message);
      }
    } finally {
      setLoading(false);
    }
  };
  return (
    <Wrapper>
      <Title>
        <Logo src="/cat-svgrepo-com.svg" />
      </Title>
      <Form onSubmit={onSubmit}>
        <Input
          onChange={onChange}
          name="name"
          value={name}
          placeholder="Name"
          type="text"
          required
        />
        <Input
          onChange={onChange}
          name="email"
          value={email}
          placeholder="Email"
          type="email"
          required
        />
        <Input
          onChange={onChange}
          name="password"
          value={password}
          placeholder="Password"
          type="password"
          required
        />
        <Input type="submit" value={isLoading ? "Loading..." : "계정 생성"} />
      </Form>
      {error !== "" ? <Error>{error}</Error> : null}
      <Switcher>
        이미 가입한 계정이 있다면? <Link to="/login"> 로그인 &rarr;</Link>
      </Switcher>
      <Hr></Hr>
      <GithubButton />
    </Wrapper>
  );
}
