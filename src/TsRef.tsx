import React, { useRef } from "react";

interface Props {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TsRef: React.FC<Props> = ({ handleChange }) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const divRef = useRef<HTMLDivElement | null>(null);

  return (
    <div ref={divRef}>
      <input
        type="text"
        ref={inputRef}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
      />
    </div>
  );
};

export default TsRef;
