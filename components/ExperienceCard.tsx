import { atom, useAtom } from 'jotai';

const initialExperience = {
  company: '会社名',
  position: '職種',
  period: '期間',
  description: '業務内容',
};

const experienceAtom = atom(initialExperience);

function ExperienceCard() {
  const [experience] = useAtom(experienceAtom);

  return (
    <div>
      <p>会社名: {experience.company}</p>
      {/* 他の情報も同様に表示 */}
    </div>
  );
}

export default ExperienceCard;
