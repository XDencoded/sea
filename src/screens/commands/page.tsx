import { People } from "../../components/elements/people/people";
import { PEOPLE } from "../../components/elements/people/people.date";
import { Layout } from "../layout";
import scss from "./commands.module.scss";

export default function Commands() {
  return (
    <Layout>
      <div className={scss.commands}>
        <h1>Команда</h1>
				<div>
					<h2>Административный отдел</h2>
					<div className={scss.people}>
						{PEOPLE.administration.map((people) => (
							<People key={people.id} people={people} />
						))}
					</div>
				</div>
				<div>
					<h2>Отдел хозяйственного и материально-технического обеспечения</h2>
					<div className={scss.people}>
						{PEOPLE.technical_support.map((people) => (
							<People key={people.id} people={people} />
						))}
					</div>
				</div>
				<div>
					<h2>Отдел по делам молодежи</h2>
					<div className={scss.people}>
						{PEOPLE.youth_affairs.map((people) => (
							<People key={people.id} people={people} />
						))}
					</div>
				</div>
				<div>
					<h2>Информационный отдел</h2>
					<div className={scss.people}>
						{PEOPLE.information_department.map((people) => (
							<People key={people.id} people={people} />
						))}
					</div>
				</div>
				<div>
					<h2>Отдел по патриотическому воспитанию молодежи</h2>
					<div className={scss.people}>
						{PEOPLE.patriotic.map((people) => (
							<People key={people.id} people={people} />
						))}
					</div>
				</div>
      </div>
    </Layout>
  );
}
