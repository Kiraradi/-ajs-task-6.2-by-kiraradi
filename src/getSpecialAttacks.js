export default function getSpecialAttacks(objectPerson) {
  let { special } = objectPerson;
  special = special.map(({
    id, name, description = 'Описание недоступно', icon,
  }) => ({
    id, name, description, icon,
  }));
  return special;
}
