type BadgeSkillProps = {
  namaSkill: string;
  level: 'Pemula' | 'Menengah' | 'Mahir';
};

function BadgeSkill({ namaSkill, level }: BadgeSkillProps) {
  return (
    <div className="skill-badge">
      <span>{namaSkill}</span>
      <span className="skill-level">{level}</span>
    </div>
  );
}

export default BadgeSkill;