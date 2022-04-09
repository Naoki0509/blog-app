export const Skill = () => {
	const SkillITEMS = [
		{ title: "HTML" },
		{ title: "CSS" },
		{ title: "JavaScript" },
		{ title: "React(Next.js)" },
	];
	return (
		<div className="flex flex-col justify-center items-center pt-10">
			<h1 className="text-center pb-6 font-serif font-bold text-4xl">SKILL</h1>
			<div className="grid grid-cols-1 gap-4 pt-6">
				{SkillITEMS.map((skill) => {
					return (
						<div
							key={skill.title}
							className="border-2 text-center  text-bold font-serif p-10 text-4xl"
						>
							{skill.title}
						</div>
					);
				})}
			</div>
		</div>
	);
};
