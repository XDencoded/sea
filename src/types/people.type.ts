export type TPeople = {
	id: number,
	name: string,
	post: string,
	photo: string
}

export type TPeopleList = {
	administration: TPeople[],
	technical_support: TPeople[],
	youth_affairs: TPeople[],
	information_department: TPeople[],
	patriotic: TPeople[]
}