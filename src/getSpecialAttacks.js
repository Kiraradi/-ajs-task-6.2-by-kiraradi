export default function getSpecialAttacks({ special = [] }) {
  // let { special = [] } = objectPerson;
  const SpecialAttacks = special.map(({
    id, name, description = 'Описание недоступно', icon,
  }) => ({
    id, name, description, icon,
  }));
  return SpecialAttacks;
}
