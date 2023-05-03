import "./InputTask.css";
import React, { useCallback } from "react";
import { useRecoilState } from "recoil";
import { inputTitleState } from "../states/inputTitleState";
import { addTitleState } from "../states/addTitleState";
// import { addTitleStateLength } from "../states/addTitleState";

const getKey = () => Math.random().toString(32).substring(2);
function InputTask() {
	const [inputTitle, setInputTitle] = useRecoilState(inputTitleState);
	const [addTitle, setAddTitle] = useRecoilState(addTitleState);

	const onChange = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			setInputTitle(e.target.value);
			console.log(inputTitle);
		},
		[inputTitle, setInputTitle]
	);

	const handleClick = () => {
		console.log(inputTitle);
		setAddTitle([...addTitle, { id: getKey(), title: inputTitle }]);
		setInputTitle("");
		console.log(addTitle);
	};

	return (
		<div className='inputField'>
			<input
				type='text'
				className='inputTitle'
				onChange={onChange}
				value={inputTitle}
			/>
			<button type='button' className='addButton' onClick={handleClick}>
				追加
			</button>
		</div>
	);
}

export default InputTask;
