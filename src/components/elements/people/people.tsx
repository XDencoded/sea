import type { TPeople } from "../../../types/people.type";
import scss from './people.module.scss'

export function People({people}: {people: TPeople}) {
	return (
		<div className={scss.item}>
			<img src={"/public/people/" + (people.photo || "not-found.png")} alt={people.name} />
			<div className={scss.content}>
				<h3>{people.name}</h3>
				<p>{people.post}</p>
			</div>
		</div>
	)
}