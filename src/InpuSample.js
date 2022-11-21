import React, { useState, useRef } from "react";

const InputSample = () => {
  const [inputs, setInputs] = useState({
    name: "",
    nickname: "",
  });
  const nameInput = useRef(); //초기화 버튼을 클릭했을 때 name input 에 포커스가 잡히도록함

  const { name, nickname } = inputs; // 비구조화 할당을 통해 값 추출
  // ★★ input의 개수가 여러개일때, useState랑 onChange를 여러번 사용하는것보단, input에 name을 설정하고 이벤트가 발생했을 때 이 값을 참조하게 하는게 더 효율적임!!
  // 그리고 useState에는 문자열이 아니라 객체 형태의 상태를 관리해줘야 한다.

  const onChange = (e) => {
    const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
    setInputs({
      ...inputs, // 기존의 input 객체를 복사한 뒤
      [name]: value, // name 키를 가진 값을 value 로 설정
      // 이렇게 새로운 객체를 만들어서 새로운 객체에 변화를 주고, 이를 상태로 사용해주어야 합니다.
    });
  };

  const onReset = (e) => {
    setInputs({
      name: "",
      nickname: "",
    });
    nameInput.current.focus();
  };

  return (
    <div>
      <input
        name="name"
        onChange={onChange}
        value={name}
        placeholder="이름"
        ref={nameInput}
      />
      <input
        name="nickname"
        onChange={onChange}
        value={nickname}
        placeholder="닉네임"
      />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값:</b>
        {name} ({nickname})
      </div>
    </div>
  );
};

export default InputSample;
