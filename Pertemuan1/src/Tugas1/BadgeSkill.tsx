type BadgeSkillProps = {
  namaSkill: string;
  level: 'Pemula' | 'Menengah' | 'Mahir';
};

function BadgeSkill({ namaSkill, level }: BadgeSkillProps) {
  return (
    <span className={`skill-badge skill-badge--${level.toLowerCase()}`}>
      {namaSkill} - {level}
    </span>
  );
}

export default BadgeSkill;