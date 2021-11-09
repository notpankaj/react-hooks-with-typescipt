import React, { useState } from "react";

interface Person {
  firstName: string;
  lastName: string;
}

interface Props {
  text: string;
  ok?: Boolean;
  //   i: number;
  //   fn: () => void; //function with no return
  fn?: (bob: string) => number; //funtion with number return and string parameter
  person: Person;
}
interface SomeNode {
  something: string;
}

// const TypeText :React.FC <{text : 'string'}> = () => {
const TypeText: React.FC<Props> = ({ person, text, children, fn, ok }) => {
  const [count, setCount] = useState<number | null | undefined>(5);
  //   const [test, setTest] = useState<{ something: string }>({something: "SOMETESTTEXT"});
  // -OR
  const [test, setTest] = useState<SomeNode>({
    something: "SOMETESTTEXT",
  });
  setCount(null);
  setCount(undefined);

  setTest({ something: "some" });

  return <div>HELLO</div>;
};

export default TypeText;
