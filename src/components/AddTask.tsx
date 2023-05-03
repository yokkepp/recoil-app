import "./AddTask.css";
import { useRecoilValue } from "recoil";
import { addTitleState } from "../states/addTitleState";
import { addTitleStateLength } from "../states/addTitleState";

function AddTask() {
	const addTitle = useRecoilValue(addTitleState);
	const titleLength = useRecoilValue(addTitleStateLength);

	return (
		<div className='taskField'>
			<div>{titleLength}個のタスクがあります</div>
			<ul>
				{addTitle.map((i) => (
					<li key={i.id}>{i.title}</li>
				))}
			</ul>
		</div>
	);
}

export default AddTask;
AddTask;
